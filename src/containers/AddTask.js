import { connect } from "react-redux";
import { requestAddTask, setTargetTask } from "../actions";
import AddBtn from "../components/AddBtn";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    let content;
    if (!(content = prompt())) {
      return;
    }
    dispatch(requestAddTask(content));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBtn);
