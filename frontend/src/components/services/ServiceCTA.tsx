export const ServiceCTA = () => {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div className="bg-[#5A6D5A] rounded-[2.5rem] pt-8 md:pt-10 pb-0 pl-6 md:pl-12 pr-8 md:pr-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden min-h-[320px]">
        <div className="relative w-56 md:w-[360px] flex-shrink-0 self-end">
          <img
            src="/images/services-CTA-1.webp"
            width={360}
            height={267}
            sizes="(max-width: 768px) 224px, 360px"
            alt="Digitalt landskap"
            className="w-full h-auto block object-contain"
            loading="lazy"
          />
        </div>

        <div className="text-[#EEEBDA] space-y-4 z-10 pb-8 md:pb-10">
          <h3 className="text-[42px] md:text-[56px] lg:text-[64px] font-nerko underline decoration-1 text-[#EEEBDA] underline-offset-8 max-w-xl leading-[1.1]">
            Varför välja just Loomi?
          </h3>

          <p className="text-[20px] md:text-[24px] font-medium leading-relaxed max-w-2xl">
            Vi ser inte bara en webbplats, vi ser en bro. En bro som kopplar
            samman din vision med dina kunders verklighet. På Loomi är vi
            arkitekterna som ser till att den bron inte bara är vacker att se
            på, utan stadigt byggd för att hålla hela vägen fram.
          </p>
        </div>
      </div>
    </section>
  );
};
