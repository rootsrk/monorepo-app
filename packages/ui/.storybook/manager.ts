import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Assembly UI',
    brandImage: '/AssemblyLogo.svg',
    brandTarget: '_self',
    fontBase: "'Inter', 'sans-serif'",
    fontCode: "'JetBrains Mono', monospace",
  }),
  showPanel: true,
});
