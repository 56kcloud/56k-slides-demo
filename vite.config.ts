import { defineConfig } from 'vite'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vueI18n({
      include: fileURLToPath(new URL('./locales/**', import.meta.url)),
      runtimeOnly: false,
    }),
  ],
})
