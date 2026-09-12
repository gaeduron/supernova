import fs from 'node:fs';
import path from 'node:path';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

export type GalleryImage = {
	src: string;
	source: string;
	title: string;
	description: string;
	date?: string;
};

type GalleryEntry = {
	source: string;
	title: string;
	description?: string;
	date?: string;
};

type GalleryManifest = {
	images: GalleryEntry[];
};

function filenameToTitle(filename: string): string {
	const name = path.parse(filename).name;
	return name.replace(/[_-]+/g, ' ').trim();
}

function loadGalleryManifest(): GalleryEntry[] {
	const manifestPath = path.join(process.cwd(), 'src/data/gallery.json');

	if (!fs.existsSync(manifestPath)) {
		return [];
	}

	const data = JSON.parse(fs.readFileSync(manifestPath, 'utf-8')) as GalleryManifest;
	return data.images ?? [];
}

export function getGalleryImages(base: string, folder = 'galerie'): GalleryImage[] {
	const dir = path.join(process.cwd(), 'public', folder);

	if (!fs.existsSync(dir)) {
		return [];
	}

	const filesOnDisk = fs
		.readdirSync(dir)
		.filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()));
	const fileSet = new Set(filesOnDisk);
	const manifest = loadGalleryManifest();
	const usedFiles = new Set<string>();
	const images: GalleryImage[] = [];

	for (const entry of manifest) {
		if (!fileSet.has(entry.source)) continue;

		usedFiles.add(entry.source);
		images.push({
			src: `${base}${folder}/${entry.source}`,
			source: entry.source,
			title: entry.title,
			description: entry.description ?? '',
			date: entry.date,
		});
	}

	const orphans = filesOnDisk.filter((file) => !usedFiles.has(file)).sort((a, b) => a.localeCompare(b));

	for (const file of orphans) {
		images.push({
			src: `${base}${folder}/${file}`,
			source: file,
			title: filenameToTitle(file),
			description: '',
		});
	}

	return images;
}
