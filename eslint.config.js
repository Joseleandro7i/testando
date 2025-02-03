const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const prettier = require('eslint-plugin-prettier');
const cleanCode = require('eslint-plugin-clean-code');
const unicorn = require('eslint-plugin-unicorn');
const jsdoc = require('eslint-plugin-jsdoc');
const noMagicNumbers = require('eslint-plugin-no-magics')

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
      react,
      'react-hooks': reactHooks,          // React hooks plugin
      'jsx-a11y': jsxA11y,                // Accessibility plugin
      prettier,                           // Prettier plugin
      'clean-code': cleanCode,            // Clean code plugin
      unicorn,                            // Unicorn plugin
      jsdoc,
      noMagicNumbers                   // JsDoc plugin
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,               // React recommended rules
      ...jsxA11y.configs.recommended.rules,

      'react/react-in-jsx-scope': 'off', // Next.js specific rule
      "react/jsx-boolean-value": "error",  // ReactJs
      "react/jsx-no-bind": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      'jsx-a11y/alt-text': 'error',  // Accessibility with jsx-a11y
      'jsx-a11y/anchor-has-content': 'error',
      'prettier/prettier': 'error',      // Prettier formatting errors  
      "max-lines-per-function": ["error", { "max": 30 }],  // ESLint core rule
      "no-nested-ternary": "warn",
      "unicorn/filename-case": ["error", { "case": "kebabCase" }], // unicorn
      "unicorn/prevent-abbreviations": "warn",
      "unicorn/no-null": "error",
      "unicorn/consistent-function-scoping": "error",
      "jsdoc/check-alignment": "warn", // JsDoc
      "jsdoc/check-param-names": "error",
      "jsdoc/require-param": "error",
      "jsdoc/require-returns": "error",
      "complexity": ["warn", { "max": 5 }], // Limit complexity of functions
      "max-statements": ["warn", { "max": 10 }], // Limit number of statements in a function
      "max-nested-callbacks": ["warn", { "max": 3 }], // Limit nested callbacks
      "curly": ["error", "all"], // Require curly braces for all control statements,
      "spaced-comment": ["error", "always"],
      "no-empty": ["error", { "allowEmptyCatch": false }],
      "no-undef": "error",
      "no-global-assign": "error",
      "prefer-arrow-callback": "warn",
      "prefer-const": "warn"
    },
  },
];
