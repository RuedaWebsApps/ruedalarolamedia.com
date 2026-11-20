import React from 'react';
import { Language, PortfolioItem } from '../types';
import { portfolioItems, portfolioItemsEs } from '../content/siteContent';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface PortfolioSectionProps {
  lang: Language;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const sectionId = isEs ? 'portafolio' : 'portfolio';
  const items = isEs ? portfolioItemsEs : portfolioItems;
  const routePrefix = isEs ? '/es/portfolio' : '/portfolio';

  return (
    <section id={sectionId} className="py-20 lg:py-28 bg-[#000000] relative scroll-mt-24">
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 text-[#ec186a]" />
              <span>{isEs ? 'Casos de Éxito' : 'Proven Track Record'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {isEs ? (
                <>
                  Nuestro <span className="text-gradient-brand">Portafolio Destacado</span>
                </>
              ) : (
                <>
                  Our Featured <span className="text-gradient-brand">Portfolio Showcase</span>
                </>
              )}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-300">
              {isEs
                ? 'Conoce algunos de los proyectos de branding, diseño y desarrollo realizados para marcas que buscan liderar su sector.'
                : 'Explore select branding, design, and identity projects crafted for businesses demanding standout presence.'}
            </p>
          </div>

          <a
            href={`${routePrefix}/logos-design`}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 rounded-xl border border-white/15 transition-all self-start md:self-auto shrink-0"
          >
            <span>{isEs ? 'Ver Galería de Logos' : 'View Logo Showcase'}</span>
            <ArrowUpRight className="w-4 h-4 text-[#ec186a]" />
          </a>
        </div>

        {/* 4 Portfolio Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {items.map((item: PortfolioItem) => (
            <a
              key={item.id}
              href={`${routePrefix}/${item.slug}`}
              className="group relative rounded-3xl overflow-hidden bg-[#141c27] border border-white/10 hover:border-purple-500/50 shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  src={item.image}
                  alt={`${item.title} by Rueda La Rola Media`}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141c27] via-transparent to-transparent opacity-80" />

                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-purple-300 border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Year tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-gray-300 border border-white/10">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Text Info Bar */}
              <div className="p-6 sm:p-8 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.summary}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-[#6a35ff] transition-all shrink-0">
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
