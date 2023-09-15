import aspectRatioPlugin from '@tailwindcss/aspect-ratio';
import formsPlugin from '@tailwindcss/forms';
import lineClampPlugin from '@tailwindcss/line-clamp';
import typographyPlugin from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';
import animationDelayPlugin from 'tailwindcss-animation-delay';
import radixPlugin from 'tailwindcss-radix';

import { designSystemColors } from './colors';

/**
 * If you need one off variants that tailwind doesn't provide out of the box use,
 * https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values
 * @type {import('tailwindcss').Config}
 */
export default {
  darkMode: 'class',
  content: ['./index.html', './app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],

  theme: {
    // Intentionally override tailwind colors so that we're enforced
    // to use the design token colors
    colors: designSystemColors,
    extend: {
      boxShadow: {
        card: '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
        cardHover:
          '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 3px 4px 0px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gray-gradient': `linear-gradient(45deg, #D9D9D9, #F5F5F5)`,
        'blue-gradient': `linear-gradient(45deg, #BAE7FF, #ADC6FF)`,
        'red-gradient': `linear-gradient(228deg, #FF8585, #FF9C6E)`,
        'yellow-gradient': `linear-gradient(228deg, #FFE58F, #FFC069)`,
        'green-gradient': `linear-gradient(228deg, #B7EB8F, #B5F5EC)`,
        'pink-gradient': `linear-gradient(228deg, #FFCCC7, #FFADD2)`,
        'purple-gradient': `linear-gradient(224deg, #D3ADF7, #D6E4FF)`,
        'cyan-gradient': `linear-gradient(224deg, #87E8DE, #BAE7FF)`,
        'orange-gradient': `linear-gradient(224deg, #FFC069, #FFBB96)`,
        'white-gradient-1': `linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)`,
        'white-gradient-2': `linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)`,
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + var(--viewport-padding)))',
          },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      },
    },
    fontFamily: {
      sans: ['Roboto', defaultTheme.fontFamily.sans],
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    fontSize: {
      xs: ['0.75rem', '1.25rem'],
      sm: ['0.875rem', '1.375rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.25rem', '1.75rem'],
      xl: ['1.5rem', '2rem'],
      '2xl': ['1.875rem', '2.375rem'],
      '3xl': ['2.375rem', '2.875rem'],
      '4xl': ['2.875rem', '3.375rem'],
      '5xl': ['3.5rem', '4rem'],
    },
  },

  plugins: [
    aspectRatioPlugin,
    formsPlugin,
    lineClampPlugin,
    typographyPlugin,
    animationDelayPlugin,
    radixPlugin(),
  ],
};
