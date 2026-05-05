"use client";

import { Hero } from "../../components/sections/Hero";
import { WhoWeAre } from "../../components/about-us/WhoWeAre";
import { ValueCard } from "../../components/about-us/ValueCard";
import { StatsGrid } from "../../components/about-us/StatusGrid";
import { TeamSection } from "../../components/about-us/TeamSection";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#EEEBDA]">
      <Hero
        title={t("about.hero.title", "Här bygger vi digitala fundament från grunden.")}
        description=""
        buttonText={t("about.hero.button", "Möt ditt team")}
        onButtonClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
        imageSrc="/images/landingpage.webp"
      />

      <WhoWeAre />
      <ValueCard />
      <StatsGrid />
      <TeamSection />
    </main>
  );
}