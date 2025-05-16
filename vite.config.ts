import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'example',
  plugins: [react()],
  server: {
    port: 6969,
    open: true,
  },
  resolve: {
    alias: {
      'react-atmospheres': '/src',
    },
  },
});
