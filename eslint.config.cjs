const js = require("@eslint/js");
const tsParser = require("@typescript-eslint/parser");
const astro = require("eslint-plugin-astro");
const globals = require("globals");

module.exports = [
  {
    ignores: [
      ".husky/**",
      ".vscode/**",
      ".astro/**",
      "node_modules/**",
      "public/**",
      "dist/**",
      ".yarn/**",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,cjs,mjs,ts,tsx,astro}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  ...astro.configs["flat/recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
  },
];
