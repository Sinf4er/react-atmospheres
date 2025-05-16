import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'example',
  plugins: [react()],
  server: {
    port: 6969,
    open: true,
  },
  build: {
    outDir: path.resolve(__dirname, 'example-dist'),
    emptyOutDir: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      'react-atmospheres': '/src',
    },
  },
});
