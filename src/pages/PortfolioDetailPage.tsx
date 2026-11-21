import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {
  logofolioHeaderBanner,
  logofolioBrandSections,
  portfolioItems,
  portfolioItemsEs,
} from '../content/siteContent';

interface PortfolioDetailPageProps {
  slug: string;
  lang: Language;
}

export const PortfolioDetailPage: React.FC<PortfolioDetailPageProps> = ({ slug, lang }) => {
  const isEs = lang === 'es';
  const currentPath = isEs ? `/es/portfolio/${slug}` : `/portfolio/${slug}`;
  const list = isEs ? portfolioItemsEs : portfolioItems;
  const item = list.find((p) => p.slug === slug);

  // Interactive Lightbox state for /portfolio/logos-design
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
    brandName: string;
  } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowRight') {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                index: (prev.index + 1) % prev.images.length,
              }
            : null
        );
      } else if (e.key === 'ArrowLeft') {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                index: (prev.index - 1 + prev.images.length) % prev.images.length,
              }
            : null
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox]);

  // 1. Exact 1:1 Layout for /portfolio/logos-design (WP Post ID 627) + Interactive Lightbox
  if (slug === 'logos-design') {
    return (
      <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
        <Navbar lang={lang} currentPath={currentPath} />

        <main id="main" className="flex-grow">
          {/* Row 0: Full-Width LOGOFOLIO Vol. 1 Header Banner (image_url="646") */}
          <section className="w-full bg-[#1a0b2e]">
            <h1 className="sr-only">Logos design — Logofolio Vol. 1 Rueda La Rola Media</h1>
            <img
              src={logofolioHeaderBanner}
              alt="Logofolio Vol. 1 — Rueda La Rola Media"
              width={1920}
              height={700}
              fetchPriority="high"
              className="w-full h-auto block"
            />
          </section>

          {/* 9 Brand Showcase Sections + 4-Column Interactive Flickity Ticker Carousels */}
          {logofolioBrandSections.map((brand, bIdx) => {
            const tickerSlides = [
              ...brand.carouselImages,
              ...brand.carouselImages,
            ];
            const isFirst = bIdx === 0;
            const allBrandImages = [brand.bannerImage, ...brand.carouselImages];

            return (
              <section key={brand.id} className="w-full overflow-hidden">
                {/* Brand Banner Row with exact bg_color */}
                <div
                  className="w-full"
                  style={{ backgroundColor: brand.bgColor }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        images: allBrandImages,
                        index: 0,
                        brandName: brand.name,
                      })
                    }
                    className="w-full block cursor-zoom-in focus:outline-none"
                    aria-label={`${brand.name} — ${isEs ? 'Ampliar imagen' : 'Zoom image'}`}
                  >
                    <img
                      src={brand.bannerImage}
                      alt={`${brand.name} — Brand Identity Showcase`}
                      width={1920}
                      height={900}
                      className="w-full max-w-[1600px] mx-auto h-auto block"
                    />
                  </button>

                  {/* In WP Post 627, row 1 (#dddcd3 Juan Peña) embeds its carousel inside the same #dddcd3 row */}
                  {isFirst && (
                    <div className="w-full overflow-hidden">
                      <div className="animate-flickity-ticker flex items-center">
                        {tickerSlides.map((imgSrc, sIdx) => {
                          const realIndex = (sIdx % brand.carouselImages.length) + 1;
                          return (
                            <button
                              key={`${brand.id}-slide-${sIdx}`}
                              type="button"
                              onClick={() =>
                                setLightbox({
                                  images: allBrandImages,
                                  index: realIndex,
                                  brandName: brand.name,
                                })
                              }
                              className="w-[260px] sm:w-[320px] lg:w-[360px] shrink-0 overflow-hidden group cursor-zoom-in focus:outline-none"
                            >
                              <img
                                src={imgSrc}
                                alt={`${brand.name} Application ${sIdx + 1}`}
                                width={400}
                                height={400}
                                className="w-full h-auto block object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* For brands 2..9, the 4-col Flickity ticker carousel sits in its own full-width row */}
                {!isFirst && (
                  <div className="w-full bg-[#ffffff] overflow-hidden">
                    <div className="animate-flickity-ticker flex items-center">
                      {tickerSlides.map((imgSrc, sIdx) => {
                        const realIndex = (sIdx % brand.carouselImages.length) + 1;
                        return (
                          <button
                            key={`${brand.id}-slide-${sIdx}`}
                            type="button"
                            onClick={() =>
                              setLightbox({
                                images: allBrandImages,
                                index: realIndex,
                                brandName: brand.name,
                              })
                            }
                            className="w-[260px] sm:w-[320px] lg:w-[360px] shrink-0 overflow-hidden group cursor-zoom-in focus:outline-none"
                          >
                            <img
                              src={imgSrc}
                              alt={`${brand.name} Application ${sIdx + 1}`}
                              width={400}
                              height={400}
                              className="w-full h-auto block object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </main>

        {/* Interactive Full-Screen Lightbox Modal */}
        {lightbox && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.brandName} Gallery`}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center"
            >
              <div className="w-full flex items-center justify-between text-white font-dm text-sm mb-3 px-2">
                <span className="font-semibold tracking-wide">
                  {lightbox.brandName} ({lightbox.index + 1} / {lightbox.images.length})
                </span>
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/25 text-white text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {isEs ? 'Cerrar ✕' : 'Close ✕'}
                </button>
              </div>

              <div className="relative w-full flex items-center justify-center">
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((prev) =>
                      prev
                        ? {
                            ...prev,
                            index:
                              (prev.index - 1 + prev.images.length) %
                              prev.images.length,
                          }
                        : null
                    )
                  }
                  aria-label="Previous image"
                  className="absolute left-2 sm:left-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 cursor-pointer"
                >
                  ←
                </button>

                <img
                  src={lightbox.images[lightbox.index]}
                  alt={`${lightbox.brandName} Preview`}
                  className="max-h-[80vh] w-auto max-w-full rounded-[8px] object-contain shadow-2xl"
                />

                <button
                  type="button"
                  onClick={() =>
                    setLightbox((prev) =>
                      prev
                        ? {
                            ...prev,
                            index: (prev.index + 1) % prev.images.length,
                          }
                        : null
                    )
                  }
                  aria-label="Next image"
                  className="absolute right-2 sm:right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 cursor-pointer"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Purple Footer + Salient "Explore More Work" + Giant "© — 2026" */}
        <Footer
          lang={lang}
          showExploreMoreWork={true}
          currentPortfolioSlug="logos-design"
        />
      </div>
    );
  }

  // 2. Exact 1:1 Layout for /portfolio/luminara (Innk - WP Post ID 33) with Complete Agency Copy
  if (slug === 'luminara') {
    const innkItem = item || portfolioItems[1];
    return (
      <div className="min-h-screen flex flex-col bg-[#000000] text-white">
        <Navbar lang={lang} currentPath={currentPath} />

        <main id="main" className="flex-grow bg-[#000000]">
          {/* Top Header Row (bg_color="#000000", top_padding="3em", bottom_padding="3em") */}
          <section className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[90px] py-12 lg:py-16">
            <div className="py-[5%] pr-0 lg:pr-[20%]">
              <h1
                className="font-gloock text-white font-normal"
                style={{ fontSize: 'clamp(48px, 6vw, 104px)', lineHeight: 1.2 }}
              >
                Innk
              </h1>
            </div>

            {/* Equal-Height Bottom-Aligned Meta Bar: Year | Client | Outlined Category Pill */}
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 items-end pt-4">
              <div className="col-span-1 lg:col-span-3">
                <h6 className="font-dm text-[12px] uppercase tracking-wider text-white/60 mb-1">
                  {isEs ? 'Año' : 'Year'}
                </h6>
                <p className="font-dm text-[16px] text-white">2024</p>
              </div>
              <div className="col-span-1 lg:col-span-3">
                <h6 className="font-dm text-[12px] uppercase tracking-wider text-white/60 mb-1">
                  {isEs ? 'Cliente' : 'Client'}
                </h6>
                <p className="font-dm text-[16px] text-white">Innk</p>
              </div>
              <div className="col-span-2 lg:col-span-6 flex lg:justify-end">
                <span className="inline-block px-4 py-1.5 rounded-full border border-white/60 font-dm text-[11px] uppercase tracking-[1.2px] text-white">
                  Branding
                </span>
              </div>
            </div>
          </section>

          {/* Full-Width Hero Image (image_url="359") */}
          <section className="w-full bg-[#000000]">
            <img
              src="/images/wp/359_danielle-suijkerbuijk-ntnkDuf-tH8-unsplash-scaled-1.webp"
              alt="Innk Branding Showcase"
              width={1920}
              height={1080}
              className="w-full h-auto block object-cover"
            />
          </section>

          {/* Editorial Case Study Description Row (Replaces "Proyecto 4" placeholder with real agency copy) */}
          <section className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[90px] py-[6%]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <h6 className="font-dm text-[13px] font-semibold uppercase tracking-widest text-white/75">
                  INNK — {isEs ? 'DIRECCIÓN DE MARCA' : 'BRAND DIRECTION'}
                </h6>
              </div>
              <div className="lg:col-span-8 lg:pr-[10%]">
                <p className="font-dm text-[20px] sm:text-[24px] leading-[1.6] text-white mb-6">
                  {innkItem.description}
                </p>
                <ul className="space-y-2.5 font-dm text-[15px] text-white/75 mb-10">
                  {innkItem.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#6a35ff] mt-1">●</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#results"
                  className="inline-block font-dm text-[16px] text-white border-b border-white pb-1 hover:text-white/80 transition-colors"
                >
                  {isEs ? 'Ver Resultados' : 'View Results'}
                </a>
              </div>
            </div>
          </section>

          {/* Results Image Row (id="results", image_url="507": portfolio-innk.webp) */}
          <section id="results" className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[90px] pb-16">
            <img
              src="/images/portfolio-innk.webp"
              alt="Innk Brand Results"
              width={1400}
              height={900}
              className="w-full h-auto rounded-[5px] block"
            />
          </section>
        </main>

        <Footer
          lang={lang}
          showExploreMoreWork={true}
          currentPortfolioSlug="luminara"
        />
      </div>
    );
  }

  // 3. Exact 1:1 Layout for /portfolio/astralis (Alery) & /portfolio/spectral (Brioche) with Editorial Overview
  const isBrioche = slug === 'spectral';
  const currentItem = item || (isBrioche ? portfolioItems[3] : portfolioItems[2]);
  const headingText = isBrioche
    ? isEs
      ? 'Soluciones que transforman ideas'
      : 'Solutions that transform ideas'
    : 'Alery';
  const yearText = isBrioche ? '2023' : '2024';
  const clientText = isBrioche ? 'Brioche' : 'Alery';
  const categoryText = isBrioche ? 'Web Design' : 'Film';
  const fullImage = isBrioche
    ? '/images/portfolio-brioche.webp'
    : '/images/portfolio-alery.webp';

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white">
      <Navbar lang={lang} currentPath={currentPath} />

      <main id="main" className="flex-grow bg-[#000000]">
        {/* Top Header Row (bg_color="#000000", top_padding="3em", bottom_padding="3em") */}
        <section className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[90px] py-12 lg:py-16">
          <div className="py-[5%] pr-0 lg:pr-[20%]">
            <h1
              className="font-gloock text-white font-normal"
              style={{ fontSize: 'clamp(44px, 6vw, 104px)', lineHeight: 1.2 }}
            >
              {headingText}
            </h1>
          </div>

          {/* Equal-Height Bottom-Aligned Meta Bar: Year | Client | Outlined Category Pill */}
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 items-end pt-4">
            <div className="col-span-1 lg:col-span-3">
              <h6 className="font-dm text-[12px] uppercase tracking-wider text-white/60 mb-1">
                {isEs ? 'Año' : 'Year'}
              </h6>
              <p className="font-dm text-[16px] text-white">{yearText}</p>
            </div>
            <div className="col-span-1 lg:col-span-3">
              <h6 className="font-dm text-[12px] uppercase tracking-wider text-white/60 mb-1">
                {isEs ? 'Cliente' : 'Client'}
              </h6>
              <p className="font-dm text-[16px] text-white">{clientText}</p>
            </div>
            <div className="col-span-2 lg:col-span-6 flex lg:justify-end">
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/60 font-dm text-[11px] uppercase tracking-[1.2px] text-white">
                {categoryText}
              </span>
            </div>
          </div>
        </section>

        {/* Full-Width Project Showcase Image */}
        <section className="w-full bg-[#000000]">
          <img
            src={fullImage}
            alt={clientText}
            width={1920}
            height={1080}
            className="w-full h-auto block object-cover"
          />
        </section>

        {/* Editorial Case Study Summary Section */}
        <section className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[90px] py-[6%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <h6 className="font-dm text-[13px] font-semibold uppercase tracking-widest text-white/75">
                {clientText.toUpperCase()} — {categoryText.toUpperCase()}
              </h6>
            </div>
            <div className="lg:col-span-8 lg:pr-[10%]">
              <p className="font-dm text-[20px] sm:text-[24px] leading-[1.6] text-white mb-6">
                {currentItem.description}
              </p>
              <ul className="space-y-2.5 font-dm text-[15px] text-white/75 mb-8">
                {currentItem.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#6a35ff] mt-1">●</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
              <a
                href={isEs ? '/contacto' : '/contact'}
                className="inline-block font-dm text-[15px] text-white border-b border-white pb-1 hover:text-white/80 transition-colors"
              >
                {isEs ? 'Iniciar un proyecto similar →' : 'Start a similar project →'}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer
        lang={lang}
        showExploreMoreWork={true}
        currentPortfolioSlug={slug}
      />
    </div>
  );
};
