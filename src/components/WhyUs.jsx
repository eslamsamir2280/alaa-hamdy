import { useTranslation } from 'react-i18next';
import { Shield, Award, Clock, Scale } from 'lucide-react';

const WhyUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Shield size={28} />,
      title: t('why_1_title'),
      desc: t('why_1_desc'),
      isHighlight: false // البطاقة الأولى المميزة
    },
    {
      icon: <Award size={28} />,
      title: t('why_2_title'),
      desc: t('why_2_desc'),
      isHighlight: false
    },
    {
      icon: <Clock size={28} />,
      title: t('why_3_title'),
      desc: t('why_3_desc'),
      isHighlight: false
    },
    {
      icon: <Scale size={28} />,
      title: t('why_4_title'),
      desc: t('why_4_desc'),
      isHighlight: false
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Center */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold">
            {t('why_subtitle')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif-display text-[#0B1120]">
            {t('why_title')}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-gray-100"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors duration-300
                ${item.isHighlight 
                  ? 'bg-[#0B1120] text-[#D4AF37]' 
                  : 'bg-gray-100 text-[#0B1120] group-hover:bg-[#D4AF37] group-hover:text-[#0B1120]'
                }
              `}>
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-serif-display font-bold text-[#0B1120] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;