// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const configPrettier = fs.readFileSync('./.prettierrc');

module.exports = {
  root: true,
  ignorePatterns: ['dist/*'],
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error', JSON.parse(configPrettier)]
  }
};
