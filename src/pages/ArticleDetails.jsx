import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Calendar, Folder, ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ArticleDetails = () => {
  const { id } = useParams(); // بناخد رقم المقال من الرابط
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // جلب بيانات المقال والمقالات المرتبطة
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // 1. جلب المقال الحالي
        const currentRes = await axios.get(`http://localhost:5000/api/articles/${id}`);
        setArticle(currentRes.data);

        // 2. جلب المقالات المقترحة (نجيب الكل ونفلتر)
        const allRes = await axios.get('http://localhost:5000/api/articles');
        // استبعاد المقال الحالي وأخذ أول 3 مقالات
        const related = allRes.data
          .filter(item => item._id !== id)
          .slice(0, 3);
        
        setRelatedArticles(related);
        setLoading(false);
        
        // نطلع لأول الصفحة لما المقال يتغير
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // الـ Effect هتشتغل كل ما الـ ID يتغير

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (!article) return <div className="h-screen flex items-center justify-center">Article not found</div>;

  // تحديد اللغة للعرض
  const title = isRTL ? article.titleAr : article.titleEn;
  const content = isRTL ? article.contentAr : article.contentEn;
  const dateStr = new Date(article.date).toLocaleDateString(isRTL ? 'ar-EG' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <>
      <Navbar />
      
      <div className="bg-white min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* === Header: Category & Title === */}
          <div className="text-center mb-10 space-y-4">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37] text-sm font-bold uppercase tracking-widest">
              <Folder size={14} />
              <span>{article.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif-display text-[#0B1120] leading-tight">
              {title}
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <Calendar size={14} />
              <span>{dateStr}</span>
            </div>
          </div>

          {/* === Main Image === */}
          {article.image && (
            <div className="w-full h-[400px] md:h-[500px] mb-12 rounded-sm overflow-hidden shadow-lg">
              <img 
                src={`http://localhost:5000/images/${article.image}`} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* === Article Content (HTML) === */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-serif">
            {/* dangerouslySetInnerHTML عشان يعرض تنسيقات الـ Editor */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          {/* === Divider === */}
          <hr className="my-16 border-gray-200" />

          {/* === Related Articles Section === */}
          <div className="mt-12">
            <h3 className="text-2xl font-serif-display font-bold text-[#0B1120] mb-8">
              {isRTL ? "مقالات ذات صلة" : "Latest News"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((rel) => {
                const relTitle = isRTL ? rel.titleAr : rel.titleEn;
                const relDate = new Date(rel.date).toLocaleDateString(isRTL ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                
                return (
                  <Link to={`/article/${rel._id}`} key={rel._id} className="group block">
                    <div className="h-48 bg-gray-200 overflow-hidden mb-4 rounded-sm">
                      {rel.image ? (
                        <img 
                          src={`http://localhost:5000/images/${rel.image}`} 
                          alt={relTitle} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">No Image</div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] mb-2 uppercase">
                      <span>{rel.category}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-gray-400">{relDate}</span>
                    </div>
                    <h4 className="text-lg font-serif-display font-bold text-[#0B1120] group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {relTitle}
                    </h4>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default ArticleDetails;