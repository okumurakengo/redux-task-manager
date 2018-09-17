const tasks = (state = [], action) => {
  switch (action.type) {
    case "SELECT_TASK":
      return action.data;
    default:
      return state;
  }
};

export default tasks;
