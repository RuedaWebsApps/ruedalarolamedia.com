import { Language } from '../types';

export interface ServiceDeliverable {
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface ServiceSplitRow {
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  ctaText?: string;
}

export interface ServiceFaqItem {
  q: string;
  a: string;
}

export interface WrapShowcaseFinish {
  id: string;
  badge: string;
  name: string;
  carModel: string;
  filmBrand: string;
  finishType: string;
  warranty: string;
  turnaround: string;
  colorHex: string;
  accentHex: string;
  description: string;
  image: string;
}

export interface ServiceLandingContent {
  id: string;
  slugEn: string;
  slugEs: string;
  navLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBgColor: string;
  heroImage: string;
  introEyebrow: string;
  introHeading: string;
  introBody: string;
  deliverables: ServiceDeliverable[];
  dualLeft: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
  };
  dualRight: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
  };
  splitRows: ServiceSplitRow[];
  faqs: ServiceFaqItem[];
  seoTitle: string;
  seoDescription: string;
}

export const SERVICE_SLUGS_MAP: Record<
  string,
  { en: string; es: string; id: string }
> = {
  'brand-design': {
    id: 'brand-design',
    en: 'brand-design',
    es: 'diseno-de-marca',
  },
  'web-design': {
    id: 'web-design',
    en: 'web-design',
    es: 'diseno-web',
  },
  'merch-design': {
    id: 'merch-design',
    en: 'merchadesign',
    es: 'merchadesign',
  },
  branding: {
    id: 'branding',
    en: 'branding',
    es: 'branding',
  },
  animation: {
    id: 'animation',
    en: 'motion-graphics',
    es: 'animacion-motion-graphics',
  },
  wrap: {
    id: 'wrap',
    en: 'vehicle-wraps',
    es: 'wraps-vehiculares',
  },
  marketing: {
    id: 'marketing',
    en: 'digital-marketing',
    es: 'marketing-digital',
  },
  'pr-media': {
    id: 'pr-media',
    en: 'public-relations',
    es: 'relaciones-publicas',
  },
};

export function getServiceLandingUrl(serviceId: string, lang: Language): string {
  const entry = SERVICE_SLUGS_MAP[serviceId];
  if (!entry) return lang === 'es' ? '/es#servicios' : '/#servicios';
  return lang === 'es' ? `/es/servicios/${entry.es}` : `/services/${entry.en}`;
}

export const wrapShowcaseFinishesEn: WrapShowcaseFinish[] = [
  {
    id: 'super-gloss-ultraviolet',
    badge: '2026 EXOTIC TREND · ZERO ORANGE PEEL',
    name: 'Super Gloss Liquid Ultraviolet',
    carModel: 'Ferrari SF90 Stradale',
    filmBrand: 'Inozetek Super Gloss Metallic',
    finishType: 'Wet-Paint Mirror Gloss + Carbon Contrast',
    warranty: '5–7 Years UV & Thermal Stability',
    turnaround: '4–5 Studio Days',
    colorHex: '#6a35ff',
    accentHex: '#d81684',
    description:
      'Engineered to rival factory hypercar paint. Under our octagonal LED studio grid, Inozetek Super Gloss delivers a deep, liquid-metallic reflection with virtually zero orange-peel texture and tucked edges invisible to the naked eye.',
    image: '/images/wraps/wrap-ferrari-ultraviolet.webp',
  },
  {
    id: 'satin-miami-cyan',
    badge: 'TRACK & AERO EDITION',
    name: 'Satin Miami Cyan & Acid Lime',
    carModel: 'Porsche 911 GT3 RS (992)',
    filmBrand: 'Avery Dennison Supreme Wrapping Film',
    finishType: 'Architectural Satin + Exposed Forged Carbon',
    warranty: '7 Years Vertical / UV Certified',
    turnaround: '4–5 Studio Days',
    colorHex: '#00c8ff',
    accentHex: '#b8ff00',
    description:
      'Satin finishes freeze light along aggressive aerodynamic creases while keeping carbon-fiber hood vents, splitters, and swan-neck wings in high-contrast gloss. Installed in our dust-free white bay for surgical panel precision.',
    image: '/images/wraps/wrap-porsche-miamiblue.webp',
  },
  {
    id: 'colorflow-sunset',
    badge: 'PRISMATIC COLOR-SHIFT',
    name: 'ColorFlow Satin Crimson-to-Solar',
    carModel: 'Lamborghini Huracán STO',
    filmBrand: '3M Series 2080 / Avery ColorFlow',
    finishType: 'Multi-Angle Iridescent Satin Shift',
    warranty: '5–7 Years 3M MCS Warranty',
    turnaround: '5 Studio Days',
    colorHex: '#ff1e56',
    accentHex: '#ff9f1c',
    description:
      'Dynamic multi-layered pigments transition seamlessly from deep crimson magenta in the shade to electric solar gold under direct light, accentuating every angular supercar haunch without looking artificial.',
    image: '/images/wraps/wrap-lambo-sunset.webp',
  },
  {
    id: 'commercial-fleet-pro',
    badge: 'HIGH-ROI COMMERCIAL FLEET',
    name: 'High-Contrast Commercial Fleet Livery',
    carModel: 'Mercedes-Benz Sprinter & Ford F-150 Fleet',
    filmBrand: '3M IJ180mC Cast + 8518 Gloss Overlaminate',
    finishType: '24/7 Rolling Billboard Cast System',
    warranty: '7 Years Commercial Fleet Durability',
    turnaround: '2–3 Days per Vehicle',
    colorHex: '#60318a',
    accentHex: '#6a35ff',
    description:
      'Turn every service van, pickup truck, and box truck into a 24/7 client-acquisition machine generating 30,000 to 70,000 daily impressions across Central Texas with UV-laminated cast vinyl.',
    image: '/images/wraps/wrap-commercial-fleet.webp',
  },
];

export const wrapShowcaseFinishesEs: WrapShowcaseFinish[] = [
  {
    id: 'super-gloss-ultraviolet',
    badge: 'TENDENCIA EXÓTICA 2026 · ACABADO ESPEJO',
    name: 'Super Gloss Liquid Ultraviolet',
    carModel: 'Ferrari SF90 Stradale',
    filmBrand: 'Inozetek Super Gloss Metallic',
    finishType: 'Brillo Espejo Tipo Pintura + Carbono',
    warranty: '5–7 Años de Estabilidad UV y Térmica',
    turnaround: '4–5 Días en Estudio',
    colorHex: '#6a35ff',
    accentHex: '#d81684',
    description:
      'Diseñado para rivalizar con la pintura original de un hiperauto. Bajo nuestra matriz de luces LED octogonales, Inozetek Super Gloss ofrece una profundidad líquida sin efecto cáscara de naranja y bordes ocultos con precisión quirúrgica.',
    image: '/images/wraps/wrap-ferrari-ultraviolet.webp',
  },
  {
    id: 'satin-miami-cyan',
    badge: 'EDICIÓN TRACK & AERO',
    name: 'Satin Miami Cyan & Acid Lime',
    carModel: 'Porsche 911 GT3 RS (992)',
    filmBrand: 'Avery Dennison Supreme Wrapping Film',
    finishType: 'Satinado Arquitectónico + Carbono Expuesto',
    warranty: '7 Años de Certificación UV',
    turnaround: '4–5 Días en Estudio',
    colorHex: '#00c8ff',
    accentHex: '#b8ff00',
    description:
      'El acabado satinado esculpe la luz sobre cada línea aerodinámica mientras resalta las tomas de aire, alerones y splitters en fibra de carbono brillante. Instalado en nuestro taller blanco libre de polvo.',
    image: '/images/wraps/wrap-porsche-miamiblue.webp',
  },
  {
    id: 'colorflow-sunset',
    badge: 'CAMALEÓN IRIDISCENTE',
    name: 'ColorFlow Satin Crimson-to-Solar',
    carModel: 'Lamborghini Huracán STO',
    filmBrand: '3M Series 2080 / Avery ColorFlow',
    finishType: 'Transición Prismática Satinada Multiángulo',
    warranty: '5–7 Años Garantía 3M MCS',
    turnaround: '5 Días en Estudio',
    colorHex: '#ff1e56',
    accentHex: '#ff9f1c',
    description:
      'Pigmentos multicapa que transicionan de un carmesí profundo en sombra a un naranja solar eléctrico bajo el sol o las luces octogonales del estudio, acentuando cada ángulo agresivo de la carrocería.',
    image: '/images/wraps/wrap-lambo-sunset.webp',
  },
  {
    id: 'commercial-fleet-pro',
    badge: 'FLOTAS COMERCIALES DE ALTO ROI',
    name: 'Rotulación Integral de Flotas y Vans',
    carModel: 'Mercedes-Benz Sprinter & Ford F-150',
    filmBrand: '3M IJ180mC Cast + Laminado UV 8518',
    finishType: 'Valla Móvil 24/7 en Vinil Fundido',
    warranty: '7 Años de Durabilidad Comercial',
    turnaround: '2–3 Días por Vehículo',
    colorHex: '#60318a',
    accentHex: '#6a35ff',
    description:
      'Convierte tus camionetas, vans y vehículos de empresa en una máquina de captación de clientes las 24 horas, generando entre 30,000 y 70,000 impresiones visuales diarias con protección solar extrema.',
    image: '/images/wraps/wrap-commercial-fleet.webp',
  },
];

