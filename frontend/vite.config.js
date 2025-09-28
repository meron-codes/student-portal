import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  // 👇 this makes refresh on /about, /login work
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
