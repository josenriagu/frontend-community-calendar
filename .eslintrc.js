module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  overrides: [
    {
      files: [
        "**/*.test.js",
      ]
    },
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'jsx-a11y/html-has-lang': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'arrow-parens': 0,
    'no-mixed-operators': 0,
  },
};
