const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const globals = require("globals");
const tseslint = require("typescript-eslint");
const eslint = require("eslint");

module.exports = [
  reactHooks.configs.recommended,
  react.configs.recommended,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      reactHooks,
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // ... any rules you want
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "reactHooks/rules-of-hooks": "error",
      "reactHooks/exhaustive-deps": "warn",
      "no-unused-vars": "warn",
    },
    // ... others are omitted for brevity
  },
];
