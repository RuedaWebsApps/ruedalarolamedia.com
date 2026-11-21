import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

function findHtmlFiles(dir, base = '') {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findHtmlFiles(full, rel));
    } else if (entry.name.endsWith('.html')) {
      results.push(rel);
    }
  }
  return results;
}

const htmlFiles = findHtmlFiles(distDir);
let allAssets = new Set();

for (const file of htmlFiles) {
  const filePath = path.join(distDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const matches = content.matchAll(/(?:src|href|content)="(\/(?:images|assets|favicon|apple-touch|manifest)[^"]*)"/g);
  for (const m of matches) {
    allAssets.add(m[1]);
  }
}

console.log(`Found ${allAssets.size} unique asset references across ${htmlFiles.length} static HTML files.`);

let missingCount = 0;
for (const asset of allAssets) {
  const cleanAsset = asset.split('?')[0].split('#')[0];
  const diskPath = path.join(distDir, cleanAsset.replace(/^\//, ''));
  if (!fs.existsSync(diskPath)) {
    console.error(`[404 NOT FOUND] ${asset} -> ${diskPath}`);
    missingCount++;
  }
}

if (missingCount === 0) {
  console.log(`[PERFECT] All ${allAssets.size} static assets exist on disk across ${htmlFiles.length} routes. Zero 404s!`);
} else {
  console.error(`Found ${missingCount} missing assets!`);
  process.exit(1);
}
