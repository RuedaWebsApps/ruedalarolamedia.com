import React from 'react';
import { Language } from '../types';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface SplitSectionsProps {
  lang: Language;
}

export const SplitSections: React.FC<SplitSectionsProps> = ({ lang }) => {
  const isEs = lang === 'es';

  const rows = [
    {
      id: 'branding-impact',
      eyebrow: isEs ? 'Diseño de Marca' : 'Brand Identity System',
      title: isEs
        ? 'Identidades que conectan y perduran en la mente del consumidor.'
        : 'Brand identities that resonate and command customer authority.',
      description: isEs
        ? 'Una marca sólida es mucho más que un dibujo: es la reputación y confianza que transmites en el primer milisegundo de contacto. Construimos identidades cohesivas que funcionan tanto en una tarjeta de presentación como en la carrocería de tu camioneta.'
        : 'A powerful brand is far more than an icon: it is the immediate authority and trust communicated within the first fraction of a second. We architect cohesive visual systems that thrive equally on luxury packaging, mobile screens, and full vehicle wraps.',
      points: isEs
        ? [
            'Sistemas tipográficos y guías de color de alto contraste',
            'Archivos vectoriales originales para cualquier soporte de impresión',
            'Adaptaciones para redes sociales, uniformes y rotulación',
          ]
        : [
            'High-contrast typography systems & custom color palettes',
            'Master vector source files ready for any physical or digital medium',
            'Seamless brand adaptations for social media, uniforms, and wraps',
          ],
      image: '/images/split-branding.webp',
      imageAlt: 'Strategic Branding Design by Rueda La Rola Media',
      reverse: false,
    },
    {
      id: 'commitment-strategy',
      eyebrow: isEs ? 'Nuestro Compromiso' : 'Our Dedication',
      title: isEs
        ? 'Estrategia creativa enfocada en el crecimiento de tu negocio.'
        : 'Creative execution laser-focused on bottom-line business growth.',
      description: isEs
        ? 'No diseñamos por diseñar. Cada proyecto responde a un objetivo de negocio claro: conseguir más llamadas, mejorar la percepción de valor y aumentar el ticket promedio de tus servicios en Austin y sus alrededores.'
        : 'We never design in a vacuum. Every color choice, headline, and wrap composition is engineered with a clear commercial objective: drive more calls, command higher rates, and expand your market reach in Texas.',
      points: isEs
        ? [
            'Análisis del mercado y competencia directa',
            'Comunicación transparente y tiempos de entrega garantizados',
            'Soporte continuo y escalabilidad para tu empresa',
          ]
        : [
            'In-depth local market and competitor analysis',
            'Direct, transparent communication and guaranteed turnarounds',
            'Ongoing creative support tailored to your scaling needs',
          ],
      image: '/images/split-commitment.webp',
      imageAlt: 'Our Strategic Commitment to Client Success',
      reverse: true,
    },
    {
      id: 'web-engineering',
      eyebrow: isEs ? 'Desarrollo Web Moderno' : 'Modern Web Engineering',
      title: isEs
        ? 'Sitios web ultra rápidos diseñados para convertir visitas en clientes.'
        : 'Lightning-fast websites engineered to convert traffic into revenue.',
      description: isEs
        ? 'Olvídate de páginas lentas que espantan a tus clientes. Desarrollamos con tecnologías estáticas modernas de última generación, optimizadas al 100% para dispositivos móviles y motores de búsqueda como Google.'
        : 'Forget slow, bloated CMS sites that crash under traffic and frustrate mobile users. We build clean, modern static web applications optimized for 100/100 Core Web Vitals, instantaneous load times, and maximum SEO visibility.',
      points: isEs
        ? [
            'Tiempos de carga casi instantáneos (0ms de latencia de base de datos)',
            'Diseño 100% adaptado a pantallas móviles y tablets',
            'Arquitectura limpia optimizada para 0 uso de CPU en la nube',
          ]
        : [
            'Sub-second load times with zero database latency',
            '100% mobile-first interface optimized for touch conversions',
            'Pure static CDN architecture optimized for zero cloud compute overhead',
          ],
      image: '/images/split-webdesign.webp',
      imageAlt: 'High-Performance Web Design and Development',
      reverse: false,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0b0f17] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
        {rows.map((row) => (
          <div
            key={row.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
              row.reverse ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Column */}
            <div
              className={`lg:col-span-6 ${
                row.reverse ? 'lg:order-2' : 'lg:order-1'
              } flex items-center justify-center`}
            >
              <div className="relative rounded-3xl overflow-hidden bg-[#141c27] border border-white/10 shadow-2xl group w-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={row.image}
                    alt={row.imageAlt}
                    width={900}
                    height={675}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Text Column */}
            <div
              className={`lg:col-span-6 ${
                row.reverse ? 'lg:order-1' : 'lg:order-2'
              } flex flex-col items-start space-y-6 text-left`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#ec186a]" />
                <span>{row.eyebrow}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {row.title}
              </h3>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {row.description}
              </p>

              <ul className="space-y-3 w-full pt-2">
                {row.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-[#ec186a] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href={isEs ? '#formulario' : '#contact'}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-400 hover:text-white transition-colors group"
                >
                  <span>{isEs ? 'Iniciar mi proyecto' : 'Start My Project'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
