import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import license from 'rollup-plugin-license'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // On every build, collect the license notices of all libraries that end up in the site into dist/licenses.txt.
    license({
      thirdParty: {
        output: { file: 'dist/licenses.txt' },
      },
    }),
  ],
  base: './',
})
