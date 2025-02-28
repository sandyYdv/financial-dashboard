import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({
      algorithm: "brotliCompress", // Use "gzip" or "brotliCompress"
      ext: ".br", // File extension for Brotli
      threshold: 1024, // Only compress files larger than 1KB
    }),
  ],
});
