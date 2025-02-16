import { defineConfig, loadEnv } from "vite";
import dotenv from "dotenv";

dotenv.config();
export default defineConfig({
  return: {
    build: {
      outDir: "dist",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: "index.html",
          signup: "signup.html",
          journal: "journal.html",
        },
      },
    },
  },
});
