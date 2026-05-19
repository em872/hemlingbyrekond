import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tjanster: resolve(__dirname, 'tjanster.html'),
        prislista: resolve(__dirname, 'prislista.html'),
        om: resolve(__dirname, 'om.html'),
        kontakt: resolve(__dirname, 'kontakt.html')
      }
    }
  }
});
