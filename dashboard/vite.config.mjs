import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // This helps Vite find the index.html if it's acting up
    rollupOptions: {
      input: './index.html',
    },
  },
});
