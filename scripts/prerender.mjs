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
    description: 'Premier creative media agency in Austin, TX specializing in exotic & commercial vehicle wraps, distinctive brand identity, 0ms fast web development, and digital marketing.',
    canonical: `${SITE}/`,
    altEn: `${SITE}/`,
    altEs: `${SITE}/es`,
  },
  {
    url: '/es',
    outPath: 'dist/es/index.html',
    lang: 'es',
    title: 'Rueda La Rola Media | Marketing, Branding, Diseño Web & Wraps Vehiculares en Austin, TX',
    description: 'Agencia creativa en Austin, TX especializada en wraps de alta gama y flotas comerciales, diseño de marca, desarrollo web de alta velocidad y marketing digital.',
    canonical: `${SITE}/es`,
    altEn: `${SITE}/`,
    altEs: `${SITE}/es`,
  },
  {
    url: '/contact',
    outPath: 'dist/contact/index.html',
    lang: 'en',
    title: 'Contact Rueda La Rola Media | Austin, TX Creative Agency',
    description: 'Get in touch with Rueda La Rola Media in Austin, TX for exotic & commercial vehicle wraps, brand identity, or high-performance web development quotes.',
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

  // === 16 DEDICATED SERVICE LANDING PAGES (8 EN + 8 ES) ===
  {
    url: '/services/vehicle-wraps',
    outPath: 'dist/services/vehicle-wraps/index.html',
    lang: 'en',
    title: 'Luxury Exotic & Commercial Vehicle Wraps Austin, TX | Rueda La Rola Media',
    description: 'Premier exotic car color-change wrap atelier & commercial fleet wrap studio in Austin, TX. Inozetek Super Gloss, 3M 2080 & Avery Dennison installed in our octagonal-LED white bay.',
    canonical: `${SITE}/services/vehicle-wraps`,
    altEn: `${SITE}/services/vehicle-wraps`,
    altEs: `${SITE}/es/servicios/wraps-vehiculares`,
    ogImage: `${SITE}/images/wraps/wrap-ferrari-ultraviolet.webp`,
  },
  {
    url: '/es/servicios/wraps-vehiculares',
    outPath: 'dist/es/servicios/wraps-vehiculares/index.html',
    lang: 'es',
    title: 'Wraps Vehiculares de Alta Gama y Flotas Comerciales en Austin, TX | Rueda La Rola Media',
    description: 'Atelier de cambio de color para autos de lujo y rotulación de flotas comerciales en Austin, TX. Inozetek Super Gloss, 3M 2080 y Avery Dennison en estudio blanco con luces LED octogonales.',
    canonical: `${SITE}/es/servicios/wraps-vehiculares`,
    altEn: `${SITE}/services/vehicle-wraps`,
    altEs: `${SITE}/es/servicios/wraps-vehiculares`,
    ogImage: `${SITE}/images/wraps/wrap-ferrari-ultraviolet.webp`,
  },
  {
    url: '/services/brand-design',
    outPath: 'dist/services/brand-design/index.html',
    lang: 'en',
    title: 'Custom Brand Design & Logo Creation Agency in Austin, TX | Rueda La Rola Media',
    description: 'Transform your business into an unforgettable icon. Bespoke logo design, visual identity systems, and brand style guides by Rueda La Rola Media in Austin, TX.',
    canonical: `${SITE}/services/brand-design`,
    altEn: `${SITE}/services/brand-design`,
    altEs: `${SITE}/es/servicios/diseno-de-marca`,
  },
  {
    url: '/es/servicios/diseno-de-marca',
    outPath: 'dist/es/servicios/diseno-de-marca/index.html',
    lang: 'es',
    title: 'Diseño de Marca y Creación de Logotipos en Austin, TX | Rueda La Rola Media',
    description: 'Tu esencia convertida en un ícono inolvidable. Diseño de logotipos profesionales, identidad visual y manuales de marca en Austin, TX.',
    canonical: `${SITE}/es/servicios/diseno-de-marca`,
    altEn: `${SITE}/services/brand-design`,
    altEs: `${SITE}/es/servicios/diseno-de-marca`,
  },
  {
    url: '/services/web-design',
    outPath: 'dist/services/web-design/index.html',
    lang: 'en',
    title: 'High-Performance Web Design & Development Agency Austin, TX | Rueda La Rola Media',
    description: 'Custom web design, interactive UX/UI, and ultra-fast SEO-optimized websites that turn ideas into income. Rueda La Rola Media in Austin, TX.',
    canonical: `${SITE}/services/web-design`,
    altEn: `${SITE}/services/web-design`,
    altEs: `${SITE}/es/servicios/diseno-web`,
  },
  {
    url: '/es/servicios/diseno-web',
    outPath: 'dist/es/servicios/diseno-web/index.html',
    lang: 'es',
    title: 'Diseño y Desarrollo de Páginas Web en Austin, TX | Rueda La Rola Media',
    description: 'Webs que convierten ideas en ingresos. Diseño web responsive, UX/UI interactivo y máxima velocidad SEO en Austin, TX.',
    canonical: `${SITE}/es/servicios/diseno-web`,
    altEn: `${SITE}/services/web-design`,
    altEs: `${SITE}/es/servicios/diseno-web`,
  },
  {
    url: '/services/merchadesign',
    outPath: 'dist/services/merchadesign/index.html',
    lang: 'en',
    title: 'Merchadesign: Custom Corporate Merch, Apparel & Packaging | Rueda La Rola Media',
    description: 'Turn everyday objects into brand ambassadors. Custom apparel design, corporate merchandise, uniforms, and retail packaging in Austin, TX.',
    canonical: `${SITE}/services/merchadesign`,
    altEn: `${SITE}/services/merchadesign`,
    altEs: `${SITE}/es/servicios/merchadesign`,
  },
  {
    url: '/es/servicios/merchadesign',
    outPath: 'dist/es/servicios/merchadesign/index.html',
    lang: 'es',
    title: 'Merchadesign: Ropa Corporativa, Empaques y Merchandising | Rueda La Rola Media',
    description: 'Objetos que se vuelven embajadores de tu marca. Diseño de uniformes, ropa personalizada, packaging y merchandising en Austin, TX.',
    canonical: `${SITE}/es/servicios/merchadesign`,
    altEn: `${SITE}/services/merchadesign`,
    altEs: `${SITE}/es/servicios/merchadesign`,
  },
  {
    url: '/services/branding',
    outPath: 'dist/services/branding/index.html',
    lang: 'en',
    title: 'Strategic Branding, Naming & Visual Identity Agency Austin, TX | Rueda La Rola Media',
    description: 'Memorable brand identities that beat on and off the screen. Brand strategy, naming, visual ecosystems, and rebranding in Austin, TX.',
    canonical: `${SITE}/services/branding`,
    altEn: `${SITE}/services/branding`,
    altEs: `${SITE}/es/servicios/branding`,
  },
  {
    url: '/es/servicios/branding',
    outPath: 'dist/es/servicios/branding/index.html',
    lang: 'es',
    title: 'Agencia de Branding Estratégico, Naming e Identidad Visual en Austin, TX | Rueda La Rola Media',
    description: 'Identidades memorables que laten dentro y fuera de la pantalla. Estrategia de marca, naming, rebranding y sistemas visuales en Austin, TX.',
    canonical: `${SITE}/es/servicios/branding`,
    altEn: `${SITE}/services/branding`,
    altEs: `${SITE}/es/servicios/branding`,
  },
  {
    url: '/services/motion-graphics',
    outPath: 'dist/services/motion-graphics/index.html',
    lang: 'en',
    title: '2D & 3D Animation, Motion Graphics & Video Reels Austin, TX | Rueda La Rola Media',
    description: 'Storytelling in motion: animated logo stingers, social media reels, commercial explainers, and motion graphics by Rueda La Rola Media in Austin, TX.',
    canonical: `${SITE}/services/motion-graphics`,
    altEn: `${SITE}/services/motion-graphics`,
    altEs: `${SITE}/es/servicios/animacion-motion-graphics`,
  },
  {
    url: '/es/servicios/animacion-motion-graphics',
    outPath: 'dist/es/servicios/animacion-motion-graphics/index.html',
    lang: 'es',
    title: 'Animación 2D/3D, Motion Graphics y Reels en Austin, TX | Rueda La Rola Media',
    description: 'Storytelling en movimiento: videoclips, reels, bumpers, logos animados y motion graphics en Austin, TX.',
    canonical: `${SITE}/es/servicios/animacion-motion-graphics`,
    altEn: `${SITE}/services/motion-graphics`,
    altEs: `${SITE}/es/servicios/animacion-motion-graphics`,
  },
  {
    url: '/services/digital-marketing',
    outPath: 'dist/services/digital-marketing/index.html',
    lang: 'en',
    title: 'Digital Marketing, Local SEO & Paid Ads Agency Austin, TX | Rueda La Rola Media',
    description: 'Grow your business with data-driven digital marketing, Local SEO, Google & Meta ad campaigns, and high-conversion landing pages in Austin, TX.',
    canonical: `${SITE}/services/digital-marketing`,
    altEn: `${SITE}/services/digital-marketing`,
    altEs: `${SITE}/es/servicios/marketing-digital`,
  },
  {
    url: '/es/servicios/marketing-digital',
    outPath: 'dist/es/servicios/marketing-digital/index.html',
    lang: 'es',
    title: 'Agencia de Marketing Digital, SEO Local y Google/Meta Ads en Austin, TX | Rueda La Rola Media',
    description: 'Atrae más clientes con marketing digital estratégico, SEO local, campañas en Google y Meta Ads y páginas de conversión en Austin, TX.',
    canonical: `${SITE}/es/servicios/marketing-digital`,
    altEn: `${SITE}/services/digital-marketing`,
    altEs: `${SITE}/es/servicios/marketing-digital`,
  },
  {
    url: '/services/public-relations',
    outPath: 'dist/services/public-relations/index.html',
    lang: 'en',
    title: 'Public Relations, Copywriting & Art Direction Agency Austin, TX | Rueda La Rola Media',
    description: 'Strategic public relations, commercial photography, art direction, and bilingual copywriting to fuel your brand channels in Austin, TX.',
    canonical: `${SITE}/services/public-relations`,
    altEn: `${SITE}/services/public-relations`,
    altEs: `${SITE}/es/servicios/relaciones-publicas`,
  },
  {
    url: '/es/servicios/relaciones-publicas',
    outPath: 'dist/es/servicios/relaciones-publicas/index.html',
    lang: 'es',
    title: 'Agencia de Relaciones Públicas, Copywriting y Dirección de Arte en Austin, TX | Rueda La Rola Media',
    description: 'Copywriting, fotografía, dirección de arte y consultoría de relaciones públicas para impulsar tu marca en Austin, TX.',
    canonical: `${SITE}/es/servicios/relaciones-publicas`,
    altEn: `${SITE}/services/public-relations`,
    altEs: `${SITE}/es/servicios/relaciones-publicas`,
  },

  // === BLOG INDEX & INDIVIDUAL BLOG ARTICLES (10 ROUTES) ===
  {
    url: '/blog',
    outPath: 'dist/blog/index.html',
    lang: 'en',
    title: 'Creative Insights, Exotic Wraps & Strategy Blog | Rueda La Rola Media',
    description: 'Articles and analyses on luxury exotic car wraps, commercial fleet graphics, brand positioning, and modern static web performance by Rueda La Rola Media.',
    canonical: `${SITE}/blog`,
    altEn: `${SITE}/blog`,
    altEs: `${SITE}/es/blog`,
  },
  {
    url: '/es/blog',
    outPath: 'dist/es/blog/index.html',
    lang: 'es',
    title: 'Blog de Estrategia, Branding y Wraps de Alta Gama | Rueda La Rola Media',
    description: 'Artículos y guías sobre wraps para autos de alta gama, flotas comerciales, posicionamiento de marca y sitios web de alto rendimiento en Austin, TX.',
    canonical: `${SITE}/es/blog`,
    altEn: `${SITE}/blog`,
    altEs: `${SITE}/es/blog`,
  },
  {
    url: '/blog/exotic-car-wrap-trends-2026',
    outPath: 'dist/blog/exotic-car-wrap-trends-2026/index.html',
    lang: 'en',
    title: '2026 Luxury & Exotic Car Wrap Trends: Liquid Super-Gloss & Octagonal LED Studios | Rueda La Rola Media',
    description: 'Explore why supercar owners are choosing Inozetek Super Gloss liquid metallics, Avery Dennison track satins, and white-room octagonal LED installation bays.',
    canonical: `${SITE}/blog/exotic-car-wrap-trends-2026`,
    altEn: `${SITE}/blog/exotic-car-wrap-trends-2026`,
    altEs: `${SITE}/es/blog/exotic-car-wrap-trends-2026`,
    ogImage: `${SITE}/images/wraps/wrap-ferrari-ultraviolet.webp`,
  },
  {
    url: '/es/blog/exotic-car-wrap-trends-2026',
    outPath: 'dist/es/blog/exotic-car-wrap-trends-2026/index.html',
    lang: 'es',
    title: 'Tendencias 2026 en Wraps para Autos de Alta Gama y Estudios con Luces Octogonales | Rueda La Rola Media',
    description: 'Descubre por qué los propietarios de Ferrari, Porsche y Lamborghini eligen acabados espejo Inozetek Super Gloss y talleres blancos con iluminación LED octogonal.',
    canonical: `${SITE}/es/blog/exotic-car-wrap-trends-2026`,
    altEn: `${SITE}/blog/exotic-car-wrap-trends-2026`,
    altEs: `${SITE}/es/blog/exotic-car-wrap-trends-2026`,
    ogImage: `${SITE}/images/wraps/wrap-ferrari-ultraviolet.webp`,
  },
  {
    url: '/blog/vehicle-wraps-austin-roi',
    outPath: 'dist/blog/vehicle-wraps-austin-roi/index.html',
    lang: 'en',
    title: 'Why Commercial Vehicle Wraps Offer the Highest Local ROI in Austin, TX | Rueda La Rola Media',
    description: 'Discover why fleet wraps generate between 30,000 and 70,000 daily visual impressions in Central Texas at a fraction of the cost of digital ads.',
    canonical: `${SITE}/blog/vehicle-wraps-austin-roi`,
    altEn: `${SITE}/blog/vehicle-wraps-austin-roi`,
    altEs: `${SITE}/es/blog/vehicle-wraps-austin-roi`,
  },
  {
    url: '/es/blog/vehicle-wraps-austin-roi',
    outPath: 'dist/es/blog/vehicle-wraps-austin-roi/index.html',
    lang: 'es',
    title: 'Por Qué los Wraps Vehiculares Ofrecen el Mayor Retorno de Inversión | Rueda La Rola Media',
    description: 'Descubre por qué los gráficos de vehículos y flotas comerciales generan hasta 70,000 impresiones visuales diarias las 24 horas.',
    canonical: `${SITE}/es/blog/vehicle-wraps-austin-roi`,
    altEn: `${SITE}/blog/vehicle-wraps-austin-roi`,
    altEs: `${SITE}/es/blog/vehicle-wraps-austin-roi`,
  },
  {
    url: '/blog/brand-identity-vs-logo',
    outPath: 'dist/blog/brand-identity-vs-logo/index.html',
    lang: 'en',
    title: 'The Critical Difference Between a Logo and a Complete Brand Identity | Rueda La Rola Media',
    description: 'A logo is just the front door. Learn how a complete brand identity system builds instant trust, commands higher pricing, and scales your business.',
    canonical: `${SITE}/blog/brand-identity-vs-logo`,
    altEn: `${SITE}/blog/brand-identity-vs-logo`,
    altEs: `${SITE}/es/blog/brand-identity-vs-logo`,
  },
  {
    url: '/es/blog/brand-identity-vs-logo',
    outPath: 'dist/es/blog/brand-identity-vs-logo/index.html',
    lang: 'es',
    title: 'Tomamos la Chispa de Tu Propósito y la Moldeamos en una Identidad Poderosa | Rueda La Rola Media',
    description: 'En nuestro taller de branding destilamos la esencia de tu historia en símbolos que enamoran a primera vista.',
    canonical: `${SITE}/es/blog/brand-identity-vs-logo`,
    altEn: `${SITE}/blog/brand-identity-vs-logo`,
    altEs: `${SITE}/es/blog/brand-identity-vs-logo`,
  },
  {
    url: '/blog/high-performance-web-design-2026',
    outPath: 'dist/blog/high-performance-web-design-2026/index.html',
    lang: 'en',
    title: 'Modern Web Design: Websites That Turn Ideas Into Income | Rueda La Rola Media',
    description: 'Fast architecture, responsive design, and interactive storytelling merge to make your brand shine across every screen.',
    canonical: `${SITE}/blog/high-performance-web-design-2026`,
    altEn: `${SITE}/blog/high-performance-web-design-2026`,
    altEs: `${SITE}/es/blog/high-performance-web-design-2026`,
  },
  {
    url: '/es/blog/high-performance-web-design-2026',
    outPath: 'dist/es/blog/high-performance-web-design-2026/index.html',
    lang: 'es',
    title: 'Diseño Web: Webs Que Convierten Ideas en Ingresos | Rueda La Rola Media',
    description: 'Para emprendedores audaces, marcas corporativas exigentes y tiendas online hambrientas de ventas.',
    canonical: `${SITE}/es/blog/high-performance-web-design-2026`,
    altEn: `${SITE}/blog/high-performance-web-design-2026`,
    altEs: `${SITE}/es/blog/high-performance-web-design-2026`,
  },

  // === PORTFOLIO CASE STUDIES (8 ROUTES) ===
  {
    url: '/portfolio/logos-design',
    outPath: 'dist/portfolio/logos-design/index.html',
    lang: 'en',
    title: 'Logos Design Showcase — Logofolio Vol. 1 | Rueda La Rola Media',
    description: 'Comprehensive gallery of 65+ custom corporate identities and logo marks created for businesses across Texas by Rueda La Rola Media.',
    canonical: `${SITE}/portfolio/logos-design`,
    altEn: `${SITE}/portfolio/logos-design`,
    altEs: `${SITE}/es/portfolio/logos-design`,
  },
  {
    url: '/es/portfolio/logos-design',
    outPath: 'dist/es/portfolio/logos-design/index.html',
    lang: 'es',
    title: 'Galería de Diseño de Logotipos — Logofolio Vol. 1 | Rueda La Rola Media',
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
    title: 'Alery Audiovisual & Brand Identity Case Study | Rueda La Rola Media',
    description: 'Audiovisual art direction, motion graphics system, and multi-screen brand presentation developed for Alery.',
    canonical: `${SITE}/portfolio/astralis`,
    altEn: `${SITE}/portfolio/astralis`,
    altEs: `${SITE}/es/portfolio/astralis`,
  },
  {
    url: '/es/portfolio/astralis',
    outPath: 'dist/es/portfolio/astralis/index.html',
    lang: 'es',
    title: 'Caso de Estudio: Identidad y Film Alery | Rueda La Rola Media',
    description: 'Dirección de arte audiovisual, sistema de motion graphics y presentación de marca multipantalla desarrollada para Alery.',
    canonical: `${SITE}/es/portfolio/astralis`,
    altEn: `${SITE}/portfolio/astralis`,
    altEs: `${SITE}/es/portfolio/astralis`,
  },
  {
    url: '/portfolio/spectral',
    outPath: 'dist/portfolio/spectral/index.html',
    lang: 'en',
    title: 'Brioche Web Design & Branding Case Study | Rueda La Rola Media',
    description: 'High-conversion web experience, digital menu architecture, and warm visual branding crafted for Brioche.',
    canonical: `${SITE}/portfolio/spectral`,
    altEn: `${SITE}/portfolio/spectral`,
    altEs: `${SITE}/es/portfolio/spectral`,
  },
  {
    url: '/es/portfolio/spectral',
    outPath: 'dist/es/portfolio/spectral/index.html',
    lang: 'es',
    title: 'Caso de Estudio: Diseño Web y Branding Brioche | Rueda La Rola Media',
    description: 'Soluciones digitales que transforman ideas: diseño web de alta conversión e identidad visual para Brioche.',
    canonical: `${SITE}/es/portfolio/spectral`,
    altEn: `${SITE}/portfolio/spectral`,
    altEs: `${SITE}/es/portfolio/spectral`,
  },

  // === US & TEXAS LEGAL COMPLIANCE PAGES (8 ROUTES) ===
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
  const ogImage = route.ogImage || `${SITE}/images/og-image.jpg`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE}/#agency`,
    name: 'Rueda La Rola Media LLC',
    alternateName: 'Rueda La Rola Media',
    url: route.canonical,
    logo: `${SITE}/images/logo.webp`,
    image: ogImage,
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
        `<meta property="og:image" content="${ogImage}" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`,
        `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
        `<meta name="twitter:image" content="${ogImage}" />`,
        `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
      ].join('\n    ')
    );

  const destFile = toAbsolute(route.outPath);
  fs.mkdirSync(path.dirname(destFile), { recursive: true });
  fs.writeFileSync(destFile, pageHtml, 'utf-8');
  console.log(`[OK] Prerendered ${route.url} -> ${route.outPath} (${pageHtml.length} chars)`);
}

