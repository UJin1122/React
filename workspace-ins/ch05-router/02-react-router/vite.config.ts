import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", {}]
        ]
      }
    })
  ],
=======
  plugins: [react()],
>>>>>>> upstream/main
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
<<<<<<< HEAD
      { find: "@hooks", replacement: "/src/hooks" },
=======
>>>>>>> upstream/main
    ],
  },
})
