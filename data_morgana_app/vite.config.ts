import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "data-morgana",
      filename: "remoteEntry.js",
      exposes: {
        "./DataMorganaApp": "./src/App.tsx",
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
});
