import {
  CREATE_TODO_INITIATE,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAIL,
  GETALL_TODO_SUCCESS,
  DELETE_TODO_SUCCESS
} from "../actionType.js";

const initialState = {
  todos: [],
  isFetching: false
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO_SUCCESS:
      let newtodo = [...state.todos];
      newtodo.push(payload);
      return {
        ...state,
        todos: newtodo,
        isFetching: payload.isFetching
      };
    case CREATE_TODO_INITIATE:
      return {
        ...state,
        isFetching: payload.isFetching
      };
    case CREATE_TODO_FAIL:
      return {
        ...state,
        isFetching: payload.isFetching
      };

    case GETALL_TODO_SUCCESS:
      return {
        ...state,
        todos: payload,
        isFetching: payload.isFetching
      };

    case DELETE_TODO_SUCCESS:
      let deletetodo = [...state.todos];
      deletetodo = deletetodo.filter(item => {
        return item.id !== payload;
      });
      return {
        ...state,
        todos: deletetodo,
        isFetching: payload.isFetching
      };
    default:
      return state;
  }
};
