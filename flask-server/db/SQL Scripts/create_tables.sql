CREATE TABLE IF NOT EXISTS quizzes (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    questions TEXT NOT NULL,
    answers TEXT NOT NULL
);
