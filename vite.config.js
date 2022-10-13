import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import manifest from './public/manifest.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest,
      includeAssets: ['logoDragon.svg', 'logoDragon.ico', 'logoDragon.png'],
      // switch to "true" to enable sw on development
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ['**/*.{js,ts,css,html}', '**/*.{svg,png,jpg,gif}'],
        cleanupOutdatedCaches: false,
        sourcemap: true ,
      },

    })
  ]   
})