# Project Brief: Manga Website

## Goal
Build a polished manga-focused website hosted on GitHub Pages.

The website is mainly a reference/news platform for the manga:
- news articles
- release updates
- author notes
- lore/reference content
- character information
- visual content

## Tech Stack
- Astro (static site generator)
- TypeScript
- Tailwind CSS
- Markdown/MDX content
- GitHub Pages deployment

## Core Requirements

### Performance
- Static-first architecture
- Fast loading
- Optimized images
- Lazy loading for media
- No heavy client-side JavaScript unless necessary

### Content System
Articles should be managed as Markdown files.

Example:
src/content/articles/
chapter-update.md
character-profile.md


Each article supports:

- title
- date
- tags
- cover image
- summary
- body content

### Design Direction
The website should feel like an official manga portal:

- premium/polished aesthetic
- strong visual hierarchy
- manga-inspired style
- responsive design
- dark theme preferred
- beautiful typography
- image-focused layouts

Support:
- cover images
- character art
- panels
- galleries

### Media Strategy
Images:
- stored locally initially
- optimized as WebP/AVIF
- never load huge originals directly

Videos:
- do not host videos on GitHub Pages
- embed from external providers if needed

### Deployment
Target:
GitHub Pages

Build should generate a fully static website.

### Licensing
Code:
MIT License

Manga assets/content:
All Rights Reserved
(no redistribution, modification, or commercial reuse)

## Architecture Preference
Prefer simple, maintainable solutions:
- minimal dependencies
- avoid unnecessary backend
- content-driven architecture
- easy for one person to maintain
