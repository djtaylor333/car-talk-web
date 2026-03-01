import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/car-talk-web/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'CarTalk',
        short_name: 'CarTalk',
        description: 'Anonymous inter-vehicle messaging',
        start_url: '/car-talk-web/',
        display: 'standalone',
        background_color: '#FAFCFF',
        theme_color: '#1565C0',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/vpic\.nhtsa\.dot\.gov\//,
            handler: 'CacheFirst',
            options: {
              cacheName: 'nhtsa-cache',
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 7 }
            }
          }
        ]
      }
    })
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: ['src/test/**', 'src/main.tsx', 'src/vite-env.d.ts']
    }
  }
});
