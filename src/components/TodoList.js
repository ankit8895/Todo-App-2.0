import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const TodoList = ({ list }) => {
  return (
    <Box component={'div'}>
      <Card>
        <CardActionArea>
          <CardMedia></CardMedia>
          <CardContent>
            <Typography gutterBottom variant='h5' component={'div'}>
              Todo List
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default TodoList;
