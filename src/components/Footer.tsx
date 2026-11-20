import React from 'react';
import { Language } from '../types';
import { siteMetadata } from '../content/siteContent';
import { LEGAL_KINDS, legalLabel, legalPath } from '../legal/legalDocs';
import { Phone, Mail, MapPin, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { label: isEs ? 'Diseño de Marca' : 'Brand Identity', href: isEs ? '/es#servicios' : '/#services' },
    { label: isEs ? 'Rotulación Vehicular (Wraps)' : 'Vehicle Wraps', href: isEs ? '/es#wrap' : '/#wrap' },
    { label: isEs ? 'Diseño & Desarrollo Web' : 'Web Design & Dev', href: isEs ? '/es#servicios' : '/#services' },
    { label: isEs ? 'Merchandising & Uniformes' : 'Custom Merchandise', href: isEs ? '/es#servicios' : '/#services' },
    { label: isEs ? 'Marketing Digital' : 'Digital Marketing', href: isEs ? '/es#servicios' : '/#services' },
    { label: isEs ? 'Animación 2D y 3D' : '2D/3D Animation', href: isEs ? '/es#servicios' : '/#services' },
  ];

  const portfolioPrefix = isEs ? '/es/portfolio' : '/portfolio';
  const portfolioLinks = [
    { label: isEs ? 'Galería de Logotipos' : 'Logos Design Showcase', href: `${portfolioPrefix}/logos-design` },
    { label: 'Innk Visual Identity', href: `${portfolioPrefix}/luminara` },
    { label: 'Alery Packaging & Branding', href: `${portfolioPrefix}/astralis` },
    { label: 'Brioche Gourmet Bakery', href: `${portfolioPrefix}/spectral` },
    { label: isEs ? 'Artículos del Blog' : 'Agency Blog', href: isEs ? '/es/blog' : '/blog' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#2e1047] via-[#210933] to-[#140520] text-white border-t border-purple-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <a href={isEs ? '/es' : '/'} className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/images/logo-nav.webp"
                  alt="Rueda La Rola Media"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(236,24,106,0.5)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  RUEDA LA ROLA
                </span>
                <span className="text-xs font-bold tracking-widest text-[#ec186a] uppercase -mt-0.5">
                  MEDIA &middot; AUSTIN TX
                </span>
              </div>
            </a>

            <p className="text-sm text-purple-100/90 leading-relaxed max-w-sm">
              {isEs
                ? 'Agencia creativa integral en Austin, TX. Especialistas en diseño de marca, rotulación vehicular comercial (wraps), desarrollo web de alto rendimiento y marketing digital.'
                : 'Full-service creative agency in Austin, TX. Specialists in brand identity, commercial vehicle wraps, high-performance web development, and digital marketing.'}
            </p>

            <div className="space-y-2.5 pt-1 text-sm text-gray-200">
              <a
                href={`tel:${siteMetadata.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#ec186a] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">{siteMetadata.phone}</span>
              </a>

              <a
                href={`mailto:${siteMetadata.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-purple-300 group-hover:scale-110 transition-transform" />
                <span>{siteMetadata.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-purple-200/90">
                <MapPin className="w-4 h-4 text-yellow-300" />
                <span>Austin, Texas &middot; Central Texas</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteMetadata.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#ec186a] flex items-center justify-center text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteMetadata.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#6a35ff] flex items-center justify-center text-white transition-all shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteMetadata.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-all shadow-sm"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              {isEs ? 'Servicios Creativos' : 'Creative Services'}
            </h3>
            <ul className="space-y-2.5 text-sm text-purple-100/80">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recent Portfolio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              {isEs ? 'Proyectos Recientes' : 'Recent Projects'}
            </h3>
            <ul className="space-y-2.5 text-sm text-purple-100/80">
              {portfolioLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#ec186a]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <a
                href={isEs ? '/contacto' : '/contact'}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#6a35ff] to-[#ec186a] hover:from-[#7c4dff] hover:to-[#f0327f] shadow-md shadow-purple-900/50 transition-all"
              >
                <span>{isEs ? 'Solicitar Presupuesto' : 'Request a Proposal'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal row */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between text-xs text-purple-200/75 gap-4">
          <p>
            &copy; {currentYear} {siteMetadata.legalName}. {isEs ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
          <nav
            aria-label={isEs ? 'Información legal' : 'Legal'}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1"
          >
            {LEGAL_KINDS.map((k) => (
              <a
                key={k}
                href={legalPath(k, lang)}
                className="hover:text-white transition-colors underline-offset-2 hover:underline"
              >
                {legalLabel(k, lang)}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              {isEs ? 'Hecho con' : 'Crafted with'}{' '}
              <Heart className="w-3 h-3 text-[#ec186a] fill-[#ec186a]" />{' '}
              {isEs ? 'en Austin, Texas' : 'in Austin, Texas'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
