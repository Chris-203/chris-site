// Renders the images the site serves. Rerun after editing either source:
//   public/favicon.svg     -> public/apple-touch-icon.png (180x180)
//   scripts/og-card.html   -> src/assets/og.jpg (1200x630 link-preview card)
import sharp from 'sharp';
import { chromium } from 'playwright';

const at = (p) => new URL(`../${p}`, import.meta.url);

await sharp(at('public/favicon.svg').pathname, { density: 300 }).resize(180, 180).png().toFile(at('public/apple-touch-icon.png').pathname);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(at('scripts/og-card.html').href);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: at('src/assets/og.jpg').pathname, type: 'jpeg', quality: 90 });
await browser.close();
console.log('Wrote public/apple-touch-icon.png and src/assets/og.jpg');
