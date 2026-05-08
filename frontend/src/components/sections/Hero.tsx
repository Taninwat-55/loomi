interface HeroProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageSrc?: string;
}

export const Hero = ({
  title,
  description,
  buttonText,
  onButtonClick,
  imageSrc,
}: HeroProps) => {
  return (
    <section className="w-full pt-16 pb-0 flex flex-col items-center font-nerko overflow-x-hidden">
      <div className="max-w-5xl px-8 text-center flex flex-col items-center mb-12">
        <h1 className="text-[48px] md:text-[72px] font-bold text-[var(--brand-dark)] leading-[1.1] mb-6">
          {title}
        </h1>

        <p className="text-[18px] md:text-[20px] text-[var(--brand-dark)] leading-relaxed mb-10 max-w-3xl">
          {description}
        </p>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="bg-[#5A6D5A] text-[var(--brand-bg)] px-10 py-3 rounded-full transition-all hover:bg-[#4a5a4a] hover:scale-105 active:scale-95 text-[20px] shadow-sm"
          >
            {buttonText}
          </button>
        )}
      </div>

      <div className="w-full relative flex justify-center bg-transparent">
        {imageSrc ? (
          <img
            // @ts-ignore
            fetchPriority="high"
            loading="eager"
            src={imageSrc}
            alt="Hero Illustration"
            width="2515"
            height="646"
            className="w-full h-auto block object-contain mix-blend-multiply md:mix-blend-normal"
          />
        ) : (
          <div className="w-full h-[300px] bg-transparent" />
        )}
      </div>
    </section>
  );
};
