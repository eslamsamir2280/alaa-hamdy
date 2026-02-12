import { useTranslation } from 'react-i18next';
import { Gavel, Briefcase, Building2, Home, FileText, Users } from 'lucide-react';

const PracticeAreas = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const services = [
    { icon: <Gavel />, title: t('area_1_title'), desc: t('area_1_desc') },
    { icon: <Briefcase />, title: t('area_2_title'), desc: t('area_2_desc') },
    { icon: <Building2 />, title: t('area_3_title'), desc: t('area_3_desc') },
    { icon: <Home />, title: t('area_4_title'), desc: t('area_4_desc') },
    { icon: <FileText />, title: t('area_5_title'), desc: t('area_5_desc') },
    { icon: <Users />, title: t('area_6_title'), desc: t('area_6_desc') },
  ];

  return (
    <section id='practice' className="py-24 bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - توسيط العنوان */}
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold block">
            {t('practice_subtitle')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif-display leading-tight">
            {t('practice_title')}
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-[#111827] border border-gray-800 p-8 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden rounded-sm flex flex-col h-full"
            >
              {/* Watermark Icon */}
              <div className={`absolute top-4 opacity-[0.03] text-white w-32 h-32 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-[0.05]
                ${isRTL ? 'left-4' : 'right-4'}
              `}>
                <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full">
                  {service.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full flex-1">
                <div className="text-[#D4AF37] mb-6 [&>svg]:w-10 [&>svg]:h-10">
                  {service.icon}
                </div>

                <h3 className="text-xl font-serif-display font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PracticeAreas;