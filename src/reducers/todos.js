import { TODOS_FETCHED, TODO_CREATE_SUCCESS } from "../actions/todos";

export default (state = [], action = {}) => {
  switch (action.type) {
    case TODOS_FETCHED:
      return [...action.payload];
    case TODO_CREATE_SUCCESS:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};
