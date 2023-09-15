/* eslint-env node */
const tailwindPreset = require('@rootsrk/tailwind-preset');

// Safelist all token used in stories so that tailwind JIT compiler doesn't purge them
const safelist = Object.keys(tailwindPreset.theme.colors).reduce(
  (acc, color) => {
    acc.push(`bg-${color}`);
    acc.push(`text-${color}`);
    acc.push(`border-${color}`);

    Object.keys(tailwindPreset.theme.colors[color]).forEach((shade) => {
      acc.push(`bg-${color}-${shade}`);
      acc.push(`text-${color}-${shade}`);
      acc.push(`border-${color}-${shade}`);
    });

    return acc;
  },
  []
);

// If you need to override the default tailwind config, you can do it at the packages/tailwind-preset/lib/index.ts file
// If any overrides are written here, it will be available only within the packages/ui and nowhere else.
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindPreset],
  darkMode: 'class',
  safelist,
};
