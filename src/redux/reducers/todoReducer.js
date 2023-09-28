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
    deleteTodo: (state, action) => {
      const deletedTodo = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== deletedTodo.id);
      localStorage.setItem('todosLocal', JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const updatedTodo = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== updatedTodo.id);
      state.completedTodos.push(updatedTodo);

      localStorage.setItem('todosLocal', JSON.stringify(state.todos));
      localStorage.setItem('completedTodosLocal', JSON.stringify(state.todos));
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
