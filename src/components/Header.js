import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/reducers/todoReducer';

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
} from '@mui/material';

import { RestartAlt, Dns } from '@mui/icons-material';

const Header = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(actions.resetTodo());
  };
  return (
    <Box className='flex-grow-1'>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' aria-label='menu'>
            <Dns />
          </IconButton>
          <Typography
            variant='h5'
            className='flex-grow-1 text-center text-white fw-bolder'
          >
            Daily Hunt
          </Typography>

          <IconButton onClick={handleReset}>
            <Tooltip title='Reset'>
              <RestartAlt />
            </Tooltip>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
