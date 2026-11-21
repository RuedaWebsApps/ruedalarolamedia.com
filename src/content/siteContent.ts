import { NavItem, ServiceItem, PortfolioItem, BlogPost } from '../types';

export const siteMetadata = {
  name: 'Rueda La Rola Media',
  legalName: 'Rueda La Rola Media LLC',
  url: 'https://ruedalarolamedia.com',
  phone: '(512) 774-0003',
  phoneRaw: '+15127740003',
  email: 'info@ruedalarolamedia.com',
  address: {
    city: 'Austin',
    state: 'TX',
    country: 'US',
    area: 'Austin Metropolitan Area & Central Texas',
  },
  social: {
    instagram: 'https://instagram.com/ruedalarolamedia',
    facebook: 'https://facebook.com/ruedalarolamedia',
    youtube: 'https://youtube.com/@ruedalarolamedia',
  },
};

export const navItemsEn: NavItem[] = [
  { id: 'about', label: 'About Us', href: '/#Nosotros' },
  { id: 'services', label: 'Services', href: '/#servicios' },
  { id: 'portfolio', label: 'Portfolio', href: '/#portafolio' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export const navItemsEs: NavItem[] = [
  { id: 'about', label: 'Nosotros', href: '/es#Nosotros' },
  { id: 'services', label: 'Servicios', href: '/es#servicios' },
  { id: 'portfolio', label: 'Portafolio', href: '/es#portafolio' },
  { id: 'blog', label: 'Blog', href: '/es/blog' },
  { id: 'contact', label: 'Contacto', href: '/contacto' },
];

// 8 Salient fancy_box cards (English) — with corrected Digital Marketing copy
export const servicesEn: ServiceItem[] = [
  {
    id: 'brand-design',
    title: 'Brand Design',
    tagline: 'iconsmind-Crown-2',
    description: 'Your essence, transformed into an unforgettable icon.',
    features: [],
    iconName: 'crown',
    image: '/images/service-brand.webp',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    tagline: 'iconsmind-Duplicate-Layer',
    description: 'Fast architecture, responsive design, and interactive storytelling merge to make your brand shine.',
    features: [],
    iconName: 'layers',
    image: '/images/service-web.webp',
  },
  {
    id: 'merch-design',
    title: 'Merchadesign',
    tagline: 'iconsmind-Monitor-phone',
    description: 'Objects and custom merchandise that become everyday ambassadors for your brand.',
    features: [],
    iconName: 'monitor-phone',
    image: '/images/service-mercha.webp',
  },
  {
    id: 'branding',
    title: 'Branding & Visual Identity',
    tagline: 'iconsmind-Refresh',
    description: 'Memorable identities, naming, and style guides that beat both on and off the screen.',
    features: [],
    iconName: 'refresh',
    image: '/images/service-brand.webp',
  },
  {
    id: 'animation',
    title: 'Animation & Motion Graphics',
    tagline: 'iconsmind-Photos',
    description: 'Storytelling in motion: music videos, reels, bumpers, and animated graphics.',
    features: [],
    iconName: 'photos',
    image: '/images/service-identity.webp',
  },
  {
    id: 'wrap',
    title: 'Wrap',
    tagline: 'iconsmind-Flash',
    description: 'Vehicle Graphics, Storefronts, Fleet Vehicles, Wall Murals, POP/Trade Shows, Outdoor Signage, Floor Graphics.',
    features: [],
    iconName: 'flash',
    image: '/images/service-animation.webp',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    tagline: 'iconsmind-Newsvine',
    description: 'Targeted ad campaigns, local SEO, social growth strategies, and conversion funnels that turn clicks into clients.',
    features: [],
    iconName: 'newsvine',
    image: '/images/service-marketing.webp',
  },
  {
    id: 'pr-media',
    title: 'PR',
    tagline: 'iconsmind-Sidebar-Window',
    description: 'Copywriting, photography, and art direction to fuel your channels and social networks.',
    features: [],
    iconName: 'sidebar-window',
    image: '/images/service-pr.webp',
  },
];

// 8 Salient fancy_box cards (Spanish) — with corrected Marketing digital copy
export const servicesEs: ServiceItem[] = [
  {
    id: 'brand-design',
    title: 'Diseño de Marca',
    tagline: 'iconsmind-Crown-2',
    description: 'Tu esencia, convertida en un ícono inolvidable.',
    features: [],
    iconName: 'crown',
    image: '/images/service-brand.webp',
  },
  {
    id: 'web-design',
    title: 'Diseño web',
    tagline: 'iconsmind-Duplicate-Layer',
    description: 'Arquitectura veloz, diseño responsive y storytelling interactivo se fusionan para que tu marca deslumbre.',
    features: [],
    iconName: 'layers',
    image: '/images/service-web.webp',
  },
  {
    id: 'merch-design',
    title: 'Merchadesign',
    tagline: 'iconsmind-Monitor-phone',
    description: 'Objetos y artículos personalizados que se vuelven embajadores de tu marca.',
    features: [],
    iconName: 'monitor-phone',
    image: '/images/service-mercha.webp',
  },
  {
    id: 'branding',
    title: 'Branding & diseño de marca',
    tagline: 'iconsmind-Refresh',
    description: 'Identidades memorables, naming y guías de estilo que laten dentro y fuera de la pantalla.',
    features: [],
    iconName: 'refresh',
    image: '/images/service-brand.webp',
  },
  {
    id: 'animation',
    title: 'Animación & Motion Graphics',
    tagline: 'iconsmind-Photos',
    description: 'Storytelling en movimiento: videoclips, reels, bumpers y gráficos animados.',
    features: [],
    iconName: 'photos',
    image: '/images/service-identity.webp',
  },
  {
    id: 'wrap',
    title: 'Wrap',
    tagline: 'iconsmind-Flash',
    description: 'Gráficos de vehículos, escaparates, vehículos de flota, murales de pared, POP/ferias comerciales, señalización exterior y gráficos de suelo.',
    features: [],
    iconName: 'flash',
    image: '/images/service-animation.webp',
  },
  {
    id: 'marketing',
    title: 'Marketing digital',
    tagline: 'iconsmind-Newsvine',
    description: 'Campañas de anuncios, posicionamiento SEO, gestión estratégica de redes y embudos que convierten visitas en clientes.',
    features: [],
    iconName: 'newsvine',
    image: '/images/service-marketing.webp',
  },
  {
    id: 'pr-media',
    title: 'RP',
    tagline: 'iconsmind-Sidebar-Window',
    description: 'Copywriting, fotografía y dirección de arte para alimentar tus canales y redes.',
    features: [],
    iconName: 'sidebar-window',
    image: '/images/service-pr.webp',
  },
];

// Exact 9 Brand Sections in /portfolio/logos-design (WP Post ID 627)
export interface LogofolioBrandSection {
  id: string;
  name: string;
  bgColor: string;
  bannerImage: string;
  carouselImages: string[];
}

export const logofolioHeaderBanner = '/images/wp/646_1.webp';

export const logofolioBrandSections: LogofolioBrandSection[] = [
  {
    id: 'juan-pena',
    name: 'Juan Peña',
    bgColor: '#dddcd3',
    bannerImage: '/images/wp/647_JUAN-PENA-MUESTRAS.webp',
    carouselImages: [
      '/images/wp/653_logo1.webp',
      '/images/wp/652_logo1.2.webp',
      '/images/wp/648_logo-1.3.webp',
      '/images/wp/649_logo-1.4.webp',
      '/images/wp/650_logo-1.5.webp',
      '/images/wp/651_logo-1.6.webp',
    ],
  },
  {
    id: 'aig',
    name: 'AIG',
    bgColor: '#1c1c3a',
    bannerImage: '/images/wp/654_AIG-MUESTRAS.webp',
    carouselImages: [
      '/images/wp/660_logo2.webp',
      '/images/wp/658_logo2.1.webp',
      '/images/wp/659_logo2.3.webp',
      '/images/wp/655_logo-2.4.webp',
      '/images/wp/656_logo-2.5.webp',
      '/images/wp/657_logo-2.6.webp',
    ],
  },
  {
    id: 'infrarrojo',
    name: 'Infrarrojo',
    bgColor: '#251830',
    bannerImage: '/images/wp/676_INFRARROJO-MUESTRAS.webp',
    carouselImages: [
      '/images/wp/675_logo4.webp',
      '/images/wp/674_logo4.1.webp',
      '/images/wp/673_logo4.2.webp',
      '/images/wp/672_logo-4.3.webp',
      '/images/wp/670_logo-4.5.webp',
      '/images/wp/669_logo-4.6.webp',
    ],
  },
  {
    id: 'jeronimos',
    name: 'Jerónimos',
    bgColor: '#dedede',
    bannerImage: '/images/wp/683_JERONIMOS-MUESTRAS.webp',
    carouselImages: [
      '/images/wp/682_logo5-1.webp',
      '/images/wp/681_logo5.1.webp',
      '/images/wp/680_logo5.3.webp',
      '/images/wp/679_logo5.4.webp',
      '/images/wp/678_logo5.webp',
      '/images/wp/677_logo5.5.webp',
    ],
  },
  {
    id: 'uniempresas',
    name: 'Uniempresas',
    bgColor: '#003154',
    bannerImage: '/images/wp/691_UNIEMPRESAS-MUESTRAS.webp',
    carouselImages: [
      '/images/wp/690_logo6.webp',
      '/images/wp/689_logo6.1.webp',
      '/images/wp/688_logo6.2.webp',
      '/images/wp/687_logo6.3.webp',
      '/images/wp/686_logo6.4.webp',
      '/images/wp/685_logo6.5.webp',
    ],
  },
  {
    id: 'teusaquillo',
    name: 'Teusaquillo Plaza',
    bgColor: '#dedede',
    bannerImage: '/images/wp/698_TEUSAQUILLO-MUESTRAS.webp',
    carouselImages: [
      '/images/wp/697_logo7.webp',
      '/images/wp/696_logo7.1.webp',
      '/images/wp/695_logo7.2.webp',
      '/images/wp/694_logo7.3.webp',
      '/images/wp/693_logo7.4.webp',
      '/images/wp/692_logo7.5.webp',
    ],
  },
  {
    id: 'onut',
    name: 'ONUT',
    bgColor: '#bacb3c',
    bannerImage: '/images/wp/699_ONUT-MUESTRAS.webp',
    carouselImages: [
      '/images/wp/700_logo8.4.webp',
      '/images/wp/701_logo8.3.webp',
      '/images/wp/702_logo8.2.webp',
      '/images/wp/703_logo8.1.webp',
      '/images/wp/704_logo8.webp',
    ],
  },
  {
    id: 'ancovi',
    name: 'Ancovi',
    bgColor: '#042142',
    bannerImage: '/images/wp/711_ANCOVI-MUESTRAS.webp',
    carouselImages: [
      '/images/wp/710_logo9.webp',
      '/images/wp/709_logo9.1.webp',
      '/images/wp/708_logo9.2.webp',
      '/images/wp/707_logo-9.3.webp',
      '/images/wp/706_logo-9.4.webp',
      '/images/wp/705_logo-9.5.webp',
    ],
  },
  {
    id: 'marin',
    name: 'Marín Valencia',
    bgColor: '#f4ead2',
    bannerImage: '/images/wp/719_MARIN-MUESTRAS.webp',
    carouselImages: [
      '/images/wp/718_logo10.webp',
      '/images/wp/717_logo10.1.webp',
      '/images/wp/716_logo10.2.webp',
      '/images/wp/715_logo10.3.webp',
      '/images/wp/714_logo10.4.webp',
      '/images/wp/713_logo10.5.webp',
    ],
  },
];

export const showcaseLogoFiles: { src: string; alt: string }[] = [
  { src: '/images/wp/699_ONUT-MUESTRAS.webp', alt: 'ONUT Brand Identity Logo' },
  { src: '/images/wp/691_UNIEMPRESAS-MUESTRAS.webp', alt: 'Uniempresas Corporate Logo' },
  { src: '/images/wp/711_ANCOVI-MUESTRAS.webp', alt: 'Ancovi Brand Identity Logo' },
  { src: '/images/wp/683_JERONIMOS-MUESTRAS.webp', alt: 'Jeronimos Brand Identity Logo' },
  { src: '/images/wp/676_INFRARROJO-MUESTRAS.webp', alt: 'Infrarrojo Brand Identity Logo' },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'logos-design',
    slug: 'logos-design',
    title: 'Logos design',
    client: 'Rueda La Rola Media',
    year: '2025',
    category: '',
    image: '/images/wp/702_logo8.2.webp',
    summary: 'APRIL 29, 2025',
    description: 'LOGOFOLIO Vol. 1 — Comprehensive brand identity systems, custom typography, and real-world applications.',
    highlights: [],
  },
  {
    id: 'innk',
    slug: 'luminara',
    title: 'Innk',
    client: 'Innk Creative Studio',
    year: '2024',
    category: 'BRANDING',
    image: '/images/portfolio-innk.webp',
    summary: 'MARCH 24, 2025',
    description:
      'Comprehensive visual identity, 3D character direction, and digital storytelling platform designed for Innk Creative Studio ("Indelible Stories — Ignite Massive Change").',
    highlights: [
      'Complete brand architecture, custom logotype, and vibrant indigo/violet color system',
      'Interactive web direction and high-impact 3D visual storytelling showcase',
      'Cohesive social media and digital campaign guidelines',
    ],
  },
  {
    id: 'alery',
    slug: 'astralis',
    title: 'Alery',
    client: 'Alery',
    year: '2024',
    category: 'FILM',
    image: '/images/portfolio-alery.webp',
    summary: 'FEBRUARY 28, 2025',
    description:
      'Audiovisual art direction, motion graphics system, and multi-screen brand presentation developed for Alery to captivate audiences across digital and physical channels.',
    highlights: [
      'Art direction, visual narrative, and motion identity system',
      'Multi-format assets engineered for digital video, reels, and commercial displays',
      'High-contrast editorial typography and visual guidelines',
    ],
  },
  {
    id: 'brioche',
    slug: 'spectral',
    title: 'Brioche',
    client: 'Brioche',
    year: '2023',
    category: 'WEB DESIGN',
    image: '/images/portfolio-brioche.webp',
    summary: 'FEBRUARY 24, 2025',
    description:
      'High-conversion web experience, digital menu architecture, and warm visual branding crafted to turn online visitors into loyal daily customers.',
    highlights: [
      'Responsive UI/UX design focused on visual appetite and fast mobile ordering',
      'Custom photography art direction and cohesive brand palette',
      'Optimized site architecture for local search visibility and customer retention',
    ],
  },
];

export const portfolioItemsEs: PortfolioItem[] = [
  {
    id: 'logos-design',
    slug: 'logos-design',
    title: 'Logos design',
    client: 'Rueda La Rola Media',
    year: '2025',
    category: '',
    image: '/images/wp/702_logo8.2.webp',
    summary: 'ABRIL 29, 2025',
    description: 'LOGOFOLIO Vol. 1 — Sistemas de identidad visual, tipografía a medida y aplicaciones reales de marca.',
    highlights: [],
  },
  {
    id: 'innk',
    slug: 'luminara',
    title: 'Innk',
    client: 'Innk Creative Studio',
    year: '2024',
    category: 'BRANDING',
    image: '/images/portfolio-innk.webp',
    summary: 'MARZO 24, 2025',
    description:
      'Identidad visual integral, dirección de arte 3D y ecosistema digital interactivo desarrollado para Innk Creative Studio ("Indelible Stories — Ignite Massive Change").',
    highlights: [
      'Arquitectura de marca completa, logotipo a medida y sistema cromático índigo/violeta',
      'Dirección web interactiva y presentación de portafolio de animación y narrativa visual',
      'Guías de estilo para campañas digitales y redes sociales',
    ],
  },
  {
    id: 'alery',
    slug: 'astralis',
    title: 'Alery',
    client: 'Alery',
    year: '2024',
    category: 'FILM',
    image: '/images/portfolio-alery.webp',
    summary: 'FEBRERO 28, 2025',
    description:
      'Dirección de arte audiovisual, sistema de motion graphics y presentación de marca multipantalla diseñada para conectar con la audiencia en formatos digitales y comerciales.',
    highlights: [
      'Dirección de arte, narrativa visual y sistema de identidad en movimiento',
      'Activos multiformato optimizados para video digital, reels y pantallas comerciales',
      'Jerarquía tipográfica editorial de alto impacto',
    ],
  },
  {
    id: 'brioche',
    slug: 'spectral',
    title: 'Brioche',
    client: 'Brioche',
    year: '2023',
    category: 'WEB DESIGN',
    image: '/images/portfolio-brioche.webp',
    summary: 'FEBRERO 24, 2025',
    description:
      'Soluciones digitales que transforman ideas: diseño web de alta conversión, experiencia móvil fluida e identidad visual cálida orientada a ventas.',
    highlights: [
      'Diseño UX/UI responsive enfocado en conversión y experiencia móvil',
      'Dirección fotográfica de producto y paleta de marca coherente',
      'Arquitectura optimizada para posicionamiento local y fidelización de clientes',
    ],
  },
];

// Exact 5 client sample images used in the #formulario Flickity ticker carousel (IDs 699, 691, 711, 683, 676)
export const clientLogos = [
  { name: 'ONUT', image: '/images/wp/699_ONUT-MUESTRAS.webp' },
  { name: 'UNIEMPRESAS', image: '/images/wp/691_UNIEMPRESAS-MUESTRAS.webp' },
  { name: 'ANCOVI', image: '/images/wp/711_ANCOVI-MUESTRAS.webp' },
  { name: 'JERONIMOS', image: '/images/wp/683_JERONIMOS-MUESTRAS.webp' },
  { name: 'INFRARROJO', image: '/images/wp/676_INFRARROJO-MUESTRAS.webp' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'vehicle-wraps-austin-roi',
    slug: 'vehicle-wraps-austin-roi',
    title: 'Why Commercial Vehicle Wraps Offer the Highest Local ROI in Austin, TX',
    date: 'February 12, 2026',
    readTime: '5 min read',
    category: 'Vehicle Wraps',
    author: 'Rueda La Rola Media',
    excerpt: 'Discover why fleet wraps generate between 30,000 and 70,000 daily visual impressions in Central Texas at a fraction of the cost of digital ads.',
    image: '/images/carro-wrap.webp',
    content: [
      'For service contractors, food trucks, and commercial businesses operating in the Austin metropolitan area, your work vehicle is already driving tens of thousands of miles each year.',
      'According to the Outdoor Advertising Association of America (OAAA), a single commercial vehicle wrap generates between 30,000 and 70,000 visual impressions every single day for 5 to 7 years.',
      'At Rueda La Rola Media, we exclusively utilize automotive-grade cast vinyl films with UV-protective laminates engineered for durability.',
    ],
  },
  {
    id: 'brand-identity-vs-logo',
    slug: 'brand-identity-vs-logo',
    title: 'The Critical Difference Between a Logo and a Complete Brand Identity',
    date: 'January 28, 2026',
    readTime: '4 min read',
    category: 'Branding',
    author: 'Rueda La Rola Media',
    excerpt: 'A logo is just the front door. Learn how a complete brand identity system builds instant trust, commands higher pricing, and scales your business.',
    image: '/images/split-branding.webp',
    content: [
      'While a striking logo is important, it is only a single element within a much larger ecosystem: your brand identity system.',
      'When your business presents a cohesive identity across your website, uniforms, business cards, social media, and vehicle wraps, prospective clients immediately perceive you as a trustworthy authority.',
    ],
  },
  {
    id: 'high-performance-web-design-2026',
    slug: 'high-performance-web-design-2026',
    title: 'Modern Web Design: Websites That Turn Ideas Into Income',
    date: 'January 14, 2026',
    readTime: '6 min read',
    category: 'Web Design',
    author: 'Rueda La Rola Media',
    excerpt: 'Fast architecture, responsive design, and interactive storytelling merge to make your brand shine across every screen.',
    image: '/images/split-webdesign.webp',
    content: [
      'For bold entrepreneurs, demanding corporate brands, and online stores hungry for sales, we combine standout UX/UI, solid development, and conversion strategies so every visit counts.',
    ],
  },
];

export const blogPostsEs: BlogPost[] = [
  {
    id: 'vehicle-wraps-austin-roi',
    slug: 'vehicle-wraps-austin-roi',
    title: 'Por Qué los Wraps Vehiculares Ofrecen el Mayor Retorno de Inversión',
    date: '12 de febrero de 2026',
    readTime: '5 min de lectura',
    category: 'Wrap',
    author: 'Rueda La Rola Media',
    excerpt: 'Descubre por qué los gráficos de vehículos y flotas comerciales generan miles de impresiones visuales diarias las 24 horas.',
    image: '/images/carro-wrap.webp',
    content: [
      'Gráficos de vehículos, escaparates, vehículos de flota, murales de pared, POP/ferias comerciales, señalización exterior y gráficos de suelo diseñados para destacar.',
    ],
  },
  {
    id: 'brand-identity-vs-logo',
    slug: 'brand-identity-vs-logo',
    title: 'Tomamos la Chispa de Tu Propósito y la Moldeamos en una Identidad Poderosa',
    date: '28 de enero de 2026',
    readTime: '4 min de lectura',
    category: 'Branding',
    author: 'Rueda La Rola Media',
    excerpt: 'En nuestro taller de branding destilamos la esencia de tu historia en símbolos que enamoran a primera vista.',
    image: '/images/split-branding.webp',
    content: [
      'Construimos relatos visuales que resuenan en cada punto de contacto, haciendo que tu marca viva y palpite en la mente de tu audiencia.',
    ],
  },
  {
    id: 'high-performance-web-design-2026',
    slug: 'high-performance-web-design-2026',
    title: 'Diseño Web: Webs Que Convierten Ideas en Ingresos',
    date: '14 de enero de 2026',
    readTime: '6 min de lectura',
    category: 'Diseño Web',
    author: 'Rueda La Rola Media',
    excerpt: 'Para emprendedores audaces, marcas corporativas exigentes y tiendas online hambrientas de ventas.',
    image: '/images/split-webdesign.webp',
    content: [
      'Unimos UX/UI que enamora, desarrollo sólido y estrategias de conversión para que cada visita cuente.',
    ],
  },
];
