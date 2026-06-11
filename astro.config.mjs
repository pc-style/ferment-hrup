// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://hrup.ferment.com.pl",
  vite: {
    plugins: [tailwindcss()],
  },
});
