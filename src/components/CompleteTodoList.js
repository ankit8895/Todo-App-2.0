import React from 'react';
import { useDispatch } from 'react-redux';

import { actions } from '../redux/reducers/todoReducer';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';

import { DeleteForever } from '@mui/icons-material';

const CompleteTodoList = ({ list }) => {
  const dispatch = useDispatch();
  const handleDeleteForever = (todo) => {
    dispatch(actions.removeTodoForever(todo));
  };
  return (
    <Box component={'div'} sx={{ width: { xs: '90vw', lg: '45vw' } }}>
      <Card sx={{ width: '100%', backgroundColor: '#2196f3' }}>
        <CardActionArea>
          <CardMedia></CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component={'div'}
              className='fw-bolder text-white'
            >
              Completed Task
            </Typography>
            {list.map((task) => (
              <Box
                component={'div'}
                key={task.id}
                className='d-flex justify-content-between align-items-center w-80 gap-3 p-2'
              >
                <Typography
                  sx={{
                    width: '60%',
                  }}
                  component={'p'}
                  className='text-decoration-line-through text-body-secondary'
                >
                  {task.title}
                </Typography>

                <Tooltip title='Delete'>
                  <IconButton onClick={() => handleDeleteForever(task)}>
                    <DeleteForever />
                  </IconButton>
                </Tooltip>
              </Box>
            ))}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default CompleteTodoList;
