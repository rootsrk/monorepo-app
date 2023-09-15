/* eslint-env node */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'plugin:rootsrk/reactUILibrary',
    'plugin:storybook/csf-strict',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  ignorePatterns: ['storybook-static'],
  overrides: [
    {
      files: ['lib/**/*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
        '@calm/react-intl/missing-formatted-message': 'off',
      },
    },
  ],
};
