import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        //additionalData: `@import "./src/styles/styles.scss";`,
        additionalData: `@import "./src/sass/styles.scss";`,
      },
    }
  },
  server: {
  host: true,
  cors: true,
  }
})
