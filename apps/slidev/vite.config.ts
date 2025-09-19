import { fileURLToPath, URL } from "node:url";
import vueI18n from "@intlify/unplugin-vue-i18n/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vueI18n({
      include: fileURLToPath(new URL("./locales/**", import.meta.url)),
      runtimeOnly: false,
    }),
  ],
});
