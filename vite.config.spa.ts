// Config usada APENAS pelo workflow do GitHub (.github/workflows/lovable-deploy.yml)
// para gerar o site estático (SPA) que vai para a branch stable-website / hospedagem Apache.
// Não use esta config no Lovable: ela quebra a publicação em oficialnextgenn.lovable.app.
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
      },
    }),
    viteReact(),
  ],
})
