import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import neutralino from 'vite-plugin-neutralino'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    neutralino(),
  ],
});
