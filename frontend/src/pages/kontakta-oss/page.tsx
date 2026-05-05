"use client";

import { Hero } from "../../components/sections/Hero";
import { ContactForm } from "../../components/sections/ContactForm";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById("contact-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#EEEBDA]">
      <Hero
        title={t(
          "contact.hero.title",
          "Vi kopplar samman din vision med verkligheten.",
        )}
        description={t("contact.hero.description", "Berätta om dina idéer för oss, så ser vi till att de blir verklighet med modern teknik och kreativ design.")} 
        buttonText={t("contact.hero.button", "Boka ett kostnadsfritt möte")}
        onButtonClick={scrollToContact} 
        imageSrc="/images/contactpage.webp"
      />
      <div id="contact-section">
        <ContactForm />
      </div>
    </main>
  );
}