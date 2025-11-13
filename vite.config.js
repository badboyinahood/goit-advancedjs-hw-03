import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',

  base: '/goit-advancedjs-hw-03/',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },

  define: {
    global: 'window',
  },
});
