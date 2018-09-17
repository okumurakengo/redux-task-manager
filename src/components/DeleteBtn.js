import React from "react";
import PropTypes from "prop-types";

const DeleteBtn = ({ x, minusX, y, yInterval, index, boxWidth, deleteEvt }) => (
  <g onClick={deleteEvt}>
    <rect
      x={x + boxWidth - minusX - 11}
      y={index * yInterval + y + 11}
      width="17"
      height="17"
      fill="#fff"
      rx="5"
      ry="5"
    />
    <line
      x1={x + boxWidth - minusX - 5}
      y1={index * yInterval + y + 17}
      x2={x + boxWidth - minusX}
      y2={index * yInterval + y + 22}
      stroke="#000"
    />
    <line
      x1={x + boxWidth - minusX}
      y1={index * yInterval + y + 17}
      x2={x + boxWidth - minusX - 5}
      y2={index * yInterval + y + 22}
      stroke="#000"
    />
  </g>
);

export default DeleteBtn;