export const serviceLandingsEn: Record<string, ServiceLandingContent> = {
  wrap: {
    id: 'wrap',
    slugEn: 'vehicle-wraps',
    slugEs: 'wraps-vehiculares',
    navLabel: 'Vehicle Wraps',
    heroTitle: 'Wrap',
    heroSubtitle:
      'Exotic Color-Change Atelier, Commercial Fleet Graphics, Storefronts, Wall Murals, POP/Trade Shows & Architectural Vinyl in Austin, TX',
    heroBgColor: '#ffffff',
    heroImage: '/images/wraps/wrap-ferrari-ultraviolet.webp',
    introEyebrow: 'Octagonal LED Studio Precision · Exotic & Commercial Wraps',
    introHeading: 'Clinical white-room craftsmanship meets head-turning color science',
    introBody:
      'Whether transforming a Ferrari SF90 or Porsche GT3 RS in liquid super-gloss or wrapping a 20-vehicle commercial fleet to dominate Austin highways, our octagonal-LED white studio bay guarantees shadowless surface inspection, paint-safe Knifeless Tape seams, and zero contamination.',
    deliverables: [
      {
        title: 'Exotic & Luxury Color Change',
        description:
          'Liquid super-gloss, architectural satin, matte earth tones, and prismatic color-flip wraps for supercars and luxury SUVs.',
        iconName: 'crown',
        image: '/images/wraps/wrap-ferrari-ultraviolet.webp',
      },
      {
        title: 'Track & Motorsport Liveries',
        description:
          'Custom vector striping, geometric accents, and exposed carbon-fiber contrast packages engineered for aerodynamic lines.',
        iconName: 'flash',
        image: '/images/wraps/wrap-porsche-miamiblue.webp',
      },
      {
        title: 'Commercial Fleet Vehicles',
        description:
          'High-ROI full and partial wraps for Sprinter vans, pickups, and service fleets that generate up to 70,000 daily impressions.',
        iconName: 'layers',
        image: '/images/wraps/wrap-commercial-fleet.webp',
      },
      {
        title: 'Surgical Edge & Emblem Tucking',
        description:
          'Door handles, mirrors, and trim are carefully disassembled so vinyl tucks deep behind panels with a true factory-paint look.',
        iconName: 'refresh',
        image: '/images/wraps/wrap-macro-install.webp',
      },
      {
        title: 'Storefronts & Window Graphics',
        description:
          'Perforated one-way vision film, frosted privacy glass, and bold retail storefront branding that stops foot traffic.',
        iconName: 'sidebar-window',
        image: '/images/service-web.webp',
      },
      {
        title: 'Architectural Wall Murals',
        description:
          'Floor-to-ceiling custom printed textured vinyl murals for corporate offices, showrooms, gyms, and restaurants.',
        iconName: 'photos',
        image: '/images/service-identity.webp',
      },
      {
        title: 'POP & Trade Show Displays',
        description:
          'High-impact booth backdrops, dimensional graphics, and floor decals built to dominate expos and conventions.',
        iconName: 'monitor-phone',
        image: '/images/service-mercha.webp',
      },
      {
        title: 'Outdoor Signage & Floor Graphics',
        description:
          'Slip-resistant commercial floor graphics and weather-sealed exterior signage engineered for harsh Texas sunlight.',
        iconName: 'newsvine',
        image: '/images/carro-wrap.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'White-Room Atelier Standard',
      heading: 'Why our octagonal LED studio changes everything',
      body: 'Complex supercar curves and commercial body panels hide micro-defects under ordinary shop lights. Our pure-white epoxy bay and octagonal LED ceiling grid cast 6500K shadowless geometric light across every millimeter, allowing our installers to eliminate micro-bubbles, stretch marks, and edge lift before post-heating.',
      cta: 'Reserve Studio Bay',
    },
    dualRight: {
      eyebrow: '100% Paint-Safe Protection',
      heading: 'Preserves your original factory paint & resale value',
      body: 'Every wrap acts as a sacrificial shield against UV oxidation, road rash, minor stone chips, and wash swirls. We exclusively use 3M Knifeless Tape—never razor blades on your paint—so when removed years later, your OEM clearcoat emerges in showroom condition.',
      cta: 'Request Custom Quote',
    },
    splitRows: [
      {
        eyebrow: 'Master Installation Protocol',
        heading: '3-stage clay bar decontamination & precision disassembly',
        body: 'A flawless wrap is 60% preparation. Before a single inch of vinyl touches your vehicle, we perform a multi-stage chemical and clay-bar decontamination, isopropyl alcohol surface neutralization, and careful removal of trim, badges, and lamps so every edge wraps seamlessly around the panel.',
        image: '/images/wraps/wrap-macro-install.webp',
      },
      {
        eyebrow: 'Certified Film Partners',
        heading: 'Inozetek Super Gloss, 3M 2080 & Avery Dennison Supreme',
        body: 'We never compromise with cheap calendared vinyl that shrinks or cracks in Texas heat. We work exclusively with dual-cast and super-gloss films featuring air-release channel adhesives and UV-stabilized topcoats rated for 5 to 7 years of vibrant performance.',
        image: '/images/wraps/wrap-porsche-miamiblue.webp',
        ctaText: 'Schedule Wrap Consultation',
      },
      {
        eyebrow: 'Commercial Fleet Multiplication',
        heading: 'Turn your fleet into Austin’s most powerful 24/7 billboard',
        body: 'According to the Outdoor Advertising Association of America, a single wrapped commercial vehicle generates between 30,000 and 70,000 daily impressions at the lowest cost-per-thousand-impressions (CPM) of any advertising medium. We design, print, laminate, and install scalable fleet liveries.',
        image: '/images/wraps/wrap-commercial-fleet.webp',
      },
    ],
    faqs: [
      {
        q: 'How long does a luxury or commercial vehicle wrap last in Texas weather?',
        a: 'Using certified cast films from Inozetek, 3M Series 2080, and Avery Dennison Supreme with UV overlaminates, our wraps last between 5 and 7 years when properly maintained, even under intense Central Texas sun.',
      },
      {
        q: 'Will a vinyl wrap damage my Ferrari, Porsche, or factory OEM paint?',
        a: 'No—in fact, it protects your factory paint from UV fading and micro-scratches. We use 3M Knifeless Tape technology to cut vinyl without ever touching your paint with a blade, and the adhesive removes cleanly when you are ready for a new color.',
      },
      {
        q: 'How long does it take to wrap a vehicle in your studio?',
        a: 'Commercial fleet vehicles and partial wraps typically take 2 to 3 business days. Full exotic color-change wraps (which include deep decontamination, trim disassembly, door-jamb options, and post-heat curing) take 4 to 5 business days in our white studio bay.',
      },
      {
        q: 'What is the difference between Inozetek Super Gloss, Avery Dennison, and 3M 2080?',
        a: 'Inozetek is renowned for its ultra-deep, wet-paint mirror gloss with virtually zero orange peel, making it a favorite for supercars. Avery Dennison Supreme excels in silky satin/matte conformability and ColorFlow iridescent shifts, while 3M 2080 and IJ180mC are the global gold standard for long-term thermal durability and commercial fleet graphics.',
      },
    ],
    seoTitle: 'Luxury Exotic & Commercial Vehicle Wraps Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Premier exotic car color-change wrap atelier & commercial fleet wrap studio in Austin, TX. Inozetek Super Gloss, 3M 2080 & Avery Dennison installed in our octagonal-LED white bay.',
  },

  'brand-design': {
    id: 'brand-design',
    slugEn: 'brand-design',
    slugEs: 'diseno-de-marca',
    navLabel: 'Brand Design',
    heroTitle: 'Brand Design',
    heroSubtitle:
      'Your essence, transformed into an unforgettable icon — Custom Logotypes, Visual Systems & Brand Architecture',
    heroBgColor: '#6a35ff',
    heroImage: '/images/wp/699_ONUT-MUESTRAS.webp',
    introEyebrow: 'Brand Design · Iconic Visual Identity',
    introHeading: 'We craft symbols that command instant authority at first sight',
    introBody:
      'A great brand mark does more than look attractive—it distills your company’s ambition into a timeless visual signature that scales effortlessly from a 16-pixel mobile favicon to embroidered uniforms and 40-foot commercial billboards.',
    deliverables: [
      {
        title: 'Bespoke Logotype & Monogram',
        description:
          'Original vector symbols, wordmarks, and responsive lockups engineered for instant memorability.',
        iconName: 'crown',
        image: '/images/service-brand.webp',
      },
      {
        title: 'Chromatic & Color Psychology',
        description:
          'Primary and secondary color systems calibrated for Pantone print, CMYK, and high-contrast digital screens.',
        iconName: 'layers',
        image: '/images/split-branding.webp',
      },
      {
        title: 'Editorial Typography System',
        description:
          'Display and body font pairings that give your brand an unmistakable visual voice across every channel.',
        iconName: 'sidebar-window',
        image: '/images/service-web.webp',
      },
      {
        title: 'Brand Guidelines Book',
        description:
          'Comprehensive brand bible detailing clear-space rules, color codes, and real-world application standards.',
        iconName: 'refresh',
        image: '/images/service-identity.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Vector Precision',
      heading: 'Built to perform on every surface and screen',
      body: 'Many logos fail when scaled down on social media or stretched across a vehicle wrap. We test every curve, negative space, and weight ratio across dark/light backgrounds, physical print, embroidery, and signage.',
      cta: 'Start Your Brand',
    },
    dualRight: {
      eyebrow: '65+ Brands Created',
      heading: 'Proven track record across Texas & international markets',
      body: 'As showcased in our Logofolio Vol. 1, our design studio has built iconic visual identities for technology firms, medical clinics, real estate developers, automotive brands, and hospitality leaders.',
      cta: 'Request Brand Proposal',
    },
    splitRows: [
      {
        eyebrow: 'Discovery & Concept',
        heading: 'We take the spark of your purpose and shape it into a powerful identity',
        body: 'In our branding workshop, we study your market positioning, competitors, and ideal buyer psychology before sketching a single line—ensuring your visual identity sets you apart as the category leader.',
        image: '/images/split-branding.webp',
        ctaText: 'View Logofolio Vol. 1',
      },
    ],
    faqs: [
      {
        q: 'What files do I receive when my brand design is completed?',
        a: 'You receive a complete master package including vector source files (.AI, .EPS, .SVG, .PDF), high-resolution transparent PNG/WebP exports in full color, black, and white, plus your complete Brand Guidelines manual.',
      },
      {
        q: 'How many logo concepts and revisions are included?',
        a: 'Our brand design process includes 3 distinct strategic concept directions followed by collaborative refinement rounds until every detail of your chosen identity is 100% ready for launch.',
      },
    ],
    seoTitle: 'Custom Brand Design & Logo Creation Agency in Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Transform your business into an unforgettable icon. Bespoke logo design, visual identity systems, and brand style guides by Rueda La Rola Media in Austin, TX.',
  },

  'web-design': {
    id: 'web-design',
    slugEn: 'web-design',
    slugEs: 'diseno-web',
    navLabel: 'Web Design',
    heroTitle: 'Web Design',
    heroSubtitle:
      'Fast architecture, responsive design, and interactive storytelling merge to make your brand shine',
    heroBgColor: '#6a35ff',
    heroImage: '/images/portfolio-brioche.webp',
    introEyebrow: 'High-Conversion Web Design & Engineering',
    introHeading: 'Websites that turn ideas into measurable income',
    introBody:
      'For bold entrepreneurs, demanding corporate brands, and businesses hungry for growth. We combine magnetic UX/UI design, interactive scroll storytelling, and ultra-fast static edge architecture so every visitor converts.',
    deliverables: [
      {
        title: 'Bespoke UX/UI Direction',
        description:
          'Custom editorial layouts, kinetic typography, and fluid micro-interactions tailored to your brand.',
        iconName: 'layers',
        image: '/images/service-web.webp',
      },
      {
        title: 'Ultra-Fast Edge Performance',
        description:
          '0ms database latency, instant mobile load times, and Core Web Vitals engineered to outrank competitors.',
        iconName: 'flash',
        image: '/images/split-webdesign.webp',
      },
      {
        title: 'Technical SEO & AI Search Ready',
        description:
          'Full JSON-LD structured data, bilingual hreflang architecture, sitemaps, and AI crawler optimization (GEO/AEO).',
        iconName: 'newsvine',
        image: '/images/service-marketing.webp',
      },
      {
        title: 'Conversion & Lead Funnels',
        description:
          'Frictionless quote calculators, appointment booking forms, and direct WhatsApp/call integration.',
        iconName: 'monitor-phone',
        image: '/images/portfolio-brioche.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Speed = Revenue',
      heading: 'Engineered for instant mobile loading and zero downtime',
      body: '53% of mobile visitors abandon websites that take longer than 3 seconds to load. Our modern frontend architecture eliminates heavy legacy plugins and delivers instant page transitions.',
      cta: 'Upgrade Your Website',
    },
    dualRight: {
      eyebrow: 'Bilingual & Accessible',
      heading: 'Built for both classic Google SEO and modern AI engines',
      body: 'Every website we build includes complete English & Spanish localization, WCAG 2.1 AA accessibility compliance, US legal policies, and structured metadata understood by Google, ChatGPT, and Perplexity.',
      cta: 'Get Web Quote',
    },
    splitRows: [
      {
        eyebrow: 'Interactive Storytelling',
        heading: 'Digital experiences that awaken ambition and captivate visitors',
        body: 'From smooth 3D scroll transitions to high-contrast product showcases, we design websites that feel like an interactive flagship showroom rather than a generic template.',
        image: '/images/split-webdesign.webp',
      },
    ],
    faqs: [
      {
        q: 'Will my new website be optimized for mobile phones and Google SEO?',
        a: 'Yes. Every site is engineered mobile-first with full technical SEO, Open Graph metadata, JSON-LD schema markup, XML sitemaps, and sub-second page load speeds.',
      },
      {
        q: 'Can you migrate our existing WordPress site into a faster modern architecture?',
        a: 'Absolutely. We specialize in 1:1 visual and functional migrations that preserve your design and SEO equity while eliminating slow plugins, security vulnerabilities, and expensive hosting fees.',
      },
    ],
    seoTitle: 'High-Performance Web Design & Development Agency Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Custom web design, interactive UX/UI, and ultra-fast SEO-optimized websites that turn ideas into income. Rueda La Rola Media in Austin, TX.',
  },

  'merch-design': {
    id: 'merch-design',
    slugEn: 'merchadesign',
    slugEs: 'merchadesign',
    navLabel: 'Merchadesign',
    heroTitle: 'Merchadesign',
    heroSubtitle:
      'Objects that become everyday ambassadors for your brand — Custom Apparel, Packaging & Tactile Merch',
    heroBgColor: '#6a35ff',
    heroImage: '/images/service-mercha.webp',
    introEyebrow: 'Merchadesign · Tangible Brand Experience',
    introHeading: 'Merchandise so well designed your clients actually want to wear it',
    introBody:
      'Forget disposable promotional giveaways. We design retail-grade streetwear apparel, custom packaging, uniforms, and corporate kits that turn your team and customers into proud brand ambassadors.',
    deliverables: [
      {
        title: 'Custom Apparel & Uniforms',
        description:
          'Premium tees, hoodies, caps, and team uniforms with high-density screen printing and 3D embroidery.',
        iconName: 'crown',
        image: '/images/service-mercha.webp',
      },
      {
        title: 'Bespoke Product Packaging',
        description:
          'Structural box design, custom die-lines, labels, and unboxing experiences that elevate perceived value.',
        iconName: 'layers',
        image: '/images/portfolio-alery.webp',
      },
      {
        title: 'Corporate & VIP Welcome Kits',
        description:
          'Curated onboarding boxes, laser-engraved drinkware, and tactile stationery for high-value clients.',
        iconName: 'monitor-phone',
        image: '/images/service-brand.webp',
      },
      {
        title: 'Event & Trade Show Swag',
        description:
          'Limited-edition festival drops, tote bags, lanyards, and promotional objects that stand out.',
        iconName: 'flash',
        image: '/images/split-commitment.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Retail-Grade Quality',
      heading: 'Tactile craftsmanship people keep for years',
      body: 'When a client holds your packaging or wears your apparel, the fabric weight, ink texture, and typographic placement communicate your company’s standard of excellence.',
      cta: 'Design Your Merch',
    },
    dualRight: {
      eyebrow: 'End-to-End Production Ready',
      heading: 'Print-ready vector separations & mockups',
      body: 'We deliver exact Pantone color separations, embroidery stitch files, packaging die-lines, and photorealistic 3D mockups ready for immediate manufacturing.',
      cta: 'Request Merch Quote',
    },
    splitRows: [
      {
        eyebrow: 'Physical Brand Touchpoints',
        heading: 'Extend your visual identity into the physical world',
        body: 'From gourmet bakery takeaway boxes to construction crew uniforms and lifestyle merchandise drops, we ensure your brand looks unified across every physical object.',
        image: '/images/service-mercha.webp',
      },
    ],
    faqs: [
      {
        q: 'Do you design both corporate uniforms and retail product packaging?',
        a: 'Yes. We design custom apparel graphics, team uniforms, promotional merchandise, and full structural product packaging with print-ready die-lines.',
      },
    ],
    seoTitle: 'Merchadesign: Custom Corporate Merch, Apparel & Packaging | Rueda La Rola Media',
    seoDescription:
      'Turn everyday objects into brand ambassadors. Custom apparel design, corporate merchandise, uniforms, and retail packaging in Austin, TX.',
  },

  branding: {
    id: 'branding',
    slugEn: 'branding',
    slugEs: 'branding',
    navLabel: 'Branding',
    heroTitle: 'Branding',
    heroSubtitle:
      'Memorable identities that beat both on and off the screen — Strategy, Naming, Voice & Full Visual Ecosystems',
    heroBgColor: '#6a35ff',
    heroImage: '/images/split-branding.webp',
    introEyebrow: 'Strategic Branding & Corporate Identity',
    introHeading: 'More than logos: we build visual narratives that live in the minds of your audience',
    introBody:
      'True branding aligns who you are, how you sound, and how you look across every single customer touchpoint—building trust at first contact and allowing your business to command premium pricing.',
    deliverables: [
      {
        title: 'Naming & Verbal Identity',
        description:
          'Memorable brand names, taglines, manifestos, and tone-of-voice frameworks with character.',
        iconName: 'crown',
        image: '/images/split-branding.webp',
      },
      {
        title: '360° Visual Identity System',
        description:
          'Cohesive graphic systems, patterns, iconography, and art direction for digital and physical media.',
        iconName: 'refresh',
        image: '/images/portfolio-innk.webp',
      },
      {
        title: 'Corporate Stationery & Decks',
        description:
          'Executive pitch decks, commercial proposals, business cards, and digital document templates.',
        iconName: 'layers',
        image: '/images/service-brand.webp',
      },
      {
        title: 'Rebranding & Brand Evolution',
        description:
          'Modernizing established companies to attract new demographics without losing core brand equity.',
        iconName: 'flash',
        image: '/images/split-commitment.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Strategic Positioning',
      heading: 'Stand out effortlessly in crowded markets',
      body: 'When competitors all look and sound the same, a bold brand strategy gives customers an immediate emotional and rational reason to choose you.',
      cta: 'Build Your Brand',
    },
    dualRight: {
      eyebrow: 'Complete Brand Bible',
      heading: 'Consistency across every team member and vendor',
      body: 'Your team receives a complete brand playbook and asset library so every social post, vehicle wrap, uniform, and presentation stays 100% consistent.',
      cta: 'Book Strategy Call',
    },
    splitRows: [
      {
        eyebrow: 'Our Commitment',
        heading: 'Inspired by your ideas, built for long-term triumph',
        body: 'We listen carefully, map your market opportunity, and craft a complete identity system that grows alongside your company.',
        image: '/images/split-commitment.webp',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between Brand Design and full Strategic Branding?',
        a: 'Brand Design focuses on your visual symbol, logotype, and core style guide. Strategic Branding goes deeper to include naming, brand voice, market positioning, storytelling manifestos, sales decks, and multi-channel launch assets.',
      },
    ],
    seoTitle: 'Strategic Branding, Naming & Visual Identity Agency Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Memorable brand identities that beat on and off the screen. Brand strategy, naming, visual ecosystems, and rebranding in Austin, TX.',
  },

  animation: {
    id: 'animation',
    slugEn: 'motion-graphics',
    slugEs: 'animacion-motion-graphics',
    navLabel: 'Animation & Motion',
    heroTitle: 'Motion',
    heroSubtitle:
      'Storytelling in motion: music videos, reels, bumpers, and 2D/3D animated graphics that stop the scroll',
    heroBgColor: '#6a35ff',
    heroImage: '/images/portfolio-alery.webp',
    introEyebrow: 'Animation & Motion Graphics Studio',
    introHeading: 'Capture attention in the first 3 seconds with kinetic visual storytelling',
    introBody:
      'In a feed-driven world, static images get scrolled past. We produce high-energy 2D/3D motion graphics, animated logo stingers, commercial reels, and audiovisual bumpers that bring your brand to life.',
    deliverables: [
      {
        title: 'Animated Logo Stingers',
        description:
          'Dynamic intros and outros that give your YouTube, reels, and commercial videos a broadcast finish.',
        iconName: 'flash',
        image: '/images/service-identity.webp',
      },
      {
        title: 'High-Retention Social Reels',
        description:
          'Kinetic typography, motion overlays, and rhythmic cuts engineered for Instagram, TikTok, and YouTube Shorts.',
        iconName: 'photos',
        image: '/images/portfolio-alery.webp',
      },
      {
        title: 'Commercial & Product Explainers',
        description:
          '2D and 3D animated product demonstrations that simplify complex services and boost ad conversion.',
        iconName: 'monitor-phone',
        image: '/images/portfolio-innk.webp',
      },
      {
        title: 'Music Videos & Event Visuals',
        description:
          'LED stage visuals, lyric animations, and creative art direction for artists and live events.',
        iconName: 'layers',
        image: '/images/service-animation.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Scroll-Stopping Motion',
      heading: '3x higher engagement across digital ad campaigns',
      body: 'Motion graphics communicate complex value propositions in seconds while increasing viewer retention and click-through rates on paid and organic social channels.',
      cta: 'Start Motion Project',
    },
    dualRight: {
      eyebrow: 'Multi-Format Delivery',
      heading: 'Optimized for 9:16 vertical, 16:9 widescreen & 1:1 feeds',
      body: 'Every animation package is rendered and aspect-ratio adapted for Instagram Reels, TikTok, YouTube, website hero backgrounds, and digital signage.',
      cta: 'Request Motion Quote',
    },
    splitRows: [
      {
        eyebrow: 'Audiovisual Craft',
        heading: 'Rhythm, typography, and motion designed in harmony',
        body: 'From frame-by-frame storyboarding to sound design synchronization, our motion studio turns your brand assets into living cinema.',
        image: '/images/service-identity.webp',
      },
    ],
    faqs: [
      {
        q: 'In what formats do you deliver motion graphics and animated videos?',
        a: 'We deliver 4K and 1080p MP4/WebM files optimized for web and social platforms (16:9, 9:16 vertical reels, and 1:1), plus transparent-background alpha channel assets when needed.',
      },
    ],
    seoTitle: '2D & 3D Animation, Motion Graphics & Video Reels Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Storytelling in motion: animated logo stingers, social media reels, commercial explainers, and motion graphics by Rueda La Rola Media in Austin, TX.',
  },

  marketing: {
    id: 'marketing',
    slugEn: 'digital-marketing',
    slugEs: 'marketing-digital',
    navLabel: 'Digital Marketing',
    heroTitle: 'Marketing',
    heroSubtitle:
      'Data-Driven Digital Marketing, Local SEO, Google & Meta Campaigns & Lead Generation Funnels',
    heroBgColor: '#6a35ff',
    heroImage: '/images/service-marketing.webp',
    introEyebrow: 'Digital Marketing & Client Acquisition',
    introHeading: 'Turn visibility into qualified calls, appointments, and recurring revenue',
    introBody:
      'A brilliant brand deserves to be seen by ready-to-buy customers. We combine high-intent Google Search & Maps positioning, targeted Meta ad creative, and conversion landing pages to fuel predictable growth.',
    deliverables: [
      {
        title: 'Local SEO & Google Maps',
        description:
          'Dominate local searches in Austin and Central Texas with technical SEO, schema markup, and Google Business optimization.',
        iconName: 'newsvine',
        image: '/images/service-marketing.webp',
      },
      {
        title: 'Google & Meta Paid Ads',
        description:
          'ROI-focused search, display, Instagram, and Facebook ad campaigns with continuous A/B creative testing.',
        iconName: 'flash',
        image: '/images/split-webdesign.webp',
      },
      {
        title: 'Social Media Content & Growth',
        description:
          'Strategic content calendars, art direction, and community engagement that build brand authority.',
        iconName: 'photos',
        image: '/images/split-commitment.webp',
      },
      {
        title: 'Conversion Landing Pages',
        description:
          'Dedicated service landing pages engineered for maximum Quality Score and lead conversion.',
        iconName: 'monitor-phone',
        image: '/images/service-web.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Full-Funnel Strategy',
      heading: 'Creative power backed by real conversion metrics',
      body: 'Most ad agencies run generic templates that blend into the feed. Because we are a full creative house, your campaigns are powered by standout visual design, video reels, and ultra-fast landing pages.',
      cta: 'Launch Your Campaign',
    },
    dualRight: {
      eyebrow: 'AI & Search Engine Ready',
      heading: 'Positioned on Google, Maps, ChatGPT & Perplexity',
      body: 'We optimize your digital footprint for both traditional search rankings and modern AI answer engines (GEO/AEO) so customers find you first.',
      cta: 'Request Marketing Audit',
    },
    splitRows: [
      {
        eyebrow: 'Measurable Growth',
        heading: 'Every campaign engineered around qualified leads',
        body: 'We track phone calls, form submissions, and cost-per-acquisition transparently so you always know how your marketing investment is performing.',
        image: '/images/service-marketing.webp',
      },
    ],
    faqs: [
      {
        q: 'How quickly can digital marketing and SEO campaigns generate new leads?',
        a: 'Paid Google Search and Meta ad campaigns coupled with our dedicated service landing pages begin generating traffic and leads within the first week, while Local SEO compounds organic rankings over 60 to 90 days.',
      },
    ],
    seoTitle: 'Digital Marketing, Local SEO & Paid Ads Agency Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Grow your business with data-driven digital marketing, Local SEO, Google & Meta ad campaigns, and high-conversion landing pages in Austin, TX.',
  },

  'pr-media': {
    id: 'pr-media',
    slugEn: 'public-relations',
    slugEs: 'relaciones-publicas',
    navLabel: 'Public Relations',
    heroTitle: 'PR & Media',
    heroSubtitle:
      'Copywriting, photography, art direction, and public relations consulting to amplify your voice',
    heroBgColor: '#6a35ff',
    heroImage: '/images/service-pr.webp',
    introEyebrow: 'Public Relations, Art Direction & Communications',
    introHeading: 'A fresh perspective that sets your organization apart',
    introBody:
      'Public relations and strategic communications provide ideas and angles your competitors haven’t considered—shaping public perception, elevating editorial authority, and fueling your channels with world-class photography and copy.',
    deliverables: [
      {
        title: 'PR & Communications Consulting',
        description:
          'Strategic messaging, press releases, media kits, and reputation management that build institutional trust.',
        iconName: 'sidebar-window',
        image: '/images/service-pr.webp',
      },
      {
        title: 'Commercial Photography & Art Direction',
        description:
          'Editorial portraits, product photography, and architectural shoots that elevate your visual presence.',
        iconName: 'photos',
        image: '/images/split-commitment.webp',
      },
      {
        title: 'Persuasive Copywriting',
        description:
          'Bilingual English & Spanish brand storytelling, website copy, speeches, and editorial articles.',
        iconName: 'layers',
        image: '/images/split-branding.webp',
      },
      {
        title: 'Campaign & Launch Direction',
        description:
          'Integrated creative direction for product launches, corporate milestones, and cultural events.',
        iconName: 'crown',
        image: '/images/service-brand.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Innovation & Creativity',
      heading: 'A fresh perspective that transforms your communication',
      body: 'Public relations services provide ideas and points of view that help you stand out among other companies and guide the strategic direction your organization decides to take.',
      cta: 'Book PR Consultation',
    },
    dualRight: {
      eyebrow: 'Editorial Excellence',
      heading: 'Bilingual storytelling for multicultural markets',
      body: 'We craft native English and Spanish communications that resonate authentically with diverse audiences across Texas and the United States.',
      cta: 'Inquire About PR',
    },
    splitRows: [
      {
        eyebrow: 'Art Direction & Content',
        heading: 'Visual and verbal narratives that command respect',
        body: 'From executive press kits to full-scale commercial photo shoots, we produce the editorial assets that fuel your website, press coverage, and social channels.',
        image: '/images/service-pr.webp',
      },
    ],
    faqs: [
      {
        q: 'Do you provide bilingual English and Spanish PR and copywriting?',
        a: 'Yes. Our editorial and art direction team produces native English and Spanish copywriting, press kits, and campaign communications.',
      },
    ],
    seoTitle: 'Public Relations, Copywriting & Art Direction Agency Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Strategic public relations, commercial photography, art direction, and bilingual copywriting to fuel your brand channels in Austin, TX.',
  },
};

export const serviceLandingsEs: Record<string, ServiceLandingContent> = {
  wrap: {
    id: 'wrap',
    slugEn: 'vehicle-wraps',
    slugEs: 'wraps-vehiculares',
    navLabel: 'Wraps Vehiculares',
    heroTitle: 'Wrap',
    heroSubtitle:
      'Atelier de Cambio de Color para Autos de Alta Gama, Flotas Comerciales, Escaparates, Murales, POP/Ferias y Señalización en Austin, TX',
    heroBgColor: '#ffffff',
    heroImage: '/images/wraps/wrap-ferrari-ultraviolet.webp',
    introEyebrow: 'Estudio Blanco con Luces LED Octogonales · Wraps de Alta Gama y Flotas',
    introHeading: 'Perfección de estudio clínico blanco y colores que roban todas las miradas',
    introBody:
      'Ya sea transformando un Ferrari SF90 o un Porsche GT3 RS con vinil líquido Super Gloss de acabado espejo, o rotulando una flota comercial completa para dominar las autopistas de Texas, nuestra bahía blanca con iluminación LED octogonal garantiza inspección sin sombras, cortes sin navaja sobre la pintura (Knifeless Tape) y cero contaminación.',
    deliverables: [
      {
        title: 'Cambio de Color para Autos de Alta Gama',
        description:
          'Viniles Super Gloss tipo pintura húmeda, satinados arquitectónicos y tonos camaleón para superdeportivos y SUVs de lujo.',
        iconName: 'crown',
        image: '/images/wraps/wrap-ferrari-ultraviolet.webp',
      },
      {
        title: 'Diseños Track & Livery Deportivo',
        description:
          'Franjas vectoriales a medida, acentos geométricos vibrantes y contrastes con fibra de carbono expuesta.',
        iconName: 'flash',
        image: '/images/wraps/wrap-porsche-miamiblue.webp',
      },
      {
        title: 'Vehículos de Flota Comercial',
        description:
          'Rotulación integral o parcial para vans Sprinter, camionetas y flotas que generan hasta 70,000 impresiones diarias.',
        iconName: 'layers',
        image: '/images/wraps/wrap-commercial-fleet.webp',
      },
      {
        title: 'Acabados Quirúrgicos sin Bordes Visibles',
        description:
          'Desmontaje cuidadoso de manijas, espejos y molduras para ocultar el vinil detrás de cada panel como pintura de fábrica.',
        iconName: 'refresh',
        image: '/images/wraps/wrap-macro-install.webp',
      },
      {
        title: 'Escaparates y Cristales Comerciales',
        description:
          'Vinil microperforado, esmerilado de privacidad y gráficos de alto impacto para vitrinas y locales comerciales.',
        iconName: 'sidebar-window',
        image: '/images/service-web.webp',
      },
      {
        title: 'Murales de Pared Arquitectónicos',
        description:
          'Murales impresos en alta resolución de piso a techo para oficinas corporativas, showrooms, restaurantes y gimnasios.',
        iconName: 'photos',
        image: '/images/service-identity.webp',
      },
      {
        title: 'POP y Ferias Comerciales',
        description:
          'Stands, backdrops, exhibidores y gráficos dimensionales diseñados para destacar en convenciones y eventos.',
        iconName: 'monitor-phone',
        image: '/images/service-mercha.webp',
      },
      {
        title: 'Señalización Exterior y Gráficos de Suelo',
        description:
          'Gráficos de piso antideslizantes y señalética exterior laminada contra rayos UV para máxima durabilidad.',
        iconName: 'newsvine',
        image: '/images/carro-wrap.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Estándar de Estudio Blanco',
      heading: 'Por qué nuestro taller con luces octogonales marca la diferencia',
      body: 'Las curvas complejas de un superdeportivo o una camioneta ocultan microdefectos bajo luces comunes. Nuestro piso epóxico blanco puro y la matriz de luces LED octogonales proyectan iluminación geométrica sin sombras de 6500K sobre cada milímetro, asegurando cero burbujas, cero marcas de estiramiento y sellado térmico perfecto.',
      cta: 'Reservar Bahía de Estudio',
    },
    dualRight: {
      eyebrow: '100% Seguro Para Tu Pintura',
      heading: 'Protege la pintura original de fábrica y el valor de reventa',
      body: 'Cada wrap actúa como un escudo contra la oxidación solar UV, gravilla del camino y micro-rayones de lavado. Utilizamos exclusivamente cinta 3M Knifeless Tape —jamás navajas sobre tu carrocería— para que al retirar el vinil años después tu pintura original siga intacta.',
      cta: 'Cotizar Mi Wrap',
    },
    splitRows: [
      {
        eyebrow: 'Protocolo Maestro de Instalación',
        heading: 'Descontaminación en 3 etapas y desmontaje de precisión',
        body: 'Un wrap impecable es 60% preparación. Antes de aplicar un solo centímetro de vinil, realizamos descontaminación con barra de arcilla (clay bar), neutralización con alcohol isopropílico y desmontaje cuidadoso de emblemas, espejos y molduras para envolver cada borde por completo.',
        image: '/images/wraps/wrap-macro-install.webp',
      },
      {
        eyebrow: 'Películas Certificadas a Nivel Mundial',
        heading: 'Inozetek Super Gloss, 3M 2080 y Avery Dennison Supreme',
        body: 'Jamás usamos viniles calandrados económicos que se encogen o cuarteen con el calor de Texas. Trabajamos únicamente con películas fundidas (dual-cast) y Super Gloss con canales de liberación de aire y protección UV garantizada de 5 a 7 años.',
        image: '/images/wraps/wrap-porsche-miamiblue.webp',
        ctaText: 'Agendar Cita en Estudio',
      },
      {
        eyebrow: 'Multiplicación Comercial 24/7',
        heading: 'Convierte tu flota en la valla publicitaria más rentable de tu ciudad',
        body: 'Un solo vehículo comercial rotulado genera entre 30,000 y 70,000 impresiones visuales diarias con el costo por impresión más bajo de cualquier medio publicitario. Diseñamos, imprimimos, laminamos e instalamos flotas completas.',
        image: '/images/wraps/wrap-commercial-fleet.webp',
      },
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo dura un wrap vehicular de lujo o comercial bajo el sol de Texas?',
        a: 'Utilizando películas fundidas certificadas de Inozetek, 3M Serie 2080 y Avery Dennison Supreme con laminado protector UV, nuestros wraps mantienen su brillo y adherencia entre 5 y 7 años.',
      },
      {
        q: '¿El vinil daña la pintura original de mi Ferrari, Porsche o camioneta nueva?',
        a: 'Al contrario: protege la pintura original contra los rayos UV, pequeños impactos de piedras y rayones de lavado. Cortamos todo con tecnología 3M Knifeless Tape sin tocar la lámina con cuchillas.',
      },
      {
        q: '¿Cuántos días toma instalar un wrap completo en su estudio?',
        a: 'Un vehículo de flota comercial o wrap parcial toma de 2 a 3 días hábiles. Un cambio de color completo en autos de alta gama (con descontaminación profunda, desmontaje de molduras y curado térmico) toma de 4 a 5 días en nuestra bahía blanca.',
      },
      {
        q: '¿Cuál es la diferencia entre Inozetek Super Gloss, Avery Dennison y 3M 2080?',
        a: 'Inozetek destaca por su acabado espejo tipo pintura húmeda sin textura de cáscara de naranja, ideal para superdeportivos. Avery Dennison Supreme lidera en acabados satinados sedosos y efectos camaleón ColorFlow, mientras que 3M 2080 e IJ180mC son el estándar mundial de estabilidad térmica y flotas comerciales.',
      },
    ],
    seoTitle: 'Wraps Vehiculares de Alta Gama y Flotas Comerciales en Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Atelier de cambio de color para autos de lujo y rotulación de flotas comerciales en Austin, TX. Inozetek Super Gloss, 3M 2080 y Avery Dennison en estudio blanco con luces LED octogonales.',
  },

  'brand-design': {
    id: 'brand-design',
    slugEn: 'brand-design',
    slugEs: 'diseno-de-marca',
    navLabel: 'Diseño de Marca',
    heroTitle: 'Diseño de Marca',
    heroSubtitle:
      'Tu esencia, convertida en un ícono inolvidable — Logotipos a Medida, Sistemas Visuales y Arquitectura de Marca',
    heroBgColor: '#6a35ff',
    heroImage: '/images/wp/699_ONUT-MUESTRAS.webp',
    introEyebrow: 'Diseño de Marca · Identidad Visual Icónica',
    introHeading: 'Creamos símbolos que proyectan autoridad instantánea a primera vista',
    introBody:
      'Un gran logotipo hace mucho más que verse bien: sintetiza la ambición de tu empresa en una firma visual atemporal que funciona con la misma fuerza en un ícono móvil de 16 píxeles, en uniformes bordados o en una valla de autopista.',
    deliverables: [
      {
        title: 'Logotipo y Monograma a Medida',
        description:
          'Símbolos vectoriales originales y versiones adaptables diseñadas para máxima recordación.',
        iconName: 'crown',
        image: '/images/service-brand.webp',
      },
      {
        title: 'Sistema Cromático y Psicología del Color',
        description:
          'Paletas calibradas para impresión Pantone, CMYK y pantallas digitales de alto contraste.',
        iconName: 'layers',
        image: '/images/split-branding.webp',
      },
      {
        title: 'Sistema Tipográfico Editorial',
        description:
          'Combinación de fuentes titulares y de lectura que dan voz propia a tu marca.',
        iconName: 'sidebar-window',
        image: '/images/service-web.webp',
      },
      {
        title: 'Manual de Identidad de Marca',
        description:
          'Guía completa con áreas de protección, códigos de color, usos correctos y aplicaciones reales.',
        iconName: 'refresh',
        image: '/images/service-identity.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Precisión Vectorial',
      heading: 'Diseñado para destacar en cualquier soporte físico o digital',
      body: 'Probamos cada curva, proporción y espacio negativo sobre fondos claros y oscuros, impresión, bordado textil, sitios web y rotulación vehicular.',
      cta: 'Crear Mi Marca',
    },
    dualRight: {
      eyebrow: '+65 Marcas Creadas',
      heading: 'Experiencia comprobada en múltiples industrias',
      body: 'Como puedes ver en nuestro Logofolio Vol. 1, hemos desarrollado identidades para empresas de tecnología, clínicas médicas, constructoras, automotrices y restaurantes.',
      cta: 'Solicitar Propuesta',
    },
    splitRows: [
      {
        eyebrow: 'Taller de Creación',
        heading: 'Tomamos la chispa de tu propósito y la moldeamos en una identidad poderosa',
        body: 'Analizamos tu mercado, competencia y cliente ideal antes de trazar el primer boceto para asegurar que tu marca lidere su categoría.',
        image: '/images/split-branding.webp',
        ctaText: 'Ver Logofolio Vol. 1',
      },
    ],
    faqs: [
      {
        q: '¿Qué archivos entregan al finalizar el diseño de mi marca?',
        a: 'Entregamos el paquete maestro completo con archivos vectoriales editables (.AI, .EPS, .SVG, .PDF), exportaciones en alta resolución PNG/WebP con fondo transparente en versión color, blanco y negro, más tu Manual de Identidad.',
      },
      {
        q: '¿Cuántas propuestas y revisiones incluye el servicio?',
        a: 'Presentamos 3 rutas conceptuales estratégicas distintas acompañadas de rondas de refinamiento colaborativo hasta que tu identidad quede perfecta.',
      },
    ],
    seoTitle: 'Diseño de Marca y Creación de Logotipos en Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Tu esencia convertida en un ícono inolvidable. Diseño de logotipos profesionales, identidad visual y manuales de marca en Austin, TX.',
  },

  'web-design': {
    id: 'web-design',
    slugEn: 'web-design',
    slugEs: 'diseno-web',
    navLabel: 'Diseño Web',
    heroTitle: 'Diseño Web',
    heroSubtitle:
      'Arquitectura veloz, diseño responsive y storytelling interactivo se fusionan para que tu marca deslumbre',
    heroBgColor: '#6a35ff',
    heroImage: '/images/portfolio-brioche.webp',
    introEyebrow: 'Diseño y Desarrollo Web de Alta Conversión',
    introHeading: 'Webs que convierten ideas en ingresos reales',
    introBody:
      'Para emprendedores audaces, marcas corporativas exigentes y negocios hambrientos de ventas. Unimos UX/UI que enamora, animaciones fluidas y arquitectura ultra veloz para que cada visita cuente.',
    deliverables: [
      {
        title: 'Diseño UX/UI Editorial a Medida',
        description:
          'Interfaces únicas con tipografía de alto impacto, micro-interacciones y narrativa visual.',
        iconName: 'layers',
        image: '/images/service-web.webp',
      },
      {
        title: 'Velocidad Extrema y 0 Caídas',
        description:
          'Carga instantánea en celulares y máxima puntuación en Core Web Vitals de Google.',
        iconName: 'flash',
        image: '/images/split-webdesign.webp',
      },
      {
        title: 'SEO Técnico y Motores de IA',
        description:
          'Datos estructurados JSON-LD, arquitectura bilingüe EN/ES, sitemaps y optimización para ChatGPT y Google.',
        iconName: 'newsvine',
        image: '/images/service-marketing.webp',
      },
      {
        title: 'Embudos de Conversión y Citas',
        description:
          'Formularios inteligentes, botones directos de llamada y estructura enfocada en cerrar clientes.',
        iconName: 'monitor-phone',
        image: '/images/portfolio-brioche.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Velocidad = Ventas',
      heading: 'Carga en milisegundos en cualquier teléfono móvil',
      body: 'Más del 50% de los usuarios abandonan una web que tarda más de 3 segundos en abrir. Nuestra arquitectura moderna elimina plugins pesados y entrega una navegación instantánea.',
      cta: 'Cotizar Mi Web',
    },
    dualRight: {
      eyebrow: 'Bilingüe y Normativa EE. UU.',
      heading: 'Lista para Google, motores de IA y cumplimiento legal en EE. UU.',
      body: 'Cada sitio incluye versión en inglés y español, accesibilidad WCAG 2.1 AA, páginas legales de Estados Unidos y metadatos avanzados.',
      cta: 'Agendar Asesoría Web',
    },
    splitRows: [
      {
        eyebrow: 'Storytelling Interactivo',
        heading: 'Experiencias digitales que despiertan ambición y cautivan clientes',
        body: 'Desde transiciones 3D suaves hasta galerías interactivas de proyectos, diseñamos sitios que se sienten como un showroom digital de primer nivel.',
        image: '/images/split-webdesign.webp',
      },
    ],
    faqs: [
      {
        q: '¿Mi página web estará optimizada para celulares y para aparecer en Google?',
        a: 'Sí. Desarrollamos cada sitio con enfoque Mobile-First, SEO técnico completo, Schema JSON-LD, Open Graph y tiempos de carga inferiores a un segundo.',
      },
    ],
    seoTitle: 'Diseño y Desarrollo de Páginas Web en Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Webs que convierten ideas en ingresos. Diseño web responsive, UX/UI interactivo y máxima velocidad SEO en Austin, TX.',
  },

  'merch-design': {
    id: 'merch-design',
    slugEn: 'merchadesign',
    slugEs: 'merchadesign',
    navLabel: 'Merchadesign',
    heroTitle: 'Merchadesign',
    heroSubtitle:
      'Objetos que se vuelven embajadores de tu marca — Ropa Corporativa, Empaques y Merchandising Personalizado',
    heroBgColor: '#6a35ff',
    heroImage: '/images/service-mercha.webp',
    introEyebrow: 'Merchadesign · Experiencia Física de Marca',
    introHeading: 'Artículos y prendas tan bien diseñados que tus clientes querrán usarlos todos los días',
    introBody:
      'Olvida los artículos promocionales genéricos. Diseñamos prendas estilo streetwear, uniformes corporativos, empaques de producto y kits VIP que convierten a tu equipo y clientes en embajadores orgullosos de tu marca.',
    deliverables: [
      {
        title: 'Uniformes y Ropa Personalizada',
        description:
          'Camisetas, hoodies, gorras y uniformes con serigrafía de alta densidad y bordado 3D.',
        iconName: 'crown',
        image: '/images/service-mercha.webp',
      },
      {
        title: 'Diseño de Empaques (Packaging)',
        description:
          'Cajas a medida, troqueles, etiquetas y experiencias de unboxing que elevan el valor de tu producto.',
        iconName: 'layers',
        image: '/images/portfolio-alery.webp',
      },
      {
        title: 'Kits Corporativos y Regalos VIP',
        description:
          'Cajas de bienvenida, termos grabados en láser y papelería táctil para clientes clave.',
        iconName: 'monitor-phone',
        image: '/images/service-brand.webp',
      },
      {
        title: 'Merch para Eventos y Lanzamientos',
        description:
          'Colecciones cápsula, tote bags, lanyards y artículos promocionales de alto impacto.',
        iconName: 'flash',
        image: '/images/split-commitment.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Calidad Nivel Retail',
      heading: 'Diseño táctil que permanece con tus clientes por años',
      body: 'Cuando un cliente sostiene tu empaque o viste una prenda de tu marca, la calidad del diseño comunica de inmediato el nivel de tu empresa.',
      cta: 'Diseñar Mi Merch',
    },
    dualRight: {
      eyebrow: 'Listo Para Producción',
      heading: 'Separación de colores, troqueles y mockups 3D',
      body: 'Entregamos archivos vectoriales con separación Pantone, matrices para bordado, troqueles de empaque y vistas previas 3D listas para fábrica.',
      cta: 'Cotizar Merchadesign',
    },
    splitRows: [
      {
        eyebrow: 'Presencia Física',
        heading: 'Lleva la identidad de tu marca al mundo real',
        body: 'Desde empaques gourmet hasta uniformes industriales y líneas de ropa de marca, cuidamos cada detalle visual.',
        image: '/images/service-mercha.webp',
      },
    ],
    faqs: [
      {
        q: '¿Diseñan tanto uniformes de empresa como empaques de producto?',
        a: 'Sí. Desarrollamos gráficos para prendas y uniformes, artículos promocionales y diseño estructural de empaques con troqueles listos para imprenta.',
      },
    ],
    seoTitle: 'Merchadesign: Ropa Corporativa, Empaques y Merchandising | Rueda La Rola Media',
    seoDescription:
      'Objetos que se vuelven embajadores de tu marca. Diseño de uniformes, ropa personalizada, packaging y merchandising en Austin, TX.',
  },

  branding: {
    id: 'branding',
    slugEn: 'branding',
    slugEs: 'branding',
    navLabel: 'Branding',
    heroTitle: 'Branding',
    heroSubtitle:
      'Identidades memorables que laten dentro y fuera de la pantalla — Estrategia, Naming, Voz y Ecosistemas Visuales',
    heroBgColor: '#6a35ff',
    heroImage: '/images/split-branding.webp',
    introEyebrow: 'Branding Estratégico e Identidad Corporativa',
    introHeading: 'Más que logotipos: construimos relatos visuales que viven en la mente de tu audiencia',
    introBody:
      'El verdadero branding alinea quién eres, cómo hablas y cómo te ves en cada punto de contacto, generando confianza inmediata y permitiendo que tu negocio destaque con autoridad.',
    deliverables: [
      {
        title: 'Naming e Identidad Verbal',
        description:
          'Nombres con carácter, eslóganes, manifiestos de marca y definición de tono de comunicación.',
        iconName: 'crown',
        image: '/images/split-branding.webp',
      },
      {
        title: 'Sistema Visual 360°',
        description:
          'Lenguaje gráfico completo, patrones, iconografía y dirección de arte para medios físicos y digitales.',
        iconName: 'refresh',
        image: '/images/portfolio-innk.webp',
      },
      {
        title: 'Papelería y Presentaciones Comerciales',
        description:
          'Decks de ventas, propuestas ejecutivas, tarjetas y plantillas corporativas.',
        iconName: 'layers',
        image: '/images/service-brand.webp',
      },
      {
        title: 'Rebranding y Evolución de Marca',
        description:
          'Modernización estratégica de empresas establecidas para conquistar nuevos mercados.',
        iconName: 'flash',
        image: '/images/split-commitment.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Posicionamiento Estratégico',
      heading: 'Destaca con fuerza en mercados competitivos',
      body: 'Cuando todos tus competidores se ven iguales, una estrategia de marca clara le da a tus clientes una razón poderosa para elegirte.',
      cta: 'Impulsar Mi Marca',
    },
    dualRight: {
      eyebrow: 'Guía Integral de Marca',
      heading: 'Coherencia total en cada canal y formato',
      body: 'Tu equipo recibe una biblioteca completa de activos y lineamientos para que tus redes, web, vehículos y uniformes hablen el mismo idioma.',
      cta: 'Agendar Consultoría',
    },
    splitRows: [
      {
        eyebrow: 'Nuestro Compromiso',
        heading: 'Inspirados por tus ideas, enfocados en tu triunfo',
        body: 'Escuchamos con lupa, trazamos estrategias a medida y te acompañamos en cada etapa para que tu marca rompa el molde.',
        image: '/images/split-commitment.webp',
      },
    ],
    faqs: [
      {
        q: '¿Cuál es la diferencia entre Diseño de Marca y Branding Estratégico completo?',
        a: 'El Diseño de Marca se enfoca en tu logotipo y guía visual base. El Branding Estratégico abarca además naming, voz y narrativa de marca, posicionamiento de mercado, presentaciones comerciales y activos de lanzamiento multicanal.',
      },
    ],
    seoTitle: 'Agencia de Branding Estratégico, Naming e Identidad Visual en Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Identidades memorables que laten dentro y fuera de la pantalla. Estrategia de marca, naming, rebranding y sistemas visuales en Austin, TX.',
  },

  animation: {
    id: 'animation',
    slugEn: 'motion-graphics',
    slugEs: 'animacion-motion-graphics',
    navLabel: 'Animación & Motion',
    heroTitle: 'Motion',
    heroSubtitle:
      'Storytelling en movimiento: videoclips, reels, bumpers y gráficos animados 2D/3D que atrapan la atención',
    heroBgColor: '#6a35ff',
    heroImage: '/images/portfolio-alery.webp',
    introEyebrow: 'Estudio de Animación & Motion Graphics',
    introHeading: 'Atrapa la atención en los primeros 3 segundos con narrativa visual en movimiento',
    introBody:
      'En un mundo dominado por el scroll rápido, el movimiento marca la diferencia. Producimos motion graphics 2D y 3D, animación de logotipos, reels comerciales y bumpers audiovisuales llenos de energía.',
    deliverables: [
      {
        title: 'Animación de Logotipos (Logo Stingers)',
        description:
          'Intros y cierres animados que dan un acabado cinematográfico a todos tus videos.',
        iconName: 'flash',
        image: '/images/service-identity.webp',
      },
      {
        title: 'Reels Dinámicos para Redes',
        description:
          'Tipografía cinética, efectos visuales y edición rítmica para Instagram, TikTok y YouTube Shorts.',
        iconName: 'photos',
        image: '/images/portfolio-alery.webp',
      },
      {
        title: 'Videos Explicativos y Comerciales',
        description:
          'Animaciones 2D/3D de producto o servicio que simplifican ideas complejas y elevan tus ventas.',
        iconName: 'monitor-phone',
        image: '/images/portfolio-innk.webp',
      },
      {
        title: 'Videoclips y Visuales para Eventos',
        description:
          'Visuales para pantallas LED, lyric videos y dirección creativa audiovisual.',
        iconName: 'layers',
        image: '/images/service-animation.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Alto Impacto Visual',
      heading: 'Triplica la retención en tus campañas digitales',
      body: 'Los anuncios y publicaciones con motion graphics logran mayor tiempo de visualización y mejor tasa de clics que las imágenes estáticas.',
      cta: 'Cotizar Animación',
    },
    dualRight: {
      eyebrow: 'Entrega Multiformato',
      heading: 'Optimizado para vertical 9:16, horizontal 16:9 y 1:1',
      body: 'Entregamos cada pieza adaptada en resolución y proporción para Reels, TikTok, YouTube, web y pantallas comerciales.',
      cta: 'Iniciar Proyecto Motion',
    },
    splitRows: [
      {
        eyebrow: 'Arte en Movimiento',
        heading: 'Ritmo, tipografía y animación en perfecta sintonía',
        body: 'Desde el storyboard inicial hasta la sincronización sonora, damos vida a los activos visuales de tu marca.',
        image: '/images/service-identity.webp',
      },
    ],
    faqs: [
      {
        q: '¿En qué formatos entregan las animaciones y motion graphics?',
        a: 'Entregamos archivos en 4K y 1080p MP4/WebM listos para redes sociales y web (16:9, 9:16 vertical y 1:1), además de versiones con fondo transparente cuando se requieren.',
      },
    ],
    seoTitle: 'Animación 2D/3D, Motion Graphics y Reels en Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Storytelling en movimiento: videoclips, reels, bumpers, logos animados y motion graphics en Austin, TX.',
  },

  marketing: {
    id: 'marketing',
    slugEn: 'digital-marketing',
    slugEs: 'marketing-digital',
    navLabel: 'Marketing Digital',
    heroTitle: 'Marketing',
    heroSubtitle:
      'Campañas de Anuncios en Google y Meta, Posicionamiento SEO Local y Embudos de Captación de Clientes',
    heroBgColor: '#6a35ff',
    heroImage: '/images/service-marketing.webp',
    introEyebrow: 'Marketing Digital y Generación de Clientes',
    introHeading: 'Transforma la visibilidad digital en llamadas, citas y ventas constantes',
    introBody:
      'Una gran marca necesita llegar a las personas listas para comprar. Combinamos posicionamiento SEO en Google y Maps, campañas segmentadas en Meta/Google Ads y páginas de aterrizaje de alta conversión.',
    deliverables: [
      {
        title: 'SEO Local y Google Maps',
        description:
          'Posiciona tu negocio en los primeros lugares de búsqueda en Austin y Texas con SEO técnico y perfil comercial optimizado.',
        iconName: 'newsvine',
        image: '/images/service-marketing.webp',
      },
      {
        title: 'Campañas en Google Ads y Meta',
        description:
          'Anuncios segmentados en búsqueda, Instagram y Facebook enfocados en retorno de inversión.',
        iconName: 'flash',
        image: '/images/split-webdesign.webp',
      },
      {
        title: 'Estrategia y Contenido para Redes',
        description:
          'Calendarios editoriales, diseño gráfico y reels pensados para construir comunidad y autoridad.',
        iconName: 'photos',
        image: '/images/split-commitment.webp',
      },
      {
        title: 'Landing Pages de Conversión',
        description:
          'Páginas específicas por servicio diseñadas para maximizar la tasa de contacto de tus anuncios.',
        iconName: 'monitor-phone',
        image: '/images/service-web.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Estrategia Integral',
      heading: 'Creatividad de agencia respaldada por métricas reales',
      body: 'Al ser una agencia creativa integral, tus campañas cuentan con diseño de alto nivel, video en movimiento y páginas web ultra rápidas.',
      cta: 'Lanzar Mi Campaña',
    },
    dualRight: {
      eyebrow: 'SEO Clásico + Motores de IA',
      heading: 'Visibilidad en Google, Maps, ChatGPT y Perplexity',
      body: 'Optimizamos tu presencia digital tanto para buscadores tradicionales como para los nuevos motores de respuesta por inteligencia artificial.',
      cta: 'Solicitar Diagnóstico',
    },
    splitRows: [
      {
        eyebrow: 'Crecimiento Medible',
        heading: 'Cada campaña enfocada en generar prospectos calificados',
        body: 'Medimos llamadas, formularios recibidos y costo por cliente potencial para escalar lo que mejor funciona para tu negocio.',
        image: '/images/service-marketing.webp',
      },
    ],
    faqs: [
      {
        q: '¿En cuánto tiempo se empiezan a ver resultados con Marketing Digital y SEO?',
        a: 'Las campañas pagadas en Google Ads y Meta combinadas con nuestras Landing Pages generan tráfico y prospectos desde la primera semana, mientras que el posicionamiento SEO orgánico se consolida y multiplica entre los 60 y 90 días.',
      },
    ],
    seoTitle: 'Agencia de Marketing Digital, SEO Local y Google/Meta Ads en Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Atrae más clientes con marketing digital estratégico, SEO local, campañas en Google y Meta Ads y páginas de conversión en Austin, TX.',
  },

  'pr-media': {
    id: 'pr-media',
    slugEn: 'public-relations',
    slugEs: 'relaciones-publicas',
    navLabel: 'Relaciones Públicas',
    heroTitle: 'RP & Medios',
    heroSubtitle:
      'Copywriting, fotografía, dirección de arte y consultoría en relaciones públicas para alimentar tus canales y redes',
    heroBgColor: '#6a35ff',
    heroImage: '/images/service-pr.webp',
    introEyebrow: 'Relaciones Públicas, Dirección de Arte y Comunicación',
    introHeading: 'Una perspectiva fresca que marca la diferencia en la comunicación de tu empresa',
    introBody:
      'Los servicios de relaciones públicas aportan ideas y puntos de vista estratégicos para destacar frente a tu competencia, fortalecer tu reputación y nutrir tus canales con fotografía, dirección de arte y textos impecables.',
    deliverables: [
      {
        title: 'Consultoría en Relaciones Públicas',
        description:
          'Mensajes clave, comunicados de prensa, kits de medios y estrategias de reputación corporativa.',
        iconName: 'sidebar-window',
        image: '/images/service-pr.webp',
      },
      {
        title: 'Fotografía Comercial y Dirección de Arte',
        description:
          'Sesiones fotográficas de producto, retrato corporativo e instalaciones con estética editorial.',
        iconName: 'photos',
        image: '/images/split-commitment.webp',
      },
      {
        title: 'Copywriting Persuasivo Bilingüe',
        description:
          'Redacción creativa y comercial en inglés y español para sitios web, campañas y artículos.',
        iconName: 'layers',
        image: '/images/split-branding.webp',
      },
      {
        title: 'Dirección de Campañas y Lanzamientos',
        description:
          'Coordinación creativa integral para lanzamientos de marca, eventos y alianzas estratégicas.',
        iconName: 'crown',
        image: '/images/service-brand.webp',
      },
    ],
    dualLeft: {
      eyebrow: 'Innovación y Creatividad',
      heading: 'Ideas estratégicas que impulsan la dirección de tu organización',
      body: 'Una perspectiva fresca puede marcar la diferencia en tu comunicación de marketing y en la forma en que el mercado percibe el valor de tus servicios.',
      cta: 'Agendar Consultoría RP',
    },
    dualRight: {
      eyebrow: 'Comunicación Bilingüe',
      heading: 'Narrativa auténtica para el mercado hispano y anglosajón',
      body: 'Producimos contenido editorial nativo en inglés y español diseñado para conectar culturalmente con tu audiencia en Texas y Estados Unidos.',
      cta: 'Cotizar Servicio de RP',
    },
    splitRows: [
      {
        eyebrow: 'Dirección de Arte y Contenido',
        heading: 'Fotografía y narrativa verbal que inspiran confianza',
        body: 'Desde kits de prensa ejecutivos hasta dirección fotográfica para redes y sitios web, creamos los activos que alimentan tu presencia pública.',
        image: '/images/service-pr.webp',
      },
    ],
    faqs: [
      {
        q: '¿Ofrecen redacción publicitaria (copywriting) y relaciones públicas en inglés y español?',
        a: 'Sí. Nuestro equipo editorial trabaja de forma nativa en inglés y español para comunicados, sitios web, campañas publicitarias y contenido de marca.',
      },
    ],
    seoTitle: 'Agencia de Relaciones Públicas, Copywriting y Dirección de Arte en Austin, TX | Rueda La Rola Media',
    seoDescription:
      'Copywriting, fotografía, dirección de arte y consultoría de relaciones públicas para impulsar tu marca en Austin, TX.',
  },
};

export function resolveServiceLanding(
  slug: string,
  lang: Language
): ServiceLandingContent | undefined {
  const dict = lang === 'es' ? serviceLandingsEs : serviceLandingsEn;
  for (const key of Object.keys(dict)) {
    const item = dict[key];
    if (item.slugEn === slug || item.slugEs === slug || item.id === slug) {
      return item;
    }
  }
  return undefined;
}
