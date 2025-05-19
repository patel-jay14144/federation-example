import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      remotes: {
        eval: "http://localhost:5174/assets/remoteEntry.js",
        dataMorgana: "http://localhost:5175/assets/remoteEntry.js",
      },
      shared: {
        react: {
          requiredVersion: "^19.1.0",
        },
        "react-dom": {
          requiredVersion: "^19.1.0",
        },
        "react-router-dom": {
          requiredVersion: "^7.6.0",
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
