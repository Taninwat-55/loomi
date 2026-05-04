import { useTranslation } from 'react-i18next';

export const Process = () => {
  const { t } = useTranslation();
  
  // This gets the list of steps from your translation file
  const steps = t('process.steps', { returnObjects: true }) as Array<{ title: string, text: string }>;

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-5xl font-nerko text-[#282B4A] text-center mb-16">
          {t('process.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* We added "Array.isArray(steps) &&" here as a safety check */}
          {Array.isArray(steps) && steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-[#5A6D5A] p-8 md:p-10 rounded-[2.5rem] shadow-lg flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#C7DAB7] text-[#5A6D5A] w-14 h-14 rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0">
                  {index + 1}
                </div>
                
                <h3 className="text-2xl font-medium text-[#EEEBDA] underline decoration-1 underline-offset-4">
                  {step.title}
                </h3>
              </div>

              {/* Beskrivningstext */}
              <p className="text-[#EEEBDA] text-xl leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};