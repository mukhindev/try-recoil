import React, { useState } from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  ButtonGroup,
  Collapse,
  Paper,
  Typography,
} from '@material-ui/core';
import {
  CheckBoxOutlineBlank as UncheckIcon,
  CheckBox as CheckIcon,
} from '@material-ui/icons';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ITodoData } from '../types';
import { useDebouncedEffect } from '../hooks';
import Todos from './Todos';
import { indexedTodoState, todoState } from '../state';

const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6659',
      main: '#d32f2f',
      dark: '#9a0007',
      contrastText: '#fff',
    },
  },
});

const useStyles = makeStyles((theme) => {
  return {
    app: {
      background: theme.palette.background.default,
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    paper: {
      width: '100%',
      maxWidth: theme.breakpoints.values.sm,
      margin: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
    },
    completedButtons: {
      alignSelf: 'center',
      margin: theme.spacing(2),
    },
    completedLabel: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      borderTop: `1px solid ${theme.palette.divider}`,
    },
  };
});

// TODO: Выводить кол-во задач, завершенных и незавершенных
const App: React.FC = () => {
  const classes = useStyles();
  // Получаем состояние атома и его сеттер.
  // useRecoilState аналогичен [useRecoilState, useSetRecoilState]
  const [todos, setTodos] = useRecoilState(todoState);
  // useRecoilValue, useRecoilState работают и с атомами и с селекторами
  const indexedTodos = useRecoilValue(indexedTodoState);
  const [uncompletedTodos, setUncompletedTodos] = useState<ITodoData[]>([]);
  const [completedTodos, setCompletedTodos] = useState<ITodoData[]>([]);
  const [isShowCompleted, SetIsShowCompleted] = useState(false);
  const [delay, setDelay] = useState(0);

  const distribute = () => {
    const newUncompletedTodos = todos.filter((todo) => !todo.completed);
    const newCompletedTodos = todos.filter((todo) => todo.completed);
    setUncompletedTodos(newUncompletedTodos);
    setCompletedTodos(newCompletedTodos);
  };

  // Перенос в список выполненных с задержкой
  useDebouncedEffect(distribute, delay, [todos]);

  const handleToggle = (id: number, completed: boolean) => {
    const index = todos.indexOf(indexedTodos[id]);
    const newTodos = JSON.parse(JSON.stringify(todos));
    newTodos[index].completed = completed;
    setTodos(newTodos);
    // Если выполняемая задача в списке невыполненных, установить задержку
    setDelay(uncompletedTodos.find((todo) => todo.id === newTodos[index].id) ? 2000 : 0);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={classes.app}>
        <Paper className={classes.paper}>
          <ButtonGroup
            className={classes.completedButtons}
            color="primary"
            aria-label="Вид"
          >
            <Button
              disabled={!completedTodos.length}
              onClick={() => SetIsShowCompleted(false)}
            >
              <UncheckIcon />
            </Button>
            <Button
              disabled={!completedTodos.length}
              onClick={() => SetIsShowCompleted(true)}
            >
              <CheckIcon />
            </Button>
          </ButtonGroup>
          {/* TODO: Выводить сообщение когда все задачи выполнены */}
          <Todos todos={uncompletedTodos} onToggle={handleToggle} />
          <Collapse
            in={isShowCompleted && !!completedTodos.length}
            timeout="auto"
            unmountOnExit
          >
            <Typography className={classes.completedLabel}>Выполненные</Typography>
            <Todos todos={completedTodos} onToggle={handleToggle} />
          </Collapse>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default App;
