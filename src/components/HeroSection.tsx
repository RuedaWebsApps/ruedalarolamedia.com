import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Interactive 3D Low-Poly ParticleWave Canvas (Slider Revolution 7 tp-particlewave replica)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let width = (canvas.width = canvas.offsetWidth || 1440);
    let height = (canvas.height = canvas.offsetHeight || 790);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || 790;
    };

    window.addEventListener('resize', handleResize);

    const cols = 22;
    const rows = 14;

    // Floating ambient particles
    const dots = Array.from({ length: 36 }, (_, i) => ({
      x: ((i * 97) % 100) / 100,
      y: ((i * 53) % 100) / 100,
      r: 0.8 + (i % 3) * 0.6,
      speed: 0.00018 + (i % 5) * 0.00007,
      alpha: 0.15 + (i % 4) * 0.1,
    }));

    const render = (time: number) => {
      const t = time * 0.0012;
      ctx.clearRect(0, 0, width, height);

      // Base radial gradient matching RevSlider bg: radial-gradient(circle, rgba(66,20,74,1) 0%, rgba(21,2,24,1) 100%)
      const baseGrad = ctx.createRadialGradient(
        width * 0.28,
        height * 0.45,
        20,
        width * 0.35,
        height * 0.5,
        width * 0.75
      );
      baseGrad.addColorStop(0, '#42144a');
      baseGrad.addColorStop(0.55, '#1d0724');
      baseGrad.addColorStop(1, '#141c27');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // Build 3D low-poly terrain vertices
      const cellW = (width * 1.25) / (cols - 1);
      const cellH = (height * 0.92) / (rows - 1);
      const offsetX = -width * 0.12;
      const offsetY = height * 0.18;

      const pts: { x: number; y: number; z: number }[][] = [];
      for (let r = 0; r < rows; r++) {
        const rowPts: { x: number; y: number; z: number }[] = [];
        const depthFactor = 0.55 + (r / rows) * 0.65;
        for (let c = 0; c < cols; c++) {
          const wave1 = Math.sin(c * 0.42 + t * 1.35 + r * 0.32) * 26;
          const wave2 = Math.cos(r * 0.55 - t * 1.05 + c * 0.22) * 18;
          const z = wave1 + wave2;
          const x = offsetX + c * cellW + Math.sin(r * 0.4 + t) * 12;
          const y = offsetY + r * cellH * depthFactor + z * depthFactor;
          rowPts.push({ x, y, z });
        }
        pts.push(rowPts);
      }

      // Draw faceted low-poly triangles with dynamic specular shading
      for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < cols - 1; c++) {
          const p00 = pts[r][c];
          const p10 = pts[r][c + 1];
          const p01 = pts[r + 1][c];
          const p11 = pts[r + 1][c + 1];

          // Triangle 1
          const shade1 = (p00.z + p10.z + p01.z) / 130;
          const lum1 = Math.max(0.04, Math.min(0.32, 0.13 + shade1 * 0.16));
          ctx.beginPath();
          ctx.moveTo(p00.x, p00.y);
          ctx.lineTo(p10.x, p10.y);
          ctx.lineTo(p01.x, p01.y);
          ctx.closePath();
          ctx.fillStyle = `rgba(${Math.round(92 + shade1 * 70)}, ${Math.round(
            26 + shade1 * 30
          )}, ${Math.round(135 + shade1 * 80)}, ${lum1.toFixed(3)})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(165, 95, 225, ${(lum1 * 0.38).toFixed(3)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();

          // Triangle 2
          const shade2 = (p10.z + p11.z + p01.z) / 130;
          const lum2 = Math.max(0.03, Math.min(0.28, 0.11 + shade2 * 0.15));
          ctx.beginPath();
          ctx.moveTo(p10.x, p10.y);
          ctx.lineTo(p11.x, p11.y);
          ctx.lineTo(p01.x, p01.y);
          ctx.closePath();
          ctx.fillStyle = `rgba(${Math.round(70 + shade2 * 65)}, ${Math.round(
            22 + shade2 * 25
          )}, ${Math.round(115 + shade2 * 75)}, ${lum2.toFixed(3)})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(140, 80, 200, ${(lum2 * 0.32).toFixed(3)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Draw subtle floating luminous particles
      for (const d of dots) {
        const py = ((d.y - time * d.speed) % 1 + 1) % 1;
        const px = (d.x + Math.sin(t + d.x * 10) * 0.015 + 1) % 1;
        ctx.beginPath();
        ctx.arc(px * width * 0.65, py * height, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 180, 255, ${d.alpha})`;
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: normX, y: normY });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero"
      className="relative w-full min-h-[680px] lg:h-[790px] bg-[#141c27] text-white overflow-hidden select-none"
    >
      {/* 1. Interactive 3D Low-Poly ParticleWave Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 2. Top Purple Promo Bar (Layer 18 & 25: height 34px, solid dark base + rgba(106, 53, 255, 0.52)) */}
      <div className="relative z-30 w-full h-[34px] bg-[#141c27]">
        <div
          className="w-full h-full flex items-center justify-center px-4 text-center"
          style={{ backgroundColor: 'rgba(106, 53, 255, 0.52)' }}
        >
          <p className="font-poppins text-[11px] sm:text-[12px] leading-[15px] text-white tracking-wide">
            Somos el equipo creativo que tu negocio necesita.
          </p>
        </div>
      </div>

      {/* 3. Right Tilted Portfolio Collage with 3D Entrance + Mouse Parallax (Layer 27: imagerola.png) */}
      <div
        className="absolute right-[-8%] sm:right-[-4%] lg:left-[38%] lg:right-auto top-[34px] w-[95%] sm:w-[78%] lg:w-[1005px] h-[820px] pointer-events-none z-10 animate-rev-collage-3d"
      >
        <div
          className="w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1200px) translate3d(${(parallax.x * -24).toFixed(1)}px, ${(
              parallax.y * -18
            ).toFixed(1)}px, 0px) rotateX(${(parallax.y * 2.5).toFixed(2)}deg) rotateY(${(
              parallax.x * -2.5
            ).toFixed(2)}deg)`,
          }}
        >
          <img
            src="/images/hero-collage.webp"
            alt="Rueda La Rola Media Creative Portfolio Collage"
            width={1005}
            height={853}
            fetchPriority="high"
            className="w-full h-full object-contain object-right-top opacity-95"
          />
        </div>
      </div>

      {/* 4. Top & Bottom Navy Scrims (Layers 21, 30, 33: #141c27 gradient blends) */}
      <div
        className="
          pointer-events-none absolute top-[34px] right-0 w-full lg:w-[70%] h-[115px] z-[15]
          bg-gradient-to-b from-[#141c27] via-[#141c27]/60 to-transparent
        "
      />
      <div
        className="
          pointer-events-none absolute bottom-0 inset-x-0 h-[320px] z-[15]
          bg-gradient-to-t from-[#141c27] via-[#141c27]/90 to-transparent
        "
      />

      {/* 5. Main Hero Content Container (1440px max width matching RevSlider grid) */}
      <div className="relative z-20 max-w-[1440px] mx-auto h-[calc(100%-34px)] min-h-[646px] lg:h-[756px] px-6 sm:px-12 lg:px-[70px] flex flex-col justify-between pt-5 pb-12 lg:pb-14">
        {/* Top-Left 3D Animated Vinyl Logo (Layer 0: logo.png) */}
        <div className="pt-1 sm:pt-2">
          <a
            href="#servicios"
            aria-label="Rueda La Rola Media"
            className="inline-block animate-rev-logo-3d"
          >
            <img
              src="/images/logo.webp"
              alt="Rueda La Rola Media Vinyl Logo"
              width={136}
              height={136}
              className="w-[105px] h-[105px] sm:w-[132px] sm:h-[132px] object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)]"
            />
          </a>
        </div>

        {/* Bottom Overlay Row: Left Giant Gloock Title + VER SERVICIOS | Right Inter Manifesto + PORTAFOLIO ↘ */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-8 mt-auto pt-24">
          {/* Bottom-Left Column */}
          <div className="max-w-[720px]">
            <h1 className="font-gloock uppercase text-white text-[46px] sm:text-[68px] lg:text-[84px] xl:text-[90px] leading-[1.0] tracking-normal">
              <span className="block overflow-hidden pb-1">
                <span className="block animate-rev-line-1">WE ARE A</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="block animate-rev-line-2">CREATIVE</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-rev-line-3">AGENCY</span>
              </span>
            </h1>

            <div className="mt-7 lg:mt-9 animate-rev-fade-1">
              <a
                href="#servicios"
                className="inline-block font-josefin text-[13px] sm:text-[14px] font-normal uppercase tracking-[2px] text-white hover:text-white/80 transition-opacity"
              >
                VER SERVICIOS
              </a>
            </div>
          </div>

          {/* Bottom-Right Column */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right max-w-[380px] lg:ml-auto">
            <p className="font-inter text-[15px] sm:text-[16px] lg:text-[17px] leading-[25px] lg:leading-[26px] tracking-[0.9px] text-white/95 font-normal animate-rev-fade-1">
              Creamos experiencias digitales que despiertan ambición, cautivan corazones conspiramos a favor de tus metas.
            </p>

            <a
              href="#portafolio"
              className="mt-8 lg:mt-10 inline-flex items-center gap-3 font-josefin text-[16px] sm:text-[17px] font-semibold uppercase tracking-[1px] text-white hover:text-white/80 transition-transform duration-300 hover:translate-x-1 animate-rev-fade-2"
            >
              <span>PORTAFOLIO</span>
              <span
                aria-hidden="true"
                className="inline-block text-[20px] leading-none font-light transform rotate-45"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
