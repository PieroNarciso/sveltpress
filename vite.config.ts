import { defineConfig } from 'vite'
import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte'

const { PORT = 3001 } = process.env;

const root = resolve(__dirname, './src/app/pages');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({ configFile: '../../../svelte.config.js' })],
  root: root,
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: '../../../dist/app',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        products: resolve(root, 'products', 'index.html'),
        clients: resolve(root, 'clients', 'index.html')
      }
    }
  },
})
