import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'admin-app',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './src/App.tsx',
    },
    shared: ['react', 'react-dom'],
  })],
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
