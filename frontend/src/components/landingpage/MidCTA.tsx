import { useTranslation } from 'react-i18next';

export const MidCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto border-2 border-dashed border-[#5A6D5A] rounded-[2.5rem] p-12">
        <div className="text-center space-y-8">
          <p className="text-[#282B4A] text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium">
            {t('mid_cta.text')}
          </p>

          <button className="bg-[#5A6D5A] text-[#EEEBDA] px-10 py-4 rounded-full text-lg transition-all hover:bg-[#4a5a4a] hover:scale-105 active:scale-95 shadow-sm">
            {t('mid_cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
};