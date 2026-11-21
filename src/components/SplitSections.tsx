import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';

interface SplitSectionsProps {
  lang: Language;
}

export const SplitSections: React.FC<SplitSectionsProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);
  const row3Ref = useRef<HTMLDivElement | null>(null);
  const [vis1, setVis1] = useState(false);
  const [vis2, setVis2] = useState(false);
  const [vis3, setVis3] = useState(false);

  useEffect(() => {
    const createObs = (el: HTMLElement | null, setter: (v: boolean) => void) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            obs.disconnect();
          }
        },
        { threshold: 0.18 }
      );
      obs.observe(el);
      return obs;
    };

    const o1 = createObs(row1Ref.current, setVis1);
    const o2 = createObs(row2Ref.current, setVis2);
    const o3 = createObs(row3Ref.current, setVis3);

    return () => {
      o1?.disconnect();
      o2?.disconnect();
      o3?.disconnect();
    };
  }, []);

  return (
    <section id="inspirados" className="w-full overflow-hidden">
      {/* Row 1: Left #f4f4f4 Text (padding 10%) | Right Full-Bleed Branding Photo */}
      <div
        ref={row1Ref}
        className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch bg-[#f4f4f4]"
      >
        <div className="bg-[#f4f4f4] px-8 py-16 sm:p-16 lg:p-[16%] flex flex-col justify-center">
          <div
            className={`salient-fade-bottom ${vis1 ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0ms' }}
          >
            <h5 className="font-dm text-[14px] font-medium text-[#bfbfbf] mb-3">
              {isEs ? 'Branding & Diseño de marca' : 'Branding & Brand Design'}
            </h5>
            <h2 className="font-gloock text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.18] text-[#000000] font-normal mb-5">
              {isEs
                ? 'Tomamos la chispa de tu propósito y la moldeamos en una identidad poderosa.'
                : 'We take the spark of your purpose and shape it into a powerful identity.'}
            </h2>
          </div>

          <p
            style={{ transitionDelay: '120ms' }}
            className={`font-dm text-[15px] sm:text-[16px] leading-[28px] text-[#0a0a0a]/65 font-normal salient-fade-bottom ${
              vis1 ? 'is-visible' : ''
            }`}
          >
            {isEs
              ? 'En nuestro taller de branding destilamos la esencia de tu historia en símbolos que enamoran a primera vista: nombres con carácter, paletas cromáticas magnéticas, tipografías que hablan con tu voz y sistemas gráficos flexibles que conquistan desde un favicon hasta una valla. Más que logotipos, construimos relatos visuales que resuenan en cada punto de contacto, haciendo que tu marca viva y palpite en la mente de tu audiencia.'
              : 'In our branding workshop, we distill the essence of your story into symbols that inspire love at first sight: names with character, magnetic color palettes, typography that speaks with your voice, and flexible design systems ready to conquer anything from a favicon to a billboard. More than logos, we build visual narratives that resonate at every touchpoint, making your brand live and pulse in the minds of your audience.'}
          </p>
        </div>

        <div className="relative min-h-[420px] sm:min-h-[540px] lg:min-h-[690px] w-full overflow-hidden">
          <img
            src="/images/split-branding.webp"
            alt={isEs ? 'Branding y Diseño de Marca' : 'Branding & Brand Design'}
            width={960}
            height={780}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Row 2: Left Full-Bleed Memphis Portrait | Right #ffffff Text (padding 10%) + Outlined Contact Button */}
      <div
        ref={row2Ref}
        className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch bg-[#ffffff]"
      >
        <div className="relative min-h-[440px] sm:min-h-[560px] lg:min-h-[780px] w-full overflow-hidden order-2 lg:order-1">
          <img
            src="/images/split-commitment.webp"
            alt={isEs ? 'Inspirados por tus ideas' : 'Inspired by your ideas'}
            width={960}
            height={840}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <div className="bg-[#ffffff] px-8 py-16 sm:p-16 lg:p-[16%] flex flex-col justify-center order-1 lg:order-2">
          <div
            className={`salient-fade-bottom ${vis2 ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0ms' }}
          >
            <h5 className="font-dm text-[14px] font-medium text-[#bfbfbf] mb-3">
              {isEs ? 'Nuestro compromiso' : 'Our Commitment'}
            </h5>
            <h2 className="font-gloock text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.18] text-[#000000] font-normal mb-5">
              {isEs ? 'Inspirados por tus ideas' : 'Inspired by your ideas'}
            </h2>
          </div>

          <p
            style={{ transitionDelay: '120ms' }}
            className={`font-dm text-[15px] sm:text-[16px] leading-[28px] text-[#0a0a0a]/65 font-normal mb-9 salient-fade-bottom ${
              vis2 ? 'is-visible' : ''
            }`}
          >
            {isEs
              ? 'En Rueda la Rola Media no “entregamos servicios”: nos subimos a tu viaje. Escuchamos con lupa, trazamos estrategias hechas a medida y te acompañamos en cada hito para que tus objetivos no solo se cumplan, sino que rompan el molde.'
              : 'At Rueda la Rola Media, we don\'t just "deliver services": we join your journey. We listen carefully, design tailor-made strategies, and stand by you at every milestone so your objectives don\'t just come true, they break the mold.'}
          </p>

          <div
            style={{ transitionDelay: '220ms' }}
            className={`salient-fade-bottom ${vis2 ? 'is-visible' : ''}`}
          >
            <a
              href="#formulario"
              className="inline-block px-8 py-3.5 border-2 border-black/75 font-dm text-[12px] font-bold uppercase tracking-[1.2px] text-[#000000] hover:bg-[#000000] hover:border-[#000000] hover:text-white transition-colors duration-300"
            >
              {isEs ? 'Contacto' : 'Contact'}
            </a>
          </div>
        </div>
      </div>

      {/* Row 3: Left #f4f4f4 Text (padding 10%) | Right Full-Bleed Web Design Office Photo */}
      <div
        ref={row3Ref}
        className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch bg-[#f4f4f4]"
      >
        <div className="bg-[#f4f4f4] px-8 py-16 sm:p-16 lg:p-[16%] flex flex-col justify-center">
          <div
            className={`salient-fade-bottom ${vis3 ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0ms' }}
          >
            <h5 className="font-dm text-[14px] font-medium text-[#bfbfbf] mb-3">
              {isEs ? 'Diseño web' : 'Web Design'}
            </h5>
            <h2 className="font-gloock text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.18] text-[#000000] font-normal mb-5">
              {isEs
                ? 'Webs que convierten ideas en ingresos'
                : 'Websites that turn ideas into income'}
            </h2>
          </div>

          <p
            style={{ transitionDelay: '120ms' }}
            className={`font-dm text-[15px] sm:text-[16px] leading-[28px] text-[#0a0a0a]/65 font-normal salient-fade-bottom ${
              vis3 ? 'is-visible' : ''
            }`}
          >
            {isEs
              ? 'Para emprendedores audaces, marcas corporativas exigentes y tiendas online hambrientas de ventas. Unimos UX/UI que enamora, desarrollo sólido y estrategias de conversión para que cada visita cuente.'
              : 'For bold entrepreneurs, demanding corporate brands, and online stores hungry for sales. We combine standout UX/UI, solid development, and conversion strategies so every visit counts.'}
          </p>
        </div>

        <div className="relative min-h-[420px] sm:min-h-[540px] lg:min-h-[660px] w-full overflow-hidden">
          <img
            src="/images/split-webdesign.webp"
            alt={isEs ? 'Diseño Web' : 'Web Design'}
            width={960}
            height={740}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};
