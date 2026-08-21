import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: set `base` to "/<your-repo-name>/" for GitHub Pages
// (unless the repo is named "<username>.github.io", in which case use "/")
export default defineConfig({
  plugins: [react()],
  base: "/japan-portfolio/",
});
