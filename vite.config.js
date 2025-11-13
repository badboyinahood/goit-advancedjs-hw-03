import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/goit-advancedjs-hw-03/',
  define: {
    global: 'window',
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
