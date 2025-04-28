import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      'mapbox-gl': 'mapbox-gl/dist/mapbox-gl.js'
    }
  },
  server: {
    host: true, // permite cualquier IP
    port: 5173,
    allowedHosts: ['zayca.spazyo', 'spazyo'] // aquí añades tus dominios personalizados
  }
})
