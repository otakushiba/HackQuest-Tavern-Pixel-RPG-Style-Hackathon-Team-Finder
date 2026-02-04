
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Shims process.env for browser compatibility
    'process.env': {}
  },
  build: {
    target: 'esnext'
  }
});