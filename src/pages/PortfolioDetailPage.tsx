import React from 'react';
import { Language, PortfolioItem } from '../types';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { portfolioItems, portfolioItemsEs, showcaseLogoFiles } from '../content/siteContent';
import { Sparkles, ArrowLeft, CheckCircle2, Calendar, User, Tag, ArrowRight } from 'lucide-react';

interface PortfolioDetailPageProps {
  slug: string;
  lang: Language;
}

export const PortfolioDetailPage: React.FC<PortfolioDetailPageProps> = ({ slug, lang }) => {
  const isEs = lang === 'es';
  const list = isEs ? portfolioItemsEs : portfolioItems;
  const item: PortfolioItem | undefined = list.find((p) => p.slug === slug);
  const currentPath = isEs ? `/es/portfolio/${slug}` : `/portfolio/${slug}`;

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0b0f17] text-white">
        <Navbar lang={lang} currentPath={currentPath} />
        <main id="main" className="flex-grow flex items-center justify-center p-8 text-center">
          <div>
            <h1 className="text-3xl font-black mb-4">
              {isEs ? 'Proyecto No Encontrado' : 'Project Not Found'}
            </h1>
            <p className="text-gray-400 mb-6">
              {isEs ? 'El proyecto solicitado no existe.' : 'The requested project does not exist.'}
            </p>
            <a
              href={isEs ? '/es#portafolio' : '/#portfolio'}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#6a35ff] to-[#ec186a] text-white font-bold"
            >
              {isEs ? 'Volver al Portafolio' : 'Back to Portfolio'}
            </a>
          </div>
        </main>
        <Footer lang={lang} />
      </div>
    );
  }

  const isLogosDesign = item.slug === 'logos-design';

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f17] text-white">
      <Navbar lang={lang} currentPath={currentPath} />

      <main id="main" className="flex-grow">
        {/* Breadcrumb & Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <a
            href={isEs ? '/es#portafolio' : '/#portfolio'}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isEs ? 'Volver a Portafolio' : 'Back to Portfolio'}</span>
          </a>
        </div>

        {/* Project Header */}
        <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-[#ec186a]" />
                <span>{item.category}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                {item.title}
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                {item.summary}
              </p>

              {/* Project Meta Bar */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-purple-400" />
                    <span>{isEs ? 'Cliente' : 'Client'}</span>
                  </p>
                  <p className="text-sm font-bold text-white mt-1">{item.client}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#ec186a]" />
                    <span>{isEs ? 'Año' : 'Year'}</span>
                  </p>
                  <p className="text-sm font-bold text-white mt-1">{item.year}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-yellow-400" />
                    <span>{isEs ? 'Área' : 'Scope'}</span>
                  </p>
                  <p className="text-sm font-bold text-white mt-1">{item.category}</p>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden bg-[#141c27] border border-white/15 shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={550}
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Case Study Content */}
        <section className="py-12 lg:py-20 bg-[#121724] border-y border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {isEs ? 'Resumen del Proyecto' : 'Project Overview'}
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0b0f17] border border-white/10 shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#ec186a]" />
                <span>{isEs ? 'Puntos Clave y Entregables' : 'Key Highlights & Deliverables'}</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {item.highlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* If Logos Design, render the Client Logos Grid Showcase */}
        {isLogosDesign && (
          <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ec186a]">
                {isEs ? 'GALERÍA DE MARCAS' : 'BRAND GALLERY'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                {isEs ? 'Logotipos Creados Para Nuestros Clientes' : 'Corporate Emblems & Logos Created'}
              </h2>
              <p className="mt-3 text-base text-gray-300">
                {isEs
                  ? 'Cada marca fue diseñada con precisión vectorial para garantizar impacto en impresos, uniformes, sitios web y rotulación vehicular.'
                  : 'Every logo is crafted in high-precision vector formats to ensure supreme fidelity across physical embroidery, digital screens, and vehicle wraps.'}
              </p>
            </div>

            {/* Showcase Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {showcaseLogoFiles.map((logo, i) => (
                <div
                  key={logo.src}
                  className="aspect-square rounded-2xl bg-[#141c27] border border-white/10 hover:border-purple-500/50 p-4 flex items-center justify-center transition-all group"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.alt} (${i + 1})`}
                    width={200}
                    height={200}
                    decoding="async"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-[#6a35ff] to-[#ec186a] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black">
              {isEs ? '¿Quieres una Identidad Como Esta Para Tu Negocio?' : 'Ready to Elevate Your Brand Identity?'}
            </h2>
            <p className="text-base sm:text-lg text-purple-100 max-w-2xl mx-auto">
              {isEs
                ? 'Hablemos de tus metas comerciales y creemos una marca que posicione a tu empresa en lo más alto.'
                : "Let's align on your market goals and craft an identity system that commands authority."}
            </p>
            <div>
              <a
                href={isEs ? '/contacto' : '/contact'}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#6a35ff] hover:bg-gray-100 font-bold uppercase tracking-wider shadow-2xl transition-all"
              >
                <span>{isEs ? 'Solicitar Propuesta' : 'Request a Proposal'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
};
