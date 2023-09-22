import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/placeholder-rtk/',
  server: {
    port: 3000,
    open: false,
    strictPort: true,
    host: 'localhost',
  },
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    preserveSymlinks: true,
  },
})

