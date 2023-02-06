import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { Plugin as importToCDN, autoComplete } from "vite-plugin-cdn-import";

export default defineConfig({
  plugins: [
    vue(),
    importToCDN({
      module: [
        {
          name: "vue",
          var: "Vue",
          path: "https://unpkg.com/vue@next",
        },
        {
          name: "naive-ui",
          var: "NaiveUi",
          path: "https://unpkg.com/naive-ui",
        },
      ],
    }),
  ],

  base: "./", //设置为相对路径

  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
