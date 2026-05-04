import { lazy, Suspense } from "react";
import { Hero } from "../../components/sections/Hero";
import { ServicesGrid } from "../../components/sections/ServicesGrid";
import { useTranslation } from "react-i18next";

// Lazy loading av komponenter längre ner på sidan
const MidCTA = lazy(() => import("../../components/landingpage/MidCTA").then(module => ({ default: module.MidCTA })));
const Process = lazy(() => import("../../components/landingpage/Process").then(module => ({ default: module.Process })));
const FinalCTA = lazy(() => import("../../components/landingpage/FinalCTA").then(module => ({ default: module.FinalCTA })));

const Hem = () => {
  const { t } = useTranslation();

  return (
    <main>
      <Hero 
        title={t('hero.title')}
        description={t('hero.description')}
        buttonText={t('hero.button')}
        imageSrc="/images/landingpage.webp"
      />
      
      <ServicesGrid />

      <Suspense fallback={<div className="h-20" />}>
        <MidCTA />
        <Process />
        <FinalCTA />
      </Suspense>
    </main>
  );
};

export default Hem;