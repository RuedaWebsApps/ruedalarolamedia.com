import React from 'react';
import { Language, ServiceItem } from '../types';
import { servicesEn, servicesEs } from '../content/siteContent';
import {
  Palette,
  Globe,
  Shirt,
  Sparkles,
  Film,
  Truck,
  TrendingUp,
  Megaphone,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Palette,
  Globe,
  Shirt,
  Sparkles,
  Film,
  Truck,
  TrendingUp,
  Megaphone,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const services: ServiceItem[] = isEs ? servicesEs : servicesEn;
  const sectionId = isEs ? 'servicios' : 'services';

  return (
    <section id={sectionId} className="relative py-20 lg:py-28 bg-[#0b0f17] scroll-mt-24">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-[#ec186a]" />
            <span>{isEs ? 'Soluciones 360°' : 'Comprehensive 360° Solutions'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {isEs ? (
              <>
                Nuestros <span className="text-gradient-brand">Servicios Creativos</span>
              </>
            ) : (
              <>
                Our <span className="text-gradient-brand">Creative Services</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            {isEs
              ? 'Desde la creación de tu identidad corporativa y rotulación de vehículos hasta páginas web de última generación y estrategias digitales orientadas a resultados.'
              : 'From complete corporate brand development and vehicle wraps to cutting-edge web design and conversion-focused digital marketing.'}
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            const isFeatured = service.badge === 'Flagship' || service.badge === 'Especialidad';

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#1c1236] to-[#141226] border-2 border-[#6a35ff] shadow-xl shadow-purple-950/50 hover:border-[#ec186a]'
                    : 'bg-[#121724]/90 border border-white/10 hover:border-purple-500/40 hover:bg-[#161c2e] hover:shadow-lg hover:shadow-purple-950/40'
                }`}
              >
                {/* Top Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isFeatured
                          ? 'bg-[#ec186a] text-white shadow-md shadow-pink-600/40'
                          : 'bg-purple-950/80 text-purple-300 border border-purple-500/30'
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                      isFeatured
                        ? 'bg-gradient-to-br from-[#6a35ff] to-[#ec186a] text-white shadow-md shadow-purple-600/40'
                        : 'bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:text-white group-hover:bg-[#6a35ff]/30'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-400 mt-1 uppercase tracking-wider">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="mt-5 space-y-2 pt-4 border-t border-white/10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#ec186a] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4">
                  <a
                    href={isEs ? '#formulario' : '#contact'}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-400 hover:text-white group-hover:translate-x-1 transition-all"
                  >
                    <span>{isEs ? 'Consultar este servicio' : 'Inquire About This'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
