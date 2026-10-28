// @ts-check
import { defineConfig } from 'astro/config';

// On Vercel, SITE comes from the project's environment variables; the default works locally.
export default defineConfig({
  site: process.env.SITE || 'https://christophercortazo.vercel.app',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
