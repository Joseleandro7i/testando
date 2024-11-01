const react = require('eslint-plugin-react');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const prettier = require('eslint-plugin-prettier');

module.exports = [
  {
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: "readonly",
        document: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true // Enables JSX parsing
        },
      },
    },
    plugins: {
      react,              // React plugin
      'jsx-a11y': jsxA11y,  // Accessibility plugin
      prettier,           // Prettier plugin
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,               // React recommended rules
      ...jsxA11y.configs.recommended.rules,             // Accessibility recommended rules

      'react/react-in-jsx-scope': 'off', // Next.js specific rule
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'prettier/prettier': 'error',      // Prettier formatting errors
    },
  },
];
