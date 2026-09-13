// Generates the blurred library plate used as the gallery section background.
// The source PNG is ~45MB and is never shipped as-is.
// Run with: node scripts/build-gallery-images.mjs
import sharp from 'sharp';

const SRC = 'public/images';
const OUT = 'public/images/gallery';

// The plate is already blurred and sits behind the cards, so it survives a
// low quality setting and a small ceiling on width.
await sharp(`${SRC}/supernova_bibliotheque_blured.png`).resize({ width: 2000 })
	.webp({ quality: 70 }).toFile(`${OUT}/library-2000.webp`);
await sharp(`${SRC}/supernova_bibliotheque_blured.png`).resize({ width: 1200 })
	.webp({ quality: 70 }).toFile(`${OUT}/library-1200.webp`);

console.log('gallery assets written to', OUT);
