import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgrPlugin from 'vite-plugin-svgr';

import { devDependencies, peerDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({ typescript: true }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
    react(),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: Array.from(
        new Set([
          ...Object.keys(peerDependencies),
          ...Object.keys(devDependencies),
          'react/jsx-runtime',
        ])
      ),
    },
  },
  resolve: {
    alias: {
      '@formatjs/icu-messageformat-parser':
        '@formatjs/icu-messageformat-parser/no-parser',
    },
  },
});
