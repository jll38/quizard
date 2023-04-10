from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import sqlite3
import random
import json

currentdirectory = os.path.dirname(os.path.abspath(__file__))


app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

# set up database connection
conn = sqlite3.connect("./db/quizard.sqlite", uri=True, check_same_thread=False)
with open("db/SQL Scripts/create_tables.sql") as f:
    commands = f.read()
    conn.executescript(commands)

## Populate database (for testing purposes)
#with open("db/SQL Scripts/test-populate.sql") as f:
#    commands = f.read()
#    conn.executescript(commands)

@app.route("/greeting")
def default():
    return {"message" : "Hello from the server!"}

@app.route("/getQuizzes", methods=["GET"])
def getQuizzes():
    try:
        cursor = conn.cursor()
        query = "SELECT id, title, author FROM quizzes"
        cursor.execute(query)
        results = cursor.fetchall()
        print(results)
        quizzes = []
        for row in results:
            quiz = {}
            quiz['id'] = row[0]
            quiz['title'] = row[1]
            quiz['author'] = row[2]
            quizzes.append(quiz)
            quizzes_json = json.dumps(quizzes)
    except Exception as e:
        conn.rollback()
        return{"success" : False, "error" : str(e)}
    return {"quizzes": quizzes_json}

@app.route("/getQuiz")
def getQuiz():
    quiz_id = request.args.get('quizId') # get the quizId parameter from the request
    # use the quizId parameter to retrieve the quiz data from the database
    print(quiz_id)
    try:
        cursor = conn.cursor()
        query = "SELECT * FROM quizzes WHERE id = ?"
        cursor.execute(query, (quiz_id,))
        result = cursor.fetchall()[0]
        for row in result:
            print(row)
    except Exception as e:
        return {"success" : False, "error" : str(e)}
    try:
        query = "UPDATE quizzes SET views = views + 1 WHERE id = ?"
        cursor.execute(query, (quiz_id,))
        conn.commit()
    except Exception as e:
        return {"success" : False, "error" : str(e)}
    return {"quizData": result}

@app.route("/publish", methods=["POST"])
def publishQuiz():
    data = request.get_json()
    title = data["title"]
    author = data["author"]
    # thumbnail = request.files['thumbnail']
    questions = str(data["questions"])
    answers = str(data["answers"])
    options = str(data["options"])
    qID = str(data['id'])
    print(data)
    # filename = thumbnail.filename
    # thumbnail.save('./client/public/static/images/quizzes/' + filename)
    
    print(f"Unique ID: {qID}")
    try:
        cursor = conn.cursor()
        query = "INSERT INTO quizzes (id, title, author, questions, answers, options, views) VALUES (?, ?, ?, ?, ?, ?, ?)"
        cursor.execute(query, (qID, title, author, questions, answers, options, 0))
        query = "INSERT INTO existing_ids (id) VALUES (?)"
        cursor.execute(query, (qID,))
        conn.commit()
        print("Success!")
    except Exception as e:
        conn.rollback()
        return{"success": False, "error" : str(e)}
    return {"success" : True, "message" : "Quiz successfully published!"}

@app.route("/homepage")
def homepage():
    try:
        cursor = conn.cursor()
        query = "SELECT id, title, views FROM quizzes ORDER BY views DESC LIMIT 4"
        cursor.execute(query)
        result = cursor.fetchall()
        res = json.dumps(result)
    except Exception as e:
        return {"Success" : False, "Error" : str(e)}
    return res

if __name__ == "__main__":
    app.run(debug=True, port=5001)