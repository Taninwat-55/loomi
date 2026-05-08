import { Link, Code2, Palette, Check, ChevronRight } from 'lucide-react';

const SERVICES = [
  {
    title: 'SEO & GEO',
    icon: <Link className="w-6 h-6" />,
    desc: 'SEO är bara början. Vi optimerar din digitala närvaro för både klassiska sökresultat och framtidens AI-motorer (GEO). Vi ser till att ditt varumärke inte bara hittas, utan också prioriteras av morgondagens smarta sökverkstäder.',
    bullets: [
      'Datadriven GEO-optimering',
      'Lokal SEO med global räckvidd',
      'Teknisk auktoritet & snabbhet',
    ],
  },
  {
    title: 'Webbutveckling',
    icon: <Code2 className="w-6 h-6" />,
    desc: 'Vi förvandlar din vision till en sömlös, blixtsnabb och skalbar digital upplevelse. Med fokus på både användarvänlighet och smart kod bygger vi grunden för din framgång online.',
    bullets: [
      'Skräddarsydd kod utan mallar',
      'Prestanda i världsklass',
      'Skalbar & framtidssäker arkitektur',
    ],
  },
  {
    title: 'UI & UX',
    icon: <Palette className="w-6 h-6" />,
    desc: 'Vi designar användarresor som känns naturliga, engagerar och konverterar. Från skiss till färdig design fokuserar vi på människan bakom skärmen för att skapa upplevelser som verkligen gör skillnad.',
    bullets: [
      'Användarvänlighet i fokus',
      'Visuell identitet med karaktär',
      'Konverteringsdriven layout',
    ],
  },
];

export const ServiceList = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-nerko font-medium mb-20 text-[#282B4A]">
        Våra tjänster
      </h2>
      
      <div className="space-y-32">
        {SERVICES.map((service, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#5A6D5A] p-3 rounded-full text-[#EEEBDA] flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-[28px] md:text-[36px] font-nerko font-medium underline decoration-2 underline-offset-8 decoration-[#5A6D5A]/30 text-[#282B4A]">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-[20px] md:text-[24px] leading-relaxed font-medium text-[#282B4A] max-w-lg">
                {service.desc}
              </p>
              
              <button className="flex items-center gap-2 font-bold text-lg group text-[#5A6D5A] pt-2">
                <span className="group-hover:underline decoration-2 underline-offset-4">
                  Läs mer om {service.title}
                </span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-2 md:pl-10">
              {service.bullets.map((bullet, bIndex) => (
                <div key={bIndex} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 border-2 border-[#5A6D5A] rounded-full flex items-center justify-center group-hover:bg-[#5A6D5A] transition-colors duration-300">
                    <Check 
                      className="w-4 h-4 text-[#5A6D5A] group-hover:text-[#EEEBDA] transition-colors duration-300" 
                      strokeWidth={4} 
                    />
                  </div>
                  <span className="text-[20px] md:text-[24px] font-medium text-[#282B4A]">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};