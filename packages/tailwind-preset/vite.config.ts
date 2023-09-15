import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [checker({ typescript: true }), dts()],

  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
  },
});
