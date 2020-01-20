import { apiClient } from "./api-client";
import {
  CREATE_TODO_INITIATE,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAIL,
  GETALL_TODO_SUCCESS,
  GETALL_TODO_FAIL,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL
} from "./actionType.js";

export const addTodo = todo => dispatch => {
  let todos = { name: todo };
  dispatch({
    type: CREATE_TODO_INITIATE,
    payload: { isFetching: true }
  });
  apiClient
    .createTodo(todos)
    .then(res => {
      dispatch({
        type: CREATE_TODO_SUCCESS,
        payload: { name: todo, id: res.payload.id, isFetching: false }
      });
    })
    .catch(error => {
      dispatch({
        type: CREATE_TODO_FAIL,
        payload: { isFetching: "error" }
      });
    });
};

export const getTodos = () => dispatch => {
  apiClient
    .getAllTodos()
    .then(res => {
      dispatch({
        type: GETALL_TODO_SUCCESS,
        payload: res.payload
      });
    })
    .catch(error => {
      dispatch({
        type: GETALL_TODO_FAIL,
        payload: { isFetching: "error" }
      });
    });
};

export const deleteTodo = id => dispatch => {
  apiClient
    .deleteTodo(id)
    .then(res => {
      dispatch({
        type: DELETE_TODO_SUCCESS,
        payload: id
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_TODO_FAIL,
        payload: { isFetching: "error" }
      });
    });
};
