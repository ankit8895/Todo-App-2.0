import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/working.json';
import { Box } from '@mui/material';

const Running = () => {
  return (
    <Box component={'div'}>
      <Lottie animationData={animationData} />
    </Box>
  );
};

export default Running;
