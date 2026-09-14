// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://nicolas-jaffre.com',
	base: '/',
	integrations: [
		sitemap({
			// The legal page is noindex and /supernova-vol-1 is an alias of the
			// home page (its canonical already points to /), so neither belongs
			// in the sitemap.
			filter: (page) =>
				!page.includes('/mentions-legales') && !page.includes('/supernova-vol-1'),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
