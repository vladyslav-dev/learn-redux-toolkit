import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos.map(item => item.id === action.payload.id ? action.payload : item)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todosSlice.actions;

export default todosSlice.reducer;