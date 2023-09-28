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
      dispatch(
        actions.addTodo({
          id: uuidv4(),
          title: task,
          status: false,
        })
      );
    }
  };

  return (
    <Box component={'form'} className='text-center py-3'>
      <TextField
        required
        id='standard-basic'
        label='Standard'
        variant='standard'
        value={task}
        style={{ width: '80vw' }}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => handleUserInput(e)}
      />
    </Box>
  );
};

export default UserInput;
