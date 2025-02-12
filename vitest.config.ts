import { defineVitestConfig } from "@nuxt/test-utils/config";

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
