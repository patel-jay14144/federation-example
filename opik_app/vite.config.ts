import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "eval",
      filename: "remoteEntry.js",
      exposes: {
        "./EvalApp": "./src/App.tsx",
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
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
