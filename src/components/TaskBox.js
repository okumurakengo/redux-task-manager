import React from "react";
import AddTask from "../containers/AddTask";
import TaskList from "../containers/TaskList";

const TaskBox = ({ x }) => {
  const boxWidth = 390;
  return (
    <g>
      <rect width={boxWidth + "px"} height="100%" x={x} fill="#FCF3CF" />
      <AddTask x={x + 5} fill="#F39C12" />
      <TaskList x={x} fill="#aaa" boxWidth={boxWidth} />
    </g>
  );
};

export default TaskBox;
