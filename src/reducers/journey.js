import { JOURNEY_FETCHED } from "../actions/journeys";

export default (state = null, action = {}) => {
  switch (action.type) {
    case JOURNEY_FETCHED:
      return action.payload;
    // case TICKET_EDIT_SUCCESS:
    //   return [
    //     ...state.map(ticket => {
    //       if (ticket.id === action.newData.id) {
    //         return (ticket = action.newData);
    //       } else {
    //         return ticket;
    //       }
    //     })
    //   ];
    default:
      return state;
  }
};
