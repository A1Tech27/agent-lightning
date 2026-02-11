import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use relative paths so the site works on any URL/subfolder
  base: './', 
  build: {
    // Change this back to 'dist' for a cleaner deployment
    outDir: 'dist',
    // Ensures small assets are embedded to avoid 404s
    assetsInlineLimit: 4096, 
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  }
});
