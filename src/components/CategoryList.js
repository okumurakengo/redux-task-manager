import React from "react";
import PropTypes from "prop-types";
import DeleteBtn from "./DeleteBtn";

const setFill = (listId, taskIds, taskId, listFill, relationTask) => {
  if (listId === (relationTask || {}).id) {
    return "#F7DC6F";
  } else if (taskIds.indexOf(taskId) >= 0) {
    return "#45B39D";
  } else {
    return listFill;
  }
};

const CategoryList = ({
  x,
  listFill,
  boxWidth,
  lists,
  taskId,
  relationTask,
  requestToggleList,
  seaRelationTasks,
  notSeaRelationTasks,
  editList,
  deleteList,
}) => (
  <g>
    {lists.map((list, index) => (
      <g key={list.list_id} className="cursor-pointer">
        <g
          onClick={() => requestToggleList(list.list_id, taskId)}
          onMouseOver={() => seaRelationTasks(list.list_id, list.taskIds)}
          onMouseOut={notSeaRelationTasks}
        >
          <rect
            x={x + 5}
            y={index * 30 + 35}
            width={boxWidth - 10}
            height="25"
            fill={setFill(
              list.list_id,
              list.taskIds,
              taskId,
              listFill,
              relationTask
            )}
            stroke={list.taskIds.indexOf(taskId) >= 0 ? "#fff" : ""}
            rx="5"
            ry="5"
          />
        </g>
        <g onClick={() => editList(list.list_id)}>
          <text x={x + 10} y={index * 30 + 55} fontSize="13">
            {list.content}
          </text>
        </g>
        <DeleteBtn
          x={x}
          minusX={15}
          y={28}
          yInterval={30}
          index={index}
          boxWidth={boxWidth}
          deleteEvt={() => deleteList(list.list_id)}
        />
      </g>
    ))}
  </g>
);

export default CategoryList;
