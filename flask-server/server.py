from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import sqlite3
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
    return {"message" : "Publish Called!"}

if __name__ == "__main__":
    app.run(debug=True, port=5001)