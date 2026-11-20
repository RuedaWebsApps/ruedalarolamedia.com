import React, { useState } from 'react';
import { Language } from '../types';
import { navItemsEn, navItemsEs, siteMetadata } from '../content/siteContent';
import { resolveLegalRoute, legalPath } from '../legal/legalDocs';
import { Phone, Menu, X, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, currentPath = '/' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = lang === 'es' ? navItemsEs : navItemsEn;

  // Toggle path between EN and ES across all routes (home, contact, blog, portfolio, legal)
  const getLanguageToggleUrl = () => {
    const clean = currentPath.replace(/\/+$/, '') || '/';
    const legalMatch = resolveLegalRoute(clean);
    if (legalMatch) {
      return legalPath(legalMatch.kind, lang === 'en' ? 'es' : 'en');
    }
    if (lang === 'en') {
      if (clean === '/') return '/es';
      if (clean === '/contact') return '/contacto';
      if (clean === '/blog') return '/es/blog';
      if (clean.startsWith('/portfolio/')) return `/es${clean}`;
      return '/es';
    } else {
      if (clean === '/es') return '/';
      if (clean === '/contacto') return '/contact';
      if (clean === '/es/blog' || clean === '/blog') return '/blog';
      if (clean.startsWith('/es/portfolio/')) return clean.replace(/^\/es/, '');
      if (clean.startsWith('/portfolio/')) return clean;
      return '/';
    }
  };

  const homeHref = lang === 'es' ? '/es' : '/';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000]/95 backdrop-blur-md border-b border-white/10 transition-colors duration-200">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#6a35ff] focus:text-white focus:font-bold"
      >
        {lang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <a
            href={homeHref}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#6a35ff] rounded-lg p-1"
            aria-label="Rueda La Rola Media - Home"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
              <img
                src="/images/logo-nav.webp"
                alt="Rueda La Rola Media Logo"
                width={56}
                height={56}
                decoding="async"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
                RUEDA LA ROLA
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#ec186a] uppercase -mt-1">
                MEDIA &middot; AUSTIN TX
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar (Phone + Language Toggle + CTA) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteMetadata.phoneRaw}`}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all"
              aria-label="Call Rueda La Rola Media"
            >
              <Phone className="w-3.5 h-3.5 text-[#ec186a]" />
              <span>{siteMetadata.phone}</span>
            </a>

            <a
              href={getLanguageToggleUrl()}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-full bg-purple-950/40 border border-purple-500/40 text-purple-200 hover:bg-purple-900/50 hover:text-white transition-all shadow-sm"
              title={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              aria-label={lang === 'en' ? 'Switch to Spanish language' : 'Cambiar a idioma inglés'}
            >
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              <span className={lang === 'en' ? 'text-white font-black' : 'text-purple-300'}>EN</span>
              <span className="text-white/30">|</span>
              <span className={lang === 'es' ? 'text-white font-black' : 'text-purple-300'}>ES</span>
            </a>

            <a
              href={lang === 'es' ? '/contacto' : '/contact'}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#6a35ff] to-[#ec186a] hover:from-[#7c4dff] hover:to-[#f0327f] rounded-full shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Cotizar' : 'Get Quote'}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getLanguageToggleUrl()}
              className="px-2.5 py-1 text-xs font-bold rounded-full bg-purple-950/60 border border-purple-500/50 text-white"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#6a35ff]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d121f] border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${siteMetadata.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-gray-200 bg-white/5 rounded-lg border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#ec186a]" />
              <span>{siteMetadata.phone}</span>
            </a>

            <a
              href={lang === 'es' ? '/contacto' : '/contact'}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#6a35ff] to-[#ec186a] rounded-lg shadow-md shadow-purple-600/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'es' ? 'Cotizar Ahora' : 'Get a Quote'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
