import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      // toda requisição que começar com /api será redirecionada
      '/api': {
        target: 'https://anexoinfor667180.jitterbit.net',
        changeOrigin: true,
        secure: false, // caso o certificado HTTPS seja autoassinado
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
