# try-recoil

Простой проект чисто для изучения следующих заинтересовавших меня библиотек:

* [Recoil](https://www.npmjs.com/package/recoil) — библиотека управления состоянием React
* [Material UI для React](https://material-ui.com/)
  — UI-библиотека компонентов и утилит для построения интерфейсов,
  использующая дизайн систему Google [Material Design](https://material.io/)
* [Mirage](https://miragejs.com/) — имитация API.

## Заметки

### Правила Airbnb для приложения созданным CRA (TypeScript)

`CRA` уже включает в себя `ESLint`

```bash
npm -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript eslint-plugin-jest
```

```bash
npx install-peerdeps --dev eslint-config-airbnb
```

Пример конфигурации `.eslintrc.js`

```js
module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
  },
};
```
