import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change base to '/' for root-level deployment on Render
  base: '/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Ensures Vite knows exactly where to start
    rollupOptions: {
      input: './index.html',
    },
  },
});
