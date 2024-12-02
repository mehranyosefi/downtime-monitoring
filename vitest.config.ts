import { defineVitestConfig } from "@nuxt/test-utils/config";
// import { defineConfig } from "vitest/config";
// import vue from "@vitejs/plugin-vue";
// import AutoImport from "unplugin-auto-import/vite";

export default defineVitestConfig({
  // plugins: [vue(), AutoImport({ imports: ["vue"] })],
  test: {
    // environment: "happy-dom",
    environment: "nuxt",
    globals: true,
  },
  // alias: {
  //   "~": "../../",
  // },
});
