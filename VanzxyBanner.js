// Simple banner: runs on `npm install` (postinstall) and is exported as printBanner().
// Opt out at runtime with BAILEYZ_BANNER=0.
import { readFileSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';

const pkg = (() => {
    try {
        const pkgPath = fileURLToPath(new URL('./package.json', import.meta.url));
        return JSON.parse(readFileSync(pkgPath, 'utf8'));
    } catch {
        return {};
    }
})();

export function printBanner() {
    if (process.env.BAILEYZ_BANNER === '0') return;
    if (globalThis.__BaileyzBannerShown) return; // once per process
    globalThis.__BaileyzBannerShown = true;

    const version = pkg.version ? ` v${pkg.version}` : '';
    console.log(`\n🍃 baileyz${version}`);
    console.log('   Creator: DanuZz\n');
}

// Run directly (`node banner.js`, i.e. the npm postinstall hook).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) printBanner();
