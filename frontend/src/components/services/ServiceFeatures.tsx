const FEATURES = [
  {
    num: "01",
    title: "Från utgift till investering",
    desc: "Långsiktigt värdeskapande för er verksamhet.",
  },
  {
    num: "02",
    title: "Full kontroll och ägandeskap",
    desc: "Ni äger er data och er plattform, fullt ut.",
  },
  {
    num: "03",
    title: "En framtidssäkrad plattform",
    desc: "Byggd för att växa och anpassas efter era behov.",
  },
];

export const ServiceFeatures = () => {
  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Bild-behållare: Lägre height på mobil (aspect-4/3) för att inte knuffa ner texten för långt */}
        <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-[16/14] w-full max-w-2xl mx-auto lg:mx-0">
          <div className="bg-[#5A6D5A] w-full h-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden flex items-end justify-center">
            <img
              src="/images/emporia.webp"
              width={457}
              height={327}
              sizes="(max-width: 1024px) 100vw, 457px"
              alt="Illustration av Loomi fördelar"
              className="w-[110%] h-auto object-contain opacity-90"
            />
          </div>
        </div>

        {/* Text-behållare: Mer plats på desktop, bättre läsbarhet på mobil */}
        <div className="lg:col-span-7 space-y-10 lg:space-y-16">
          <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-nerko font-medium text-[#282B4A] leading-[1.1] text-center lg:text-left">
            Fördelar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-16">
            {FEATURES.map((feature) => (
              <div key={feature.num} className="group">
                <div className="flex items-start gap-4">
                  <span className="text-[24px] md:text-[36px] font-nerko font-bold text-[#5A6D5A] leading-none pt-1 flex-shrink-0">
                    {feature.num}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-[24px] md:text-[30px] lg:text-[32px] font-nerko font-medium text-[#282B4A] leading-[1.2] underline decoration-1 underline-offset-[8px] lg:underline-offset-[12px] decoration-[#282B4A]/30">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
