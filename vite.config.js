import { defineConfig } from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), react(), svelte()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  base: "./",
  build: {
    minify: 'terser',
    terserOptions: {
      format:{
        comments: false
      },
      compress: {
        toplevel: true,
        module: true,
        inline: false,
        passes: 10,
        dead_code: true,
        keep_classnames: true,
        global_defs: {
          DEBUG: false
        }
      }
    },
    rollupOptions: {
      // external: ['vue'],
      output:
      {
        format: 'iife',
        // format: 'cjs',
        // format: 'es',
        strict: false,
        entryFileNames: "[name].js",
        dir: 'dist/'
      }
    }
  }
})
