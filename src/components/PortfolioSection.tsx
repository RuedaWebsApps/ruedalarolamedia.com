import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';
import { portfolioItems, portfolioItemsEs } from '../content/siteContent';

interface PortfolioSectionProps {
  lang: Language;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const items = isEs ? portfolioItemsEs : portfolioItems;
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [cardTransforms, setCardTransforms] = useState<{ scale: number; blur: number }[]>(
    () => items.map(() => ({ scale: 1, blur: 0 }))
  );
  const targetOverlapsRef = useRef<number[]>(items.map(() => 0));
  const currentOverlapsRef = useRef<number[]>(items.map(() => 0));
  const rafRef = useRef<number | null>(null);

  const [cursor, setCursor] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  // Salient stacking_effect="blurred_scale" physics with smooth Lenis-style lerp interpolation
  useEffect(() => {
    const animateStep = () => {
      let needsMore = false;
      const nextOverlaps = currentOverlapsRef.current.map((curr, idx) => {
        const target = targetOverlapsRef.current[idx] || 0;
        const diff = target - curr;
        if (Math.abs(diff) > 0.001) {
          needsMore = true;
          return curr + diff * 0.18;
        }
        return target;
      });

      currentOverlapsRef.current = nextOverlaps;
      setCardTransforms(
        nextOverlaps.map((ov) => ({
          scale: Number((1 - ov * 0.19).toFixed(4)),
          blur: Number((ov * 5.2).toFixed(2)),
        }))
      );

      if (needsMore) {
        rafRef.current = window.requestAnimationFrame(animateStep);
      } else {
        rafRef.current = null;
      }
    };

    const handleScroll = () => {
      targetOverlapsRef.current = items.map((_, idx) => {
        const currentEl = cardRefs.current[idx];
        const nextEl = cardRefs.current[idx + 1];
        if (!currentEl || !nextEl) return 0;

        const currRect = currentEl.getBoundingClientRect();
        const nextRect = nextEl.getBoundingClientRect();
        const cardH = currRect.height || 640;

        const distance = nextRect.top - currRect.top;
        if (distance >= cardH) return 0;
        return Math.max(0, Math.min(1, 1 - distance / cardH));
      });

      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(animateStep);
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
  }, [items]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
      active: true,
    });
  };

  return (
    <section
      id="portafolio"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCursor((prev) => ({ ...prev, active: false }))}
      className="relative w-full bg-[#000000] text-white py-[80px] px-4 sm:px-6 lg:px-[40px] scroll-mt-[90px] lg:scroll-mt-[136px]"
    >
      <div id="portfolio" className="sr-only" aria-hidden="true" />

      {/* Floating Salient Frosted-Glass "View" Mouse Cursor Indicator */}
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${cursor.x - 42}px, ${cursor.y - 42}px, 0) scale(${
            cursor.active ? 1 : 0.4
          })`,
          opacity: cursor.active ? 1 : 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(10px)',
        }}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden lg:flex w-[84px] h-[84px] rounded-full items-center justify-center font-dm text-[14px] font-medium text-white transition-[opacity,transform] duration-150 ease-out"
      >
        {isEs ? 'Ver' : 'View'}
      </div>

      {/* 1-Column Sticky 80vh Stack with blurred_scale */}
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
        {items.map((item, idx) => {
          const href = isEs ? `/es/portfolio/${item.slug}` : `/portfolio/${item.slug}`;
          const tf = cardTransforms[idx] || { scale: 1, blur: 0 };

          return (
            <a
              key={item.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              href={href}
              style={{
                transform: `scale(${tf.scale})`,
                filter: tf.blur > 0.05 ? `blur(${tf.blur}px)` : 'none',
                zIndex: idx + 1,
              }}
              className="group sticky top-[86px] lg:top-[96px] block w-full h-[68vh] sm:h-[76vh] lg:h-[80vh] max-h-[760px] rounded-[25px] overflow-hidden bg-[#141414] will-change-transform transition-shadow duration-300 shadow-[0_25px_70px_rgba(0,0,0,0.65)] lg:cursor-none"
            >
              {/* Full-Bleed Background Project Image */}
              <img
                src={item.image}
                alt={item.title}
                width={1400}
                height={850}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Solid #141414 30% Overlay */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: 'rgba(20, 20, 20, 0.30)' }}
              />

              {/* Top Metadata Bar (Category Pill Left + Date Right, or Date Left if no category) */}
              <div className="relative z-10 w-full px-7 sm:px-10 pt-7 sm:pt-9 flex items-center justify-between">
                {item.category ? (
                  <>
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/65 font-dm text-[11px] font-medium uppercase tracking-[1.2px] text-white">
                      {item.category}
                    </span>
                    <span className="font-dm text-[12px] font-medium uppercase tracking-[1px] text-white">
                      {item.summary}
                    </span>
                  </>
                ) : (
                  <span className="font-dm text-[12px] font-medium uppercase tracking-[1px] text-white">
                    {item.summary}
                  </span>
                )}
              </div>

              {/* All-Middle Monumental 12vw Gloock Title */}
              <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center pointer-events-none">
                <h2
                  className="font-gloock text-white font-normal tracking-normal select-none"
                  style={{
                    fontSize: 'clamp(50px, 12vw, 220px)',
                    lineHeight: 1.0,
                  }}
                >
                  {item.title}
                </h2>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
