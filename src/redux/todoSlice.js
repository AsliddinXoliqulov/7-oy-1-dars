// redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: Date.now(),
        title: action.payload,
        checked: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find(t => t.id === action.payload.id);
      if (todo) {
        todo.checked = action.payload.checked;
      }
    },
    updateTodo: (state, action) => {
      const todo = state.list.find(t => t.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
