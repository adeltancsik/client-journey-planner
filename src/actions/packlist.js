import request from "superagent";
import { baseUrl } from "../constants";

// fetching todos belonging to a journey
export const PACKLIST_FETCHED = "PACKLIST_FETCHED";

const packsFetched = packs => ({
  type: PACKLIST_FETCHED,
  payload: packs
});

export const loadPackList = journeyId => dispatch => {
  request(`${baseUrl}/journey/${journeyId}/packs`)
    .then(response => {
      dispatch(packsFetched(response.body));
    })
    .catch(console.error);
};

// creating a new pack
export const PACK_CREATE_SUCCESS = "PACK_CREATE_SUCCESS";

const packCreateSuccess = pack => ({
  type: PACK_CREATE_SUCCESS,
  payload: pack
});

export const createPack = data => dispatch => {
  request
    .post(`${baseUrl}/pack`)
    .send(data)
    .then(response => {
      dispatch(packCreateSuccess(response.body));
      //dispatch packsFetched with journeyid
    })
    .catch(console.error);
};

// editing an item of packing list
export const PACK_EDIT_SUCCESS = "PACK_EDIT_SUCCESS";

const editPackSuccess = newData => ({
  type: PACK_EDIT_SUCCESS,
  payload: newData
});

export const editPack = id => dispatch => {
  request
    .put(`${baseUrl}/pack/${id}`)
    .then(response => {
      dispatch(editPackSuccess(response.body));
    })
    .catch(console.error);
};
