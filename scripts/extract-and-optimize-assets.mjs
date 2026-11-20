import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = 'C:\\Users\\ivang\\.gemini\\antigravity\\brain\\09380e0e-b608-447a-a436-a32fec3fc69f\\scratch\\extracted_images';
const destDir = path.resolve('public/images');
const logosDir = path.resolve('public/images/logos');

fs.mkdirSync(destDir, { recursive: true });
fs.mkdirSync(logosDir, { recursive: true });

async function processImage(srcFile, destFile, options = {}) {
  const inputPath = path.join(srcDir, srcFile);
  const outputPath = path.join(destDir, destFile);

  if (!fs.existsSync(inputPath)) {
    console.warn(`[WARN] Source file not found: ${srcFile}`);
    return false;
  }

  try {
    let pipeline = sharp(inputPath);
    if (options.resize) {
      pipeline = pipeline.resize(options.resize);
    }
    if (options.format === 'png') {
      await pipeline.png({ quality: options.quality || 90 }).toFile(outputPath);
    } else {
      await pipeline.webp({ quality: options.quality || 85, effort: 6 }).toFile(outputPath);
    }
    const stat = fs.statSync(outputPath);
    console.log(`[OK] Generated ${destFile} (${(stat.size / 1024).toFixed(1)} KB)`);
    return true;
  } catch (err) {
    console.error(`[ERROR] Processing ${srcFile}:`, err);
    return false;
  }
}

