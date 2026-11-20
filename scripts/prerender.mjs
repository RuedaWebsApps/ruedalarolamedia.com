import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import(pathToFileURL(toAbsolute('dist-ssr/entry-server.js')).href);

function escapeAttr(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const SITE = 'https://ruedalarolamedia.com';

const routesToPrerender = [
  {
    url: '/',
    outPath: 'dist/index.html',
    lang: 'en',
    title: 'Rueda La Rola Media | Marketing, Branding, Web Design & Vehicle Wraps in Austin, TX',
    description: 'Premier creative media agency in Austin, TX specializing in commercial vehicle wraps, distinctive brand identity, 0ms fast web development, and digital marketing.',
    canonical: `${SITE}/`,
    altEn: `${SITE}/`,
    altEs: `${SITE}/es`,
  },
  {
    url: '/es',
    outPath: 'dist/es/index.html',
    lang: 'es',
    title: 'Rueda La Rola Media | Marketing, Branding, Diseño Web & Wraps Vehiculares en Austin, TX',
    description: 'Agencia creativa en Austin, TX especializada en rotulación de vehículos comerciales (wraps), diseño de marca, desarrollo web de alta velocidad y marketing digital.',
    canonical: `${SITE}/es`,
    altEn: `${SITE}/`,
    altEs: `${SITE}/es`,
  },
  {
    url: '/contact',
    outPath: 'dist/contact/index.html',
    lang: 'en',
    title: 'Contact Rueda La Rola Media | Austin, TX Creative Agency',
    description: 'Get in touch with Rueda La Rola Media in Austin, TX for commercial vehicle wraps, brand identity, or high-performance web development quotes.',
    canonical: `${SITE}/contact`,
    altEn: `${SITE}/contact`,
    altEs: `${SITE}/contacto`,
  },
  {
    url: '/contacto',
    outPath: 'dist/contacto/index.html',
    lang: 'es',
    title: 'Contacto | Rueda La Rola Media en Austin, TX',
    description: 'Comunícate con Rueda La Rola Media en Austin, TX para cotizaciones de rotulación vehicular (wraps), diseño de marca o páginas web.',
    canonical: `${SITE}/contacto`,
    altEn: `${SITE}/contact`,
    altEs: `${SITE}/contacto`,
  },
  {
    url: '/blog',
    outPath: 'dist/blog/index.html',
    lang: 'en',
    title: 'Creative Insights & Strategy Blog | Rueda La Rola Media',
    description: 'Articles and analyses on commercial fleet wraps, brand positioning, and modern static web performance by Rueda La Rola Media.',
    canonical: `${SITE}/blog`,
    altEn: `${SITE}/blog`,
    altEs: `${SITE}/es/blog`,
  },
  {
    url: '/es/blog',
    outPath: 'dist/es/blog/index.html',
    lang: 'es',
    title: 'Blog de Estrategia, Branding y Wraps | Rueda La Rola Media',
    description: 'Artículos y guías sobre rotulación vehicular comercial, posicionamiento de marca y sitios web de alto rendimiento en Austin, TX.',
    canonical: `${SITE}/es/blog`,
    altEn: `${SITE}/blog`,
    altEs: `${SITE}/es/blog`,
  },
  {
    url: '/portfolio/logos-design',
    outPath: 'dist/portfolio/logos-design/index.html',
    lang: 'en',
    title: 'Logos Design Showcase | Rueda La Rola Media',
    description: 'Comprehensive gallery of 65+ custom corporate identities and logo marks created for businesses across Texas by Rueda La Rola Media.',
    canonical: `${SITE}/portfolio/logos-design`,
    altEn: `${SITE}/portfolio/logos-design`,
    altEs: `${SITE}/es/portfolio/logos-design`,
  },
  {
    url: '/es/portfolio/logos-design',
    outPath: 'dist/es/portfolio/logos-design/index.html',
    lang: 'es',
    title: 'Galería de Diseño de Logotipos | Rueda La Rola Media',
    description: 'Colección de más de 65 identidades corporativas y logotipos personalizados creados para empresas en Texas por Rueda La Rola Media.',
    canonical: `${SITE}/es/portfolio/logos-design`,
    altEn: `${SITE}/portfolio/logos-design`,
    altEs: `${SITE}/es/portfolio/logos-design`,
  },
  {
    url: '/portfolio/luminara',
    outPath: 'dist/portfolio/luminara/index.html',
    lang: 'en',
    title: 'Innk Visual Identity Case Study | Rueda La Rola Media',
    description: 'Visual identity system, energetic color palette, and high-impact digital presence created for Innk Creative Studio.',
    canonical: `${SITE}/portfolio/luminara`,
    altEn: `${SITE}/portfolio/luminara`,
    altEs: `${SITE}/es/portfolio/luminara`,
  },
  {
    url: '/es/portfolio/luminara',
    outPath: 'dist/es/portfolio/luminara/index.html',
    lang: 'es',
    title: 'Caso de Estudio: Identidad Visual Innk | Rueda La Rola Media',
    description: 'Sistema de identidad visual, paleta cromática y presencia digital desarrollada para Innk Creative Studio.',
    canonical: `${SITE}/es/portfolio/luminara`,
    altEn: `${SITE}/portfolio/luminara`,
    altEs: `${SITE}/es/portfolio/luminara`,
  },
  {
    url: '/portfolio/astralis',
    outPath: 'dist/portfolio/astralis/index.html',
    lang: 'en',
    title: 'Alery Packaging & Brand Identity | Rueda La Rola Media',
    description: 'Minimalist brand identity, tactile packaging specifications, and retail product presentation developed for Alery.',
    canonical: `${SITE}/portfolio/astralis`,
    altEn: `${SITE}/portfolio/astralis`,
    altEs: `${SITE}/es/portfolio/astralis`,
  },
  {
    url: '/es/portfolio/astralis',
    outPath: 'dist/es/portfolio/astralis/index.html',
    lang: 'es',
    title: 'Caso de Estudio: Identidad y Empaque Alery | Rueda La Rola Media',
    description: 'Identidad de marca minimalista, diseño de empaque y presentación de producto desarrollada para Alery.',
    canonical: `${SITE}/es/portfolio/astralis`,
    altEn: `${SITE}/portfolio/astralis`,
    altEs: `${SITE}/es/portfolio/astralis`,
  },
  {
    url: '/portfolio/spectral',
    outPath: 'dist/portfolio/spectral/index.html',
    lang: 'en',
    title: 'Brioche Gourmet Bakery Branding | Rueda La Rola Media',
    description: 'Artisanal visual identity, bespoke lettering, eco-friendly packaging, and merchandise designed for Brioche Gourmet Bakery.',
    canonical: `${SITE}/portfolio/spectral`,
    altEn: `${SITE}/portfolio/spectral`,
    altEs: `${SITE}/es/portfolio/spectral`,
  },
  {
    url: '/es/portfolio/spectral',
    outPath: 'dist/es/portfolio/spectral/index.html',
    lang: 'es',
    title: 'Caso de Estudio: Branding Brioche Bakery | Rueda La Rola Media',
    description: 'Identidad visual artesanal, lettering personalizado, empaques ecológicos y uniformes diseñados para Brioche Gourmet Bakery.',
    canonical: `${SITE}/es/portfolio/spectral`,
    altEn: `${SITE}/portfolio/spectral`,
    altEs: `${SITE}/es/portfolio/spectral`,
  },
  {
    url: '/privacy',
    outPath: 'dist/privacy/index.html',
    lang: 'en',
    title: 'Privacy Policy | Rueda La Rola Media',
    description: 'How Rueda La Rola Media LLC collects, uses, and protects your personal information, and your privacy rights under Texas, California, and U.S. laws.',
    canonical: `${SITE}/privacy`,
    altEn: `${SITE}/privacy`,
    altEs: `${SITE}/es/privacidad`,
  },
  {
    url: '/es/privacidad',
    outPath: 'dist/es/privacidad/index.html',
    lang: 'es',
    title: 'Política de Privacidad | Rueda La Rola Media',
    description: 'Cómo Rueda La Rola Media LLC recopila, usa y protege su información personal y sus derechos bajo las leyes de privacidad de Texas y EE. UU.',
    canonical: `${SITE}/es/privacidad`,
    altEn: `${SITE}/privacy`,
    altEs: `${SITE}/es/privacidad`,
  },
  {
    url: '/terms',
    outPath: 'dist/terms/index.html',
    lang: 'en',
    title: 'Terms of Use | Rueda La Rola Media',
    description: 'Terms and conditions for using the Rueda La Rola Media LLC website: acceptable use, proposals, intellectual property, and Texas governing law.',
    canonical: `${SITE}/terms`,
    altEn: `${SITE}/terms`,
    altEs: `${SITE}/es/terminos`,
  },
  {
    url: '/es/terminos',
    outPath: 'dist/es/terminos/index.html',
    lang: 'es',
    title: 'Términos de Uso | Rueda La Rola Media',
    description: 'Condiciones para usar el sitio web de Rueda La Rola Media LLC: uso permitido, propuestas, propiedad intelectual y ley aplicable en Texas.',
    canonical: `${SITE}/es/terminos`,
    altEn: `${SITE}/terms`,
    altEs: `${SITE}/es/terminos`,
  },
  {
    url: '/cookies',
    outPath: 'dist/cookies/index.html',
    lang: 'en',
    title: 'Cookie Policy | Rueda La Rola Media',
    description: 'Rueda La Rola Media LLC does not use tracking or advertising cookies. Learn what technical storage is used and how to control it.',
    canonical: `${SITE}/cookies`,
    altEn: `${SITE}/cookies`,
    altEs: `${SITE}/es/cookies`,
  },
  {
    url: '/es/cookies',
    outPath: 'dist/es/cookies/index.html',
    lang: 'es',
    title: 'Política de Cookies | Rueda La Rola Media',
    description: 'Rueda La Rola Media LLC no utiliza cookies de seguimiento ni de publicidad. Conozca qué almacenamiento técnico se usa y cómo controlarlo.',
    canonical: `${SITE}/es/cookies`,
    altEn: `${SITE}/cookies`,
    altEs: `${SITE}/es/cookies`,
  },
  {
    url: '/accessibility',
    outPath: 'dist/accessibility/index.html',
    lang: 'en',
    title: 'Accessibility Statement | Rueda La Rola Media',
    description: 'Rueda La Rola Media LLC commitment to web accessibility (WCAG 2.1 Level AA) and how to report barriers or request assistance.',
    canonical: `${SITE}/accessibility`,
    altEn: `${SITE}/accessibility`,
    altEs: `${SITE}/es/accesibilidad`,
  },
  {
    url: '/es/accesibilidad',
    outPath: 'dist/es/accesibilidad/index.html',
    lang: 'es',
    title: 'Declaración de Accesibilidad | Rueda La Rola Media',
    description: 'Compromiso de Rueda La Rola Media LLC con la accesibilidad web (WCAG 2.1 Nivel AA) y cómo reportar barreras o solicitar asistencia.',
    canonical: `${SITE}/es/accesibilidad`,
    altEn: `${SITE}/accessibility`,
    altEs: `${SITE}/es/accesibilidad`,
  },
];

console.log('Prerendering static routes...');

for (const route of routesToPrerender) {
  const { html: appHtml } = render(route.url);
  const ogLocale = route.lang === 'es' ? 'es_US' : 'en_US';
  const ogAltLocale = route.lang === 'es' ? 'en_US' : 'es_US';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE}/#agency`,
    name: 'Rueda La Rola Media LLC',
    alternateName: 'Rueda La Rola Media',
    url: SITE,
    logo: `${SITE}/images/logo.webp`,
    image: `${SITE}/images/hero-collage.webp`,
    description: route.description,
    telephone: '+1-512-774-0003',
    email: 'info@ruedalarolamedia.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: [
      'Austin, TX',
      'Round Rock, TX',
      'Cedar Park, TX',
      'San Marcos, TX',
      'Buda, TX',
      'Central Texas',
    ],
    availableLanguage: ['en', 'es'],
    priceRange: '$$',
    sameAs: [
      'https://instagram.com/ruedalarolamedia',
      'https://facebook.com/ruedalarolamedia',
      'https://youtube.com/@ruedalarolamedia',
    ],
  };

  let pageHtml = template
    .replace('<!--app-html-->', appHtml)
    .replace(/<html lang="[^"]*"/, `<html lang="${route.lang}"`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      [
        `<meta name="description" content="${escapeAttr(route.description)}" />`,
        `<link rel="canonical" href="${escapeAttr(route.canonical)}" />`,
        `<link rel="alternate" hreflang="en" href="${escapeAttr(route.altEn)}" />`,
        `<link rel="alternate" hreflang="es" href="${escapeAttr(route.altEs)}" />`,
        `<link rel="alternate" hreflang="x-default" href="${escapeAttr(route.altEn)}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:site_name" content="Rueda La Rola Media" />`,
        `<meta property="og:title" content="${escapeAttr(route.title)}" />`,
        `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
        `<meta property="og:url" content="${escapeAttr(route.canonical)}" />`,
        `<meta property="og:locale" content="${ogLocale}" />`,
        `<meta property="og:locale:alternate" content="${ogAltLocale}" />`,
        `<meta property="og:image" content="${SITE}/images/og-image.jpg" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`,
        `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
        `<meta name="twitter:image" content="${SITE}/images/og-image.jpg" />`,
        `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
      ].join('\n    ')
    );

  const destFile = toAbsolute(route.outPath);
  fs.mkdirSync(path.dirname(destFile), { recursive: true });
  fs.writeFileSync(destFile, pageHtml, 'utf-8');
  console.log(`[OK] Prerendered ${route.url} -> ${route.outPath} (${pageHtml.length} chars)`);
}

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routesToPrerender
  .map(
    (r) => `  <url>
    <loc>${r.canonical}</loc>
    <lastmod>2026-11-20</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${r.altEn}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${r.altEs}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${r.altEn}"/>
    <changefreq>${r.url === '/' || r.url === '/es' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.url === '/' || r.url === '/es' ? '1.0' : r.url.includes('privacy') || r.url.includes('terms') || r.url.includes('cookies') || r.url.includes('accessibility') || r.url.includes('privacidad') || r.url.includes('terminos') || r.url.includes('accesibilidad') ? '0.4' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

fs.writeFileSync(toAbsolute('public/sitemap.xml'), sitemap, 'utf-8');
fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemap, 'utf-8');
console.log('[OK] Generated public/sitemap.xml & dist/sitemap.xml');

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://ruedalarolamedia.com/sitemap.xml
`;
fs.writeFileSync(toAbsolute('public/robots.txt'), robotsTxt, 'utf-8');
fs.writeFileSync(toAbsolute('dist/robots.txt'), robotsTxt, 'utf-8');
console.log('[OK] Generated public/robots.txt & dist/robots.txt');

// Generate llms.txt for AI crawlers
const llmsTxt = `# Rueda La Rola Media
> Creative Media & Vehicle Wrap Agency in Austin, Texas

