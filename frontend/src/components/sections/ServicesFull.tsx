import { ServiceCard } from '../ui/ServiceCard';
import { Search, Code, Palette } from 'lucide-react';

export const ServicesFull = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-nerko mb-20 text-[#282B4A]">Våra Tjänster</h2>
      
      <div className="flex flex-col gap-20">
        <ServiceCard 
          variant="list"
          icon={Search}
          title="SEO & CEO"
          description="Vi ser till att ditt varumärke inte bara hittas, utan också prioriteras av morgondagens smarta sökverkstäder."
          bullets={[
            "Datadriven CEO-optimering",
            "Lokal SEO med global räckvidd",
            "Teknisk auktoritet & snabbhet"
          ]}
        />

        <ServiceCard 
          variant="list"
          icon={Code}
          title="Webbutveckling"
          description="Med fokus på både användarvänlighet och smart kod bygger vi grunden för din framgång online."
          bullets={[
            "Skräddarsydd kod utan mallar",
            "Prestanda i världsklass",
            "Skalbar & framtidssäker arkitektur"
          ]}
        />
        
        <ServiceCard 
          variant="list"
          icon={Palette}
          title="UI & UX"
          description="Från skiss till färdig design fokuserar vi på människan bakom skärmen för att skapa skillnad."
          bullets={[
            "Användarvänlighet i fokus",
            "Visuell identitet med karaktär",
            "Konverteringsdriven layout"
          ]}
        />
      </div>
    </section>
  );
};