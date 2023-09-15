/* eslint-env node */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['plugin:assembly-web/library'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'import/no-default-export': 'off',
  },
};
