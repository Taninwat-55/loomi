import { ChevronRight, type LucideIcon } from "lucide-react";
interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets?: string[];
  variant: "grid" | "list";
}

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
  bullets,
  variant,
}: ServiceCardProps) => {
  const isList = variant === "list";

  return (
    <div
      className={`flex ${isList ? "flex-col md:flex-row gap-8 md:gap-16 items-start" : "flex-col h-full"}`}
    >
      <div className={`flex-1 flex flex-col ${isList ? "" : "h-full"}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#5A6D5A] p-2 rounded-lg text-[#EEEBDA] flex-shrink-0">
            <Icon size={24} />
          </div>
          <h3 className="text-2xl font-nerko text-[#282B4A] uppercase tracking-wide">
            {title}
          </h3>
        </div>

        <p className="text-[#282B4A] text-xl leading-relaxed mb-6 max-w-md opacity-90">
          {description}
        </p>
        <button className="group text-[#5A6D5A] text-xl font-bold flex items-center gap-1 transition-all mt-auto self-start">
          <span className="group-hover:underline">Läs mer</span>
          <ChevronRight
            size={24}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Bullet points för list-vyn */}
      {isList && bullets && (
        <div className="flex-1 space-y-3 pt-2 w-full">
          {bullets.map((bullet, index) => (
            <div key={index} className="flex items-center gap-3 text-[#282B4A]">
              <div className="text-[#5A6D5A] flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="font-medium">{bullet}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
