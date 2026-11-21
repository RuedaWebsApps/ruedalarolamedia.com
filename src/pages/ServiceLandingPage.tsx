import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ClientFormSection } from '../components/ClientFormSection';
import {
  resolveServiceLanding,
  wrapShowcaseFinishesEn,
  wrapShowcaseFinishesEs,
  serviceLandingsEn,
  serviceLandingsEs,
  getServiceLandingUrl,
} from '../content/serviceLandings';

interface ServiceLandingPageProps {
  slug: string;
  lang: Language;
}

const LandingIconsmindSvg: React.FC<{ name: string; gradId: string }> = ({ name, gradId }) => {
  const strokeUrl = `url(#${gradId})`;
  switch (name) {
    case 'crown':
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <path
            d="M7 36L11 16L20 25L25 13L30 25L39 16L43 36H7Z"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-white"
          />
          <path d="M7 41H43" stroke={strokeUrl} strokeWidth="1.7" strokeLinecap="round" className="group-hover:stroke-white" />
        </svg>
      );
    case 'flash':
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <path
            d="M28 7L12 27H25L22 43L38 23H25L28 7Z"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-white"
          />
        </svg>
      );
    case 'refresh':
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <path
            d="M39 25C39 32.732 32.732 39 25 39C17.268 39 11 32.732 11 25C11 17.268 17.268 11 25 11C29.8 11 34.04 13.42 36.56 17.1"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            className="group-hover:stroke-white"
          />
          <path d="M37 10V18H29" stroke={strokeUrl} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
        </svg>
      );
    case 'photos':
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <rect x="11" y="14" width="31" height="24" rx="2" stroke={strokeUrl} strokeWidth="1.7" className="group-hover:stroke-white" />
          <circle cx="20" cy="22" r="3" stroke={strokeUrl} strokeWidth="1.6" className="group-hover:stroke-white" />
          <path d="M12 35L21 27L28 33L34 27L42 35" stroke={strokeUrl} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
        </svg>
      );
    case 'monitor-phone':
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <rect x="6" y="10" width="30" height="22" rx="2" stroke={strokeUrl} strokeWidth="1.7" className="group-hover:stroke-white" />
          <rect x="32" y="21" width="12" height="21" rx="2" stroke={strokeUrl} strokeWidth="1.7" className="group-hover:stroke-white" />
        </svg>
      );
    case 'newsvine':
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <path d="M25 42V14" stroke={strokeUrl} strokeWidth="1.7" strokeLinecap="round" className="group-hover:stroke-white" />
          <path d="M25 22C25 16 31 11 38 11C38 18 33 23 25 23" stroke={strokeUrl} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
          <path d="M25 29C25 23 19 18 12 18C12 25 17 30 25 30" stroke={strokeUrl} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
        </svg>
      );
    case 'sidebar-window':
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <rect x="7" y="10" width="36" height="30" rx="2.5" stroke={strokeUrl} strokeWidth="1.7" className="group-hover:stroke-white" />
          <path d="M7 18H43" stroke={strokeUrl} strokeWidth="1.7" className="group-hover:stroke-white" />
          <path d="M19 18V40" stroke={strokeUrl} strokeWidth="1.7" className="group-hover:stroke-white" />
        </svg>
      );
    case 'layers':
    default:
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <path d="M25 9L43 18.5L25 28L7 18.5L25 9Z" stroke={strokeUrl} strokeWidth="1.7" strokeLinejoin="round" className="group-hover:stroke-white" />
          <path d="M7 26L25 35.5L43 26" stroke={strokeUrl} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
          <path d="M7 33.5L25 43L43 33.5" stroke={strokeUrl} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
        </svg>
      );
  }
};

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({ slug, lang }) => {
  const isEs = lang === 'es';
  const service = resolveServiceLanding(slug, lang);
  const currentPath = isEs ? `/es/servicios/${slug}` : `/services/${slug}`;

  // Scroll-driven Salient scroll_pos_advanced hero title lerp
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const [heroScroll, setHeroScroll] = useState(0);
  const targetHeroScrollRef = useRef(0);
  const currentHeroScrollRef = useRef(0);
  const heroRafRef = useRef<number | null>(null);

  // Interactive Finish Visualizer state for Vehicle Wraps landing
  const wrapFinishes = isEs ? wrapShowcaseFinishesEs : wrapShowcaseFinishesEn;
  const [activeFinishIdx, setActiveFinishIdx] = useState(0);
  const activeFinish = wrapFinishes[activeFinishIdx] || wrapFinishes[0];

  // Sticky 80vh blurred_scale lookbook stack for Vehicle Wraps landing
  const stackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [stackTransforms, setStackTransforms] = useState<{ scale: number; blur: number }[]>(
    () => wrapFinishes.map(() => ({ scale: 1, blur: 0 }))
  );
  const [cursor, setCursor] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  // Lightbox for Wrap Lookbook
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  // FAQ open index
  const [openFaq, setOpenFaq] = useState<number>(0);

  useEffect(() => {
    const step = () => {
      const diff = targetHeroScrollRef.current - currentHeroScrollRef.current;
      if (Math.abs(diff) > 0.001) {
        currentHeroScrollRef.current += diff * 0.16;
        setHeroScroll(currentHeroScrollRef.current);
        heroRafRef.current = window.requestAnimationFrame(step);
      } else {
        currentHeroScrollRef.current = targetHeroScrollRef.current;
        setHeroScroll(currentHeroScrollRef.current);
        heroRafRef.current = null;
      }
    };

    const onScroll = () => {
      const el = heroSectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 900;
        const startY = vh * 0.25;
        const endY = -vh * 0.35;
        const raw = (startY - rect.top) / (startY - endY);
        targetHeroScrollRef.current = Math.max(0, Math.min(1, raw));
        if (heroRafRef.current === null) {
          heroRafRef.current = window.requestAnimationFrame(step);
        }
      }

      // Update Sticky Lookbook Stack blurred_scale transforms
      if (service?.id === 'wrap') {
        const nextTf = wrapFinishes.map((_, idx) => {
          const curr = stackRefs.current[idx];
          const next = stackRefs.current[idx + 1];
          if (!curr || !next) return { scale: 1, blur: 0 };
          const cRect = curr.getBoundingClientRect();
          const nRect = next.getBoundingClientRect();
          const h = cRect.height || 640;
          const dist = nRect.top - cRect.top;
          if (dist >= h) return { scale: 1, blur: 0 };
          const ov = Math.max(0, Math.min(1, 1 - dist / h));
          return {
            scale: Number((1 - ov * 0.18).toFixed(4)),
            blur: Number((ov * 5.0).toFixed(2)),
          };
        });
        setStackTransforms(nextTf);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (heroRafRef.current !== null) {
        window.cancelAnimationFrame(heroRafRef.current);
      }
    };
  }, [service?.id, wrapFinishes]);

  // Pre-select this service in the #formulario section on mount without scrolling the page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
    if (service && typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('rlr:select-service', {
          detail: { label: service.navLabel, focus: false },
        })
      );
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
        <Navbar lang={lang} currentPath={currentPath} />
        <main id="main" className="flex-grow flex items-center justify-center p-12 text-center">
          <div>
            <h1 className="font-gloock text-4xl mb-4">
              {isEs ? 'Servicio no encontrado' : 'Service Not Found'}
            </h1>
            <a
              href={isEs ? '/es#servicios' : '/#servicios'}
              className="inline-block px-7 py-3 bg-[#6a35ff] text-white font-dm text-sm font-semibold rounded-[4px]"
            >
              {isEs ? 'Ver todos los servicios' : 'View All Services'}
            </a>
          </div>
        </main>
        <Footer lang={lang} />
      </div>
    );
  }

  const isWrap = service.id === 'wrap';
  const allServicesDict = isEs ? serviceLandingsEs : serviceLandingsEn;
  const otherServices = Object.values(allServicesDict).filter((s) => s.id !== service.id);

  const selectServiceAndScroll = (label: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('rlr:select-service', { detail: label }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
      <Navbar lang={lang} currentPath={currentPath} />

      <main id="main" className="flex-grow">
        {/* =====================================================================
            HERO SECTION: Clean White Octagonal-LED Studio for Wrap | #6a35ff Salient Banner for Other Services
           ===================================================================== */}
        {isWrap ? (
          <section
            ref={heroSectionRef}
            className="relative w-full bg-[#ffffff] text-[#000000] pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-black/10"
          >
            {/* Subtle Architectural Octagonal LED Ceiling Grid SVG Backdrop in Pure White Studio */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-[0.45]"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 0%, rgba(106,53,255,0.10) 0%, rgba(255,255,255,0) 72%)`,
              }}
            />

            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[70px] relative z-10">
              {/* Top Atelier Eyebrow Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-black/10">
                <div className="inline-flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6a35ff]" />
                  <span className="font-josefin text-[12px] font-semibold uppercase tracking-[2px] text-[#000000]">
                    {isEs
                      ? 'WHITE-ROOM WRAP ATELIER · AUSTIN, TX'
                      : 'WHITE-ROOM WRAP ATELIER · AUSTIN, TX'}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 font-dm text-[12px] font-medium text-[#555555]">
                  <span className="px-3 py-1 rounded-full bg-[#f4f4f4] text-[#000000]">
                    Inozetek Super Gloss
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#f4f4f4] text-[#000000]">
                    3M Series 2080
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#f4f4f4] text-[#000000]">
                    Avery Dennison Supreme
                  </span>
                </div>
              </div>

              {/* Scroll-Driven Monumental Gloock Title (Salient scroll_pos_advanced replica on Pure White) */}
              <div
                style={{
                  transform: `translate3d(0, ${(heroScroll * 75).toFixed(2)}%, 0)`,
                  opacity: Number((1 - heroScroll * 0.92).toFixed(3)),
                }}
                className="text-center px-2 sm:px-[8%] pb-6 will-change-transform"
              >
                <h1
                  className="font-gloock text-[#000000] font-normal tracking-normal mx-auto"
                  style={{
                    fontSize: 'clamp(68px, 11.5vw, 195px)',
                    lineHeight: 0.9,
                  }}
                >
                  Wrap
                </h1>
                <p className="font-dm text-[16px] sm:text-[19px] leading-[1.6] text-[#333333] max-w-[780px] mx-auto mt-5">
                  {service.heroSubtitle}
                </p>
              </div>

              {/* Centerpiece Exotic Supercar in Pure White Octagonal-LED Studio Bay */}
              <div className="relative z-20 max-w-[1160px] mx-auto mt-2">
                <div className="relative rounded-[24px] overflow-hidden bg-[#f8f8fa] border border-black/10 shadow-[0_35px_90px_rgba(0,0,0,0.14)]">
                  <img
                    src="/images/wraps/wrap-ferrari-ultraviolet.webp"
                    alt="Ferrari SF90 Stradale in Inozetek Super Gloss Ultraviolet Wrap inside White Octagonal LED Studio"
                    width={1376}
                    height={768}
                    fetchPriority="high"
                    className="w-full h-auto block object-cover"
                  />

                  {/* Floating Bottom Glass Bar over the White Epoxy Floor */}
                  <div className="bg-white/90 backdrop-blur-md border-t border-black/10 px-6 sm:px-10 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="font-josefin text-[11px] font-bold uppercase tracking-[1.8px] text-[#6a35ff]">
                        {isEs
                          ? 'BAHÍA BLANCA CON ILUMINACIÓN LED OCTOGONAL 6500K'
                          : '6500K OCTAGONAL LED WHITE STUDIO BAY'}
                      </span>
                      <p className="font-gloock text-[20px] sm:text-[24px] text-[#000000]">
                        Ferrari SF90 Stradale · Inozetek Super Gloss Ultraviolet
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="#visualizer"
                        className="px-5 py-3 rounded-[4px] border border-black/25 font-dm text-[13px] font-semibold uppercase tracking-wider text-[#000000] hover:bg-[#000000] hover:text-white transition-colors"
                      >
                        {isEs ? 'Explorar Acabados' : 'Explore Finishes'}
                      </a>
                      <a
                        href="#formulario"
                        onClick={() => selectServiceAndScroll(service.navLabel)}
                        className="px-6 py-3 rounded-[4px] bg-[#6a35ff] text-white font-dm text-[13px] font-semibold uppercase tracking-wider hover:bg-[#60318a] transition-colors"
                      >
                        {isEs ? 'Cotizar Mi Wrap' : 'Quote My Wrap'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* Standard Service Hero Banner matching Salient #6a35ff Wrap Section */
          <section
            ref={heroSectionRef}
            className="relative w-full bg-[#6a35ff] text-white py-[5vw] overflow-hidden"
          >
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
              <div
                style={{
                  transform: `translate3d(0, ${(heroScroll * 80).toFixed(2)}%, 0)`,
                  opacity: Number((1 - heroScroll * 0.92).toFixed(3)),
                }}
                className="relative z-10 text-center px-2 sm:px-[10%] lg:px-[16%] pb-8 will-change-transform"
              >
                <p className="font-josefin text-[12px] uppercase tracking-[2px] text-white/80 mb-3">
                  Rueda La Rola Media · Austin, TX
                </p>
                <h1
                  className="font-gloock text-white font-normal tracking-normal mx-auto"
                  style={{
                    fontSize: 'clamp(54px, 9.5vw, 165px)',
                    lineHeight: 0.94,
                  }}
                >
                  {service.heroTitle}
                </h1>
                <p className="font-dm text-[16px] sm:text-[19px] text-white/95 font-normal mt-5 max-w-[720px] mx-auto leading-[1.6]">
                  {service.heroSubtitle}
                </p>
              </div>

              <div className="relative z-20 flex justify-center mt-2">
                <div className="w-[90%] sm:w-[70%] lg:w-[56%] rounded-[20px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.35)] bg-[#141c27]">
                  <img
                    src={service.heroImage}
                    alt={service.navLabel}
                    width={960}
                    height={540}
                    fetchPriority="high"
                    className="w-full h-auto max-h-[480px] object-cover block mx-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            2026 INTERACTIVE EXOTIC & FLEET WRAP FINISH VISUALIZER (Wrap Landing Only)
           ===================================================================== */}
        {isWrap && (
          <section
            id="visualizer"
            className="w-full bg-[#ffffff] text-[#000000] py-[6vw] px-6 sm:px-10 lg:px-[70px] border-b border-black/10 scroll-mt-[90px]"
          >
            <div className="max-w-[1320px] mx-auto">
              {/* Section Header */}
              <div className="max-w-[780px] mx-auto text-center mb-12">
                <h5 className="font-dm text-[14px] font-medium text-[#6a35ff] uppercase tracking-[1.5px] mb-3">
                  {isEs
                    ? 'Tendencias 2026 en Estudio Blanco · Configurador de Acabados'
                    : '2026 White-Bay Studio Trends · Interactive Finish Showcase'}
                </h5>
                <h2 className="font-gloock text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.14] text-[#000000] font-normal mb-4">
                  {isEs
                    ? 'Colores llamativos bajo iluminación LED octogonal'
                    : 'Striking chromatic depth under octagonal LED geometry'}
                </h2>
                <p className="font-dm text-[15px] sm:text-[16px] leading-[28px] text-[#444444]">
                  {isEs
                    ? 'Selecciona un acabado para inspeccionar cómo interactúan las películas líquidas Super Gloss, los satinados de pista, los tonos camaleón ColorFlow y los sistemas de flota comercial dentro de nuestro taller blanco libre de polvo.'
                    : 'Select a finish below to inspect how liquid Super Gloss metallics, track-ready satins, prismatic ColorFlow films, and commercial fleet systems interact with our shadowless white studio bay.'}
                </p>
              </div>

              {/* Interactive Swatch Selector Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
                {wrapFinishes.map((fin, idx) => {
                  const isActive = idx === activeFinishIdx;
                  return (
                    <button
                      key={fin.id}
                      type="button"
                      onClick={() => setActiveFinishIdx(idx)}
                      className={`group flex items-center gap-3 px-5 py-3.5 rounded-full font-dm text-[14px] font-semibold transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-[#000000] text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] scale-[1.02]'
                          : 'bg-[#f4f4f4] text-[#222222] hover:bg-[#e8e8ec]'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-white/50 shrink-0 shadow-sm"
                        style={{
                          background: `linear-gradient(135deg, ${fin.colorHex} 0%, ${fin.accentHex} 100%)`,
                        }}
                      />
                      <span>{fin.carModel.split(' (')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Studio Bay Showcase Card (Clean White Architecture) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-[#f8f8fa] border border-black/10 rounded-[24px] p-5 sm:p-8 lg:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.07)]">
                {/* Left 7 Cols: High-Res Studio Photo */}
                <div className="lg:col-span-7 relative rounded-[18px] overflow-hidden bg-white border border-black/10">
                  <img
                    key={activeFinish.image}
                    src={activeFinish.image}
                    alt={`${activeFinish.carModel} — ${activeFinish.name}`}
                    width={1376}
                    height={768}
                    className="w-full h-auto block object-cover transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#000000] font-josefin text-[11px] font-bold uppercase tracking-[1.5px] shadow-sm">
                      {activeFinish.badge}
                    </span>
                  </div>
                </div>

                {/* Right 5 Cols: Finish Specifications & Direct Quote Trigger */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span
                        className="w-4 h-4 rounded-full inline-block"
                        style={{
                          background: `linear-gradient(135deg, ${activeFinish.colorHex} 0%, ${activeFinish.accentHex} 100%)`,
                        }}
                      />
                      <span className="font-dm text-[13px] font-bold uppercase tracking-wider text-[#60318a]">
                        {activeFinish.carModel}
                      </span>
                    </div>
                    <h3 className="font-gloock text-[28px] sm:text-[34px] leading-[1.15] text-[#000000]">
                      {activeFinish.name}
                    </h3>
                    <p className="font-dm text-[15px] leading-[26px] text-[#444444] mt-3">
                      {activeFinish.description}
                    </p>
                  </div>

                  {/* Technical Specification Matrix */}
                  <div className="grid grid-cols-2 gap-3.5 pt-2">
                    <div className="p-4 rounded-[12px] bg-white border border-black/10">
                      <p className="font-dm text-[11px] uppercase tracking-wider text-[#777777]">
                        {isEs ? 'Película / Marca' : 'Film Series'}
                      </p>
                      <p className="font-dm text-[14px] font-bold text-[#000000] mt-1">
                        {activeFinish.filmBrand}
                      </p>
                    </div>
                    <div className="p-4 rounded-[12px] bg-white border border-black/10">
                      <p className="font-dm text-[11px] uppercase tracking-wider text-[#777777]">
                        {isEs ? 'Acabado' : 'Surface Finish'}
                      </p>
                      <p className="font-dm text-[14px] font-bold text-[#000000] mt-1">
                        {activeFinish.finishType}
                      </p>
                    </div>
                    <div className="p-4 rounded-[12px] bg-white border border-black/10">
                      <p className="font-dm text-[11px] uppercase tracking-wider text-[#777777]">
                        {isEs ? 'Durabilidad UV' : 'UV Stability'}
                      </p>
                      <p className="font-dm text-[14px] font-bold text-[#000000] mt-1">
                        {activeFinish.warranty}
                      </p>
                    </div>
                    <div className="p-4 rounded-[12px] bg-white border border-black/10">
                      <p className="font-dm text-[11px] uppercase tracking-wider text-[#777777]">
                        {isEs ? 'Tiempo en Estudio' : 'Studio Time'}
                      </p>
                      <p className="font-dm text-[14px] font-bold text-[#000000] mt-1">
                        {activeFinish.turnaround}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#formulario"
                      onClick={() =>
                        selectServiceAndScroll(
                          `${service.navLabel} — ${activeFinish.name} (${activeFinish.carModel})`
                        )
                      }
                      className="w-full py-4 px-7 rounded-[4px] bg-[#000000] hover:bg-[#6a35ff] text-white font-dm text-[14px] font-bold uppercase tracking-[1.2px] transition-colors flex items-center justify-center gap-3"
                    >
                      <span>
                        {isEs
                          ? `Cotizar Este Acabado (${activeFinish.name})`
                          : `Request Quote for ${activeFinish.name}`}
                      </span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            SALIENT FANCY_BOX DELIVERABLES / CAPABILITIES GRID (White #ffffff)
           ===================================================================== */}
        <section className="w-full bg-[#ffffff] text-[#000000] py-[6vw] px-6 sm:px-10 lg:px-[90px]">
          <div className="max-w-[1260px] mx-auto">
            <div className="max-w-[720px] mx-auto text-center mb-14">
              <h5 className="font-dm text-[14px] font-medium text-[#000000] mb-3">
                {service.introEyebrow}
              </h5>
              <h2 className="font-gloock text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.16] text-[#000000] font-normal mb-5">
                {service.introHeading}
              </h2>
              <p className="font-dm text-[15px] sm:text-[16px] leading-[28px] text-[#333333]">
                {service.introBody}
              </p>
            </div>

            {/* Grid of Salient fancy_box (color_box_hover) Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[26px]">
              {service.deliverables.map((del, idx) => (
                <a
                  key={del.title}
                  href="#formulario"
                  onClick={() =>
                    selectServiceAndScroll(`${service.navLabel}: ${del.title}`)
                  }
                  className="group salient-fancy-box min-h-[330px] lg:min-h-[346px] p-8 lg:p-[34px] flex flex-col justify-between cursor-pointer"
                >
                  <div
                    className="fancy-box-bg"
                    style={{ backgroundImage: `url(${del.image})` }}
                  />
                  <div className="fancy-box-overlay" />

                  <div className="fancy-box-content pt-1 flex items-start justify-between">
                    <LandingIconsmindSvg
                      name={del.iconName}
                      gradId={`land-grad-${service.id}-${idx}`}
                    />
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-dm text-[11px] font-semibold uppercase tracking-wider text-white/90 border border-white/40 rounded-full px-3 py-1">
                      {isEs ? 'Cotizar →' : 'Inquire →'}
                    </span>
                  </div>

                  <div className="fancy-box-content mt-auto pt-10">
                    <h3 className="font-gloock text-[20px] lg:text-[22px] leading-[1.28] text-[#000000] group-hover:text-white transition-colors duration-300 mb-3">
                      {del.title}
                    </h3>
                    <p className="font-dm text-[14px] lg:text-[15px] leading-[24px] text-[#4a4a4a] group-hover:text-white/95 transition-colors duration-300">
                      {del.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SALIENT 80VH STICKY BLURRED_SCALE STUDIO LOOKBOOK STACK (Wrap Landing Only)
           ===================================================================== */}
        {isWrap && (
          <section
            onMouseMove={(e) =>
              setCursor({ x: e.clientX, y: e.clientY, active: true })
            }
            onMouseLeave={() => setCursor((prev) => ({ ...prev, active: false }))}
            className="relative w-full bg-[#000000] text-white py-[80px] px-4 sm:px-6 lg:px-[40px]"
          >
            {/* Floating Salient Frosted-Glass "View" Cursor Pill */}
            <div
              aria-hidden="true"
              style={{
                transform: `translate3d(${cursor.x - 42}px, ${cursor.y - 42}px, 0) scale(${
                  cursor.active ? 1 : 0.4
                })`,
                opacity: cursor.active ? 1 : 0,
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                backdropFilter: 'blur(10px)',
              }}
              className="pointer-events-none fixed top-0 left-0 z-50 hidden lg:flex w-[84px] h-[84px] rounded-full items-center justify-center font-dm text-[14px] font-medium text-white transition-[opacity,transform] duration-150 ease-out"
            >
              {isEs ? 'Ampliar' : 'View'}
            </div>

            <div className="max-w-[1400px] mx-auto mb-12 px-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h5 className="font-josefin text-[12px] uppercase tracking-[2px] text-white/70 mb-2">
                  {isEs
                    ? 'LOOKBOOK DE ESTUDIO · BAHÍA CON LUCES OCTOGONALES'
                    : 'STUDIO LOOKBOOK · OCTAGONAL LED BAY SERIES'}
                </h5>
                <h2 className="font-gloock text-[34px] sm:text-[46px] text-white font-normal leading-tight">
                  {isEs
                    ? 'Autos de Alta Gama y Flotas en Detalle'
                    : 'Exotic Supercars & Commercial Fleets Up Close'}
                </h2>
              </div>
              <p className="font-dm text-sm text-white/70 max-w-md">
                {isEs
                  ? 'Haz scroll para ver el efecto de apilamiento 3D o haz clic en cualquier vehículo para abrirlo en pantalla completa.'
                  : 'Scroll through our sticky lookbook stack or click any vehicle to inspect the wrap finish in full screen.'}
              </p>
            </div>

            <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
              {wrapFinishes.map((fin, idx) => {
                const tf = stackTransforms[idx] || { scale: 1, blur: 0 };
                return (
                  <div
                    key={fin.id}
                    ref={(el) => {
                      stackRefs.current[idx] = el;
                    }}
                    onClick={() =>
                      setLightboxImg({
                        src: fin.image,
                        title: `${fin.carModel} — ${fin.name}`,
                      })
                    }
                    style={{
                      transform: `scale(${tf.scale})`,
                      filter: tf.blur > 0.05 ? `blur(${tf.blur}px)` : 'none',
                      zIndex: idx + 1,
                    }}
                    className="group sticky top-[86px] lg:top-[96px] w-full h-[64vh] sm:h-[74vh] lg:h-[78vh] max-h-[740px] rounded-[25px] overflow-hidden bg-[#141414] will-change-transform shadow-[0_25px_70px_rgba(0,0,0,0.65)] cursor-zoom-in lg:cursor-none"
                  >
                    <img
                      src={fin.image}
                      alt={`${fin.carModel} — ${fin.name}`}
                      width={1376}
                      height={768}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(10,10,14,0.38) 0%, rgba(10,10,14,0.12) 45%, rgba(10,10,14,0.62) 100%)',
                      }}
                    />

                    {/* Top Meta Bar */}
                    <div className="relative z-10 w-full px-7 sm:px-10 pt-7 sm:pt-9 flex items-center justify-between">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/60 font-dm text-[11px] font-medium uppercase tracking-[1.2px] text-white">
                        {fin.filmBrand}
                      </span>
                      <span className="font-dm text-[12px] font-medium uppercase tracking-[1px] text-white">
                        {fin.warranty}
                      </span>
                    </div>

                    {/* Bottom Title Bar */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div>
                        <p className="font-josefin text-[12px] uppercase tracking-[2px] text-white/85 mb-1">
                          {fin.carModel}
                        </p>
                        <h3
                          className="font-gloock text-white font-normal"
                          style={{
                            fontSize: 'clamp(30px, 4.5vw, 68px)',
                            lineHeight: 1.05,
                          }}
                        >
                          {fin.name}
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#000000] font-dm text-xs font-bold uppercase tracking-wider">
                        {isEs ? 'Ampliar Foto ↗' : 'Full Screen ↗'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* =====================================================================
            SALIENT 50/50 EDGE-TO-EDGE SPLIT ROWS (#f4f4f4 & #ffffff)
           ===================================================================== */}
        <section className="w-full overflow-hidden">
          {service.splitRows.map((row, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={row.heading}
                className={`w-full grid grid-cols-1 lg:grid-cols-2 items-stretch ${
                  isEven ? 'bg-[#f4f4f4]' : 'bg-[#ffffff]'
                }`}
              >
                {/* Text Column */}
                <div
                  className={`${
                    isEven ? 'bg-[#f4f4f4] order-1' : 'bg-[#ffffff] order-1 lg:order-2'
                  } px-8 py-16 sm:p-16 lg:p-[14%] flex flex-col justify-center`}
                >
                  <h5 className="font-dm text-[14px] font-medium text-[#999999] mb-3">
                    {row.eyebrow}
                  </h5>
                  <h2 className="font-gloock text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.18] text-[#000000] font-normal mb-5">
                    {row.heading}
                  </h2>
                  <p className="font-dm text-[15px] sm:text-[16px] leading-[28px] text-[#0a0a0a]/70 font-normal mb-8">
                    {row.body}
                  </p>
                  {row.ctaText && (
                    <div>
                      <a
                        href={
                          row.ctaText.includes('Logofolio')
                            ? isEs
                              ? '/es/portfolio/logos-design'
                              : '/portfolio/logos-design'
                            : '#formulario'
                        }
                        onClick={() => selectServiceAndScroll(service.navLabel)}
                        className="inline-block px-8 py-3.5 border-2 border-black/80 font-dm text-[12px] font-bold uppercase tracking-[1.2px] text-[#000000] hover:bg-[#000000] hover:border-[#000000] hover:text-white transition-colors duration-300"
                      >
                        {row.ctaText}
                      </a>
                    </div>
                  )}
                </div>

                {/* Full-Bleed Image Column */}
                <div
                  className={`relative min-h-[400px] sm:min-h-[520px] lg:min-h-[650px] w-full overflow-hidden ${
                    isEven ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <img
                    src={row.image}
                    alt={row.heading}
                    width={1200}
                    height={768}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            );
          })}
        </section>

        {/* =====================================================================
            SALIENT 3D FLIP-IN-VERTICAL DUAL FEATURE CARDS (#60318a + #ffffff)
           ===================================================================== */}
        <section className="relative w-full bg-[#ffffff] py-[7vw] px-6 sm:px-10 lg:px-[90px]">
          <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left Box: Deep Purple #60318a */}
            <div className="bg-[#60318a] text-white p-10 sm:p-14 lg:p-[11%] flex flex-col justify-center">
              <h5 className="font-dm text-[14px] font-medium text-white mb-[15px]">
                {service.dualLeft.eyebrow}
              </h5>
              <h2 className="font-gloock text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.15] text-white font-normal mb-[22px]">
                {service.dualLeft.heading}
              </h2>
              <p className="font-dm text-[15px] sm:text-[16px] leading-[28px] text-white/95 font-normal mb-[34px]">
                {service.dualLeft.body}
              </p>
              <div>
                <a
                  href="#formulario"
                  onClick={() => selectServiceAndScroll(service.navLabel)}
                  className="group inline-flex items-center gap-3 font-dm text-[14px] font-bold text-white"
                >
                  <span>{service.dualLeft.cta}</span>
                  <span className="w-[24px] h-[24px] rounded-full border border-white/60 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5 group-hover:border-white">
                    <svg
                      viewBox="0 0 12 12"
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M4.5 2.5L8 6L4.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Box: Pure White #ffffff with x_large_depth Shadow */}
            <div
              style={{ boxShadow: '0 30px 80px rgba(0, 0, 0, 0.13)' }}
              className="bg-[#ffffff] text-[#60318a] p-10 sm:p-14 lg:p-[11%] flex flex-col justify-center relative z-10"
            >
              <h5 className="font-dm text-[14px] font-medium text-[#d81684] mb-[15px]">
                {service.dualRight.eyebrow}
              </h5>
              <h2 className="font-gloock text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.15] text-[#60318a] font-normal mb-[22px]">
                {service.dualRight.heading}
              </h2>
              <p className="font-dm text-[15px] sm:text-[16px] leading-[28px] text-[#60318a] font-normal mb-[34px]">
                {service.dualRight.body}
              </p>
              <div>
                <a
                  href="#formulario"
                  onClick={() => selectServiceAndScroll(service.navLabel)}
                  className="group inline-flex items-center gap-3 font-dm text-[14px] font-bold text-[#60318a]"
                >
                  <span>{service.dualRight.cta}</span>
                  <span className="w-[24px] h-[24px] rounded-full border border-[#60318a]/50 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5 group-hover:border-[#60318a]">
                    <svg
                      viewBox="0 0 12 12"
                      className="w-2.5 h-2.5 text-[#60318a]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M4.5 2.5L8 6L4.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            FREQUENTLY ASKED QUESTIONS (FAQ) FOR SEO & AI SEARCH ENGINES
           ===================================================================== */}
        <section className="w-full bg-[#f4f4f4] text-[#000000] py-[6vw] px-6 sm:px-10 lg:px-[90px]">
          <div className="max-w-[920px] mx-auto">
            <div className="text-center mb-12">
              <h5 className="font-dm text-[14px] font-medium text-[#60318a] mb-2">
                {isEs ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
              </h5>
              <h2 className="font-gloock text-[30px] sm:text-[38px] text-[#000000] font-normal">
                {isEs
                  ? `Todo sobre ${service.navLabel}`
                  : `Everything You Need to Know About ${service.navLabel}`}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="bg-[#ffffff] border border-black/10 rounded-[12px] overflow-hidden transition-shadow hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="w-full px-7 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-gloock text-[18px] sm:text-[20px] text-[#000000]">
                        {faq.q}
                      </span>
                      <span className="w-7 h-7 rounded-full bg-[#f4f4f4] flex items-center justify-center font-dm text-lg text-[#60318a] shrink-0">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-7 pb-6 pt-1 font-dm text-[15px] leading-[26px] text-[#444444] border-t border-black/5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            EXPLORE OTHER AGENCY SERVICES (INTERNAL SEO MESH)
           ===================================================================== */}
        <section className="w-full bg-[#ffffff] text-[#000000] py-14 px-6 sm:px-10 lg:px-[90px] border-t border-black/10">
          <div className="max-w-[1260px] mx-auto">
            <p className="font-dm text-[12px] font-bold uppercase tracking-[1.5px] text-[#777777] text-center mb-6">
              {isEs
                ? 'Explora nuestras otras especialidades'
                : 'Explore Our Other Creative Specialties'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {otherServices.map((s) => (
                <a
                  key={s.id}
                  href={getServiceLandingUrl(s.id, lang)}
                  className="px-5 py-2.5 rounded-full bg-[#f4f4f4] hover:bg-[#6a35ff] text-[#141c27] hover:text-white font-dm text-[14px] font-medium transition-colors"
                >
                  {s.navLabel} →
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            #FORMULARIO SECTION (Navy #141c27 + Client Ticker + Fluent Form #1)
           ===================================================================== */}
        <ClientFormSection lang={lang} />
      </main>

      {/* Lightbox Modal for Wrap Lookbook */}
      {lightboxImg && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl w-full flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-between text-white font-dm text-sm mb-3 px-2">
              <span className="font-semibold">{lightboxImg.title}</span>
              <button
                type="button"
                onClick={() => setLightboxImg(null)}
                className="px-3 py-1 rounded bg-white/15 hover:bg-white/30 text-white text-xs uppercase tracking-wider cursor-pointer"
              >
                {isEs ? 'Cerrar ✕' : 'Close ✕'}
              </button>
            </div>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="max-h-[82vh] w-auto max-w-full rounded-[12px] object-contain shadow-2xl"
            />
          </div>
        </div>
      )}

      <Footer lang={lang} />
    </div>
  );
};
