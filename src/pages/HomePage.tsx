import React from 'react';
import { Language } from '../types';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { WrapBanner } from '../components/WrapBanner';
import { DualFeatureSection } from '../components/DualFeatureSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { SplitSections } from '../components/SplitSections';
import { ClientFormSection } from '../components/ClientFormSection';
import { Footer } from '../components/Footer';

interface HomePageProps {
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  const currentPath = lang === 'es' ? '/es' : '/';

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
      <Navbar lang={lang} currentPath={currentPath} />
      <main id="main" className="flex-grow">
        <HeroSection lang={lang} />
        <ServicesSection lang={lang} />
        <WrapBanner lang={lang} />
        <DualFeatureSection lang={lang} />
        <PortfolioSection lang={lang} />
        <SplitSections lang={lang} />
        <ClientFormSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};
