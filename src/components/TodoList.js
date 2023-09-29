import React from 'react';
import { useDispatch } from 'react-redux';
import Running from '../animationComponents/Running';
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

import { Delete, CheckBox } from '@mui/icons-material';

const TodoList = ({ list }) => {
  const dispatch = useDispatch();
  const handleDelete = (todo) => {
    dispatch(actions.deleteTodo(todo));
  };

  const handleUpdate = (todo) => {
    dispatch(actions.updateTodo(todo));
  };
  return (
    <Box component={'div'} sx={{ width: { xs: '90vw', lg: '45vw' } }}>
      <Card sx={{ width: '100%', backgroundColor: '#2196f3' }}>
        <CardActionArea>
          <CardMedia
            sx={{
              height: 300,
            }}
          >
            <Running />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component={'div'}
              className='fw-bolder text-white'
            >
              Task List
            </Typography>
            {list.map((task) => (
              <Box
                component={'div'}
                key={task.id}
                className='d-flex justify-content-between align-items-center w-80 gap-3 p-2 bg-white rounded mb-2'
              >
                <Typography
                  sx={{
                    width: '60%',
                  }}
                  component={'p'}
                  className='fw-semibold'
                >
                  {task.title}
                </Typography>
                <Box component={'span'} className='ms-2'>
                  <Tooltip title='Mark Complete'>
                    <IconButton onClick={() => handleUpdate(task)}>
                      <CheckBox />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Delete'>
                    <IconButton onClick={() => handleDelete(task)}>
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            ))}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default TodoList;
