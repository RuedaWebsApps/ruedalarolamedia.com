import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

const htmlFiles = [
  'index.html',
  'es/index.html',
  'contact/index.html',
  'contacto/index.html',
  'blog/index.html',
  'es/blog/index.html',
  'portfolio/logos-design/index.html',
  'es/portfolio/logos-design/index.html',
  'portfolio/luminara/index.html',
  'es/portfolio/luminara/index.html',
  'portfolio/astralis/index.html',
  'es/portfolio/astralis/index.html',
  'portfolio/spectral/index.html',
  'es/portfolio/spectral/index.html',
  'privacy/index.html',
  'es/privacidad/index.html',
  'terms/index.html',
  'es/terminos/index.html',
  'cookies/index.html',
  'es/cookies/index.html',
  'accessibility/index.html',
  'es/accesibilidad/index.html',
];

let allAssets = new Set();

for (const file of htmlFiles) {
  const filePath = path.join(distDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`[MISSING HTML] ${file}`);
    process.exit(1);
  }
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