async function run() {
  console.log('Optimizing core images with Sharp...');

  // 1. Logo
  await processImage('logo-en-blanco.png', 'logo.webp', { resize: { width: 500 }, quality: 90 });
  await processImage('logo-en-blanco.png', 'logo-nav.webp', { resize: { width: 200 }, quality: 90 });
  await processImage('logo-en-blanco.png', 'apple-touch-icon.png', { resize: { width: 180, height: 180, fit: 'contain', background: '#0b0f17' }, format: 'png' });
  await processImage('logo-en-blanco.png', 'favicon-32x32.png', { resize: { width: 32, height: 32, fit: 'contain', background: '#0b0f17' }, format: 'png' });
  await processImage('logo-en-blanco.png', 'og-image.jpg', { resize: { width: 1200, height: 630, fit: 'contain', background: '#0b0f17' }, format: 'png' });

  // 2. Hero collage
  await processImage('imagerola.png', 'hero-collage.webp', { resize: { width: 1200 }, quality: 85 });
  await processImage('imagerola.png', 'hero-collage-mobile.webp', { resize: { width: 640 }, quality: 80 });

  // 3. Wrap truck cutout
  await processImage('carro3.png', 'carro-wrap.webp', { resize: { width: 1000 }, quality: 85 });
  await processImage('carro3.png', 'carro-wrap-thumb.webp', { resize: { width: 500 }, quality: 85 });

  // 4. Services
  await processImage('2149119262.jpg', 'service-brand.webp', { resize: { width: 600 }, quality: 80 });
  await processImage('138060.jpg', 'service-web.webp', { resize: { width: 600 }, quality: 80 });
  await processImage('2149557624.jpg', 'service-mercha.webp', { resize: { width: 600 }, quality: 80 });
  await processImage('2151021986.jpg', 'service-identity.webp', { resize: { width: 600 }, quality: 80 });
  await processImage('104783-1.jpg', 'service-animation.webp', { resize: { width: 600 }, quality: 80 });
  await processImage('portrait-schoolgirl-memphis-style-background-scaled.jpg', 'service-marketing.webp', { resize: { width: 600 }, quality: 80 });
  await processImage('coco1.png', 'service-pr.webp', { resize: { width: 600 }, quality: 80 });

  // 5. Split Sections
  await processImage('2149119262.jpg', 'split-branding.webp', { resize: { width: 900 }, quality: 85 });
  await processImage('portrait-schoolgirl-memphis-style-background-scaled.jpg', 'split-commitment.webp', { resize: { width: 900 }, quality: 85 });
  await processImage('creative-graphic-designer-office-scaled.jpg', 'split-webdesign.webp', { resize: { width: 900 }, quality: 85 });

  // 6. Portfolio Showcase
  await processImage('logo8.2.webp', 'portfolio-logos.webp', { resize: { width: 800 }, quality: 85 });
  await processImage('proyect-4.png', 'portfolio-innk.webp', { resize: { width: 800 }, quality: 85 });
  await processImage('proyect-3.png', 'portfolio-alery.webp', { resize: { width: 800 }, quality: 85 });
  await processImage('proyect-1.png', 'portfolio-brioche.webp', { resize: { width: 800 }, quality: 85 });

  // 7. Client Logos Carousel
  await processImage('ONUT-MUESTRAS.webp', 'client-onut.webp', { resize: { width: 300 }, quality: 90 });
  await processImage('UNIEMPRESAS-MUESTRAS.webp', 'client-uniempresas.webp', { resize: { width: 300 }, quality: 90 });
  await processImage('ANCOVI-MUESTRAS.webp', 'client-ancovi.webp', { resize: { width: 300 }, quality: 90 });
  await processImage('JERONIMOS-MUESTRAS.webp', 'client-jeronimos.webp', { resize: { width: 300 }, quality: 90 });
  await processImage('INFRARROJO-MUESTRAS.webp', 'client-infrarrojo.webp', { resize: { width: 300 }, quality: 90 });

  // 8. Gallery Logos for Logos Design Page
  const allFiles = fs.readdirSync(srcDir);
  const logoFiles = allFiles.filter(
    (f) =>
      /^(?:logo[0-9-]|[A-Z-]+-MUESTRAS)\b/i.test(f) &&
      !/logo-en-blanco|logo-salon|rueda-la-rola-logo/i.test(f)
  );
  let count = 0;
  for (const f of logoFiles) {
    const dest = path.join(logosDir, path.parse(f).name + '.webp');
    try {
      await sharp(path.join(srcDir, f))
        .resize({ width: 400, height: 400, fit: 'inside' })
        .webp({ quality: 85 })
        .toFile(dest);
      count++;
    } catch {
      // ignore
    }
  }
  console.log(`[OK] Generated ${count} showcase client logos in public/images/logos/`);

  // Copy root icons for standard browser lookup
  fs.copyFileSync(path.join(destDir, 'apple-touch-icon.png'), path.resolve('public/apple-touch-icon.png'));
  fs.copyFileSync(path.join(destDir, 'favicon-32x32.png'), path.resolve('public/favicon-32x32.png'));

  // 9. Generate SVG Favicon
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6a35ff"/>
      <stop offset="100%" stop-color="#ec186a"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="48" fill="#0b0f17" stroke="url(#g)" stroke-width="4"/>
  <circle cx="50" cy="50" r="32" fill="none" stroke="#6a35ff" stroke-width="2" stroke-dasharray="6,4"/>
  <circle cx="50" cy="50" r="20" fill="none" stroke="#ec186a" stroke-width="2"/>
  <circle cx="50" cy="50" r="8" fill="url(#g)"/>
  <circle cx="50" cy="50" r="3" fill="#ffffff"/>
</svg>`;
  fs.writeFileSync(path.resolve('public/favicon.svg'), faviconSvg, 'utf-8');
  console.log('[OK] Generated public/favicon.svg');

  // 10. Webmanifest
  const manifest = {
    name: "Rueda La Rola Media",
    short_name: "RuedaLaRola",
    description: "Creative agency in Austin, TX specialized in branding, web design, vehicle wraps, and marketing.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f17",
    theme_color: "#6a35ff",
    icons: [
      { src: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }
    ]
  };
  fs.writeFileSync(path.resolve('public/manifest.webmanifest'), JSON.stringify(manifest, null, 2), 'utf-8');
  console.log('[OK] Generated public/manifest.webmanifest');
}

run().catch(console.error);
