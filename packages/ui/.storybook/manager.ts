import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: "@rootsrk's UI components",
    brandTarget: '_self',
    fontBase: "'Inter', 'sans-serif'",
    fontCode: "'JetBrains Mono', monospace",
  }),
  showPanel: true,
});
