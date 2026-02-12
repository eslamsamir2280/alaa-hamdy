import { useTranslation } from 'react-i18next';
import { ArrowRight, Scale, Shield, Users, ArrowLeft } from 'lucide-react';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="relative bg-[#0B1120] text-white overflow-hidden py-16 lg:py-24">
      
      {/* خلفية جمالية خفيفة (اختياري) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D4AF37] rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* 1. Left Content (Text) */}
          <div className="flex flex-col items-start space-y-8">
            
            {/* Tagline with Line */}
            <div className="flex items-center gap-4">
              <span className="w-12 h-[2px] bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold">
                {t('hero_tagline')}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl lg:text-6xl font-serif-display leading-tight">
              {t('hero_title')} <br />
              <span className="text-[#D4AF37] italic">{t('hero_title_accent')}</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              {t('hero_desc')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-[#D4AF37] hover:bg-[#b8962e] text-[#0B1120] px-8 py-4 rounded-sm font-bold transition-all duration-300 text-center">
                {t('book')}
              </button>
              
              <button className="group flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 hover:border-[#D4AF37] hover:text-[#D4AF37] rounded-sm transition-all duration-300">
                <span>{t('explore_areas')}</span>
                {isRTL ? 
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> : 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                }
              </button>
            </div>

            {/* Stats Footer */}
            <div className="pt-8 border-t border-gray-800 w-full flex flex-wrap gap-8 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <Scale className="text-[#D4AF37]" size={20} />
                <span>{t('stat_success')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[#D4AF37]" size={20} />
                <span>{t('stat_confidential')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-[#D4AF37]" size={20} />
                <span>{t('stat_clients')}</span>
              </div>
            </div>
          </div>

          {/* 2. Right Content (Image) */}
          <div className="relative lg:h-[600px] flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
            {/* The Gold Border Frame (Behind) */}
            <div className={`absolute w-[80%] h-[90%] border-2 border-[#D4AF37]/30 z-0 
              ${isRTL ? 'left-0 translate-x-4 translate-y-4' : 'right-0 -translate-x-4 translate-y-4'}
            `}></div>

            {/* The Image */}
            <div className="relative z-10 w-[85%] h-full overflow-hidden shadow-2xl bg-gray-800">
              {/* استبدل الرابط ده بصورة المحامي الحقيقية لاحقاً */}
              <img 
                src="https://res.cloudinary.com/defcamc5x/image/upload/v1770898455/owj25ji0ak7pzslznv5x.webp" 
                alt="Lawyer Portrait" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;