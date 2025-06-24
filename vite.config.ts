import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import VueRouter from "unplugin-vue-router/vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue(),
    VueRouter(),
    AutoImport({
      imports: [VueRouterAutoImports, "vue", "@vueuse/core"],
    }),
    UnoCSS(),
    Components({
      dts: true,
    }),
  ],
});
