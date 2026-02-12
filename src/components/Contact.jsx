import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const { t } = useTranslation();
  
  // 1. حالة الفورم (Form State)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    practiceArea: t('practice_opt_1'),
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  // 2. دالة التعامل مع الإدخال
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. دالة الإرسال للسيرفر
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // إرسال البيانات للباك-إند
      await axios.post('http://localhost:5000/api/contact', formData);
      
      setStatus({ loading: false, success: true, error: null });
      // تصفير الفورم بعد النجاح
      setFormData({ firstName: '', lastName: '', email: '', practiceArea: t('practice_opt_1'), message: '' });
      
      // إخفاء رسالة النجاح بعد 5 ثواني
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, success: false, error: "حدث خطأ أثناء الإرسال، حاول ثانية." });
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-[#D4AF37]" />,
      title: t('office_title'),
      lines: [t('office_addr')]
    },
    {
      icon: <Phone className="text-[#D4AF37]" />,
      title: t('phone_title'),
      lines: ["01272829165", "01033208446"]
    },
    {
      icon: <Mail className="text-[#D4AF37]" />,
      title: t('email_title'),
      lines: ["info@alaahamdy.com"]
    }
  ];

  return (
    <section id='contact' className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <div className="space-y-8">
            <div>
              <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-bold mb-2 block">
                {t('contact_subtitle')}
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif-display text-[#0B1120] mb-6">
                {t('contact_title')}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                {t('contact_desc')}
              </p>
            </div>

            <div className="space-y-8 mt-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white border border-gray-200 rounded-sm flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#D4AF37] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif-display font-bold text-[#0B1120] mb-2">
                      {item.title}
                    </h4>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-gray-500 font-medium dir-ltr">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 lg:p-10 rounded-sm shadow-xl border border-gray-100">
            <h3 className="text-2xl font-serif-display font-bold text-[#0B1120] mb-8">
              {t('form_title')}
            </h3>

            {status.success ? (
              <div className="bg-green-50 border border-green-200 p-6 text-center rounded-sm animate-fadeIn">
                <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                <h4 className="text-green-800 font-bold mb-2">تم الإرسال بنجاح!</h4>
                <p className="text-green-600 text-sm">شكراً لتواصلك معنا، سنرد عليك في أقرب وقت.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B1120]">{t('form_fname')}</label>
                    <input name="firstName" value={formData.firstName} onChange={handleChange} required type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B1120]">{t('form_lname')}</label>
                    <input name="lastName" value={formData.lastName} onChange={handleChange} required type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1120]">{t('form_email')}</label>
                  <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1120]">{t('form_practice')}</label>
                  <select name="practiceArea" value={formData.practiceArea} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-gray-600">
                    <option>{t('practice_opt_1')}</option>
                    <option>{t('practice_opt_2')}</option>
                    <option>{t('practice_opt_3')}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1120]">{t('form_message')}</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"></textarea>
                </div>

                {status.error && <p className="text-red-500 text-xs font-bold">{status.error}</p>}

                <button 
                  disabled={status.loading}
                  className={`w-full bg-[#0B1120] text-white font-bold py-4 rounded-sm hover:bg-[#1a2436] transition-colors duration-300 flex justify-center items-center gap-2 ${status.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span>{status.loading ? 'جاري الإرسال...' : t('form_submit')}</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;