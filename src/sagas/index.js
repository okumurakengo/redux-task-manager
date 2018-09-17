import { call, put, fork, take, select } from "redux-saga/effects";
import {
  fetchSelectTask,
  fetchAddTask,
  fetchUpdateTask,
  fetchDeleteTask,
  fetchSelectList,
  fetchAddList,
  fetchToggleList,
  fetchUpdateList,
  fetchDeleteList,
} from "../api";
import { selectTask, setTargetTask, selectList } from "../actions";

export function* handleRequestGetTask() {
  while (true) {
    yield take("REQUEST_GET_TASK");
    const data = yield call(fetchSelectTask);
    yield put(selectTask(data));
  }
}

export function* handleRequestAddTask() {
  while (true) {
    const { content } = yield take("REQUEST_ADD_TASK");
    yield call(fetchAddTask, content);
    const data = yield call(fetchSelectTask);
    yield put(setTargetTask(data[data.length - 1].task_id));
    yield put(selectTask(data));
  }
}

export function* handleRequestUpdateTask() {
  while (true) {
    const { taskId, content } = yield take("REQUEST_UPDATE_TASK");
    yield call(fetchUpdateTask, taskId, content);
    const data = yield call(fetchSelectTask);
    yield put(selectTask(data));
  }
}

export function* handleRequestDeleteTask() {
  while (true) {
    const { taskId } = yield take("REQUEST_DELETE_TASK");
    yield call(fetchDeleteTask, taskId);
    const data = yield call(fetchSelectTask);
    yield put(selectTask(data));
  }
}

export function* handleRequestGetList() {
  while (true) {
    yield take("REQUEST_GET_LIST");
    const data = yield call(fetchSelectList);
    console.log(data);
    yield put(selectList(data));
  }
}

export function* handleRequestAddList() {
  while (true) {
    const { category, content, taskId } = yield take("REQUEST_ADD_LIST");
    yield call(fetchAddList, category, content, taskId);
    const data = yield call(fetchSelectList);
    yield put(selectList(data));
  }
}

export function* handleRequestToggleList() {
  while (true) {
    const { listId, taskId } = yield take("REQUEST_TOGGLE_LIST");
    yield call(fetchToggleList, listId, taskId);
    const data = yield call(fetchSelectList);
    yield put(selectList(data));
  }
}

export function* handleRequestUpdateList() {
  while (true) {
    const { listId, content } = yield take("REQUEST_UPDATE_LIST");
    yield call(fetchUpdateList, listId, content);
    const data = yield call(fetchSelectList);
    yield put(selectList(data));
  }
}

export function* handleRequestDeleteList() {
  while (true) {
    const { listId } = yield take("REQUEST_DELETE_LIST");
    yield call(fetchDeleteList, listId);
    const data = yield call(fetchSelectList);
    yield put(selectList(data));
  }
}

export default function* rootSaga() {
  yield fork(handleRequestGetTask);
  yield fork(handleRequestAddTask);
  yield fork(handleRequestUpdateTask);
  yield fork(handleRequestDeleteTask);
  yield fork(handleRequestGetList);
  yield fork(handleRequestAddList);
  yield fork(handleRequestToggleList);
  yield fork(handleRequestUpdateList);
  yield fork(handleRequestDeleteList);
}
