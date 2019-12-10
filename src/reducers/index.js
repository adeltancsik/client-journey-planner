import { combineReducers } from "redux";
import journeys from "./journeys";
import user from "./user";
import username from "./username";

export default combineReducers({
  journeys,
  user,
  username
});
