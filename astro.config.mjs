import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://miwtoo.me/',
  integrations: [mdx(), sitemap(), react(), robotsTxt(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })]
});