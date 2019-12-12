import { USERNAME, LOGOUT } from "../actions/user";

export default function(state = "", action = {}) {
  switch (action.type) {
    case USERNAME:
      return action.payload;
    case LOGOUT:
      return (state = "");
    default:
      return state;
  }
}
