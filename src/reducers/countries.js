import { COUNTRIES_FETCHED } from "../actions/journeys";

export default (state = null, action = {}) => {
  switch (action.type) {
    case COUNTRIES_FETCHED:
      return action.payload.map(country => country.name);
    default:
      return state;
  }
};
