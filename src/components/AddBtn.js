import React from "react";

const List = ({ x, fill, targetTaskId, onClick }) => {
  return (
    <g className="cursor-pointer" onClick={() => onClick(targetTaskId)}>
      <rect x={x + 3} y="3" width="50" height="25" rx="5" ry="5" fill="#fff" />
      <text x={x + 8} y="20" fontSize="15" fill={fill}>
        New!!
      </text>
    </g>
  );
};

export default List;
