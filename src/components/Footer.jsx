import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('home'), href: "#" },
    { name: t('about'), href: "#" },
    { name: t('link_attorneys'), href: "#" },
    { name: t('link_legal_news'), href: "#" },
    { name: t('contact'), href: "#" },
  ];

  const practiceLinks = [
    { name: t('practice_opt_1'), href: "#" }, // Criminal
    { name: t('practice_opt_2'), href: "#" }, // Family
    { name: t('practice_opt_3'), href: "#" }, // Corporate
    { name: t('area_3_title'), href: "#" },   // Real Estate
    { name: t('area_5_title'), href: "#" },   // Civil Litigation
  ];

  return (
    <footer className="bg-[#0B1120] text-white pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
             <div className="flex flex-col">
              <span className="text-2xl font-serif-display font-bold tracking-wide uppercase">ALAA HAMDY</span>
              <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-medium mt-1">
                {t('subtitle')}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t('footer_desc')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-serif-display font-bold mb-6">{t('quick_links')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h4 className="text-lg font-serif-display font-bold mb-6">{t('practice')}</h4>
            <ul className="space-y-3">
              {practiceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Horizonya Link */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            {t('copyright')}
          </p>
          
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Powered by</span>
            <a 
              href="https://horizonya.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#D4AF37] transition-colors font-medium"
            >
              Horizonya
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;