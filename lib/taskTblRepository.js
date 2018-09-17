const { db } = require("./db.js");

module.exports.getTaskTbl = () => {
  return new Promise(resolve => {
    db.all("SELECT * from task_tbl", (err, rows) => {
      resolve(rows);
    });
  });
};

module.exports.addTaskTbl = (category, content) => {
  const stmt = db.prepare(
    "INSERT INTO task_tbl (product_id, content) VALUES (?, ?)"
  );
  stmt.run([category, content]);
};

module.exports.updateTaskTbl = (taskId, content) => {
  const stmt = db.prepare("UPDATE task_tbl SET content = ? WHERE task_id = ?");
  stmt.run([content, taskId]);
};

module.exports.deleteTaskTbl = taskId => {
  const stmt = db.prepare("DELETE FROM task_tbl WHERE task_id = ?");
  stmt.run([taskId]);
};
