
const PROCESS = [
  {
    num: '01',
    title: 'Analys & Berättelse',
    desc: 'Innan vi rör en enda rad kod vill vi förstå er. Vi sätter oss ner (digitalt eller över en kaffe) och går igenom er vision, era mål och era kunders behov. Vi identifierar de "digitala stigar" som leder till resultat för just er verksamhet.',
  },
  {
    num: '02',
    title: 'Design & Prototyp',
    desc: 'Här börjar det kreativa hantverket. Vi skissar fram ett UI (gränssnitt) som inte bara är snyggt, utan som känns rätt för ert varumärke. Ni får se och testa en interaktiv prototyp så att vi kan finjustera upplevelsen tillsammans innan vi börjar bygga.',
  },
  {
    num: '03',
    title: 'Hantverk & Utveckling',
    desc: 'Nu bygger vi bron. Vi kodar er webbplats från grunden med fokus på blixtsnabb prestanda och ren kod. Samtidigt implementerar vi SEO- och GEO-optimering så att ni är redo att möta framtidens sökmotorer och AI-svar direkt vid lansering.',
  },
  {
    num: '04',
    title: 'Lansering & Support',
    desc: 'Vi släpper inte taget bara för att sajten går live. Vi ser till att allt rullar perfekt, utbildar er i hur ni använder verktygen och finns nära till hands för support. Vi bygger relationer som håller, precis som våra webbplatser.',
  },
];

export const ProcessGrid = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-nerko font-medium mb-16 text-[#282B4A]">
        Vår process
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
        {PROCESS.map((p) => (
          <div key={p.num} className="space-y-5 max-w-xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-[#5A6D5A] flex-shrink-0 flex items-center justify-center text-[#5A6D5A] font-nerko font-bold text-4xl">
                {p.num}
              </div>
              
              <h3 className="text-[28px] md:text-[36px] font-medium text-[#282B4A]">
                {p.title}
              </h3>
            </div>

            <p className="text-[20px] md:text-[24px] leading-relaxed font-medium text-[#282B4A]">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};