export const FinalCTA = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto bg-[#5A6D5A] rounded-[2.5rem] overflow-hidden relative shadow-xl">
        {/* Container med grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full items-center p-8 md:p-12 md:pb-0 gap-8">
          {/* 1. Text-sida */}
          <div className="z-10 space-y-4 pb-8 md:pb-12">
            <h2 className="text-3xl md:text-4xl font-nerko text-[#EEEBDA] leading-tight underline decoration-1 underline-offset-4">
              Redo att starta din digitala resa?
            </h2>
            <p className="text-[#EEEBDA] text-xl font-normal max-w-sm">
              Låt oss boka ett förutsättningslöst möte och prata om hur vi kan
              hjälpa ditt företag att växa.
            </p>
          </div>

          {/* 2. Knapp i mitten */}
          <div className="flex justify-center z-10 pb-8 md:pb-12">
            <button className="bg-[#EEEBDA] text-[#5A6D5A] px-10 py-3 rounded-full font-medium text-xl transition-all hover:bg-[#EEEBDA] hover:scale-105 active:scale-95 shadow-md">
              Boka Konsultation
            </button>
          </div>

          {/* 3. Illustration till höger */}
          <div className="flex justify-end items-end h-full self-end">
            <img
              src="/images/landingpage-cta.webp"
              alt="Illustration av ett pilträd vid vattnet"
              width="600"
              height="400"
              className="w-64 md:w-80 h-auto object-contain object-bottom block"
              style={{ marginBottom: "-1px" }}
              loading="lazy"
              decoding="async" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
