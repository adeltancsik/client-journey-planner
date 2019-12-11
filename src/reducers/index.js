import { combineReducers } from "redux";
import journeys from "./journeys";
import user from "./user";
import username from "./username";
import signup from "./signup";
import countries from "./countries";
import journey from "./journey";
import country from "./country";
import todos from "./todos";
import packlist from "./packlist";

export default combineReducers({
  journeys,
  user,
  username,
  signup,
  countries,
  journey,
  country,
  todos,
  packlist
});
