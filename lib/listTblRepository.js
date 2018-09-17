const { db } = require("./db.js");

module.exports.getListTbl = () => {
  return new Promise(resolve => {
    db.all(
      `SELECT a.*, b.task_id
       FROM list_tbl a
       LEFT JOIN task_list_tbl b
       ON a.list_id = b.list_id
       ORDER BY a.list_id, b.task_id`,
      (err, rows) => {
        resolve(rows);
      }
    );
  });
};

module.exports.addListTbl = async (category, content, taskId) => {
  await (() => {
    new Promise(resolve => {
      db.exec("BEGIN TRANSACTION;", () => resolve());
    });
  })();
  await (() => {
    new Promise(resolve => {
      const stmt = db.prepare(
        "INSERT INTO list_tbl (category, content) VALUES (?, ?)"
      );
      stmt.run([category, content], () => resolve());
    });
  })();
  await (() => {
    new Promise(resolve => {
      const stmt = db.prepare(
        "INSERT INTO task_list_tbl (task_id, list_id) VALUES (?, last_insert_rowid())"
      );
      stmt.run([taskId], () => resolve());
    });
  })();
  await (() => {
    new Promise(resolve => {
      db.exec("COMMIT;", () => resolve());
    });
  })();
};

module.exports.toggleListTbl = async (listId, taskId) => {
  const exists = await (() => {
    return new Promise(resolve => {
      db.prepare(
        "SELECT count(*) c FROM task_list_tbl WHERE task_id = ? AND list_id = ?"
      ).get([taskId, listId], (err, row) => {
        resolve(!!row.c);
      });
    });
  })();
  await (exists => {
    return new Promise(resolve => {
      if (exists) {
        db.prepare(
          "DELETE FROM task_list_tbl WHERE task_id = ? AND list_id = ?"
        ).run([taskId, listId], () => resolve());
      } else {
        db.prepare(
          "INSERT INTO task_list_tbl (task_id, list_id) VALUES (?, ?)"
        ).run([taskId, listId], () => resolve());
      }
    });
  })(exists);
};

module.exports.updateListTbl = async (listId, content) => {
  await (() => {
    return new Promise(resolve => {
      db.prepare("UPDATE list_tbl SET content = ? WHERE list_id = ?").run(
        [content, listId],
        () => resolve()
      );
    });
  })();
};

module.exports.deleteListTbl = async listId => {
  await (() => {
    return new Promise(resolve => {
      db.exec("BEGIN TRANSACTION;", () => resolve());
    });
  })();
  await (() => {
    return new Promise(resolve => {
      db.prepare("DELETE FROM list_tbl WHERE list_id = ?").run([listId], () =>
        resolve()
      );
    });
  })();
  await (() => {
    return new Promise(resolve => {
      db.prepare("DELETE FROM task_list_tbl WHERE list_id = ?").run(
        [listId],
        () => resolve()
      );
    });
  })();
  await (() => {
    return new Promise(resolve => {
      db.exec("COMMIT;", () => resolve());
    });
  })();
};
