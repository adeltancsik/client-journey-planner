import { JOURNEYS_FETCHED, JOURNEY_CREATE_SUCCESS } from "../actions/journeys";

export default (state = null, action = {}) => {
  switch (action.type) {
    case JOURNEYS_FETCHED:
      return action.payload;
    case JOURNEY_CREATE_SUCCESS:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};
