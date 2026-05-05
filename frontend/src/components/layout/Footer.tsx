import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full pt-12 pb-8 px-8 md:px-16 border-t border-[var(--brand-dark)] mt-auto font-nerko text-[var(--brand-dark)] bg-[var(--brand-bg)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-row items-start w-full mb-12">
          {/* 1. Logotypen */}
          <div className="flex flex-col flex-shrink-0">
            <span className="text-[42px] font-bold leading-[0.7]">loomi</span>
            <span className="text-[14px] uppercase font-bold tracking-[0.3em] mt-1 text-center">
              {t("nav.logo_subtitle")}
            </span>
          </div>

          {/* 2. Länkgrupperna */}
          <div className="flex flex-row gap-12 lg:gap-24 mx-auto">
            {/* Snabbknappar */}
            <div className="flex flex-col items-start min-w-fit">
              <p className="text-[24px] font-bold mb-6 underline decoration-2 underline-offset-[10px] whitespace-nowrap text-left">
                {t("footer.quick_links")}
              </p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0 text-[18px] items-start">
                <li>
                  <Link to="/" className="hover:underline block">
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link to="/tjanster" className="hover:underline block">
                    {t("nav.services")}
                  </Link>
                </li>
                <li>
                  <Link to="/portfolj" className="hover:underline block">
                    {t("nav.portfolio")}
                  </Link>
                </li>
                <li>
                  <Link to="/om-oss" className="hover:underline block">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link to="/kontakta-oss" className="hover:underline block">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tjänster */}
            <div className="flex flex-col items-start min-w-fit">
              <p className="text-[24px] font-bold mb-6 underline decoration-2 underline-offset-[10px] whitespace-nowrap text-left">
                {t("footer.services")}
              </p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0 text-[18px] items-start">
                <li>
                  <Link
                    to="/tjanster#seo"
                    className="hover:underline block whitespace-nowrap"
                  >
                    {t("services.seo.title")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tjanster#webb"
                    className="hover:underline block whitespace-nowrap"
                  >
                    {t("services.web.title")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tjanster#ui-ux"
                    className="hover:underline block whitespace-nowrap"
                  >
                    {t("services.design.title")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Kontakt */}
            <div className="flex flex-col items-start min-w-fit">
              <p className="text-[24px] font-bold mb-6 underline decoration-2 underline-offset-[10px] whitespace-nowrap text-left">
                {t("footer.contact")}
              </p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0 text-[18px] items-start">
                <li>
                  <a
                    href="mailto:loomi@gmail.com"
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
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-10">
            <span className="cursor-pointer hover:underline">
              {t("footer.privacy")}
            </span>
            <span className="cursor-pointer hover:underline">
              {t("footer.cookies")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};