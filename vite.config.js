/** @format */

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src", // This tells Vite that '@' maps to the 'src' folder
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
});
