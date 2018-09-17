import React from "react";
import AddCategoryList from "../containers/AddCategoryList";
import VisibleCategoryList from "../containers/VisibleCategoryList";
import VisibleListBox from "../containers/VisibleListBox";

const ListBox = ({
  width,
  x,
  fill,
  listFill,
  category,
  isVisible,
  children,
}) => (
  <g>
    <rect x={x} y="0" width={width} height="100%" fill={fill} />
    <VisibleListBox
      x={x + 15}
      fill={fill}
      listFill={listFill}
      category={category}
    />
    <g style={{ display: isVisible ? "inline" : "none" }}>
      <AddCategoryList x={x + 30} fill={fill} category={category} />
      <text x={x + 90} y="20" fontSize="13">
        {children}
      </text>
      <VisibleCategoryList
        x={x}
        listFill={listFill}
        category={category}
        boxWidth={width}
      />
    </g>
  </g>
);

export default ListBox;
