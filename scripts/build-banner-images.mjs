// Generates the optimized banner assets used by src/pages/home.astro.
// The source PNGs are ~33MB each and are never shipped as-is.
// Run with: node scripts/build-banner-images.mjs
import sharp from 'sharp';

const SRC = 'public/images';
const OUT = 'public/images/banner';

await sharp(`${SRC}/banniere.png`).resize({ width: 2400 })
	.webp({ quality: 80 }).toFile(`${OUT}/banner-desktop-2400.webp`);
await sharp(`${SRC}/banniere.png`).resize({ width: 1600 })
	.webp({ quality: 80 }).toFile(`${OUT}/banner-desktop-1600.webp`);

// The mobile plate is a tall crop with the logo painted in. The banner crops it
// to width, so it needs roughly the banner's height x its 0.74 aspect in
// pixels, not its width.
await sharp(`${SRC}/banner_mobile_cropped.png`).resize({ width: 1400 })
	.webp({ quality: 80 }).toFile(`${OUT}/banner-mobile-1400.webp`);
await sharp(`${SRC}/banner_mobile_cropped.png`).resize({ width: 900 })
	.webp({ quality: 80 }).toFile(`${OUT}/banner-mobile-900.webp`);

console.log('banner assets written to', OUT);
