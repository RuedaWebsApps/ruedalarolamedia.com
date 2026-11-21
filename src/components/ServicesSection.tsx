import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';
import { servicesEn, servicesEs } from '../content/siteContent';

interface ServicesSectionProps {
  lang: Language;
}

const IconsmindSvg: React.FC<{ name: string; gradId: string }> = ({ name, gradId }) => {
  const strokeUrl = `url(#${gradId})`;

  switch (name) {
    case 'crown':
      // iconsmind-Crown-2
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <path
            d="M7 36L11 16L20 25L25 13L30 25L39 16L43 36H7Z"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-300 group-hover:stroke-white"
          />
          <path
            d="M7 41H43"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            className="transition-colors duration-300 group-hover:stroke-white"
          />
          <circle cx="25" cy="10" r="2" stroke={strokeUrl} strokeWidth="1.6" className="group-hover:stroke-white" />
          <circle cx="10" cy="13" r="1.8" stroke={strokeUrl} strokeWidth="1.6" className="group-hover:stroke-white" />
          <circle cx="40" cy="13" r="1.8" stroke={strokeUrl} strokeWidth="1.6" className="group-hover:stroke-white" />
        </svg>
      );
    case 'layers':
      // iconsmind-Duplicate-Layer
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <path
            d="M25 9L43 18.5L25 28L7 18.5L25 9Z"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinejoin="round"
            className="group-hover:stroke-white"
          />
          <path
            d="M7 26L25 35.5L43 26"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-white"
          />
          <path
            d="M7 33.5L25 43L43 33.5"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-white"
          />
        </svg>
      );
    case 'monitor-phone':
      // iconsmind-Monitor-phone
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <rect
            x="6"
            y="10"
            width="30"
            height="22"
            rx="2"
            stroke={strokeUrl}
            strokeWidth="1.7"
            className="group-hover:stroke-white"
          />
          <path d="M16 39H26" stroke={strokeUrl} strokeWidth="1.7" strokeLinecap="round" className="group-hover:stroke-white" />
          <path d="M21 32V39" stroke={strokeUrl} strokeWidth="1.7" strokeLinecap="round" className="group-hover:stroke-white" />
          <rect
            x="32"
            y="21"
            width="12"
            height="21"
            rx="2"
            fill="transparent"
            stroke={strokeUrl}
            strokeWidth="1.7"
            className="group-hover:stroke-white"
          />
          <circle cx="38" cy="38.5" r="1" fill="#60318a" className="group-hover:fill-white" />
        </svg>
      );
    case 'refresh':
      // iconsmind-Refresh
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <path
            d="M39 25C39 32.732 32.732 39 25 39C17.268 39 11 32.732 11 25C11 17.268 17.268 11 25 11C29.8 11 34.04 13.42 36.56 17.1"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            className="group-hover:stroke-white"
          />
          <path
            d="M37 10V18H29"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-white"
          />
        </svg>
      );
    case 'photos':
      // iconsmind-Photos
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <rect
            x="11"
            y="14"
            width="31"
            height="24"
            rx="2"
            stroke={strokeUrl}
            strokeWidth="1.7"
            className="group-hover:stroke-white"
          />
          <path
            d="M8 33V11C8 9.89543 8.89543 9 10 9H36"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            className="group-hover:stroke-white"
          />
          <circle cx="20" cy="22" r="3" stroke={strokeUrl} strokeWidth="1.6" className="group-hover:stroke-white" />
          <path
            d="M12 35L21 27L28 33L34 27L42 35"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-white"
          />
        </svg>
      );
    case 'flash':
      // iconsmind-Flash
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <path
            d="M28 7L12 27H25L22 43L38 23H25L28 7Z"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-white"
          />
        </svg>
      );
    case 'newsvine':
      // iconsmind-Newsvine
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <path
            d="M25 42V14"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            className="group-hover:stroke-white"
          />
          <path
            d="M25 22C25 16 31 11 38 11C38 18 33 23 25 23"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-white"
          />
          <path
            d="M25 29C25 23 19 18 12 18C12 25 17 30 25 30"
            stroke={strokeUrl}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-white"
          />
          <path
            d="M25 14C22 10 22 7 25 7C28 7 28 10 25 14Z"
            stroke={strokeUrl}
            strokeWidth="1.7"
            className="group-hover:stroke-white"
          />
        </svg>
      );
    case 'sidebar-window':
    default:
      // iconsmind-Sidebar-Window
      return (
        <svg viewBox="0 0 50 50" className="w-[50px] h-[50px]" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d81684" />
              <stop offset="100%" stopColor="#60318a" />
            </linearGradient>
          </defs>
          <rect
            x="7"
            y="10"
            width="36"
            height="30"
            rx="2.5"
            stroke={strokeUrl}
            strokeWidth="1.7"
            className="group-hover:stroke-white"
          />
          <path d="M7 18H43" stroke={strokeUrl} strokeWidth="1.7" className="group-hover:stroke-white" />
          <path d="M19 18V40" stroke={strokeUrl} strokeWidth="1.7" className="group-hover:stroke-white" />
          <circle cx="11.5" cy="14" r="1" fill="#d81684" className="group-hover:fill-white" />
          <circle cx="15.5" cy="14" r="1" fill="#9c2487" className="group-hover:fill-white" />
          <circle cx="19.5" cy="14" r="1" fill="#60318a" className="group-hover:fill-white" />
        </svg>
      );
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const services = isEs ? servicesEs : servicesEn;
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
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative w-full bg-[#ffffff] text-[#000000] pt-[5vw] pb-[9vw] px-6 sm:px-10 lg:px-[90px] scroll-mt-[90px] lg:scroll-mt-[136px]"
    >
      <div id="services" className="sr-only" aria-hidden="true" />

      <div className="max-w-[1260px] mx-auto">
        {/* Centered Header Block (matching WPBakery 1/6 + 2/3 + 1/6 row) */}
        <div
          className={`max-w-[680px] mx-auto text-center mb-14 lg:mb-16 salient-fade-bottom ${
            visible ? 'is-visible' : ''
          }`}
        >
          <h5 className="font-dm text-[14px] font-medium text-[#000000] tracking-normal mb-3">
            {isEs
              ? 'Servicios - Creatividad que rompe esquemas'
              : 'Services – Creativity that breaks the mold'}
          </h5>

          <h2 className="font-gloock text-[34px] sm:text-[42px] lg:text-[44px] leading-[1.18] text-[#000000] font-normal mb-5">
            {isEs ? 'Nuestros servicios' : 'Our services'}
          </h2>

          <p className="font-dm text-[15px] sm:text-[16px] leading-[28px] text-[#333333] font-normal">
            {isEs
              ? 'Somos una agencia de comunicaciones que ofrece diversos servicios de relaciones públicas. Si deseas tomar una ventaja competitiva, te invitamos a que compruebes cómo pueden ayudarle nuestros servicios de consultoría..'
              : 'We are a communications agency offering various public relations services. If you want to gain a competitive advantage, we invite you to see how our consulting services can help you..'}
          </p>
        </div>

        {/* 4x2 Grid of Salient fancy_box (box_style="color_box_hover") Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[26px]">
          {services.map((service, index) => {
            const colDelay = (index % 4) * 100;
            return (
              <div
                key={service.id}
                style={{ transitionDelay: `${colDelay}ms` }}
                className={`group salient-fancy-box min-h-[340px] lg:min-h-[354px] p-8 lg:p-[36px] flex flex-col justify-between cursor-pointer salient-fade-bottom ${
                  visible ? 'is-visible' : ''
                }`}
              >
                {/* Hover Background Photo */}
                <div
                  className="fancy-box-bg"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Hover Extra-Color-Gradient-1 Overlay (#d81684 -> #60318a) */}
                <div className="fancy-box-overlay" />

                {/* Top Iconsmind SVG Icon */}
                <div className="fancy-box-content pt-1">
                  <IconsmindSvg name={service.iconName} gradId={`svc-grad-${service.id}`} />
                </div>

                {/* Bottom Title & Description */}
                <div className="fancy-box-content mt-auto pt-12">
                  <h4 className="font-gloock text-[20px] lg:text-[22px] leading-[1.28] text-[#000000] group-hover:text-white transition-colors duration-300 mb-3">
                    {service.title}
                  </h4>
                  <p className="font-dm text-[14px] lg:text-[15px] leading-[24px] text-[#4a4a4a] group-hover:text-white/95 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
