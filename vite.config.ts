import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    assetsDir: './',
    manifest: true,
    rollupOptions: {
      input: './src/main.ts',
      output: {
        dir: undefined,
        file: './dist/main.js',
      }
    },
  },
})