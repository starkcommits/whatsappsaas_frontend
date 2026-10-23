import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('docs/screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const pages = [
  { path: '', name: 'home' },
  { path: 'features', name: 'features' },
  { path: 'pricing', name: 'pricing' },
  { path: 'how-it-works', name: 'how-it-works' },
  { path: 'contact', name: 'contact' },
  { path: 'about', name: 'about' },
  { path: 'privacy', name: 'privacy' },
  { path: 'terms', name: 'terms' },
  { path: 'refund', name: 'refund' },
  { path: 'acceptable-use', name: 'acceptable-use' },
  { path: 'shipping-and-delivery', name: 'shipping-and-delivery' },
  { path: '404', name: '404' }
];

const viewports = [
  { width: 1440, height: 900, label: '1440px' },
  { width: 768, height: 1024, label: '768px' },
  { width: 390, height: 844, label: '390px' }
];

console.log('Capturing screenshots for all pages and viewports...');

for (const p of pages) {
  const url = `http://localhost:4321/${p.path}`;
  for (const vp of viewports) {
    const filename = `${p.name}-${vp.label}.png`;
    const dest = path.join(outDir, filename);
    const cmd = `"${chromePath}" --headless --hide-scrollbars --window-size=${vp.width},${vp.height} --screenshot="${dest}" "${url}"`;
    try {
      execSync(cmd, { stdio: 'pipe' });
      const stats = fs.statSync(dest);
      console.log(`✓ ${filename} (${stats.size} bytes)`);
    } catch (err) {
      console.error(`✗ Error capturing ${filename}:`, err.message);
    }
  }
}

console.log('\nAll screenshots captured into docs/screenshots/ successfully!');
