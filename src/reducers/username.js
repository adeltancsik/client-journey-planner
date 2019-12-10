import { USERNAME } from "../actions/user";

export default function(state = "", action = {}) {
  switch (action.type) {
    case USERNAME:
      return action.payload;
    default:
      return state;
  }
}
