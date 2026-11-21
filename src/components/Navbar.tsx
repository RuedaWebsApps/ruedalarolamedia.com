import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { navItemsEn, navItemsEs } from '../content/siteContent';

interface NavbarProps {
  lang: Language;
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, currentPath = '/' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHeroLogo, setPastHeroLogo] = useState(false);

  const isEs = lang === 'es';
  const navItems = isEs ? navItemsEs : navItemsEn;
  const isHomePage = currentPath === '/' || currentPath === '/es';

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 36);
      setPastHeroLogo(y > 140);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On Homepage top, avoid double vinyl logo stacked directly over the Hero 3D vinyl logo
  const showNavLogo = !isHomePage || pastHeroLogo;

  return (
    <header
      id="header-outer"
      className={`w-full text-white sticky top-0 z-50 animate-salient-header transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000]/92 backdrop-blur-md border-b border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.55)]'
          : 'bg-[#000000]'
      }`}
    >
      <div
        className={`max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[90px] flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-[72px] lg:h-[82px]' : 'h-[86px] lg:h-[124px]'
        }`}
      >
        {/* Left Brand Vinyl Logo (Reveals on scroll on Homepage to avoid double-logo clash with Hero 3D logo) */}
        <a
          href={isEs ? '/es' : '/'}
          aria-label="Rueda La Rola Media"
          className={`inline-flex items-center shrink-0 focus:outline-none transition-all duration-300 ${
            showNavLogo
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none lg:w-[75px]'
          }`}
        >
          <img
            src="/images/logo-nav.webp"
            alt="Rueda La Rola Media"
            width={75}
            height={80}
            className={`w-auto object-contain transition-all duration-300 hover:scale-105 ${
              scrolled ? 'h-[46px] lg:h-[54px]' : 'h-[52px] lg:h-[74px]'
            }`}
          />
        </a>

        {/* Centered Navigation Links with Salient Nectar Text Reveal Hover */}
        <nav
          aria-label={isEs ? 'Navegación principal' : 'Main navigation'}
          className="hidden lg:flex items-center justify-center gap-9 font-dm text-[15px] font-normal tracking-normal"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="nectar-text-reveal-link text-white/95 hover:text-white py-1"
            >
              <span className="nectar-text-inner" data-text={item.label}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Right Language Switcher Links (EN / ES) */}
        <div className="hidden lg:flex items-center gap-6 font-dm text-[15px] font-normal">
          <a
            href="/"
            className={`nectar-text-reveal-link py-1 ${
              !isEs ? 'text-white font-semibold' : 'text-white/75 hover:text-white'
            }`}
            aria-label="English"
          >
            <span className="nectar-text-inner" data-text="EN">
              EN
            </span>
          </a>
          <a
            href="/es"
            className={`nectar-text-reveal-link py-1 ${
              isEs ? 'text-white font-semibold' : 'text-white/75 hover:text-white'
            }`}
            aria-label="Español"
          >
            <span className="nectar-text-inner" data-text="ES">
              ES
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
          <div className="flex items-center gap-3 font-dm text-sm">
            <a
              href="/"
              className={!isEs ? 'text-white font-bold underline underline-offset-4' : 'text-white/70'}
            >
              EN
            </a>
            <span className="text-white/30">/</span>
            <a
              href="/es"
              className={isEs ? 'text-white font-bold underline underline-offset-4' : 'text-white/70'}
            >
              ES
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileOpen}
            className="p-2 text-white focus:outline-none"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
                  mobileOpen ? 'translate-y-[8px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
                  mobileOpen ? '-translate-y-[8px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#000000]/95 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-4 font-dm text-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-white/90 hover:text-white border-b border-white/5"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
