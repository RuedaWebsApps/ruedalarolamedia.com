import React, { useState, useEffect } from 'react';
import { legalPath, type Locale } from '../legal/legalDocs';

interface CookieBannerProps {
  lang: Locale;
}

const STORAGE_KEY = 'rueda_cookie_notice_v1';

export const CookieBanner: React.FC<CookieBannerProps> = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const isEs = lang === 'es';

  useEffect(() => {
    try {
      const accepted = window.localStorage.getItem(STORAGE_KEY);
      if (!accepted) {
        setVisible(true);
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const handleAccept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      // Ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="region"
      aria-label={isEs ? 'Aviso de cookies y privacidad' : 'Cookie and privacy notice'}
      className="fixed bottom-4 left-4 right-4 z-40 max-w-4xl mx-auto bg-[#0b0f17]/95 text-white border border-purple-500/40 rounded-2xl p-4 sm:px-6 sm:py-4 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
    >
      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
        {isEs ? (
          <>
            Usamos almacenamiento técnico esencial para el funcionamiento del sitio y respetamos tu privacidad (sin cookies publicitarias). Consulta nuestra{' '}
            <a href={legalPath('cookies', lang)} className="underline text-purple-300 hover:text-white font-semibold">
              Política de Cookies
            </a>{' '}
            y{' '}
            <a href={legalPath('privacy', lang)} className="underline text-purple-300 hover:text-white font-semibold">
              Política de Privacidad
            </a>
            .
          </>
        ) : (
          <>
            We use essential technical storage to operate this site and respect your privacy (no ad tracking cookies). Read our{' '}
            <a href={legalPath('cookies', lang)} className="underline text-purple-300 hover:text-white font-semibold">
              Cookie Policy
            </a>{' '}
            and{' '}
            <a href={legalPath('privacy', lang)} className="underline text-purple-300 hover:text-white font-semibold">
              Privacy Policy
            </a>
            .
          </>
        )}
      </p>
      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
        <button
          type="button"
          onClick={handleAccept}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#6a35ff] to-[#ec186a] hover:from-[#7c4dff] hover:to-[#f0327f] text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
        >
          {isEs ? 'Entendido' : 'Got It'}
        </button>
      </div>
    </aside>
  );
};
