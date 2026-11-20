import React from 'react';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { PortfolioDetailPage } from './pages/PortfolioDetailPage';
import { LegalPage } from './pages/LegalPage';
import { CookieBanner } from './components/CookieBanner';
import { resolveLegalRoute } from './legal/legalDocs';

interface AppProps {
  initialPath?: string;
}

export const App: React.FC<AppProps> = ({ initialPath }) => {
  const [path, setPath] = React.useState<string>(() => {
    if (initialPath) return initialPath;
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const cleanPath = path.replace(/\/+$/, '') || '/';

  // 1. Legal routes (/privacy, /terms, /cookies, /accessibility, /es/privacidad, etc.)
  const legalMatch = resolveLegalRoute(cleanPath);
  if (legalMatch) {
    return (
      <>
        <LegalPage kind={legalMatch.kind} lang={legalMatch.locale} />
        <CookieBanner lang={legalMatch.locale} />
      </>
    );
  }

  // 2. Spanish Home
  if (cleanPath === '/es') {
    return (
      <>
        <HomePage lang="es" />
        <CookieBanner lang="es" />
      </>
    );
  }

  // 3. Contact routes
  if (cleanPath === '/contacto') {
    return (
      <>
        <ContactPage lang="es" />
        <CookieBanner lang="es" />
      </>
    );
  }
  if (cleanPath === '/contact') {
    return (
      <>
        <ContactPage lang="en" />
        <CookieBanner lang="en" />
      </>
    );
  }

  // 4. Blog routes (/blog & /es/blog)
  if (cleanPath === '/es/blog') {
    return (
      <>
        <BlogPage lang="es" />
        <CookieBanner lang="es" />
      </>
    );
  }
  if (cleanPath === '/blog') {
    return (
      <>
        <BlogPage lang="en" />
        <CookieBanner lang="en" />
      </>
    );
  }

  // 5. Portfolio routes (/portfolio/[slug] & /es/portfolio/[slug])
  if (cleanPath.startsWith('/es/portfolio/')) {
    const slug = cleanPath.replace('/es/portfolio/', '');
    return (
      <>
        <PortfolioDetailPage slug={slug} lang="es" />
        <CookieBanner lang="es" />
      </>
    );
  }
  if (cleanPath.startsWith('/portfolio/')) {
    const slug = cleanPath.replace('/portfolio/', '');
    return (
      <>
        <PortfolioDetailPage slug={slug} lang="en" />
        <CookieBanner lang="en" />
      </>
    );
  }

  // Default: English Home (Mandate: / is English default)
  return (
    <>
      <HomePage lang="en" />
      <CookieBanner lang="en" />
    </>
  );
};
