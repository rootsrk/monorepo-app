import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteImagemin from 'vite-plugin-imagemin';
import svgrPlugin from 'vite-plugin-svgr';
import { libraryGroups } from './config/libraryGroups';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const appMode = process.env.APP_ENVIRONMENT ?? mode;

  return {
    server: { port: 3000, strictPort: true },

    mode: appMode,

    envDir: './config',

    build: {
      sourcemap: command === 'build',

      chunkSizeWarningLimit: 250,

      rollupOptions: { output: { manualChunks: { ...libraryGroups } } },
    },

    plugins: [
      checker({ typescript: true }),

      createHtmlPlugin({
        minify: { removeComments: true },
      }),

      svgrPlugin({ svgrOptions: { icon: true } }),

      react(),

      { ...visualizer(), apply: 'build' },

      { ...viteImagemin(), apply: 'build' },
    ],

    // https://formatjs.io/docs/guides/advanced-usage#react-intl-without-parser-40-smaller
    resolve: {
      alias: {
        '@formatjs/icu-messageformat-parser':
          '@formatjs/icu-messageformat-parser/no-parser',
      },
    },
  };
});
