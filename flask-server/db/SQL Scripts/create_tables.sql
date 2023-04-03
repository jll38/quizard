CREATE TABLE IF NOT EXISTS quizzes (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    questions TEXT NOT NULL,
    answers TEXT NOT NULL,
    options TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS existing_ids (
    id TEXT PRIMARY KEY
);
