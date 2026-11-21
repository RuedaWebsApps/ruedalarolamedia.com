import React, { useState } from 'react';
import { Language } from '../types';
import { navItemsEn, navItemsEs } from '../content/siteContent';

interface NavbarProps {
  lang: Language;
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isEs = lang === 'es';
  const navItems = isEs ? navItemsEs : navItemsEn;

  return (
    <header
      id="header-outer"
      className="w-full bg-[#000000] text-white sticky top-0 z-50 animate-salient-header"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[90px] h-[90px] lg:h-[136px] flex items-center justify-between">
        {/* Left Brand Vinyl Logo */}
        <a
          href={isEs ? '/es' : '/'}
          aria-label="Rueda La Rola Media"
          className="inline-flex items-center shrink-0 focus:outline-none"
        >
          <img
            src="/images/wp/408_logo-en-blanco-e1745966879628.png"
            alt="Rueda La Rola Media"
            width={75}
            height={80}
            className="h-[54px] lg:h-[80px] w-auto object-contain transition-transform duration-300 hover:scale-105"
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

        {/* Right Language Switcher Links (EN / ES) matching Salient Secondary Right Menu */}
        <div className="hidden lg:flex items-center gap-6 font-dm text-[15px] font-normal">
          <a
            href="/"
            className={`nectar-text-reveal-link py-1 ${
              !isEs ? 'text-white font-medium' : 'text-white/80 hover:text-white'
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
              isEs ? 'text-white font-medium' : 'text-white/80 hover:text-white'
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
        <div className="lg:hidden bg-[#000000] border-t border-white/10 px-6 py-6 space-y-4 font-dm text-lg">
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
