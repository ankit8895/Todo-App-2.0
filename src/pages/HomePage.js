import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import UserInput from '../components/UserInput';
import TodoList from '../components/TodoList';

const HomePage = () => {
  const todoLists = useSelector((state) => state.todoReducer);

  const { todos, completedTodos } = todoLists;
  return (
    <Box component={'div'} className='p-5'>
      <UserInput />
      <Box component={'div'} className='pt-3'>
        <TodoList list={todos} />
      </Box>
    </Box>
  );
};

export default HomePage;
