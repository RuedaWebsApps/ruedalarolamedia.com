import React from 'react';
import { Language } from '../types';
import { Truck, ShieldCheck, Sun, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { siteMetadata } from '../content/siteContent';

interface WrapBannerProps {
  lang: Language;
}

export const WrapBanner: React.FC<WrapBannerProps> = ({ lang }) => {
  const isEs = lang === 'es';

  return (
    <section id="wrap" className="relative py-16 lg:py-20 bg-gradient-to-r from-[#5a28e0] via-[#6a35ff] to-[#7c4dff] text-white overflow-hidden scroll-mt-24">
      {/* Decorative background vinyl wave lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Wrap Truck Cutout */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none group">
              {/* Backlight glow */}
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all" />
              <img
                src="/images/carro-wrap.webp"
                alt="Commercial Vehicle Wrap by Rueda La Rola Media"
                width={1000}
                height={550}
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Floating feature pill */}
              <div className="absolute -bottom-2 left-6 z-20 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white tracking-wide">
                  {isEs ? 'Garantía & Vinil Fundido 3M' : '3M Cast Vinyl Certified'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/30 border border-white/25 text-white text-xs font-bold uppercase tracking-wider">
              <Truck className="w-4 h-4 text-yellow-300" />
              <span>{isEs ? 'Especialistas en Wraps Vehiculares' : 'Commercial Vehicle Wraps'}</span>
              <span>&middot;</span>
              <span className="text-pink-200">Austin, TX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {isEs ? (
                <>
                  Convierte tu vehículo en una <span className="underline decoration-pink-400 decoration-wavy decoration-2">máquina de clientes</span> las 24 horas.
                </>
              ) : (
                <>
                  Turn your commercial vehicle into a <span className="underline decoration-pink-400 decoration-wavy decoration-2">24/7 lead generator</span>.
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-purple-100 font-normal leading-relaxed max-w-2xl">
              {isEs
                ? 'Un vehículo con rotulación comercial genera entre 30,000 y 70,000 impresiones visuales diarias en Central Texas. Diseñamos, imprimimos con tintas de alta resolución y aplicamos vinil fundido automotriz resistente al sol de Texas.'
                : 'A single wrapped work vehicle generates 30,000 to 70,000 daily visual impressions throughout Central Texas. We design, print, and professionally install automotive-grade cast vinyl built to withstand extreme Texas heat.'}
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-1">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Sun className="w-3.5 h-3.5 text-yellow-300" />
                </div>
                <span className="text-sm font-semibold text-white">
                  {isEs ? 'Laminado UV de alta durabilidad' : 'UV-resistant protective laminate'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                </div>
                <span className="text-sm font-semibold text-white">
                  {isEs ? 'Wraps completos, parciales y letras' : 'Full, partial & spot graphics'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                </div>
                <span className="text-sm font-semibold text-white">
                  {isEs ? 'Protege la pintura original de fábrica' : 'Protects OEM factory paint'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Truck className="w-3.5 h-3.5 text-yellow-300" />
                </div>
                <span className="text-sm font-semibold text-white">
                  {isEs ? 'Flotas comerciales, pickups y vans' : 'Commercial fleets, vans & trucks'}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full sm:w-auto">
              <a
                href={isEs ? '#formulario' : '#contact'}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-[#6a35ff] bg-white hover:bg-gray-100 rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <span>{isEs ? 'Cotizar Mi Wrap' : 'Quote My Wrap'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteMetadata.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-black/25 hover:bg-black/40 rounded-xl border border-white/25 transition-all"
              >
                <Phone className="w-4 h-4 text-pink-300" />
                <span>{siteMetadata.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
