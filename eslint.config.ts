module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // Customize or override rules here
    'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React in scope
    '@typescript-eslint/no-unused-vars': ['warn'], // Warns for unused variables
    'jsx-a11y/anchor-is-valid': 'off', // Example: Turn off accessibility rules for links
  },
};
