import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full pt-12 pb-8 px-8 md:px-16 border-t border-[var(--brand-dark)] mt-auto font-nerko text-[var(--brand-dark)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-row items-start w-full mb-12">
          {/* 1. Logotypen */}
          <div className="flex flex-col flex-shrink-0">
            <span className="text-[42px] font-bold leading-[0.7]">loomi</span>
            <span className="text-[14px] uppercase font-bold tracking-[0.3em] mt-1 text-center">
              Webbyrå
            </span>
          </div>

          {/* 2. Länkgrupperna */}
          <div className="flex flex-row gap-12 lg:gap-24 mx-auto">
            {/* Snabbknappar */}
            <div className="flex flex-col items-start min-w-fit">
              {/* Ändrat h4 -> p för accessibility */}
              <p className="text-[24px] font-bold mb-6 underline decoration-2 underline-offset-[10px] whitespace-nowrap text-left">
                Snabbknappar
              </p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0 text-[18px] items-start">
                <li>
                  <Link to="/" className="hover:underline block">
                    Hem
                  </Link>
                </li>
                <li>
                  <Link to="/tjanster" className="hover:underline block">
                    Våra tjänster
                  </Link>
                </li>
                <li>
                  <Link to="/portfolj" className="hover:underline block">
                    Portfölj
                  </Link>
                </li>
                <li>
                  <Link to="/om-oss" className="hover:underline block">
                    Om Oss
                  </Link>
                </li>
                <li>
                  <Link to="/kontakta-oss" className="hover:underline block">
                    Kontakta oss
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tjänster */}
            <div className="flex flex-col items-start min-w-fit">
              <p className="text-[24px] font-bold mb-6 underline decoration-2 underline-offset-[10px] whitespace-nowrap text-left">
                Tjänster
              </p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0 text-[18px] items-start">
                <li>
                  <Link
                    to="/tjanster#seo"
                    className="hover:underline block whitespace-nowrap"
                  >
                    SEO & CEO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tjanster#webb"
                    className="hover:underline block whitespace-nowrap"
                  >
                    Webbutveckling
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tjanster#ui-ux"
                    className="hover:underline block whitespace-nowrap"
                  >
                    UI & UX
                  </Link>
                </li>
              </ul>
            </div>

            {/* Kontakt */}
            <div className="flex flex-col items-start min-w-fit">
              <p className="text-[24px] font-bold mb-6 underline decoration-2 underline-offset-[10px] whitespace-nowrap text-left">
                Kontakta oss
              </p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0 text-[18px] items-start">
                <li>
                  <a
                    href="mailto:info@loomi.com"
                    className="hover:underline block"
                  >
                    loomi@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline block">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline block">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline block">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[150px] hidden xl:block flex-shrink-0"></div>
        </div>

        {/* NEDRE RADEN */}
        <div className="flex flex-row justify-between items-center w-full text-[16px] font-bold pt-6 border-t border-[var(--brand-dark)]/20">
          <p>© 2026 loomi Webbyrå</p>
          <div className="flex gap-10">
            <span className="cursor-pointer hover:underline">
              Integritetspolicy
            </span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};