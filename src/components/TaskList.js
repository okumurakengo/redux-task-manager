import React from "react";
import PropTypes from "prop-types";
import DeleteBtn from "./DeleteBtn";

const setFill = (targetTaskId, taskId, relationTaskIds) => {
  if ((relationTaskIds || []).indexOf(taskId) >= 0) {
    return "#F7DC6F";
  } else if (targetTaskId === taskId) {
    return "#76D7C4";
  } else {
    return "#fff";
  }
};

const TaskList = ({
  x,
  boxWidth,
  tasks,
  targetTaskId,
  relationTaskIds,
  setTargetTask,
  updateTask,
  deleteTask,
}) => (
  <g>
    {tasks.map((task, index) => (
      <g key={task.task_id} className="cursor-pointer">
        <g onClick={() => setTargetTask(task.task_id)}>
          <rect
            width={boxWidth - 30}
            height="39"
            x={x + 15}
            y={index * 50 + 35 + "px"}
            rx="5"
            ry="5"
            stroke="#E67E22"
            fill={setFill(targetTaskId, task.task_id, relationTaskIds)}
          />
          <text x={x + 25} y={index * 50 + 60 + "px"} fontSize="15">
            {task.task_id}
          </text>
        </g>
        <text
          x={x + 50}
          y={index * 50 + 60 + "px"}
          fontSize="15"
          onClick={() => updateTask(task.task_id)}
        >
          {task.content}
        </text>
        <DeleteBtn
          x={x}
          minusX={30}
          y={35}
          yInterval={50}
          index={index}
          boxWidth={boxWidth}
          deleteEvt={() => deleteTask(task.task_id, targetTaskId)}
        />
      </g>
    ))}
  </g>
);

export default TaskList;
