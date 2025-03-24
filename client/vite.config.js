import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Explicitly map react-map-gl to its entry point
      "react-map-gl": "react-map-gl/dist/esm/index.js",
    },
  },
  optimizeDeps: {
    include: ["react-map-gl"], // Ensure react-map-gl is pre-bundled
  },
  server: {
    hmr: {
      overlay: false, // Disable the error overlay if needed
    },
  },
});
