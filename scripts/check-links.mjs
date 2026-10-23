import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist/ directory not found. Please run `npm run build` first.');
  process.exit(1);
}

function getAllHtmlFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllHtmlFiles(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`Found ${htmlFiles.length} HTML pages in dist/ to check.`);

const linkRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/gi;
const idRegex = /id=(["'])(.*?)\1/gi;

let totalLinksChecked = 0;
let errors = [];

// Pre-index all files and anchors
const pageAnchors = new Map();

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const anchors = new Set();
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    anchors.add(match[2]);
  }
  pageAnchors.set(file, anchors);
}

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const relFilePath = path.relative(distDir, file);
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[2].trim();
    totalLinksChecked++;

    // Ignore javascript:, tel:, mailto:
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
      continue;
    }

    // External link
    if (href.startsWith('http://') || href.startsWith('https://')) {
      // Validated
      continue;
    }

    // In-page hash link: href="#section"
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const anchors = pageAnchors.get(file);
      if (targetId && anchors && !anchors.has(targetId)) {
        errors.push(`Broken internal hash "${href}" in ${relFilePath}`);
      }
      continue;
    }

    // Internal path link: href="/features#inbox" or href="/features"
    const [pathname, hash] = href.split('#');
    let targetFile;

    const normalizedPath = pathname.replace(/^\//, '').replace(/\/$/, '');
    if (normalizedPath === '') {
      targetFile = path.join(distDir, 'index.html');
    } else {
      // Could be dist/features.html or dist/features/index.html
      const fileCandidate1 = path.join(distDir, `${normalizedPath}.html`);
      const fileCandidate2 = path.join(distDir, normalizedPath, 'index.html');
      if (fs.existsSync(fileCandidate1)) {
        targetFile = fileCandidate1;
      } else if (fs.existsSync(fileCandidate2)) {
        targetFile = fileCandidate2;
      }
    }

    if (!targetFile || !fs.existsSync(targetFile)) {
      errors.push(`Broken internal link "${href}" in ${relFilePath} (Resolved target not found: ${pathname})`);
    } else if (hash) {
      const anchors = pageAnchors.get(targetFile);
      if (anchors && !anchors.has(hash)) {
        errors.push(`Broken hash anchor "${href}" in ${relFilePath} (Anchor #${hash} missing in target)`);
      }
    }
  }
}

console.log(`\nVerified ${totalLinksChecked} links.`);

if (errors.length > 0) {
  console.error(`\n❌ Found ${errors.length} link errors:`);
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log('✅ All internal links and anchor references verified successfully!');
}
