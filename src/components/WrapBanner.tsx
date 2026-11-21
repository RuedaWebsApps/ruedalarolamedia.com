import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';

interface WrapBannerProps {
  lang: Language;
}

export const WrapBanner: React.FC<WrapBannerProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Salient scroll_pos_advanced with smooth Lenis-style lerp inertia
  useEffect(() => {
    const step = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0008) {
        currentProgressRef.current += diff * 0.16;
        setScrollProgress(currentProgressRef.current);
        rafRef.current = window.requestAnimationFrame(step);
      } else {
        currentProgressRef.current = targetProgressRef.current;
        setScrollProgress(currentProgressRef.current);
        rafRef.current = null;
      }
    };

    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 900;

      const startY = vh * 0.35;
      const endY = -vh * 0.28;
      const raw = (startY - rect.top) / (startY - endY);
      targetProgressRef.current = Math.max(0, Math.min(1, raw));

      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(step);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const translateYPercent = scrollProgress * 90;
  const opacity = 1 - scrollProgress;

  return (
    <section
      id="wrap"
      ref={sectionRef}
      className="relative w-full bg-[#6a35ff] text-white py-[5vw] overflow-hidden scroll-mt-[90px] lg:scroll-mt-[136px]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Scroll-driven Title & Subtitle Block (Salient scroll_pos_advanced with smooth lerp) */}
        <div
          style={{
            transform: `translate3d(0, ${translateYPercent.toFixed(2)}%, 0)`,
            opacity: Number(opacity.toFixed(3)),
          }}
          className="relative z-10 text-center px-2 sm:px-[10%] lg:px-[18%] pb-5 will-change-transform"
        >
          <h2
            className="font-gloock text-white font-normal tracking-normal mx-auto"
            style={{
              fontSize: 'clamp(72px, 11vw, 200px)',
              lineHeight: 0.9,
            }}
          >
            Wrap
          </h2>

          <p
            className="font-dm text-white font-normal mt-5 max-w-[680px] mx-auto leading-[1.55]"
            style={{
              fontSize: 'clamp(16px, 1.1vw, 20px)',
            }}
          >
            {isEs
              ? 'Gráficos de vehículos, escaparates, vehículos de flota, murales de pared, POP/ferias comerciales, señalización exterior y gráficos de suelo'
              : 'Vehicle Graphics, Storefronts, Fleet Vehicles, Wall Murals, POP/Trade Shows, Outdoor Signage, Floor Graphics'}
          </p>
        </div>

        {/* Centered Wrap Vehicle Image (40% desktop, 50% tablet, 60% mobile, border-radius: 20px) + Direct Link to Wrap Atelier Landing */}
        <div className="relative z-20 flex flex-col items-center mt-2">
          <a
            href={isEs ? '/es/servicios/wraps-vehiculares' : '/services/vehicle-wraps'}
            className="group w-[65%] sm:w-[50%] lg:w-[40%] rounded-[20px] overflow-hidden block"
          >
            <img
              src="/images/carro-wrap.webp"
              alt="Rueda La Rola Media Commercial Vehicle Wrap"
              width={720}
              height={480}
              className="w-full h-auto object-contain rounded-[20px] block mx-auto transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          <div className="mt-6">
            <a
              href={isEs ? '/es/servicios/wraps-vehiculares' : '/services/vehicle-wraps'}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white text-[#6a35ff] font-dm text-[13px] font-bold uppercase tracking-[1.2px] hover:bg-[#141c27] hover:text-white transition-colors shadow-lg"
            >
              <span>
                {isEs
                  ? 'Explorar Estudio de Wraps (Alta Gama y Flotas)'
                  : 'Explore Wrap Studio (Exotics & Commercial Fleets)'}
              </span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
