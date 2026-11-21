import React from 'react';
import { Language } from '../types';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {
  logofolioHeaderBanner,
  logofolioBrandSections,
  portfolioItems,
} from '../content/siteContent';

interface PortfolioDetailPageProps {
  slug: string;
  lang: Language;
}

export const PortfolioDetailPage: React.FC<PortfolioDetailPageProps> = ({ slug, lang }) => {
  const isEs = lang === 'es';
  const currentPath = isEs ? `/es/portfolio/${slug}` : `/portfolio/${slug}`;
  const item = portfolioItems.find((p) => p.slug === slug);

  // 1. Exact 1:1 Layout for /portfolio/logos-design (WP Post ID 627)
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

          {/* 9 Brand Showcase Sections + 4-Column Flickity Ticker Carousels */}
          {logofolioBrandSections.map((brand, bIdx) => {
            const tickerSlides = [
              ...brand.carouselImages,
              ...brand.carouselImages,
            ];
            const isFirst = bIdx === 0;

            return (
              <section key={brand.id} className="w-full overflow-hidden">
                {/* Brand Banner Row with exact bg_color */}
                <div
                  className="w-full"
                  style={{ backgroundColor: brand.bgColor }}
                >
                  <img
                    src={brand.bannerImage}
                    alt={`${brand.name} — Brand Identity Showcase`}
                    width={1920}
                    height={900}
                    className="w-full max-w-[1600px] mx-auto h-auto block"
                  />

                  {/* In WP Post 627, row 1 (#dddcd3 Juan Peña) embeds its carousel inside the same #dddcd3 row */}
                  {isFirst && (
                    <div className="w-full overflow-hidden">
                      <div className="animate-flickity-ticker flex items-center">
                        {tickerSlides.map((imgSrc, sIdx) => (
                          <div
                            key={`${brand.id}-slide-${sIdx}`}
                            className="w-[260px] sm:w-[320px] lg:w-[360px] shrink-0"
                          >
                            <img
                              src={imgSrc}
                              alt={`${brand.name} Application ${sIdx + 1}`}
                              width={400}
                              height={400}
                              className="w-full h-auto block object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* For brands 2..9, the 4-col Flickity ticker carousel sits in its own full-width row */}
                {!isFirst && (
                  <div className="w-full bg-[#ffffff] overflow-hidden">
                    <div className="animate-flickity-ticker flex items-center">
                      {tickerSlides.map((imgSrc, sIdx) => (
                        <div
                          key={`${brand.id}-slide-${sIdx}`}
                          className="w-[260px] sm:w-[320px] lg:w-[360px] shrink-0"
                        >
                          <img
                            src={imgSrc}
                            alt={`${brand.name} Application ${sIdx + 1}`}
                            width={400}
                            height={400}
                            className="w-full h-auto block object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </main>

        {/* Purple Footer + Salient "Explore More Work" + Giant "© — 2026" */}
        <Footer
          lang={lang}
          showExploreMoreWork={true}
          currentPortfolioSlug="logos-design"
        />
      </div>
    );
  }

  // 2. Exact 1:1 Layout for /portfolio/luminara (Innk - WP Post ID 33)
  if (slug === 'luminara') {
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
                  Year
                </h6>
                <p className="font-dm text-[16px] text-white">2024</p>
              </div>
              <div className="col-span-1 lg:col-span-3">
                <h6 className="font-dm text-[12px] uppercase tracking-wider text-white/60 mb-1">
                  Client
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

          {/* Description Row (1/3 "INNK" | 2/3 "Proyecto 4" + "View Results" underline CTA) */}
          <section className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[90px] py-[6%]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <h6 className="font-dm text-[13px] font-semibold uppercase tracking-widest text-white">
                  INNK
                </h6>
              </div>
              <div className="lg:col-span-8 lg:pr-[15%]">
                <p className="font-dm text-[20px] sm:text-[24px] leading-[1.6] text-white mb-12">
                  Proyecto 4
                </p>
                <a
                  href="#results"
                  className="inline-block font-dm text-[16px] text-white border-b border-white pb-1 hover:text-white/80 transition-colors"
                >
                  View Results
                </a>
              </div>
            </div>
          </section>

          {/* Results Image Row (id="results", image_url="507": proyect-4.png) */}
          <section id="results" className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[90px] pb-16">
            <img
              src="/images/wp/507_proyect-4.png"
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

  // 3. Exact 1:1 Layout for /portfolio/astralis (Alery - WP Post ID 75) & /portfolio/spectral (Brioche - WP Post ID 28)
  const isBrioche = slug === 'spectral';
  const headingText = isBrioche
    ? 'Soluciones que transforman ideas'
    : item?.title || 'Alery';
  const yearText = isBrioche ? '2023' : '2024';
  const clientText = isBrioche ? 'Brioche' : 'Alery';
  const categoryText = isBrioche ? 'Web Design' : 'Film';
  const fullImage = isBrioche
    ? '/images/wp/504_proyect-1.png'
    : '/images/wp/506_proyect-3.png';

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
                Year
              </h6>
              <p className="font-dm text-[16px] text-white">{yearText}</p>
            </div>
            <div className="col-span-1 lg:col-span-3">
              <h6 className="font-dm text-[12px] uppercase tracking-wider text-white/60 mb-1">
                Client
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
      </main>

      <Footer
        lang={lang}
        showExploreMoreWork={true}
        currentPortfolioSlug={slug}
      />
    </div>
  );
};
