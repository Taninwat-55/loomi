import { Link } from "react-router-dom";
import { Sun } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-full py-10 px-8 md:px-16 flex justify-between items-center font-nerko text-[var(--brand-dark)]">
      {/* Logotypen - Använder span istället för rubrik-taggar för bättre A11y i en nav */}
      <Link to="/" className="no-underline text-current" aria-label="Loomi Webbyrå - Gå till startsidan">
        <div className="flex flex-col">
          <span className="text-[42px] font-bold leading-[0.7]" aria-hidden="true">loomi</span>
          <span className="text-[14px] font-bold tracking-[0.3em] mt-1 text-center uppercase" aria-hidden="true">
            Webbyrå
          </span>
        </div>
      </Link>

      {/* Navigering */}
      <div className="flex items-center gap-10">
        {/* Länkar */}
        <div className="hidden md:flex gap-8 text-[18px] font-bold">
          <Link to="/" className="no-underline hover:underline transition-all">
            Hem
          </Link>
          <Link
            to="/tjanster"
            className="no-underline hover:underline transition-all"
          >
            Våra Tjänster
          </Link>
          <Link
            to="/portfolj"
            className="no-underline hover:underline transition-all"
          >
            Portfölj
          </Link>
          <Link
            to="/om-oss"
            className="no-underline hover:underline transition-all"
          >
            Om oss
          </Link>
          <Link
            to="/kontakta-oss"
            className="no-underline hover:underline transition-all"
          >
            Kontakta oss
          </Link>
        </div>

        {/* Språk & Darkmode-ikoner */}
        <div className="flex gap-3 ml-4">
          <button 
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#5C6B58] text-[var(--brand-bg)] hover:opacity-90 transition-opacity"
            aria-label="Byt språk till engelska"
          >
            <span className="text-sm font-bold" aria-hidden="true">文A</span>
          </button>

          <button 
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--brand-dark)] text-[var(--brand-bg)] hover:opacity-90 transition-all"
            aria-label="Växla mellan mörkt och ljust läge"
          >
            <Sun size={20} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
};