import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import fullReload from 'vite-plugin-full-reload';

export default defineConfig({
  base: '/goit-advancedjs-hw-03/',

  root: 'src',
  publicDir: 'src/public',

  define: {
    global: 'window',
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: false,

    rollupOptions: {
      input: glob.sync('./src/index.html'), 

      manualChunks(id) {
        if (id.includes('node_modules')) return 'vendor';
      },

      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },

  plugins: [
    injectHTML(),
    fullReload(['./src/**/*.html']),
  ],
});
