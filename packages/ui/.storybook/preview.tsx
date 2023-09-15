import 'tailwindcss/tailwind.css';
import { withThemeByClassName } from '@storybook/addon-styling';
import { reactIntl } from './reactIntl';
import { withConsole } from '@storybook/addon-console';

const customViewports = {
  iPhoneSE: {
    name: 'iPhone SE',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iPhoneXR: {
    name: 'iPhone XR',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  iPadAir: {
    name: 'iPad Air',
    styles: {
      width: '820px',
      height: '1180px',
    },
  },
  surfacePro7: {
    name: 'Surface Pro 7',
    styles: {
      width: '912px',
      height: '1368px',
    },
  },
  fullHD: {
    name: 'Full HD',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  twoK: {
    name: '2K',
    styles: {
      width: '2048px',
      height: '1080px',
    },
  },
  fourK: {
    name: '4K',
    styles: {
      width: '4096px',
      height: '2160px',
    },
  },
};

export const parameters = {
  console: withConsole(),

  actions: { argTypesRegex: '^on[A-Z].*' },

  backgrounds: { disable: true },

  controls: { expanded: true },

  layout: 'centered',

  options: {
    storySort: {
      order: ['Tokens', 'Layout', 'Inputs', 'Feedback', 'Navigation', 'Utils'],
    },
  },

  viewport: { viewports: customViewports },

  reactIntl,
};

export const globals = {
  locale: reactIntl.defaultLocale,
  locales: {
    en: 'English',
    'en-XA': 'En-XA',
  },
  messages: reactIntl.messages,
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];
