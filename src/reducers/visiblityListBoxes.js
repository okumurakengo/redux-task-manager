import { CategoryFilters } from "../actions";

const defaultState = {
  [CategoryFilters.CATEGORY_HOLD]: true,
  [CategoryFilters.CATEGORY_TEMP]: true,
  [CategoryFilters.CATEGORY_TEST]: true,
  [CategoryFilters.CATEGORY_TEST_OTHER]: true,
};

const visibilityFilter = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_LIST_BOX":
      state[action.category] = !state[action.category];
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default visibilityFilter;
