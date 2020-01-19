
const initialState = {
  todos:[]
};
export default (state = initialState, action) => {
  const { type, payload } = action;
    switch (type) {
     case 'CREATE_TODO_SUCCESS':
      let newtodo = [...state.todos];
      newtodo.push(payload)
      console.log()
      return {
        ...state,
          todos: newtodo
    };
    case 'GETALL_TODO_SUCCESS':
      return {
        ...state,
        todos: payload
    };

    case 'DELETE_TODO_SUCCESS':
      let deletetodo = [...state.todos];
      deletetodo = deletetodo.filter((item)=>{
        return item.id !== payload;
      })
      return {
        ...state,
        todos: deletetodo
    };
     default:
      return state
    }
  }