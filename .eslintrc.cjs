module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: { version: 'detect' },
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  ignorePatterns: ['dist/', 'node_modules/', '.eslintrc.js'],
};
