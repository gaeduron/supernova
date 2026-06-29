import fs from 'node:fs';
import path from 'node:path';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

export type GalleryImage = { src: string; alt: string };

function filenameToAlt(filename: string): string {
	const name = path.parse(filename).name;
	return name.replace(/[_-]+/g, ' ').trim();
}

export function getGalleryImages(base: string, folder = 'galerie'): GalleryImage[] {
	const dir = path.join(process.cwd(), 'public', folder);

	if (!fs.existsSync(dir)) {
		return [];
	}

	return fs
		.readdirSync(dir)
		.filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
		.sort((a, b) => a.localeCompare(b))
		.map((file) => ({
			src: `${base}${folder}/${file}`,
			alt: filenameToAlt(file),
		}));
}
