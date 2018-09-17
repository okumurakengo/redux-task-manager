const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const {
  getTaskTbl,
  addTaskTbl,
  updateTaskTbl,
  deleteTaskTbl,
} = require("./lib/taskTblRepository");
const {
  getListTbl,
  addListTbl,
  toggleListTbl,
  updateListTbl,
  deleteListTbl,
} = require("./lib/listTblRepository");

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get("/api/task/get", (req, res) => {
  getTaskTbl().then(data => {
    res.json({ states: "success", data });
  });
});

app.post("/api/task/add", (req, res) => {
  addTaskTbl(1, req.body.content);
  res.json({ status: "success" });
});

app.post("/api/task/update", (req, res) => {
  updateTaskTbl(req.body.taskId, req.body.content);
  res.json({ status: "success" });
});

app.post("/api/task/delete", (req, res) => {
  deleteTaskTbl(req.body.taskId);
  res.json({ status: "success" });
});

app.get("/api/list/get", async (req, res) => {
  const data = await getListTbl();
  res.json({ states: "success", data });
});

app.post("/api/list/add", async (req, res) => {
  await addListTbl(req.body.category, req.body.content, req.body.taskId);
  res.json({ status: "success" });
});

app.post("/api/list/toggle", async (req, res) => {
  await toggleListTbl(req.body.listId, req.body.taskId);
  res.json({ status: "success" });
});

app.post("/api/list/update", async (req, res) => {
  await updateListTbl(req.body.listId, req.body.content);
  res.json({ status: "success" });
});

app.post("/api/list/delete", async (req, res) => {
  await deleteListTbl(req.body.listId);
  res.json({ status: "success" });
});

app.listen(3000);
console.log("server starting");
