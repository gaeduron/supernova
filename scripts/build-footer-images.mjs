// Generates the footer assets: the library plate on the right and the series
// title on the left, both desaturated so the band reads as one grey scene.
// Run with: node scripts/build-footer-images.mjs
import sharp from 'sharp';

const SRC = 'public/images';
const OUT = 'public/images/footer';

// The plate is cropped to a short band by the layout and sits under a dark
// wash, so it survives a modest ceiling on width.
await sharp(`${SRC}/supernova_bibliotheque.png`).resize({ width: 1800 }).grayscale()
	.webp({ quality: 72 }).toFile(`${OUT}/library-gray-1800.webp`);
await sharp(`${SRC}/supernova_bibliotheque.png`).resize({ width: 1000 }).grayscale()
	.webp({ quality: 72 }).toFile(`${OUT}/library-gray-1000.webp`);

// The gold title, desaturated to the white/grey of the footer. It never draws
// wider than ~24rem, so 800px covers it at 2x.
await sharp(`${SRC}/supernova_manga_title.png`).resize({ width: 800 }).grayscale()
	.webp({ quality: 85 }).toFile(`${OUT}/title-gray-800.webp`);

console.log('footer assets written to', OUT);
