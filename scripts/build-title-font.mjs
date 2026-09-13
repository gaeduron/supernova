// Subsets the Dela Suko Gothic display face down to the Latin range used by the
// site's section titles. The source TTF is 2.5MB of mostly CJK glyphs; the
// subset is ~14KB. Requires fonttools (pip install fonttools).
// Run with: node scripts/build-title-font.mjs
import { execFileSync } from 'node:child_process';

const SRC = 'public/fonts/DelaSukoGothic/DelaSukoGothicOne-R.ttf';
const OUT = 'public/fonts/subset/DelaSukoGothicOne-latin.woff';
const UNICODES = 'U+0020-007E,U+00A0-00FF,U+0152-0153,U+0178,U+2018-2019,U+201C-201D,U+2026,U+2013-2014';

execFileSync('pyftsubset', [
	SRC,
	`--output-file=${OUT}`,
	'--flavor=woff',
	`--unicodes=${UNICODES}`,
	'--layout-features=kern,liga',
	'--no-hinting',
], { stdio: 'inherit' });

console.log('title font written to', OUT);
