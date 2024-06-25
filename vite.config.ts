import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import { viteSingleFile } from 'vite-plugin-singlefile'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    checker({ typescript: true }),
    Components({
      dirs: ['src/components', 'src/pages'],
      resolvers: [BootstrapVueNextResolver()]
    }),
    viteSingleFile()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
