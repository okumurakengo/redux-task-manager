const targetTask = (state = null, action) => {
  switch (action.type) {
    case "SET_TARGET_TASK":
      return action.taskId;
    default:
      return state;
  }
};

export default targetTask;
