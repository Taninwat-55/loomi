export const ServiceHero = () => (
  <>
    <header className="pt-20 pb-10 px-6 text-center max-w-7xl mx-auto">
      <h1 className="text-[42px] md:text-[56px] lg:text-[64px] mb-8 leading-tight font-nerko font-medium text-[#282B4A]">
        Vi bygger morgondagens <br /> digitala landskap
      </h1>
      <button className="bg-[#5A6D5A] text-[#EEEBDA] px-8 py-3 rounded-full text-lg hover:scale-105 transition-all shadow-md active:scale-95">
        Se hur vi bygger din vision
      </button>
    </header>

    <section className="w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden mb-20">
      <img 
        src="/images/servicespage.webp" 
        alt="Vi bygger morgondagens digitala landskap"
        width={2880}
        height={816}
        loading="eager"
        fetchPriority="high"
        className="w-full h-full object-cover mix-blend-multiply md:mix-blend-normal"
      />
    </section>
  </>
);