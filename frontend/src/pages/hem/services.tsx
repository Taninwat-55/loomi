import React from 'react';
import { Link, Code2, Palette, Check, ArrowRight } from 'lucide-react';
import { t } from 'i18next';

// --- Data Configs ---
const FEATURES = [
  {
    num: '01',
    title: 'Personligt engagemang',
    desc: 'Vi är ett litet team som väljer projekt med omsorg. För oss är du aldrig ett nummer i mängden – vi bygger relationer som håller.',
  },
  {
    num: '02',
    title: 'Äkta hantverk',
    desc: 'Inga mallar eller genvägar. Vi skapar varje detalj från grunden för att din digitala närvaro ska bli lika unik som din vision.',
  },
  {
    num: '03',
    title: 'Skånsk expertis',
    desc: 'Vi jobbar sömlöst över hela Skåne. Genom personlig närvaro och ett digitalt arbetssätt kombinerar vi lokal kännedom med hög effektivitet.',
  },
  {
    num: '04',
    title: 'Morgondagens sök',
    desc: 'Vi bygger inte bara för idag. Vi optimerar din sajt för AI-motorer och framtidens sökbeteende så att du alltid ligger steget före.',
  },
];

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

const FORDELAR = [
  { num: '01', text: 'Från utgift till investering' },
  { num: '02', text: 'Full kontroll och ägandeskap' },
  { num: '03', text: 'En framtidssäkrad plattform' },
];

const PROCESS = [
  {
    num: '1',
    title: 'Analys & Berättelse',
    desc: 'Innan vi rör en enda rad kod vill vi förstå er. Vi sätter oss ner (digitalt eller över en kaffe) och går igenom er vision, era mål och era kunders behov. Vi identifierar de "digitala stigar" som leder till resultat för just er verksamhet.',
  },
  {
    num: '3',
    title: 'Hantverk & Utveckling',
    desc: 'Nu bygger vi bron. Vi kodar er webbplats från grunden med fokus på blixtsnabb prestanda och ren kod. Samtidigt implementerar vi SEO- och GEO-optimering så att ni är redo att möta framtidens sökmotorer och AI-svar direkt vid lansering.',
  },
  {
    num: '2',
    title: 'Design & Prototyp',
    desc: 'Här börjar det kreativa hantverket. Vi skissar fram ett UI (gränssnitt) som inte bara är snyggt, utan som känns rätt för ert varumärke. Ni får se och testa en interaktiv prototyp så att vi kan finjustera upplevelsen tillsammans innan vi börjar bygga.',
  },
  {
    num: '4',
    title: 'Lansering & Support',
    desc: 'Vi släpper inte taget bara för att sajten går live. Vi ser till att allt rullar perfekt, utbildar er i hur ni använder verktygen och finns nära till hands för support. Vi bygger relationer som håller, precis som våra webbplatser.',
  },
];

