// INITIAL STATE
const initialState = {
  todos: [
    { todo: "Make your first todo", checked: false },
    { todo: "Second todo", checked: true },
  ],
};

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
      //state.todos.push({ todo: payload, checked: false });
      return {
        ...state,
        todos: [...state.todos, { todo: payload, checked: false }],
      };
    case DELETE_TODO:
      state.todos.splice(payload, 1);
      //return { ...state};
    case CHECK_TODO:
      state.todos[payload] = { ...state.todos[payload], checked: true };
      //return { ...state };
    default:
      return { ...state };
  }
};

export default todoListReducer;
