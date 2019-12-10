import { combineReducers } from "redux";
import journeys from "./journeys";
import user from "./user";
import username from "./username";
import signup from "./signup";

export default combineReducers({
  journeys,
  user,
  username,
  signup
});
