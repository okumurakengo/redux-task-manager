CREATE TABLE IF NOT EXISTS task_list_tbl (
    task_id INTEGER,
    list_id INTEGER,
    created DATETIME NOT NULL DEFAULT (DATETIME('now','+9 hours'))
);
