import { COUNTRY_FETCHED } from "../actions/journeys";

export default (state = null, action = {}) => {
  switch (action.type) {
    case COUNTRY_FETCHED:
      return action.payload;
    default:
      return state;
  }
};
