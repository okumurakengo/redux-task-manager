CREATE TRIGGER IF NOT EXISTS task_tbl_updated AFTER UPDATE on task_tbl 
BEGIN  
    UPDATE task_tbl SET updated = DATETIME('now','+9 hours') WHERE task_id = old.task_id;  
END;
