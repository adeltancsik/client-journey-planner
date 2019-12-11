import {
  PACKLIST_FETCHED,
  PACK_CREATE_SUCCESS,
  PACK_EDIT_SUCCESS
} from "../actions/packlist";

export default (state = [], action = {}) => {
  switch (action.type) {
    case PACKLIST_FETCHED:
      return action.payload;
    case PACK_CREATE_SUCCESS:
      return [...state, { ...action.payload }];
    case PACK_EDIT_SUCCESS:
      return [
        ...state.map(item => {
          if (item.id === action.payload.id) {
            return (item = action.payload);
          } else {
            return item;
          }
        })
      ];
    default:
      return state;
  }
};
