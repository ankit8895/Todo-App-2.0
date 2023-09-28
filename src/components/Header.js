import React from 'react';

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@mui/material';

const Header = () => {
  return (
    <Box className='flex-grow-1'>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' aria-label='menu'></IconButton>
          <Typography variant='h6' className='flex-grow-1 text-center'>
            Daily Hunt
          </Typography>

          <Button color='inherit'></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
