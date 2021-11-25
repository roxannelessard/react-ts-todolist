import React from 'react';
import classes from './TodoItem.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

const TodoItem:React.FC<{ text: string; onRemoveTodo: (event: React.MouseEvent) => void}> = (props) => {
  return (
    <>
      <li className={classes.item}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
        {props.text}
        <IconButton onClick={props.onRemoveTodo} color="warning">
          <DeleteOutlineIcon/>
        </IconButton>
        </Stack>
      </li>
    </>
  );
};

export default TodoItem;
