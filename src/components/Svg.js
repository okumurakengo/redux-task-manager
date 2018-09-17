import React, { Component } from "react";
import { connect } from "react-redux";
import ListBox from "./ListBox";
import TaskBox from "./TaskBox";
import { CategoryFilters, requestGetTask, requestGetList } from "../actions";

const mapStateToProps = state => ({
  visiblityListBoxes: state.visiblityListBoxes,
});

class Svg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listBoxItems: [
        {
          fill: "#D4AC0D",
          listFill: "#F9E79F",
          title: "保留",
          category: CategoryFilters.CATEGORY_HOLD,
        },
        {
          fill: "#E74C3C",
          listFill: "#F5B7B1",
          title: "仮",
          category: CategoryFilters.CATEGORY_TEMP,
        },
        {
          fill: "#16A085",
          listFill: "#ABEBC6",
          title: "テスト",
          category: CategoryFilters.CATEGORY_TEST,
        },
        {
          fill: "#2980B9",
          listFill: "#A9CCE3",
          title: "テスト(影響範囲)",
          category: CategoryFilters.CATEGORY_TEST_OTHER,
        },
      ],
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestGetTask());
    dispatch(requestGetList());
  }

  render() {
    let width = 0,
      accumulationWidth = 0,
      x = 0;
    return (
      <svg
        version="1.1"
        baseProfile="full"
        width="1300px"
        height="900px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill="#eee" />
        {this.state.listBoxItems.map((item, index) => {
          width = this.props.visiblityListBoxes[item.category] ? 200 : 30;
          x = accumulationWidth;
          accumulationWidth += width;
          return (
            <ListBox
              key={index}
              width={width}
              x={x}
              fill={item.fill}
              listFill={item.listFill}
              category={item.category}
              isVisible={this.props.visiblityListBoxes[item.category]}
            >
              {item.title}
            </ListBox>
          );
        })}
        <TaskBox x={accumulationWidth} />
      </svg>
    );
  }
}

export default connect(mapStateToProps)(Svg);
