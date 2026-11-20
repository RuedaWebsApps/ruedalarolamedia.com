import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {
  getLegalDoc,
  legalPath,
  legalLabel,
  LEGAL_KINDS,
  type LegalKind,
  type Locale,
} from '../legal/legalDocs';
import { LEGAL_BIZ } from '../legal/legalConfig';

interface LegalPageProps {
  kind: LegalKind;
  lang: Locale;
}

export const LegalPage: React.FC<LegalPageProps> = ({ kind, lang }) => {
  const doc = getLegalDoc(kind, lang, LEGAL_BIZ);
  const isEs = lang === 'es';
  const currentPath = legalPath(kind, lang);

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f17] text-white">
      <Navbar lang={lang} currentPath={currentPath} />

      <main id="main" className="flex-grow py-14 sm:py-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav
            aria-label={isEs ? 'Documentos legales' : 'Legal documents'}
            className="mb-8 flex flex-wrap gap-2"
          >
            {LEGAL_KINDS.map((k) => (
              <a
                key={k}
                href={legalPath(k, lang)}
                aria-current={k === kind ? 'page' : undefined}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold border transition-colors ${
                  k === kind
                    ? 'bg-gradient-to-r from-[#6a35ff] to-[#ec186a] text-white border-transparent'
                    : 'bg-[#141c27] text-gray-200 border-white/15 hover:border-purple-400/50 hover:text-white'
                }`}
              >
                {legalLabel(k, lang)}
              </a>
            ))}
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {doc.title}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-purple-300">
            {doc.updatedLabel}: {doc.updated}
          </p>

          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-gray-200 bg-[#141c27] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl">
            {doc.sections.map((s, i) => (
              <section key={i} className={s.h ? 'pt-3 first:pt-0' : ''}>
                {s.h && (
                  <h2 className="text-lg sm:text-xl font-bold text-purple-300 mb-2">
                    {s.h}
                  </h2>
                )}
                {s.p?.map((para, j) => (
                  <p key={j} className="mb-3 text-gray-300">
                    {para}
                  </p>
                ))}
                {s.ul && (
                  <ul className="list-disc pl-6 space-y-1.5 mb-3 text-gray-300">
                    {s.ul.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer lang={lang} />
    </div>
  );
};
