import request from "superagent";

const baseUrl = "http://localhost:4000";

// fetching todos belonging to a journey
export const TODOS_FETCHED = "TODOS_FETCHED";

const todosFetched = todos => ({
  type: TODOS_FETCHED,
  payload: todos
});

export const loadTodos = journeyId => dispatch => {
  request(`${baseUrl}/journey/${journeyId}/todos`)
    .then(response => {
      dispatch(todosFetched(response.body));
    })
    .catch(console.error);
};
