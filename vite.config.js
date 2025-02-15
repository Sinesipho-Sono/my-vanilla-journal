import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [
    copy({
      targets: [{ src: "signup.html", dest: "" }],
    }),
  ],
});
