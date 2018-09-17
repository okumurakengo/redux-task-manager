const relationTask = (state = {}, action) => {
  switch (action.type) {
    case "SEA_RELATION_TASKS":
      return { id: action.id, taskIds: action.taskIds };
    case "NOT_SEA_RELATION_TASKS":
      return {};
    default:
      return state;
  }
};

export default relationTask;
