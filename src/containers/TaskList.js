import { connect } from "react-redux";
import {
  setTargetTask,
  requestUpdateTask,
  requestDeleteTask,
} from "../actions";
import TaskList from "../components/TaskList";

const mapStateToProps = state => ({
  tasks: state.tasks,
  targetTaskId: state.targetTask,
  relationTaskIds: state.relationTask.taskIds,
});

const mapDispatchToProps = dispatch => ({
  setTargetTask: taskId => dispatch(setTargetTask(taskId)),
  updateTask: taskId => {
    let content;
    if (!(content = prompt("更新"))) {
      return;
    }
    dispatch(requestUpdateTask(taskId, content));
  },
  deleteTask: (taskId, targetTaskId) => {
    if (!confirm("削除?")) {
      return;
    }

    if (taskId === targetTaskId) {
      dispatch(setTargetTask(null));
    }
    dispatch(requestDeleteTask(taskId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
