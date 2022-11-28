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
        residencias: resolve(__dirname, 'pages/residencias/index.html'),
        instalaciones: resolve(__dirname, 'pages/instalaciones/index.html'),
        contacto: resolve(__dirname, 'pages/contacto/index.html'),
        about: resolve(__dirname, 'pages/about/index.html'),
        instalativa: resolve(__dirname, 'pages/residencia-instalativa/index.html'),
        archivo: resolve(__dirname, 'pages/archivo/index.html'),
        djsets: resolve(__dirname, 'pages/djsets/index.html'),
        performance: resolve(__dirname, 'pages/performance/index.html'),
        digital: resolve(__dirname, 'pages/residencia-digital/index.html'),
        progress: resolve(__dirname, 'pages/in-progress/index.html'),
        instalacionesYear: resolve(__dirname, 'pages/instalaciones-year/index.html'),
        el2021: resolve(__dirname, "pages/2021/index.html"),
        el2022: resolve(__dirname, "pages/2022/index.html"),
        el2023: resolve(__dirname, "pages/2023/index.html"),
        sonora: resolve(__dirname, 'pages/residencia-sonora/index.html')
        
        
        
      }
    }
  }
})