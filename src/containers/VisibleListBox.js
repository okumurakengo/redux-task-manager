import { connect } from "react-redux";
import { toggleListBox } from "../actions";
import ToggleListBoxBtn from "../components/ToggleListBoxBtn";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleListBox: () => dispatch(toggleListBox(ownProps.category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleListBoxBtn);
