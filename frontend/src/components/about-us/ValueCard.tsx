export const ValueCard = () => {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div className="bg-[#5A6D5A] rounded-[2.5rem] py-8 md:py-10 pl-6 md:pl-12 pr-8 md:pr-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden min-h-[280px]">
        
        {/* Bild-container */}
        <div className="relative w-56 md:w-[320px] flex-shrink-0">
          <img 
            src="/images/about-us-cta.webp" 
            alt="Examen illustration" 
            className="w-full h-auto object-contain scale-125 md:scale-150"
          />
        </div>

        {/* Text-container */}
        <div className="text-[#EEEBDA] space-y-4 z-10">
          <h3 className="text-3xl md:text-5xl font-nerko underline decoration-1 text-[#EEEBDA] underline-offset-8 max-w-xl leading-[1.1]">
            Varför välja ett team som precis tagit examen?
          </h3>
          
          <p className="text-[18px] md:text-[20px] font-medium leading-relaxed max-w-2xl">
            Många ser examen som en startpunkt, men vi ser det som vår största tillgång 
            för er. Vi kommer direkt från källan med den nyaste kunskapen, kombinerat 
            med ett arbetssätt som vi har effektiviserat under år av samarbete.
          </p>
        </div>
      </div>
    </section>
  );
};