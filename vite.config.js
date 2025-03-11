import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Resolves @ to the src directory
    },
  },
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, "src/views/Home.vue"),
        danke: path.resolve(__dirname, "src/views/Danke.vue"),
        impressum: path.resolve(__dirname, "src/views/Impressum.vue"),
        datenschutz: path.resolve(__dirname, "src/views/Datenschutz.vue"),
      },
    },
  },
});
