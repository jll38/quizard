from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import sqlite3
import random

currentdirectory = os.path.dirname(os.path.abspath(__file__))


app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

# set up database connection
conn = sqlite3.connect("./db/quizard.sqlite", uri=True, check_same_thread=False)
with open("db/SQL Scripts/create_tables.sql") as f:
    commands = f.read()
    conn.executescript(commands)

@app.route("/greeting")
def default():
    return {"message" : "Hello from the server!"}

@app.route("/publish", methods=["POST"])
def publishQuiz():
    data = request.get_json()
    title = data["title"]
    author = data["author"]
    questions = str(data["questions"])
    answers = str(data["answers"])
    options = str(data["options"])
    print(data)
    qID = genUniqueID(title, author)
    print(f"Unique ID: {qID}")
    try:
        cursor = conn.cursor()
        query = "INSERT INTO quizzes (id, title, author, questions, answers, options) VALUES (?, ?, ?, ?, ?, ?)"
        cursor.execute(query, (qID, title, author, questions, answers, options))
        query = "INSERT INTO existing_ids (id) VALUES (?)"
        cursor.execute(query, (qID,))
        conn.commit()
        print("Success!")
    except Exception as e:
        conn.rollback()
        return{"success": False, "error" : str(e)}
    return {"success" : True, "message" : "Quiz successfully published!"}

def genUniqueID(title, author):
    rand = random.randint(1000, 9999)
    id = f"{title[0]}{author[0]}{str(rand)}"
    return id

if __name__ == "__main__":
    app.run(debug=True, port=5001)