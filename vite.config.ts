import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'NathSagar English Medium School',
        short_name: 'NEMS',
        description: 'A comprehensive school management platform for NathSagar English Medium School.',
        theme_color: '#1E3A8A',
        icons: [
          {
            src: 'logo-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
