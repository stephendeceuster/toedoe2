// TODO COMMENT

// INITIAL STATE
const initialState = {
  todos: [
    { todo: "Make your first todo", checked: false },
  ],
};

if(localStorage.getItem('toedoe2')) {
    const persisted = JSON.parse(localStorage.getItem('toedoe2')); 
    initialState.todos = [...persisted.state];
}

// TYPES
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHECK_TODO = "CHECK_TODO";

//ACTION CREATORS
export const addToDo = (str) => ({
  type: ADD_TODO,
  payload: str,
});
export const deleteToDo = (index) => ({
  type: DELETE_TODO,
  payload: index,
});
export const checkToDo = (index) => ({
  type: CHECK_TODO,
  payload: index,
});

//REDUCER
const todoListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { todo: payload, checked: false }],
      };
    case DELETE_TODO:
      const copyForDelete = [...state.todos];
      copyForDelete.splice(payload, 1);
      return { ...state, todos: [...copyForDelete] };
    case CHECK_TODO:
      const copyForCheck = [...state.todos];
      copyForCheck[payload].checked = !copyForCheck[payload].checked;
      return { ...state, todos: [...copyForCheck] };
    default:
      return { ...state };
  }
};

export default todoListReducer;