// Generate sitemap.xml across all 46 static routes
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
    <changefreq>${r.url === '/' || r.url === '/es' || r.url.includes('/services/') || r.url.includes('/servicios/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.url === '/' || r.url === '/es' ? '1.0' : r.url.includes('/services/') || r.url.includes('/servicios/') ? '0.9' : r.url.includes('privacy') || r.url.includes('terms') || r.url.includes('cookies') || r.url.includes('accessibility') || r.url.includes('privacidad') || r.url.includes('terminos') || r.url.includes('accesibilidad') ? '0.4' : '0.8'}</priority>
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
> Creative Media, Luxury Exotic Car Wrap Atelier & Commercial Fleet Wrap Agency in Austin, Texas

Rueda La Rola Media LLC is a bilingual creative agency based in Austin, TX specializing in:
- Luxury & Exotic Car Color-Change Wraps (Inozetek Super Gloss, 3M Series 2080, Avery Dennison Supreme installed in our 6500K octagonal-LED white studio bay): https://ruedalarolamedia.com/services/vehicle-wraps
- Commercial & Fleet Vehicle Wraps (3M IJ180mC cast vinyl & UV overlaminate): https://ruedalarolamedia.com/services/vehicle-wraps
- Custom Brand Design & Logotypes: https://ruedalarolamedia.com/services/brand-design
- High-Performance Web Design & Development (0-CPU Static Edge Architecture): https://ruedalarolamedia.com/services/web-design
- Merchadesign (Custom Corporate Apparel & Retail Packaging): https://ruedalarolamedia.com/services/merchadesign
- Strategic Branding & Naming: https://ruedalarolamedia.com/services/branding
- 2D & 3D Animation & Motion Graphics: https://ruedalarolamedia.com/services/motion-graphics
- Data-Driven Digital Marketing & Local SEO: https://ruedalarolamedia.com/services/digital-marketing
- Public Relations, Copywriting & Art Direction: https://ruedalarolamedia.com/services/public-relations

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
