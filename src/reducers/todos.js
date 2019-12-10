import { TODOS_FETCHED } from "../actions/todos";

export default (state = null, action = {}) => {
  switch (action.type) {
    case TODOS_FETCHED:
      return action.payload;
    // case JOURNEY_CREATE_SUCCESS:
    //   return [...state, { ...action.payload }];
    default:
      return state;
  }
};
