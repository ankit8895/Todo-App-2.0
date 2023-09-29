import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Box } from '@mui/material';
import UserInput from '../components/UserInput';
import TodoList from '../components/TodoList';
import CompleteTodoList from '../components/CompleteTodoList';

const HomePage = () => {
  const todoLists = useSelector((state) => state.todoReducer);

  const { todos, completedTodos } = todoLists;
  return (
    <Container
      sx={{
        margin: 'auto',
        padding: 2,
      }}
    >
      <UserInput />
      <Box
        component={'div'}
        className='pt-3'
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <TodoList list={todos} />
        <CompleteTodoList list={completedTodos} />
      </Box>
    </Container>
  );
};

export default HomePage;
