/* eslint-env node */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['plugin:assembly-web/app'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  ignorePatterns: ['deploy.mjs'],
  overrides: [
    {
      files: ['tests/**/*.ts', 'config/*'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.node.json',
      },
    },
  ],
};
