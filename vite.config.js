import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // ✅ This line ensures favicon and assets load correctly after build
  plugins: [react(), tailwindcss()],
})
