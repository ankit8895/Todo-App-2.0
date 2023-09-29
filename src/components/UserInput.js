import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material';
import { actions } from '../redux/reducers/todoReducer';

const UserInput = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const handleUserInput = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(
        actions.addTodo({
          id: uuidv4(),
          title: task,
        })
      );

      setTask('');
    }
  };

  return (
    <Box component={'form'} className='text-center py-3'>
      <TextField
        required
        id='standard-basic'
        label='Title'
        variant='outlined'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => handleUserInput(e)}
        sx={{ width: '80vw', color: '#1976D2' }}
        focused
      />
    </Box>
  );
};

export default UserInput;
