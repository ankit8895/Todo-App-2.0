import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import UserInput from '../components/UserInput';
import TodoList from '../components/TodoList';

const HomePage = () => {
  const todoLists = useSelector((state) => state.todoReducer);

  const { todos, completedTodos } = todoLists;
  return (
    <Box component={'div'}>
      <UserInput />
      <Box component={'div'}>
        <TodoList list={todos} />
      </Box>
    </Box>
  );
};

export default HomePage;
