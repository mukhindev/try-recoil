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
import { useRecoilValue } from 'recoil';
import { makeStyles } from '@material-ui/core/styles';
import { ITodoData } from '../types';
import { indexedTodoState } from '../state';

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
  onDelete: (id: number) => void,
}

const Todo: React.FC<ITodoProps> = ({ todo, onToggle, onDelete }) => {
  const classes = useStyles();
  const { id, title } = todo;
  // Получаем селектором задачи в индексированном виде
  const indexedTodos = useRecoilValue(indexedTodoState);
  // Получаем свойство completed из соответствующей задачи
  const completed = indexedTodos[id]?.completed || false;
  const labelId = `checkbox-list-label-${id}`;

  const handleToggle = () => {
    onToggle(id, !completed);
  };

  const handleDelete = () => {
    onDelete(id);
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
        <IconButton
          edge="end"
          aria-label="Удалить задачу"
          size="small"
          onClick={handleDelete}
        >
          <DeleteIcon fontSize="small" color="error" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
