import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './reducers/todoReducer';

const todosInfoFromStorage = localStorage.getItem('todosLocal')
  ? JSON.parse(localStorage.getItem('todosLocal'))
  : [];

const completedTodos = localStorage.getItem('completedTodosLocal')
  ? JSON.parse(localStorage.getItem('completedTodos'))
  : [];

const preloadedState = {
  todoReducer: {
    todos: todosInfoFromStorage,
    completedTodos: completedTodos,
  },
};

const store = configureStore({
  reducer: {
    todoReducer,
  },
  preloadedState,
});

export default store;
