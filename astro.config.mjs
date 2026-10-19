// @ts-check
import { defineConfig } from 'astro/config';

// SITE and BASE_PATH come from the deploy workflow; the defaults work locally.
export default defineConfig({
  site: process.env.SITE || 'https://chris-203.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  // GitHub Pages hides folders that start with "_", so use "assets" instead of Astro's "_astro".
  build: { inlineStylesheets: 'always', assets: 'assets' },
  compressHTML: true,
});
