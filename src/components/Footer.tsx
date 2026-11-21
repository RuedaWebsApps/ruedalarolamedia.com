import React from 'react';
import { Language } from '../types';
import { LEGAL_KINDS, legalPath, legalLabel } from '../legal/legalDocs';
import { siteMetadata } from '../content/siteContent';

interface FooterProps {
  lang: Language;
  showExploreMoreWork?: boolean;
  currentPortfolioSlug?: string;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  showExploreMoreWork = false,
  currentPortfolioSlug,
}) => {
  const isEs = lang === 'es';
  const legalItems = LEGAL_KINDS.map((kind) => ({
    href: legalPath(kind, lang),
    label: legalLabel(kind, lang),
  }));

  const otherProjects = [
    {
      slug: 'spectral',
      title: 'Brioche',
      category: 'WEB DESIGN',
      date: isEs ? 'FEBRERO 24, 2025' : 'FEBRUARY 24, 2025',
      image: '/images/portfolio-brioche.webp',
    },
    {
      slug: 'astralis',
      title: 'Alery',
      category: 'FILM',
      date: isEs ? 'FEBRERO 28, 2025' : 'FEBRUARY 28, 2025',
      image: '/images/portfolio-alery.webp',
    },
    {
      slug: 'luminara',
      title: 'Innk',
      category: 'BRANDING',
      date: isEs ? 'MARZO 24, 2025' : 'MARCH 24, 2025',
      image: '/images/portfolio-innk.webp',
    },
    {
      slug: 'logos-design',
      title: 'Logos design',
      category: 'BRANDING',
      date: isEs ? 'ABRIL 29, 2025' : 'APRIL 29, 2025',
      image: '/images/wp/702_logo8.2.webp',
    },
  ]
    .filter((p) => p.slug !== currentPortfolioSlug)
    .slice(0, 3);

  return (
    <footer className="w-full">
      {/* Main Purple Footer Row (bg_color="#6a35ff", 3 equal columns + 10px copyright) */}
      <div className="w-full bg-[#6a35ff] text-white py-[36px] px-6 sm:px-10 lg:px-[90px]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-[30px]">
          {/* Column 1: Floating Left White Vinyl Logo + Paragraph + Direct Contact Info */}
          <div className="lg:p-[5%] font-dm text-[15px] leading-[26px] text-white">
            <a
              href={isEs ? '/es' : '/'}
              className="float-left mr-4 mb-2 inline-block shrink-0"
              aria-label="Rueda La Rola Media"
            >
              <img
                src="/images/logo-nav.webp"
                alt="Rueda La Rola Media"
                width={60}
                height={64}
                className="w-[60px] h-[64px] object-contain"
              />
            </a>
            <p className="text-white">
              {isEs
                ? 'En Rueda La Rola Media transformamos tus ideas en realidad. Desde el diseño de tu marca hasta soluciones digitales y físicas, ¡tenemos todo lo que necesitas para destacar!'
                : 'At Rueda La Rola Media, we transform your ideas into reality. From your brand design to digital and physical solutions, we have everything you need to stand out!'}
            </p>
            <div className="clear-both" />

            {/* Direct Contact & Location Links */}
            <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-white/90">
              <a href={`mailto:${siteMetadata.email}`} className="hover:text-white hover:underline">
                {siteMetadata.email}
              </a>
              <span>·</span>
              <a href={`tel:${siteMetadata.phoneRaw}`} className="hover:text-white hover:underline">
                {siteMetadata.phone}
              </a>
              <span>·</span>
              <span>Austin, TX</span>
            </div>
          </div>

          {/* Column 2: Services List (Fixed "Merchadesign" spelling) */}
          <div className="lg:p-[5%] font-dm text-[15px] leading-[28px] text-white">
            <p className="font-bold text-white mb-1">
              {isEs ? 'Servicios' : 'Services'}
            </p>
            <ul className="space-y-0.5 text-white">
              <li>
                <a href={isEs ? '/es#servicios' : '/#servicios'} className="hover:underline">
                  {isEs ? 'Diseño de marca' : 'Brand Design'}
                </a>
              </li>
              <li>
                <a href={isEs ? '/es#servicios' : '/#servicios'} className="hover:underline">
                  {isEs ? 'Diseño web' : 'Web Design'}
                </a>
              </li>
              <li>
                <a href={isEs ? '/es#servicios' : '/#servicios'} className="hover:underline">
                  Merchadesign
                </a>
              </li>
              <li>
                <a href={isEs ? '/es#servicios' : '/#servicios'} className="hover:underline">
                  Branding
                </a>
              </li>
              <li>
                <a href={isEs ? '/es#servicios' : '/#servicios'} className="hover:underline">
                  {isEs ? 'Marketing digital' : 'Digital Marketing'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Recent projects + nectar_portfolio category="branding" (Innk thumbnail) */}
          <div className="lg:p-[5%] font-dm text-[15px] leading-[26px] text-white">
            <p className="font-bold text-white">
              {isEs ? 'Proyectos recientes' : 'Recent projects'}
            </p>
            <p className="text-white/90 text-[13px] mb-3">
              Branding — Innk
            </p>

            <a
              href={isEs ? '/es/portfolio/luminara' : '/portfolio/luminara'}
              className="group relative block w-[150px] h-[110px] rounded-[6px] overflow-hidden bg-[#141414] shadow-md"
            >
              <img
                src="/images/portfolio-innk.webp"
                alt="Innk"
                width={200}
                height={150}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                <span className="font-gloock text-xs text-white">Innk</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom 10px Centered Copyright + Discrete Legal Links */}
        <div className="max-w-[1280px] mx-auto mt-6 pt-3 text-center font-dm text-[10px] leading-[18px] text-white/95">
          <p>
            {isEs
              ? '© Rueda la rola Branding - Todos los derechos reservados'
              : '© Rueda la rola Branding - All rights reserved'}
          </p>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-white/75">
            {legalItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white hover:underline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Salient Global Portfolio Bottom Section ("Explore More Work" + Giant "© — 2026" Banner) */}
      {showExploreMoreWork && (
        <div className="w-full bg-[#000000] text-white pt-20 pb-12 px-6 sm:px-10 lg:px-[90px]">
          <div className="max-w-[1320px] mx-auto">
            {/* Top Row: "Explore More Work" left | "View All →" right */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
              <h2 className="font-gloock text-[32px] sm:text-[42px] lg:text-[48px] text-white font-normal">
                {isEs ? 'Explorar Más Proyectos' : 'Explore More Work'}
              </h2>
              <a
                href={isEs ? '/es#portafolio' : '/#portafolio'}
                className="inline-flex items-center gap-2 font-dm text-[15px] font-medium text-white hover:text-white/80 transition-transform duration-300 hover:translate-x-1"
              >
                <span>{isEs ? 'Ver Todos' : 'View All'}</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* 3-Column Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-20">
              {otherProjects.map((proj) => (
                <a
                  key={proj.slug}
                  href={isEs ? `/es/portfolio/${proj.slug}` : `/portfolio/${proj.slug}`}
                  className="group relative block h-[320px] sm:h-[360px] rounded-[18px] overflow-hidden bg-[#141414]"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    width={520}
                    height={380}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" />

                  <div className="relative z-10 p-6 flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full border border-white/60 font-dm text-[10px] uppercase tracking-wider text-white">
                      {proj.category}
                    </span>
                    <span className="font-dm text-[11px] uppercase tracking-wider text-white/90">
                      {proj.date}
                    </span>
                  </div>

                  <div className="absolute inset-0 z-10 flex items-center justify-center p-6 text-center">
                    <h3 className="font-gloock text-[38px] sm:text-[46px] text-white font-normal">
                      {proj.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>

            {/* Monumental Salient Global Footer Copyright Banner: "© — 2026" */}
            <div className="border-t border-white/15 pt-10 text-center">
              <p
                className="font-gloock text-white font-normal tracking-tight select-none"
                style={{ fontSize: 'clamp(56px, 13vw, 190px)', lineHeight: 0.95 }}
              >
                © — 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
