import React from 'react';
import { Language } from '../types';
import { Sparkles, ArrowRight, ShieldCheck, Award, Zap, Phone } from 'lucide-react';
import { siteMetadata } from '../content/siteContent';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b0f17] via-[#120f24] to-[#0b0f17] pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[340px] h-[340px] bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headings, Badge, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-[#ec186a]" />
              <span>
                {isEs ? 'Agencia Creativa & Especialistas en Wrap' : 'Creative Agency & Vehicle Wrap Specialists'}
              </span>
              <span className="text-white/40">&middot;</span>
              <span className="text-[#ec186a] font-bold">Austin, TX</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              {isEs ? (
                <>
                  Damos vida a tus <span className="text-gradient-brand">ideas</span> con impacto creativo real.
                </>
              ) : (
                <>
                  We bring your <span className="text-gradient-brand">vision</span> to life through creative impact.
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl">
              {isEs
                ? 'Diseño de marca distintivo, rotulación vehicular comercial (wraps), desarrollo web de alto rendimiento y estrategias de marketing digital que aceleran tu crecimiento en Texas.'
                : 'Distinctive brand design, high-grade commercial vehicle wraps, high-speed web development, and targeted digital marketing engineered to scale your business in Texas.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href={isEs ? '#formulario' : '#contact'}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#6a35ff] to-[#ec186a] hover:from-[#7c4dff] hover:to-[#f0327f] rounded-xl shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Sparkles className="w-5 h-5" />
                <span>{isEs ? 'Agendar Consulta' : 'Schedule Consultation'}</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>

              <a
                href={`tel:${siteMetadata.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all"
              >
                <Phone className="w-5 h-5 text-[#ec186a]" />
                <span>{siteMetadata.phone}</span>
              </a>
            </div>

            {/* Trust bullet badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 font-medium">
                  {isEs ? 'Vinil 3M/Avery Certificado' : 'Certified 3M/Avery Vinyl'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-pink-400 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 font-medium">
                  {isEs ? '100+ Proyectos Exitosos' : '100+ Completed Projects'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 font-medium">
                  {isEs ? 'Entrega Rápida & Garantía' : 'Fast Turnaround & Warranty'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Angled Portfolio Collage Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient turntable vinyl motif behind collage */}
            <div className="absolute -top-6 -right-6 w-32 h-32 sm:w-44 sm:h-44 opacity-25 pointer-events-none" aria-hidden="true">
              <img
                src="/images/logo.webp"
                alt=""
                width={176}
                height={176}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Collage Container with tilt and elevation */}
            <div className="relative w-full max-w-lg lg:max-w-none rounded-2xl overflow-hidden p-2 bg-gradient-to-tr from-[#6a35ff]/30 via-white/5 to-[#ec186a]/30 border border-white/10 shadow-2xl shadow-purple-950/80 group">
              <div className="relative rounded-xl overflow-hidden bg-[#141c27] aspect-[4/3] sm:aspect-[16/11]">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/images/hero-collage-mobile.webp" type="image/webp" />
                  <img
                    src="/images/hero-collage.webp"
                    alt="Rueda La Rola Media - Client Work Showcase"
                    width={1200}
                    height={825}
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </picture>

                {/* Overlay badge on image */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-purple-400 font-bold">
                      {isEs ? 'Portafolio Reciente' : 'Recent Portfolio'}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {isEs ? 'Diseño de Marca & Wraps' : 'Brand Identity & Commercial Wraps'}
                    </p>
                  </div>
                  <a
                    href={isEs ? '#portafolio' : '#portfolio'}
                    className="px-3 py-1.5 text-xs font-bold text-white bg-[#6a35ff] hover:bg-[#7c4dff] rounded-md transition-colors"
                  >
                    {isEs ? 'Ver Todo' : 'View All'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
