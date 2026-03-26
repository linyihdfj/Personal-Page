import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages configuration
  site: "https://linyihdfj.github.io",
  base: process.env.NODE_ENV === "production" ? "/Personal-Page/" : "/",
  output: "static",
});
