import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';

interface WrapBannerProps {
  lang: Language;
}

export const WrapBanner: React.FC<WrapBannerProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Replicate Salient scroll_pos_advanced:
  // transform_y_end="90%", opacity_start="1", opacity_end="0", trigger_offset_start="20%", trigger_offset_end="70%"
  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 900;

      // When section top goes from 35% of viewport height down to -25% of viewport height
      const startY = vh * 0.35;
      const endY = -vh * 0.28;
      const raw = (startY - rect.top) / (startY - endY);
      const clamped = Math.max(0, Math.min(1, raw));
      setScrollProgress(clamped);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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
        {/* Scroll-driven Title & Subtitle Block (Salient scroll_pos_advanced) */}
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
              ? 'Gráficos de vehículos Escaparates Vehículos de flota Murales de pared POP/Ferias comerciales Señalización exterior Gráficos de suelo'
              : 'Vehicle Graphics, Storefronts, Fleet Vehicles, Wall Murals, POP/Trade Shows, Outdoor Signage, Floor Graphics'}
          </p>
        </div>

        {/* Centered Wrap Vehicle Image (40% desktop, 50% tablet, 60% mobile, border-radius: 20px) */}
        <div className="relative z-20 flex justify-center mt-2">
          <div className="w-[65%] sm:w-[50%] lg:w-[40%] rounded-[20px] overflow-hidden">
            <img
              src="/images/carro-wrap.webp"
              alt="Rueda La Rola Media Commercial Vehicle Wrap"
              width={720}
              height={480}
              className="w-full h-auto object-contain rounded-[20px] block mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
