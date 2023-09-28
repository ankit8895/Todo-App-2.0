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

import { Delete, LibraryAddCheck } from '@mui/icons-material';

const TodoList = ({ list }) => {
  const dispatch = useDispatch();
  const handleDelete = (todo) => {
    dispatch(actions.deleteTodo(todo));
  };

  const handleUpdate = (todo) => {
    dispatch(actions.updateTodo(todo));
  };
  return (
    <Box component={'div'}>
      <Card sx={{ maxWidth: 576 }}>
        <CardActionArea>
          <CardMedia></CardMedia>
          <CardContent>
            <Typography gutterBottom variant='h5' component={'div'}>
              Todo List
            </Typography>
            {list.map((task) => (
              <Box
                component={'div'}
                key={task.id}
                className='d-flex justify-content-between align-items-center w-80 gap-3 p-2'
              >
                <Typography
                  sx={{
                    maxWidth: 400,
                  }}
                >
                  {task.title}
                </Typography>
                <Box component={'span'} className='ms-2'>
                  <Tooltip title='Mark Complete'>
                    <IconButton onClick={() => handleUpdate(task)}>
                      <LibraryAddCheck color='success' />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Delete'>
                    <IconButton onClick={() => handleDelete(task)}>
                      <Delete sx={{ color: 'red' }} />
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
