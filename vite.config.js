import { defineConfig } from "vite";
import { resolve } from 'path'


export default defineConfig({
  root: "./",
  base: "/",
  publicDir: "public",
  server: {
    host: true
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        meta: resolve(__dirname, 'pages/meta/index.html'),
        physical: resolve(__dirname, 'pages/physical/index.html')
        
      }
    }
  },
  plugins: []
});

// vite.config.js
/*import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html')
      }
    }
  }
})*/