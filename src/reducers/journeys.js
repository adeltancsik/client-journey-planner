import {
  JOURNEYS_FETCHED,
  JOURNEY_CREATE_SUCCESS,
  JOURNEY_DELETE_SUCCESS
} from "../actions/journeys";

export default (state = null, action = {}) => {
  switch (action.type) {
    case JOURNEYS_FETCHED:
      return action.payload;
    case JOURNEY_CREATE_SUCCESS:
      return [...state, { ...action.payload }];
    case JOURNEY_DELETE_SUCCESS:
      return [
        ...state.filter(journey => {
          return journey.id !== action.payload;
        })
      ];
    default:
      return state;
  }
};
