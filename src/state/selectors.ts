import { selector } from 'recoil';
import { todoState } from './atoms';
import { ITodoData } from '../types';

/*
  Селекторы — производное от атомов состояние
*/

enum SelectorKeys {
  IndexedTodoState = 'indexedTodoState',
}

// Индексация массива todos в объект для удобного выбора по id
// TODO: Попробовать мемоизировать индексированный объект
export const indexedTodoState = selector({
  // Уникальный ключ селектора
  key: SelectorKeys.IndexedTodoState,
  get: ({ get }) => {
    // Получаем текущее состояние из атома
    const todos = get(todoState);
    // Возвращаем производное
    return todos.reduce((acc, todo) => {
      acc[todo.id] = todo;
      return acc;
    }, {} as Record<string, ITodoData>);
  },
});
