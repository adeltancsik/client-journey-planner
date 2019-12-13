import { JOURNEY_FETCHED } from "../actions/journeys";

export default (state = null, action = {}) => {
  switch (action.type) {
    case JOURNEY_FETCHED:
      return action.payload;
    default:
      return state;
  }
};
