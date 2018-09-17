CREATE TABLE IF NOT EXISTS task_tbl (
    task_id    INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    content    VARCHAR(255),
    created    DATETIME NOT NULL DEFAULT (DATETIME('now','+9 hours')),
    updated    DATETIME NOT NULL DEFAULT (DATETIME('now','+9 hours'))
);
