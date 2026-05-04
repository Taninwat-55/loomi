import { ServiceCard } from '../ui/ServiceCard';
import { Search, Code, Palette } from 'lucide-react';
import { useTranslation } from "react-i18next";

export const ServicesGrid = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-nerko mb-16 text-[#282B4A]">{t('services.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <ServiceCard 
          variant="grid"
          icon={Search}
          title={t('services.seo.title')}
          description={t('services.seo.description')}
        />
        <ServiceCard 
          variant="grid"
          icon={Code}
          title={t('services.web.title')}
          description={t('services.web.description')}
        />
        <ServiceCard 
          variant="grid"
          icon={Palette}
          title={t('services.design.title')}
          description={t('services.design.description')}
        />
      </div>
    </section>
  );
};