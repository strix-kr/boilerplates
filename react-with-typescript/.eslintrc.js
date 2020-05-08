module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',

    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',

    "airbnb-base"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    'operator-linebreak': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
