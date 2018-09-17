const lists = (state = [], action) => {
  switch (action.type) {
    case "SELECT_LIST":
      return action.data;
    case "TOGGLE_TASK_ID":
      return state.map(s => {
        if (s.id === action.id) {
          if (s.taskIds.indexOf(action.taskId) >= 0) {
            return {
              id: s.id,
              taskIds: s.taskIds.filter(tid => !(tid === action.taskId)),
              category: s.category,
              content: s.content,
            };
          } else {
            s.taskIds.push(action.taskId);
            return s;
          }
        } else {
          return s;
        }
      });
    default:
      return state;
  }
};

export default lists;
