import { atom } from 'recoil';
import { ITodoData } from '../types';

/*
  Атомы — источник истины приложения (главное состояние)
*/

enum AtomKeys {
  TodoState = 'todoState',
}

export const todoState = atom({
  // Уникальный ключ атома
  key: AtomKeys.TodoState,
  // Состояние по-умолчанию
  default: [
    { id: 1, title: 'Купить молока', completed: false },
    { id: 2, title: 'Починить кран', completed: false },
    { id: 3, title: 'Построить дом', completed: false },
    { id: 4, title: 'Посадить дерево', completed: false },
    { id: 5, title: 'Выспаться', completed: false },
  ] as ITodoData[],
});
