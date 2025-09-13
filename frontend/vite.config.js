import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// Vite config should NOT import Tailwind
export default defineConfig({
  plugins: [ tailwindcss(),react()],
})