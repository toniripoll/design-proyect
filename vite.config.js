import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta de salida (por defecto ya es 'dist')
    assetsDir: 'assets', // Carpeta donde se guardan los assets estáticos
    sourcemap: true, // Útil para depuración en producción
  },
});
