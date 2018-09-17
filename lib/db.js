const sqlite3 = require("sqlite3");
const fs = require("fs");

const db = new sqlite3.Database(__dirname + "/db.sqlite3");
module.exports.db = db;

if (!fs.existsSync(__dirname + "/db.sqlite3")) {
  // 初期化処理
  (async function() {
    await (function() {
      return new Promise(resolve => {
        db.run(
          fs.readFileSync(__dirname + "/../ddl/create_list_tbl.sql", "utf8"),
          err => resolve()
        );
      });
    })();
    db.run(fs.readFileSync(__dirname + "/../ddl/trigger_list_tbl.sql", "utf8"));
  })();

  (async function() {
    await (function() {
      return new Promise(resolve => {
        db.run(
          fs.readFileSync(__dirname + "/../ddl/create_task_tbl.sql", "utf8"),
          err => resolve()
        );
      });
    })();
    db.run(fs.readFileSync(__dirname + "/../ddl/trigger_task_tbl.sql", "utf8"));
  })();

  db.run(
    fs.readFileSync(__dirname + "/../ddl/create_task_list_tbl.sql", "utf8")
  );
}
