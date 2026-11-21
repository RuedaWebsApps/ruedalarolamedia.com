import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';

interface DualFeatureSectionProps {
  lang: Language;
}

export const DualFeatureSection: React.FC<DualFeatureSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Nosotros"
      ref={sectionRef}
      className="relative w-full bg-[#ffffff] py-[8vw] px-6 sm:px-10 lg:px-[90px] scroll-mt-[90px] lg:scroll-mt-[136px]"
    >
      <div id="nosotros" className="sr-only" aria-hidden="true" />
      <div id="about" className="sr-only" aria-hidden="true" />

      <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Left Column: Deep Purple #60318a with 3D flip-in-vertical entrance */}
        <div
          style={{ transitionDelay: '0ms' }}
          className={`bg-[#60318a] text-white p-10 sm:p-14 lg:p-[11%] flex flex-col justify-center salient-flip-vertical ${
            visible ? 'is-visible' : ''
          }`}
        >
          <h5 className="font-dm text-[14px] font-medium text-white mb-[15px]">
            {isEs ? 'Servicio' : 'Service'}
          </h5>

          <h2 className="font-gloock text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.14] text-white font-normal mb-[22px]">
            {isEs ? 'Innovación y creatividad' : 'Innovation and creativity'}
          </h2>

          <p className="font-dm text-[15px] sm:text-[16px] leading-[28px] text-white/95 font-normal mb-[36px]">
            {isEs
              ? 'Los servicios de relaciones públicas pueden aportar ideas y puntos de vista que quizás no hayas tenido en cuenta. Esto te puede ayudar a destacar entre otras empresas. Una perspectiva fresca puede marcar la diferencia en tu comunicación de marketing y en la dirección que tu organización decida tomar.'
              : 'Public relations services can provide ideas and points of view that you might not have considered. This can help you stand out among other companies. A fresh perspective can make a difference in your marketing communication and the direction your organization decides to take.'}
          </p>

          <div>
            <a
              href="#formulario"
              className="group inline-flex items-center gap-3 font-dm text-[14px] font-bold text-white"
            >
              <span>{isEs ? 'Más información' : 'Learn more'}</span>
              <span className="w-[24px] h-[24px] rounded-full border border-white/60 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5 group-hover:border-white">
                <svg
                  viewBox="0 0 12 12"
                  className="w-2.5 h-2.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4.5 2.5L8 6L4.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: Pure White #ffffff with x_large_depth shadow & #60318a text, 3D flip-in-vertical (200ms delay) */}
        <div
          style={{
            transitionDelay: '200ms',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.13)',
          }}
          className={`bg-[#ffffff] text-[#60318a] p-10 sm:p-14 lg:p-[11%] flex flex-col justify-center relative z-10 salient-flip-vertical ${
            visible ? 'is-visible' : ''
          }`}
        >
          <h5
            className="font-dm text-[14px] font-medium mb-[15px]"
            style={{ color: isEs ? '#ff3a6f' : '#60318a' }}
          >
            {isEs ? 'Quienes somos' : 'Who we are'}
          </h5>

          <h2 className="font-gloock text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.14] text-[#60318a] font-normal mb-[22px]">
            {isEs
              ? 'Impulsamos tu visión hasta convertirla en triunfo'
              : 'We drive your vision until it turns into a triumph'}
          </h2>

          <p className="font-dm text-[15px] sm:text-[16px] leading-[28px] text-[#60318a] font-normal mb-[36px]">
            {isEs
              ? 'En Rueda La Rola Media, nuestro compromiso va más allá de ofrecer servicios; se trata de construir relaciones de confianza y crear soluciones que realmente impulsen a nuestros clientes. Sabemos que cada proyecto es único, por eso escuchamos, planeamos y trabajamos contigo en cada etapa, asegurándonos de que los resultados no solo cumplan, sino que superen tus expectativas.'
              : "At Rueda La Rola Media, our commitment goes beyond offering services; it's about building trust-based relationships and creating solutions that truly drive our clients forward. We understand that every project is unique, which is why we listen, plan, and work with you at every stage, ensuring that results not only meet but exceed your expectations."}
          </p>

          <div>
            <a
              href="#formulario"
              className="group inline-flex items-center gap-3 font-dm text-[14px] font-bold text-[#60318a]"
            >
              <span>{isEs ? 'Más información' : 'Learn more'}</span>
              <span className="w-[24px] h-[24px] rounded-full border border-[#60318a]/50 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5 group-hover:border-[#60318a]">
                <svg
                  viewBox="0 0 12 12"
                  className="w-2.5 h-2.5 text-[#60318a]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4.5 2.5L8 6L4.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
