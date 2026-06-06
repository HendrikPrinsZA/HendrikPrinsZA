import { defineConfig, envField } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  trailingSlash: "always",
  integrations: [
    react(),
    sitemap({
      filter: page =>
        !page.includes("/search") &&
        !page.includes("/api/") &&
        !page.includes("/404"),
    }),
    svelte(),
    vue(),
  ],
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      PUBLIC_GOOGLE_TAG_MANAGER_ID: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      PUBLIC_UNSPLASH_API_ACCESS_KEY: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      PUBLIC_UNSPLASH_USERNAME: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkToc,
        [
          remarkCollapse,
          {
            test: "Table of contents",
          },
        ],
      ],
    }),
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
