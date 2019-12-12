import { JWT, LOGOUT } from "../actions/user";

export default function(state = "", action = {}) {
  switch (action.type) {
    case JWT:
      return action.payload;
    case LOGOUT:
      return (state = "");
    default:
      return state;
  }
}
