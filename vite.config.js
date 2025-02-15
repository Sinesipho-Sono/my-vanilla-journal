import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        signup: "signup.html",
        journal: "journal.html",
      },
    },
  },
});
