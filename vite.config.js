import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
             target: 'https://blogapi-vbdw.onrender.com',
             changeOrigin: true,
             secure: false,      
             ws: true,
         }
    }
    },
  };
});