Rueda La Rola Media LLC is a bilingual creative agency based in Austin, TX specializing in:
- Commercial & Fleet Vehicle Wraps (3M & Avery Dennison certified cast vinyl)
- Distinctive Brand Identity & Logo Design
- High-Performance Web Development (0-CPU Static Edge Architecture)
- Custom Merchandise & Corporate Apparel (Merchadesign)
- 2D & 3D Motion Graphics & Animation
- Targeted Digital Marketing & Lead Funnels

## Contact & Location
- Phone: (512) 774-0003
- Email: info@ruedalarolamedia.com
- Service Area: Austin Metropolitan Area, Round Rock, Cedar Park, San Marcos, Central Texas
- Languages: English & Spanish (Bilingual)
- Website: https://ruedalarolamedia.com (Spanish: https://ruedalarolamedia.com/es)
- Legal & Privacy: https://ruedalarolamedia.com/privacy | https://ruedalarolamedia.com/terms | https://ruedalarolamedia.com/cookies | https://ruedalarolamedia.com/accessibility
`;
fs.writeFileSync(toAbsolute('public/llms.txt'), llmsTxt, 'utf-8');
fs.writeFileSync(toAbsolute('dist/llms.txt'), llmsTxt, 'utf-8');
console.log('[OK] Generated public/llms.txt & dist/llms.txt');

// Clean temporary SSR bundle directory
fs.rmSync(toAbsolute('dist-ssr'), { recursive: true, force: true });

console.log('Static prerender completed successfully!');
