module.exports = {
  plugins: ['react', 'jsx-a11y', 'import'],
    rules: {
      'react/jsx-filename-extension': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'no-console': "off",
      'no-unused-vars': 'warn',
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
  };