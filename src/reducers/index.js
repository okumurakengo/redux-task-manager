import { combineReducers } from "redux";
import tasks from "./tasks";
import targetTask from "./targetTask";
import lists from "./lists";
import relationTask from "./relationTask";
import visiblityListBoxes from "./visiblityListBoxes";

export default combineReducers({
  tasks,
  targetTask,
  lists,
  relationTask,
  visiblityListBoxes,
});
