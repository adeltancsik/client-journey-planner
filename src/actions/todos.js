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

// creating a new todo
export const TODO_CREATE_SUCCESS = "TODO_CREATE_SUCCESS";

const todoCreateSuccess = todo => ({
  type: TODO_CREATE_SUCCESS,
  payload: todo
});

export const createTodo = data => dispatch => {
  request
    .post(`${baseUrl}/todo`)
    .send(data)
    .then(response => {
      dispatch(todoCreateSuccess(response.body));
      //dispatch todosFetched with journeyid
    })
    .catch(console.error);
};

export const TODO_DELETE_SUCCESS = "TODO_DELETE_SUCCESS";

const todoDeleteSuccess = todoId => ({
  type: TODO_DELETE_SUCCESS,
  payload: todoId
});

export const deleteToDo = id => dispatch => {
  request
    .delete(`${baseUrl}/todos/${id}`)
    .then(() => {
      dispatch(todoDeleteSuccess(id));
    })
    .catch(console.error);
};
