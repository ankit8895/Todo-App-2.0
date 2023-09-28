import React from 'react';
import { Box, TextField } from '@mui/material';

const UserInput = () => {
  return (
    <Box component={'form'} className='text-center py-3'>
      <TextField
        required
        id='standard-basic'
        label='Standard'
        variant='standard'
        style={{ width: '80vw' }}
      />
    </Box>
  );
};

export default UserInput;
