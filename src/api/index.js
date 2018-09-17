export function fetchSelectTask() {
  return fetch(`http://localhost:3000/api/task/get`)
    .then(res => res.json())
    .then(json => json.data)
    .catch(error => error);
}

export function fetchAddTask(content) {
  return fetch(`http://localhost:3000/api/task/add`, {
    method: "POST",
    body: JSON.stringify({ content }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then(res => res.json())
    .catch(error => error);
}

export function fetchUpdateTask(taskId, content) {
  return fetch(`http://localhost:3000/api/task/update`, {
    method: "POST",
    body: JSON.stringify({ taskId, content }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then(res => res.json())
    .catch(error => error);
}

export function fetchDeleteTask(taskId) {
  return fetch(`http://localhost:3000/api/task/delete`, {
    method: "POST",
    body: JSON.stringify({ taskId }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then(res => res.json())
    .catch(error => error);
}

export function fetchSelectList() {
  return fetch(`http://localhost:3000/api/list/get`)
    .then(res => res.json())
    .then(json => {
      let arr = [];
      let listId = null;
      json.data.forEach(val => {
        if (listId === val.list_id) {
          arr[arr.length - 1].taskIds.push(val.task_id);
        } else {
          arr.push({
            list_id: val.list_id,
            category: val.category,
            content: val.content,
            taskIds: val.task_id ? [val.task_id] : [],
          });
        }
        listId = val.list_id;
      });
      return arr;
    })
    .catch(error => error);
}

export function fetchAddList(category, content, taskId) {
  return fetch(`http://localhost:3000/api/list/add`, {
    method: "POST",
    body: JSON.stringify({ category, content, taskId }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then(res => res.json())
    .catch(error => error);
}

export function fetchToggleList(listId, taskId) {
  return fetch(`http://localhost:3000/api/list/toggle`, {
    method: "POST",
    body: JSON.stringify({ listId, taskId }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then(res => res.json())
    .catch(error => error);
}

export function fetchUpdateList(listId, content) {
  return fetch(`http://localhost:3000/api/list/update`, {
    method: "POST",
    body: JSON.stringify({ listId, content }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then(res => res.json())
    .catch(error => error);
}

export function fetchDeleteList(listId) {
  return fetch(`http://localhost:3000/api/list/delete`, {
    method: "POST",
    body: JSON.stringify({ listId }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then(res => res.json())
    .catch(error => error);
}
