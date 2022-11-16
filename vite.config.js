/*import { defineConfig } from "vite";
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
        physical: resolve(__dirname, 'pages/physical/index.html'),
        agencia: resolve(__dirname, 'pages/agencia/index.html'),
        espacios: resolve(__dirname, 'pages/espacios/index.html'),
        contacto: resolve(__dirname, 'pages/contacto/index.html'),
        artistas: resolve(__dirname, 'pages/artistas/index.html'),
        prensa: resolve(__dirname, 'pages/prensa/index.html'),
        aplica: resolve(__dirname, 'pages/aplica/index.html')
        
        
      }
    }
  },
  plugins: []
});*/

// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        meta: resolve(__dirname, 'pages/meta/index.html'),
        physical: resolve(__dirname, 'pages/physical/index.html'),
        agencia: resolve(__dirname, 'pages/agencia/index.html'),
        espacios: resolve(__dirname, 'pages/espacios/index.html'),
        contacto: resolve(__dirname, 'pages/contacto/index.html'),
        artistas: resolve(__dirname, 'pages/artistas/index.html'),
        prensa: resolve(__dirname, 'pages/prensa/index.html'),
        aplica: resolve(__dirname, 'pages/aplica/index.html'),
        
        
      }
    }
  }
})