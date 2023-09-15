import { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../lib/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-styling',
    '@storybook/addon-console',
    'storybook-react-intl',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
    },
  },
  core: {
    disableTelemetry: true,
  },
  staticDirs: ['./static'],
  docs: {
    autodocs: true,
  },
  typescript: {
    check: true,
  },
};
export default config;
