import { ServiceCard } from '../ui/ServiceCard';
import { Search, Code, Palette } from 'lucide-react';

export const ServicesGrid = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-nerko mb-16 text-[#282B4A]">Våra Tjänster</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <ServiceCard 
          variant="grid"
          icon={Search}
          title="SEO & CEO"
          description="SEO är bara början. Vi optimerar din digitala närvaro för både klassiska sökresultat och framtidens AI-motorer (GEO). Vi ser till att ditt varumärke inte bara hittas, utan också prioriteras av morgondagens smarta sökverkstäder."
        />
        <ServiceCard 
          variant="grid"
          icon={Code}
          title="Webbutveckling"
          description="Vi förvandlar din vision till en sömlös, blixtsnabb och skalbar digital upplevelse. Med fokus på både användarvänlighet och smart kod bygger vi grunden för din framgång online."
        />
        <ServiceCard 
          variant="grid"
          icon={Palette}
          title="UI & UX"
          description="Vi designar användarresor som känns naturliga, engagerar och konverterar. Från skiss till färdig design fokuserar vi på människan bakom skärmen för att skapa upplevelser som verkligen gör skillnad."
        />
      </div>
    </section>
  );
};