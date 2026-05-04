import { lazy, Suspense } from "react";
import { Hero } from "../../components/sections/Hero";
import { ServicesGrid } from "../../components/sections/ServicesGrid";

// Lazy loading av komponenter längre ner på sidan
const MidCTA = lazy(() => import("../../components/landingpage/MidCTA").then(module => ({ default: module.MidCTA })));
const Process = lazy(() => import("../../components/landingpage/Process").then(module => ({ default: module.Process })));
const FinalCTA = lazy(() => import("../../components/landingpage/FinalCTA").then(module => ({ default: module.FinalCTA })));

const Hem = () => {
  return (
    <main>
      <Hero 
        title="Visionären"
        description="Som visionär drivs du av att se din idé ta form och göra intryck. Vi är hantverkarna som förstår att en digital upplevelse handlar om mer än bara pixlar; det handlar om känsla och teknisk precision. På Loomi är din vision vårt uppdrag, och vi bygger den med passion för varje detalj."
        buttonText="Kontakta Oss"
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