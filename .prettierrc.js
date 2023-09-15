/* eslint-env node */

/** @type {import("prettier").Options} */
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'auto',
  trailingComma: 'es5',
  plugins: [
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
};
