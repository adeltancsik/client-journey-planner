import request from "superagent";
import { baseUrl } from "../constants";

// fetching for displaying all the journeys
export const JOURNEYS_FETCHED = "JOURNEYS_FETCHED";

const journeysFetched = journeys => ({
  type: JOURNEYS_FETCHED,
  payload: journeys
});

export const loadJourneys = () => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request(`${baseUrl}/journeys`)
    .set("Authorization", `Bearer ${user}`)
    .then(response => {
      dispatch(journeysFetched(response.body));
    })
    .catch(console.error);
};

// creating a new journey
export const JOURNEY_CREATE_SUCCESS = "JOURNEY_CREATE_SUCCESS";

const journeyCreateSuccess = journey => ({
  type: JOURNEY_CREATE_SUCCESS,
  payload: journey
});

export const createJourney = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request
    .post(`${baseUrl}/journey`)
    .set("Authorization", `Bearer ${user}`)
    .send(data)
    .then(response => {
      dispatch(journeyCreateSuccess(response.body));
    })
    .catch(console.error);
};

// fetching a list of countries to choose from
export const COUNTRIES_FETCHED = "COUNTRIES_FETCHED";

const countriesFetched = countries => ({
  type: COUNTRIES_FETCHED,
  payload: countries
});

export const loadCountries = () => dispatch => {
  request(`https://restcountries.eu/rest/v2/all`)
    .then(response => {
      dispatch(countriesFetched(response.body));
    })
    .catch(console.error);
};

// fetching a single journey based on its id
export const JOURNEY_FETCHED = "JOURNEY_FETCHED";

const loadJourneySuccess = journey => ({
  type: JOURNEY_FETCHED,
  payload: journey
});

export const loadJourney = id => dispatch => {
  request
    .get(`${baseUrl}/journey/${id}`)
    .then(response => {
      dispatch(loadJourneySuccess(response.body));
      dispatch(loadCountry(response.body.country));
    })
    .catch(console.error);
};

// fetching a single country based on its name from external API
export const COUNTRY_FETCHED = "COUNTRY_FETCHED";

const loadCountrySuccess = country => ({
  type: COUNTRY_FETCHED,
  payload: country
});

export const loadCountry = name => dispatch => {
  request
    .get(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
      dispatch(loadCountrySuccess(response.body));
    })
    .catch(console.error);
};

export const JOURNEY_DELETE_SUCCESS = "JOURNEY_DELETE_SUCCESS";

const journeyDeleteSuccess = journeyId => ({
  type: JOURNEY_DELETE_SUCCESS,
  payload: journeyId
});

export const deleteJourney = id => dispatch => {
  request
    .delete(`${baseUrl}/journeys/${id}`)
    .then(() => {
      dispatch(journeyDeleteSuccess(id));
    })
    .catch(console.error);
};
