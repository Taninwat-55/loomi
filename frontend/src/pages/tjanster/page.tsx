"use client";

import { useTranslation } from "react-i18next";
import { Hero } from "../../components/sections/Hero";
import { ServiceIntro } from "../../components/services/ServiceIntro";
import { ServiceCTA } from "../../components/services/ServiceCTA";
import { ServiceList } from "../../components/services/ServiceList";
import { ProcessGrid } from "../../components/services/ProcessGrid";
import { ServiceFeatures } from "../../components/services/ServiceFeatures";

export default function TjansterPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#EEEBDA] min-h-screen">
      <Hero
        title={t(
          "services.hero.title",
          "Vi bygger morgondagens digitala landskap",
        )}
        description={t(
          "services.hero.description",
          "Skräddarsydda digitala lösningar, SEO/GEO-optimering och användarvänlig design.",
        )}
        buttonText={t("services.hero.button", "Se våra tjänster")}
        onButtonClick={() => {
          const element = document.getElementById("service-list");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
        imageSrc="/images/servicespage.webp"
      />

      <ServiceIntro />

      <ServiceCTA />

      <div id="service-list">
        <ServiceList />
      </div>
      <ServiceFeatures />
      <ProcessGrid />
    </main>
  );
}
