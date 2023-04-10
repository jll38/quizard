CREATE TABLE IF NOT EXISTS quizzes (
    id TEXT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    questions TEXT NOT NULL,
    answers TEXT NOT NULL,
    options TEXT NOT NULL,
    views INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS existing_ids (
    id TEXT PRIMARY KEY
);