const Tjanster: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#F5F5DC] text-[#2D362D] font-nerko selection:bg-[#5A6D5A] selection:text-white pb-20">
      {/* 1. Top Hero Title & CTA */}
      <header className="pt-20 pb-10 px-6 text-center">
        <h1 className="text-5xl md:text-6xl mb-8 leading-tight font-bold">
          Vi bygger morgondagens <br /> digitala landskap
        </h1>
        <button className="bg-[#5A6D5A] text-[#F5F5DC] px-8 py-3 rounded-full text-lg hover:scale-105 transition-all shadow-md active:scale-95">
          Se hur vi bygger din vision
        </button>
      </header>

      {/* 2. Illustration Placeholder */}
      <section className="w-full h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <div className="text-gray-400 italic">
          [ Illustration/Bridge Image Area ]
        </div>
      </section>

      {/* 3. Intro Section */}
      <section className="max-w-4xl mx-auto px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Hur kan vi hjälpa dig?
        </h2>
        <div className="text-lg md:text-xl leading-[2.2]">
          Behöver du en ny digital hemvist, vill du bli den självklara källan
          för framtidens AI-sök, eller söker du en design som faktiskt känns?
          Kanske vet du inte exakt var du ska börja – och det är precis där vi
          kommer in. Vi börjar med att lyssna på din berättelse och identifiera
          de digitala stigar som leder dig framåt. Med ett personligt engagemang
          och öga för detaljer bygger vi lösningar som håller över tid.
        </div>
      </section>

      {/* 4. Trust Banner */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="bg-[#5A6D5A] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 text-[#F5F5DC]">
          <div className="w-64 h-48 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden shrink-0">
            <span className="text-xs opacity-50">[ Card Image ]</span>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-[#F5F5DC]">
              Varför välja just Loomi?
            </h3>
            <p className="text-lg leading-relaxed opacity-90">
              "Vi ser inte bara en webbplats, vi ser en bro. En bro som kopplar
              samman din vision med dina kunders verklighet. På Loomi är vi
              arkitekterna som ser till att den bron inte bara är vacker att se
              på, utan stadigt byggd för att hålla hela vägen fram."
            </p>
          </div>
        </div>
      </section>

      {/* 5. Features Grid */}
      <section className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-x-20 gap-y-16 mb-40">
        {FEATURES.map((f) => (
          <div key={f.num} className="group">
            <h3 className="text-3xl mb-3 flex items-center gap-3">
              <span className="text-[#5A6D5A] opacity-60 text-4xl font-bold">
                {f.num}
              </span>
              <span className="underline decoration-[#2D362D] decoration-2 underline-offset-4 font-bold">
                {f.title}
              </span>
            </h3>
            <p className="text-xl leading-relaxed font-bold opacity-90">
              {f.desc}
            </p>
          </div>
        ))}
      </section>

      {/* 6. Våra tjänster Section */}
      <section className="max-w-6xl mx-auto px-8 mb-40">
        <h2 className="text-5xl font-bold mb-16">Våra tjänster</h2>
        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#5A6D5A] p-3 rounded-full flex items-center justify-center w-12 h-12 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold underline decoration-2 underline-offset-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-lg leading-relaxed font-bold opacity-90 max-w-lg">
                  {service.desc}
                </p>
                <button className="flex items-center gap-2 font-bold text-lg group text-[#2D362D]">
                  Läs mer
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="space-y-4 pt-2">
                {service.bullets.map((bullet, bIndex) => (
                  <div key={bIndex} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-7 h-7 border-2 border-[#5A6D5A] rounded-full flex items-center justify-center">
                      <Check
                        className="w-4 h-4 text-[#5A6D5A]"
                        strokeWidth={4}
                      />
                    </div>
                    <span className="text-xl font-bold opacity-90">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Fördelar Section */}
      <section className="max-w-7xl mx-auto px-8 mb-40 grid md:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
        {/* Larger Green Container Frame */}
        <div className="bg-[#5A6D5A] rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-sm">
          <img
            src="image_0435f8.jpg"
            alt="Building Illustration"
            className="w-full h-auto rounded-[2rem] object-cover scale-105"
          />
        </div>

        {/* Content Area */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#2D362D] font-nerko">
            {t('Fördelar')}
          </h2>

          {/* Layout: 01 and 02 side-by-side, 03 below */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-16">
            {FORDELAR.map((item, index) => (
              <div
                key={item.num}
                className={`flex items-start gap-2 ${index === 2 ? 'col-span-2' : ''}`}
              >
                <span className="text-[#5A6D5A] text-xl font-bold pt-1">
                  {item.num}
                </span>
                <h3 className="text-xl md:text-2xl font-bold underline decoration-2 underline-offset-4 leading-tight text-[#2D362D] max-w-[180px]">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Vår process Section */}
      <section className="max-w-6xl mx-auto px-8 mb-32">
        <h2 className="text-5xl font-bold mb-16">Vår process</h2>
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {PROCESS.map((p) => (
            <div key={p.num} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#5A6D5A] flex items-center justify-center text-[#5A6D5A] font-bold text-xl">
                  {p.num}
                </div>
                <h3 className="text-2xl font-bold underline decoration-2 underline-offset-4">
                  {p.title}
                </h3>
              </div>
              <p className="text-lg leading-relaxed font-bold opacity-80">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Tjanster;
