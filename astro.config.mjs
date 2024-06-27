import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    server: {
        port: 3000,
    },
    integrations: [tailwind(), svelte(), sitemap()],
    site: process.env.SITE_URL || "http://localhost:3000",
});
