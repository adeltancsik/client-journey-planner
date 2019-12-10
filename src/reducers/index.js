import { combineReducers } from "redux";
import journeys from "./journeys";
import user from "./user";
import username from "./username";
import signup from "./signup";
import countries from "./countries";

export default combineReducers({
  journeys,
  user,
  username,
  signup,
  countries
});
