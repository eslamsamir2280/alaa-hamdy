import { useTranslation } from 'react-i18next';
import { Scale, Globe, Building2, Landmark, FileCheck } from 'lucide-react';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // قائمة الخدمات المحدثة بناءً على طلبك
  const features = [
    { 
      text: t('feature_1'), // النقض والجنايات
      icon: <Scale size={20} /> 
    },
    { 
      text: t('feature_2'), // زواج الأجانب والجنسية
      icon: <Globe size={20} /> 
    },
    { 
      text: t('feature_3'), // تأسيس الشركات والعمالية
      icon: <Building2 size={20} /> 
    },
    { 
      text: t('feature_4'), // (جديد) المنازعات المدنية وتسجيل العقارات
      icon: <Landmark size={20} /> 
    },
    { 
      text: t('feature_5'), // الاستشارات القانونية
      icon: <FileCheck size={20} /> 
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 1. Image Section (القسم الخاص بالصورة) */}
          <div className="relative">
            {/* الصورة الرئيسية */}
            <div className="relative z-10 h-[500px] bg-gray-200 w-full rounded-sm overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop" 
                alt="Lawyer Office" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* كارت الخبرة العائم */}
            <div className={`absolute -bottom-10 z-20 bg-[#0B1120] text-white p-8 w-64 shadow-xl rounded-sm
              ${isRTL ? 'left-0 lg:-left-10' : 'right-0 lg:-right-10'}
            `}>
              <div className="text-[#D4AF37] text-5xl font-serif-display font-bold mb-2">
                {t('exp_years')} {/* +33 */}
              </div>
              <div className="text-xs tracking-widest leading-relaxed font-medium uppercase text-gray-300">
                {t('exp_text')}
              </div>
            </div>
            
            {/* إطار ديكور خلفي */}
            <div className={`absolute top-10 w-full h-full border-2 border-gray-100 -z-0 rounded-sm
               ${isRTL ? 'left-10' : 'right-10'}
            `}></div>
          </div>

          {/* 2. Text Section (القسم الخاص بالنصوص) */}
          <div className="space-y-8 mt-10 lg:mt-0">
            {/* العناوين */}
            <div>
              <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold mb-2 block">
                {t('about_subtitle')}
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif-display text-[#0B1120] leading-tight">
                {t('about_title')}
              </h2>
            </div>

            {/* الوصف */}
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('about_desc')}
            </p>

            {/* شبكة الخدمات (5 نقاط) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 pt-4">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  // جعل العنصر الخامس (الأخير) يأخذ عرض العمودين ليعطي شكلاً متناسقاً
                  className={`flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors duration-300
                    ${index === 4 ? 'sm:col-span-2 border border-gray-100 bg-gray-50/50' : ''}
                  `}
                >
                  <div className="text-[#D4AF37] shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <span className="text-[#0B1120] font-medium leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* التوقيع */}
            <div className="pt-8 mt-8 border-t border-gray-100">
               <span className="text-4xl text-[#0B1120] font-signature block transform -rotate-2">
                {t('signature')}
               </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;