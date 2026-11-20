import React from 'react';
import { Language } from '../types';
import { Sparkles, Target, Zap, HeartHandshake, ArrowRight } from 'lucide-react';

interface DualFeatureSectionProps {
  lang: Language;
}

export const DualFeatureSection: React.FC<DualFeatureSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const sectionId = isEs ? 'nosotros' : 'about';

  return (
    <section id={sectionId} className="py-20 lg:py-28 bg-[#0b0f17] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-[#ec186a]" />
            <span>{isEs ? 'Quiénes Somos' : 'About Rueda La Rola Media'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {isEs ? (
              <>
                Creatividad, estrategia y <span className="text-gradient-brand">compromiso</span> en cada proyecto
              </>
            ) : (
              <>
                Creativity, strategy, and <span className="text-gradient-brand">commitment</span> in every build
              </>
            )}
          </h2>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Deep Violet Card (#5b238c) */}
          <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-[#5b238c] via-[#481d70] to-[#2e1047] border border-purple-400/20 shadow-2xl shadow-purple-950/60 flex flex-col justify-between overflow-hidden group">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ec186a]/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6">
                <Target className="w-7 h-7 text-pink-300" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-pink-300">
                {isEs ? 'Nuestra Visión' : 'Our Creative Vision'}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-tight">
                {isEs
                  ? 'Diseño que no solo se ve bien: vende, comunica y posiciona.'
                  : 'Design engineered not just to look good: it sells, speaks, and scales.'}
              </h3>

              <p className="mt-4 text-base sm:text-lg text-purple-100/90 leading-relaxed">
                {isEs
                  ? 'En Rueda La Rola Media transformamos tus ideas en realidad. Desde el diseño integral de tu marca hasta soluciones digitales y físicas, ¡tenemos todo lo que necesitas para destacar en el competitivo mercado de Texas y Estados Unidos!'
                  : 'At Rueda La Rola Media, we turn ideas into reality. From comprehensive brand development to modern digital platforms and high-impact physical wraps, we equip your business with everything needed to stand out and dominate.'}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">
                  {isEs ? 'Personalizado' : 'Custom Tailored'}
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-pink-300">Austin, TX</p>
                <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">
                  {isEs ? 'Sede Central' : 'Headquarters'}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Modern Dark / High-Contrast Card */}
          <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 bg-[#141c27] border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-purple-500/40 transition-all">
            {/* Ambient accent */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#6a35ff]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-[#ec186a] mb-6">
                <HeartHandshake className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
                {isEs ? 'Compromiso & Alianzas' : 'Commitment & Partnership'}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-tight">
                {isEs
                  ? 'Un equipo dedicado que acompaña el crecimiento de tu marca.'
                  : 'A dedicated creative partner aligned with your long-term growth.'}
              </h3>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <p>
                    {isEs
                      ? 'Atención ágil y directa: sin intermediarios burocráticos. Hablamos de tu negocio, entendemos tus retos y entregamos soluciones.'
                      : 'Direct and agile communication without bureaucratic delays. We understand your market, identify challenges, and deliver high-impact results.'}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pink-900/50 flex items-center justify-center text-pink-300 shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <p>
                    {isEs
                      ? 'Integración total físico-digital: tu logotipo, uniformes, wraps vehiculares y sitio web se alinean con absoluta consistencia visual.'
                      : 'Seamless physical-digital harmony: your logo, merchandise, vehicle wraps, and web presence maintain flawless brand consistency.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <a
                href={isEs ? '#formulario' : '#contact'}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-400 hover:text-white transition-colors"
              >
                <span>{isEs ? 'Hablemos de tu proyecto' : "Let's talk about your project"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
