/**
 * This is intended to be a basic starting point for linting in the Indie Stack.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    env: {
      commonjs: true,
      es6: true,
    },
    node: {},
  
    // Base config
    extends: ["eslint:recommended"],
  
    overrides: [
      // Typescript
      {
        files: ["**/*.{ts,tsx}"],
        plugins: ["@typescript-eslint", "import"],
        parser: "@typescript-eslint/parser",
        settings: {
          "import/internal-regex": "^~/",
          "import/resolver": {
            node: {
              extensions: [".ts", ".tsx"],
            },
            typescript: {
              alwaysTryTypes: true,
            },
          },
        },
        extends: [
          "plugin:@typescript-eslint/recommended",
          "plugin:@typescript-eslint/stylistic",
          "plugin:import/recommended",
          "plugin:import/typescript",
          "prettier",
        ],
        rules: {
          "import/order": [
            "error",
            {
              alphabetize: { caseInsensitive: true, order: "asc" },
              groups: ["builtin", "external", "internal", "parent", "sibling"],
              "newlines-between": "always",
            },
          ],
        },
      },
  
      // Markdown
      {
        files: ["**/*.md"],
        plugins: ["markdown"],
        extends: ["plugin:markdown/recommended", "prettier"],
      },
  
      // Jest/Vitest
      {
        files: ["**/*.test.{js,jsx,ts,tsx}"],
        plugins: ["jest", "jest-dom", "testing-library"],
        extends: [
          "plugin:jest/recommended",
          "plugin:jest-dom/recommended",
          "plugin:testing-library/react",
          "prettier",
        ],
        env: {
          "jest/globals": true,
        },
        settings: {
          jest: {
            // we're using vitest which has a very similar API to jest
            // (so the linting plugins work nicely), but it means we have to explicitly
            // set the jest version.
            version: 28,
          },
        },
      },
  
      // Cypress
      {
        files: ["cypress/**/*.ts"],
        plugins: ["cypress"],
        extends: ["plugin:cypress/recommended", "prettier"],
      },
  
      // Node
      {
        files: [".eslintrc.js"],
        env: {
          node: true,
        },
      },
    ],
  };