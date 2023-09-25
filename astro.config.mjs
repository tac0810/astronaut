import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import meta from "./integrations/meta";
import alpinejs from "./integrations/alpine";

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  build: {
    assets: "assets",
  },
  integrations: [meta(), tailwind(), alpinejs()],
});
