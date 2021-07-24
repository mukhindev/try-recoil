import React from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { ITodoData } from '../types';

const useStyles = makeStyles((theme) => {
  return {
    todo: {
      '&:hover': {
        backgroundColor: theme.palette.grey,
      },
    },
  };
});

interface ITodoProps {
  todo: ITodoData,
  onToggle: (id: number, completed: boolean) => void,
}

const Todo: React.FC<ITodoProps> = ({ todo, onToggle }) => {
  const classes = useStyles();
  const { id, title, completed } = todo;
  const labelId = `checkbox-list-label-${id}`;

  const handleToggle = () => {
    onToggle(id, !completed);
  };

  return (
    <ListItem
      className={classes.todo}
      key={id}
      role={undefined}
      dense
      button
      onClick={handleToggle}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          color="primary"
          checked={completed}
          tabIndex={-1}
          inputProps={{ 'aria-labelledby': labelId }}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="Удалить задачу">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
