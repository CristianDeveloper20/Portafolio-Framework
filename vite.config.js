import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/portafolio-framework/',  // Especifica el nombre de tu repositorio como ruta base
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', '@fortawesome/fontawesome-svg-core']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
