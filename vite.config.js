import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // Asegúrate de que el prefijo esté bien configurado para GitHub Pages
  publicPath: '/portafolio-framework/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Separa dependencias en un archivo de vendor para mejorar la carga
        manualChunks: {
          vendor: ['vue', 'vue-router', '@fortawesome/fontawesome-svg-core'],
        },
      },
    },
    // Ajuste opcional para producción
    chunkSizeWarningLimit: 1000, // Reducido para evitar advertencias innecesarias
  },
});
