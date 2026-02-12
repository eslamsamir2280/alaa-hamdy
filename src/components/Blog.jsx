import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // استدعاء Link للتنقل
import axios from 'axios';

const Blog = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // جلب المقالات من السيرفر عند تحميل المكون
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/articles');
        // عرض أحدث 3 مقالات فقط في الصفحة الرئيسية
        setArticles(res.data.slice(0, 3));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // دالة لتنظيف النصوص من وسوم HTML لعرض نبذة مختصرة
  const stripHtml = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <section className="py-24 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-bold">
            {t('blog_subtitle')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif-display text-[#0B1120]">
            {t('blog_title')}
          </h2>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20 text-gray-400">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-4 w-32 bg-gray-200 mb-4"></div>
              <div className="h-8 w-64 bg-gray-200"></div>
            </div>
          </div>
        ) : (
          /* Articles Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article) => {
              // تحديد اللغة بناءً على اختيار المستخدم
              const title = isRTL ? article.titleAr : article.titleEn;
              const contentHtml = isRTL ? article.contentAr : article.contentEn;
              
              // تنسيق التاريخ
              const dateObj = new Date(article.date);
              const dateStr = dateObj.toLocaleDateString(isRTL ? 'ar-EG' : 'en-US', {
                year: 'numeric', month: 'short', day: 'numeric'
              });

              return (
                <Link 
                  to={`/article/${article._id}`} 
                  key={article._id} 
                  className="group cursor-pointer flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="overflow-hidden mb-6 h-64 bg-gray-200 shrink-0 relative rounded-sm">
                    {article.image ? (
                      <img 
                        src={`http://localhost:5000/images/${article.image}`} 
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 uppercase text-xs tracking-widest">
                        No Image Provided
                      </div>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-xs font-bold mb-3">
                    <span className="text-[#D4AF37] uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-gray-400">
                      {dateStr}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-serif-display font-bold text-[#0B1120] mb-3 leading-snug group-hover:text-[#D4AF37] transition-colors">
                      {title}
                    </h3>
                    
                    {/* عرض نبذة مختصرة نظيفة من الـ HTML */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {stripHtml(contentHtml).substring(0, 120)}...
                    </p>

                    {/* Read Article Link */}
                    <div className="mt-auto inline-block border-b border-[#0B1120] pb-0.5 group-hover:border-[#D4AF37] transition-colors self-start">
                      <span className="text-[#0B1120] text-xs font-bold uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">
                        {t('read_article')}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
        
        {/* Empty State Message */}
        {!loading && articles.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-lg">
            <p className="text-gray-500 italic">No news or articles published yet.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;