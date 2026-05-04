import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'sv' ? 'en' : 'sv';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#5C6B58] text-[var(--brand-bg)] hover:opacity-90 transition-opacity"
      aria-label={i18n.language === 'sv' ? 'Byt språk till engelska' : 'Switch language to Swedish'}
    >
      <span className="text-sm font-bold" aria-hidden="true">
        {i18n.language === 'sv' ? 'EN' : 'SV'}
      </span>
    </button>
  );
};
