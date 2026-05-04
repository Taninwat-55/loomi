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
      <div className="max-w-3xl px-8 text-center flex flex-col items-center mb-12">
        <h1 className="text-[64px] md:text-[80px] font-bold text-[var(--brand-dark)] leading-tight mb-4">
          {title}
        </h1>

        <p className="text-[18px] md:text-[20px] text-[var(--brand-dark)] leading-relaxed mb-10 max-w-2xl">
          {description}
        </p>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="bg-[#5C6B58] text-[var(--brand-bg)] px-10 py-3 rounded-full hover:opacity-90 transition-all text-[20px] font-bold shadow-sm"
          >
            {buttonText}
          </button>
        )}
      </div>

      {/* Bild-sektion */}
      <div className="w-full relative flex justify-center bg-transparent">
        {imageSrc ? (
          <img
            // @ts-ignore
            fetchPriority="high"
            src={imageSrc}
            alt="Hero Illustration"
            width="1920"
            height="500"
            loading="eager"
            className="w-full h-auto block object-contain mix-blend-multiply md:mix-blend-normal"
          />
        ) : (
          <div className="w-full h-[300px] bg-transparent" />
        )}
      </div>
    </section>
  );
};
