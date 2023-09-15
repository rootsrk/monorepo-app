/* eslint-env node */
const tailwindPreset = require('@rootsrk/tailwind-preset');

// Safelist all token used in stories so that tailwind JIT compiler doesn't purge them
const safelist = Object.keys(tailwindPreset.theme.colors)
  .reduce((acc, color) => {
    acc.push(`bg-${color}`);
    acc.push(`text-${color}`);
    acc.push(`border-${color}`);

    Object.keys(tailwindPreset.theme.colors[color]).forEach((shade) => {
      acc.push(`bg-${color}-${shade}`);
      acc.push(`text-${color}-${shade}`);
      acc.push(`border-${color}-${shade}`);
    });

    return acc;
  }, [])
  .concat(['not-italic', 'font-bold']);

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindPreset],
  darkMode: 'class',
  content: [
    './index.html',
    './app/**/*.{ts,tsx}',
    './node_modules/@rootsrk/ui/lib/**/*.{ts,tsx}',
  ],
  safelist,
  theme: {
    extend: {
      animation: {
        blink: 'blink 0.3s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
};
