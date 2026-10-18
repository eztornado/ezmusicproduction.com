import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Separa las dependencias grandes para aprovechar la caché del navegador
        // y del proxy (los assets propios llevan hash; el vendor casi no cambia).
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('i18next')) return 'i18n';
          if (id.includes('@mantine')) return 'mantine';
          if (id.includes('@tabler')) return 'icons';
          if (id.includes('react') || id.includes('scheduler')) return 'react';
          return undefined;
        },
      },
    },
  },
});
