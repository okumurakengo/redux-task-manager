import React from "react";
import PropTypes from "prop-types";

const ToggleListBoxBtn = ({ toggleListBox, x, fill, listFill }) => (
  <g onClick={toggleListBox} className="cursor-pointer">
    <circle cx={x} cy="15" r="10" stroke={listFill} fill={fill} />
    <circle cx={x} cy="15" r="6" fill={listFill} />
  </g>
);

export default ToggleListBoxBtn;
