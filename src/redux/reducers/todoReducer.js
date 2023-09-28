import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    completedTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.todos = [...state.todos, newTodo];

      localStorage.setItem('todosLocal', JSON.stringify(state.todos));
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
