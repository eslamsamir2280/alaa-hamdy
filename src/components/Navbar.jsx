import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // ضفنا دول للتنقل الذكي
import { Phone, Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // دالة تغيير اللغة
  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  // دالة للتنقل السلس (Scroll) أو الانتقال لصفحة أخرى
  const handleNavClick = (e, href) => {
    // لو الرابط عبارة عن ID (بتبدأ بـ #) وإحنا في الصفحة الرئيسية
    if (href.startsWith('#') && location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // لو إحنا في صفحة تانية (زي صفحة المقال) وعايزين نرجع للرئيسية لقسم معين
    else if (href.startsWith('#') && location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
      // تأخير بسيط عشان الصفحة تحمل وبعدين يعمل سكرول
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('home'), href: '/' }, // الصفحة الرئيسية
    { name: t('about'), href: '#about' }, // تأكد إن الأقسام دي عندها نفس الـ id
    { name: t('practice'), href: '#practice' },
    { name: t('blog'), href: '#blog' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <nav className="bg-[#0B1120] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* 1. Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#D4AF37] flex items-center justify-center text-[#0B1120] font-serif text-3xl font-bold">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-widest leading-none">{t('name')}</span>
              <span className="text-[#D4AF37] text-[10px] tracking-[0.2em] font-medium mt-1">
                {t('subtitle')}
              </span>
            </div>
          </Link>

          {/* 2. Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium hover:text-[#D4AF37] transition-colors duration-300 uppercase tracking-wide cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 3. Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={toggleLang} className="p-2 hover:text-[#D4AF37] transition-colors">
              <Globe size={20} />
            </button>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="bg-[#D4AF37] hover:bg-[#b8962e] text-[#0B1120] px-6 py-3 rounded-sm font-bold flex items-center gap-2 transition-all duration-300">
              <Phone size={18} />
              <span>{t('book')}</span>
            </a>
          </div>

          {/* 4. Mobile Button */}
          <div className="lg:hidden flex items-center gap-4">
             <button onClick={toggleLang} className="hover:text-[#D4AF37]">
              <Globe size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#D4AF37]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0f182d] border-t border-gray-800 animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 text-base font-medium hover:text-[#D4AF37] hover:bg-gray-900 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;