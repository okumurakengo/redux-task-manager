CREATE TRIGGER IF NOT EXISTS list_tbl_updated AFTER UPDATE on list_tbl
BEGIN  
    UPDATE list_tbl SET updated = DATETIME('now','+9 hours') WHERE list_id = old.list_id;  
END;
