let nextTodoId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const selectTask = data => ({
  type: "SELECT_TASK",
  data,
});

export const requestGetTask = () => ({
  type: "REQUEST_GET_TASK",
});

export const requestAddTask = content => ({
  type: "REQUEST_ADD_TASK",
  content,
});

export const requestUpdateTask = (taskId, content) => ({
  type: "REQUEST_UPDATE_TASK",
  taskId,
  content,
});

export const requestDeleteTask = taskId => ({
  type: "REQUEST_DELETE_TASK",
  taskId,
});

export const setTargetTask = targetTask => ({
  type: "SET_TARGET_TASK",
  taskId: targetTask,
});

export const seaRelationTasks = (id, taskIds) => ({
  type: "SEA_RELATION_TASKS",
  id,
  taskIds,
});

export const notSeaRelationTasks = () => ({
  type: "NOT_SEA_RELATION_TASKS",
});

export const toggleTaskid = (id, taskId) => ({
  type: "TOGGLE_TASK_ID",
  id,
  taskId,
});

export const toggleListBox = category => ({
  type: "TOGGLE_LIST_BOX",
  category,
});

let nextListId = 0;
export const addList = (category, taskId, content) => ({
  type: "ADD_LIST",
  id: nextListId++,
  taskIds: [taskId],
  category,
  content,
});

export const selectList = data => ({
  type: "SELECT_LIST",
  data,
});

export const requestGetList = () => ({
  type: "REQUEST_GET_LIST",
});

export const requestAddList = (category, content, taskId) => ({
  type: "REQUEST_ADD_LIST",
  category,
  content,
  taskId,
});

export const requestToggleList = (listId, taskId) => ({
  type: "REQUEST_TOGGLE_LIST",
  listId,
  taskId,
});

export const requestUpdateList = (listId, content) => ({
  type: "REQUEST_UPDATE_LIST",
  listId,
  content,
});

export const requestDeleteList = listId => ({
  type: "REQUEST_DELETE_LIST",
  listId,
});

export const CategoryFilters = {
  CATEGORY_HOLD: "CATEGORY_HOLD",
  CATEGORY_TEMP: "CATEGORY_TEMP",
  CATEGORY_TEST: "CATEGORY_TEST",
  CATEGORY_TEST_OTHER: "CATEGORY_TEST_OTHER",
};
