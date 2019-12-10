import { SIGNUP_SUCCESS } from "../actions/user";

export default function(state = "", action = {}) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
