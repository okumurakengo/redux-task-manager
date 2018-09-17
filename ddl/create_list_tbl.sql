CREATE TABLE IF NOT EXISTS list_tbl (
    list_id INTEGER PRIMARY KEY AUTOINCREMENT,
    category    VARCHAR(50),
    content     VARCHAR(255),
    created     DATETIME NOT NULL DEFAULT (DATETIME('now','+9 hours')),
    updated     DATETIME NOT NULL DEFAULT (DATETIME('now','+9 hours'))
);
