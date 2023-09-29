import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/completed.json';
import { Box } from '@mui/material';

const Finished = () => {
  return (
    <Box component={'div'}>
      <Lottie animationData={animationData} />
    </Box>
  );
};

export default Finished;
