import request from "superagent";
import { baseUrl } from "../constants";

//login should dispatch the JWT from the /login responsebody inside an action with type JWT

export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const USERNAME = "USERNAME";

function username(payload) {
  return {
    type: USERNAME,
    payload
  };
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      const getJwt = jwt(response.body.jwt);
      const getUsername = username(response.body.username);
      dispatch(getJwt);
      dispatch(getUsername);
    })
    .catch(console.error);
};

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

function signupSuccess(payload) {
  return {
    type: SIGNUP_SUCCESS,
    payload
  };
}

export const signup = (email, password, username) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send({ email, password, username })
    .then(response => {
      const action = signupSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const LOGOUT = "LOGOUT";

export const emptyUser = () => {
  return {
    type: LOGOUT
  };
};
