import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'./src'),
      '@store': '/src/store',
      '@components': path.resolve(__dirname,'./src/components'),
      '@common-components': '/src/components/common',
      '@utils': '/src/utils',
      '@modules': '/src/modules',
    },
  },
})
