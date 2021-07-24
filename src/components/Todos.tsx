import React from 'react';
import { List } from '@material-ui/core';
import { ITodoData } from '../types';
import Todo from './Todo';

interface ITodoProps {
  todos: ITodoData[],
  onToggle: (id: number, completed: boolean) => void,
  onDelete: (id: number) => void,
}

const Todos: React.FC<ITodoProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default Todos;
