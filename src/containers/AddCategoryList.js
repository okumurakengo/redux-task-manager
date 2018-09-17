import { connect } from "react-redux";
import { requestAddList } from "../actions";
import AddBtn from "../components/AddBtn";

const mapStateToProps = state => ({
  targetTaskId: state.targetTask,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: targetTaskId => {
    let content;
    if (!targetTaskId) {
      alert("タスクを選択！");
      return;
    }
    if (!(content = prompt())) {
      return;
    }
    dispatch(requestAddList(ownProps.category, content, targetTaskId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBtn);
