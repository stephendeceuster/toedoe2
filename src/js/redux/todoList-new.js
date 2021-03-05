import {createSlice} from '@reduxjs/toolkit';

const reducer = createSlice({
    name: "todos",
    initialState = {
        todos: [
                { todo: "Make your first todo", checked: false },
{ todo:     "Second todo", checked: true },
],
},
reducers: {
addTodo(state, {payload}){
state.todos.push({
todo : payload,
checked :false
})
},
checkTodo(state, {payload}){
state.todos[payload].checked = !state.todos[payload].checked
},
deleteTodo(state, {payload}){
state.todos.splice(payload,1)
}
}
})

export default reducer;
export const {addTodo,checkTodo, deleteTodo} = reducer.actions;