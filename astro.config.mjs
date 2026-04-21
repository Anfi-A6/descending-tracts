// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: "autoUpdate",
        manifest: {
          name: "Modelo de Neuroanatomía Mesa 6: Tractos de salida de puente y mesencéfalo",
          short_name: "Neuro Mesa 6",
          description:
            "Página web para representar de manera virtual el modelo de tractos de salida de puente y mesencéfalo",
          theme_color: "#0049af",
          background_color: "#0049af",
          display: "standalone",
          start_url: "/",
        },
        workbox: {
          globPatterns: ["**/*.(js,css,html,ico,png,svg,woff2)"],
        },
      }),
    ],
  },

  integrations: [svelte()],
});
