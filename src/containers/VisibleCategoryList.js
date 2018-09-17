import { connect } from "react-redux";
import {
  requestToggleList,
  seaRelationTasks,
  notSeaRelationTasks,
  requestUpdateList,
  requestDeleteList,
} from "../actions";
import CategoryList from "../components/CategoryList";

const mapStateToProps = (state, ownProps) => ({
  lists: state.lists.filter(list => list.category === ownProps.category),
  taskId: state.targetTask,
  relationTask: state.relationTask,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestToggleList: (id, taskId) => {
    if (!taskId) {
      alert("タスクを選択!");
    }
    dispatch(requestToggleList(id, taskId));
  },
  seaRelationTasks: (id, taskIds) => dispatch(seaRelationTasks(id, taskIds)),
  notSeaRelationTasks: () => dispatch(notSeaRelationTasks()),
  editList: listId => {
    let content;
    if (!(content = prompt("更新"))) {
      return;
    }
    dispatch(requestUpdateList(listId, content));
  },
  deleteList: listId => {
    if (!confirm("削除?")) {
      return;
    }
    dispatch(requestDeleteList(listId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
