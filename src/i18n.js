import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "HOME",
      name: "Alaa Hamdy",
      about: "ABOUT",
      why_us: "WHY US",
      practice: "PRACTICE AREAS",
      blog: "BLOG",
      contact: "CONTACT",
      book: "Book Consultation",
      subtitle: "LEGAL COUNSEL",
      hero_tagline: "PREMIUM LEGAL SERVICES",
      hero_title: "Justice You Can",
      hero_title_accent: "Trust & Rely On",
      hero_desc:
        "With over 33 years of experience, Alaa Hamdy provides unparalleled legal representation with a focus on integrity, authority, and results.",
      explore_areas: "Explore Practice Areas",
      stat_success: "98% Success Rate",
      stat_confidential: "Confidential",
      stat_clients: "500+ Clients",
      about_subtitle: "ESTABLISHED LEGACY",
      about_title: "Cassation Attorney With 33 Years of Legal Mastery",
      about_desc:
        "With a distinguished career spanning over three decades, we provide high-caliber legal representation before the Court of Cassation. Our firm combines deep-rooted experience in criminal and civil law with specialized expertise in foreign affairs and corporate establishment.",

      // النقاط المميزة (Features)
      feature_1: "Cassation & High Appeal Court",
      feature_2: "Foreigners' Marriage & Citizenship",
      feature_3: "Corporate Formation & Labor Law",
      feature_4: "Civil Disputes & Real Estate Registration",
      feature_5: "Precise Legal Consultation",

      // مربع الخبرة العائم
      exp_years: "33+",
      exp_text: "YEARS OF SUCCESSFUL LITIGATION",
      signature: "Alaa Hamdy",
      why_subtitle: "WHY CHOOSE US",
      why_title: "Committed to Excellence & Results",

      why_1_title: "Unmatched Integrity",
      why_1_desc:
        "We uphold the highest standards of ethics and confidentiality in every case we handle.",

      why_2_title: "Proven Track Record",
      why_2_desc:
        "Years of successful verdicts and settlements speak to our commitment to winning.",

      why_3_title: "Timely Resolution",
      why_3_desc:
        "We understand the value of your time and strive for efficient, effective legal solutions.",

      why_4_title: "Balanced Approach",
      why_4_desc:
        "Combining aggressive representation with strategic negotiation to achieve the best outcome.",

      practice_subtitle: "OUR EXPERTISE",
      practice_title: "Comprehensive Legal Solutions",
      view_all: "View All Services",
      learn_more: "LEARN MORE",

      area_1_title: "Criminal Law",
      area_1_desc:
        "Defending your rights against all types of criminal charges with vigorous representation.",

      area_2_title: "Corporate Law",
      area_2_desc:
        "Strategic legal counsel for businesses, mergers, acquisitions, and compliance.",

      area_3_title: "Real Estate",
      area_3_desc:
        "Navigating complex property transactions, disputes, and zoning regulations.",

      area_4_title: "Family Law",
      area_4_desc:
        "Compassionate guidance through divorce, custody, and family dispute resolution.",

      area_5_title: "Civil Litigation",
      area_5_desc:
        "Resolving disputes between individuals and organizations efficiently.",

      area_6_title: "Labor & Employment",
      area_6_desc:
        "Protecting the rights of employers and employees in workplace matters.",
      blog_subtitle: "LEGAL INSIGHTS",
      blog_title: "Latest News & Articles",
      read_article: "Read Article",

      art_1_cat: "CORPORATE LAW",
      art_1_date: "OCT 12, 2024",
      art_1_title: "Understanding Corporate Liability in 2024",
      art_1_desc:
        "New regulations are reshaping how businesses approach liability and compliance.",

      art_2_cat: "REAL ESTATE",
      art_2_date: "SEP 28, 2024",
      art_2_title: "The Future of Real Estate Contracts",
      art_2_desc:
        "Digital transformation is changing the landscape of property law and documentation.",

      art_3_cat: "FAMILY LAW",
      art_3_date: "SEP 15, 2024",
      art_3_title: "Navigating Complex Family Disputes",
      art_3_desc:
        "Strategies for resolving high-stakes family matters with discretion and care.",
      contact_subtitle: "GET IN TOUCH",
      contact_title: "Let Us Fight For You",
      contact_desc:
        "Contact our office today to schedule a confidential consultation. We are ready to listen and prepared to help.",

      office_title: "Office Location",
      office_addr: "El Pasha St., off Sheraton St., Hurghada",
      phone_title: "Phone Number",

      email_title: "Email Address",

      form_title: "Send a Message",
      form_fname: "First Name",
      form_lname: "Last Name",
      form_email: "Email Address",
      form_practice: "Practice Area",
      form_message: "Message",
      form_submit: "Send Message",

      practice_opt_1: "Criminal Defense",
      practice_opt_2: "Family Law",
      practice_opt_3: "Corporate Law",
      footer_desc:
        "Providing premium legal representation with a focus on results, integrity, and trust.",
      quick_links: "Quick Links",
      newsletter: "Newsletter",
      newsletter_desc: "Subscribe for latest legal updates.",
      subscribe_ok: "OK",
      copyright: "© 2026 Alaa Hamdy Law Firm. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      disclaimer: "Disclaimer",

      // روابط إضافية للفوتر
      link_attorneys: "Attorneys",
      link_legal_news: "Legal News",
    },
  },
  ar: {
    translation: {
      home: "الرئيسية",
      name: "علاء حمدي",
      about: "من نحن",
      why_us: "لماذا نحن",
      practice: "مجالات الممارسة",
      blog: "المدونة",
      contact: "تواصل معنا",
      book: "احجز استشارة",
      subtitle: "المحامي بالنقض والإدارية العليا",
      hero_tagline: "خدمات قانونية متميزة",
      hero_title: "عدالة يمكنك",
      hero_title_accent: "الوثوق والاعتماد عليها",
      hero_desc:
        "مع أكثر من 33 عاماً من الخبرة، يقدم علاء حمدي تمثيلاً قانونياً لا مثيل له مع التركيز على النزاهة والسلطة والنتائج.",
      explore_areas: "استكشف مجالاتنا",
      stat_success: "98% نسبة نجاح",
      stat_confidential: "سرية تامة",
      stat_clients: "+500 عميل",
      about_subtitle: "تاريخ عريق",
      about_title: "محامٍ بالنقض.. 33 عاماً من الخبرة والتمكن القانوني",
      about_desc:
        "مسيرة قانونية حافلة تمتد لأكثر من ثلاثة عقود، نقدم خلالها تمثيلاً قانونياً رفيع المستوى أمام محاكم النقض. يجمع مكتبنا بين الخبرة العميقة في القضايا الجنائية والمدنية، والتخصص الدقيق في شؤون الأجانب وتأسيس الشركات.",

      // النقاط المميزة (Features)
      feature_1: "المرافعة أمام النقض والجنايات",
      feature_2: "توثيق زواج الأجانب والجنسية",
      feature_3: "تأسيس الشركات والقضايا العمالية",
      feature_5: "المنازعات المدنية وتسجيل العقارات",
      feature_4: "استشارات قانونية دقيقة وشاملة",

      // مربع الخبرة العائم
      exp_years: "+33",
      exp_text: "عاماً من النجاح في ساحات القضاء",
      signature: "علاء حمدي",
      why_subtitle: "لماذا تختارنا",
      why_title: "ملتزمون بالتميز والنتائج",

      why_1_title: "نزاهة لا تضاهى",
      why_1_desc:
        "نلتزم بأعلى معايير الأخلاق والسرية التامة في كل قضية نتولاها.",

      why_2_title: "سجل حافل بالنجاحات",
      why_2_desc:
        "سنوات من الأحكام والتسويات الناجحة تتحدث عن التزامنا بالفوز.",

      why_3_title: "حلول في الوقت المناسب",
      why_3_desc: "نقدر قيمة وقتك ونسعى جاهدين لحلول قانونية فعالة وسريعة.",

      why_4_title: "نهج متوازن",
      why_4_desc:
        "الجمع بين التمثيل القوي والتفاوض الاستراتيجي لتحقيق أفضل نتيجة.",

      // --- تمت إضافة الترجمات المفقودة هنا ---
      practice_subtitle: "خبراتنا",
      practice_title: "حلول قانونية شاملة",
      view_all: "عرض جميع الخدمات",
      learn_more: "اقرأ المزيد",

      area_1_title: "القانون الجنائي",
      area_1_desc: "الدفاع عن حقوقك ضد جميع أنواع التهم الجنائية بتمثيل قوي.",

      area_2_title: "قانون الشركات",
      area_2_desc:
        "استشارات قانونية استراتيجية للشركات، عمليات الدمج والاستحواذ، والامتثال.",

      area_3_title: "العقارات",
      area_3_desc:
        "التعامل مع المعاملات العقارية المعقدة، النزاعات، ولوائح البناء.",

      area_4_title: "قانون الأسرة",
      area_4_desc:
        "توجيه رحيم خلال حالات الطلاق، الحضانة، وحل النزاعات العائلية.",

      area_5_title: "التقاضي المدني",
      area_5_desc: "حل النزاعات بين الأفراد والمؤسسات بكفاءة.",

      area_6_title: "العمل والتوظيف",
      area_6_desc: "حماية حقوق أصحاب العمل والموظفين في مسائل العمل.",
      blog_subtitle: "رؤى قانونية",
      blog_title: "أحدث الأخبار والمقالات",
      read_article: "اقرأ المقال",

      art_1_cat: "قانون الشركات",
      art_1_date: "12 أكتوبر 2024",
      art_1_title: "فهم المسؤولية القانونية للشركات في 2024",
      art_1_desc:
        "اللوائح الجديدة تعيد تشكيل كيفية تعامل الشركات مع المسؤولية والامتثال.",

      art_2_cat: "العقارات",
      art_2_date: "28 سبتمبر 2024",
      art_2_title: "مستقبل العقود العقارية",
      art_2_desc: "التحول الرقمي يغير مشهد قانون الملكية والتوثيق العقاري.",

      art_3_cat: "قانون الأسرة",
      art_3_date: "15 سبتمبر 2024",
      art_3_title: "إدارة النزاعات العائلية المعقدة",
      art_3_desc:
        "استراتيجيات لحل القضايا العائلية الحساسة بسرية وعناية فائقة.",
      contact_subtitle: "تواصل معنا",
      contact_title: "دعنا نحارب من أجلك",
      contact_desc:
        "اتصل بمكتبنا اليوم لتحديد موعد استشارة سرية. نحن مستعدون للاستماع وجاهزون للمساعدة.",

      office_title: "موقع المكتب",
      office_addr: "الغردقة، شارع الباشا متفرع من شارع الشيراتون",
      phone_title: "رقم الهاتف",

      email_title: "البريد الإلكتروني",

      form_title: "أرسل رسالة",
      form_fname: "الاسم الأول",
      form_lname: "اسم العائلة",
      form_email: "البريد الإلكتروني",
      form_practice: "مجال الاستشارة",
      form_message: "الرسالة",
      form_submit: "إرسال الرسالة",

      practice_opt_1: "الدفاع الجنائي",
      practice_opt_2: "قانون الأسرة",
      practice_opt_3: "قانون الشركات",
      footer_desc:
        "نقدم تمثيلاً قانونياً متميزاً مع التركيز على النتائج والنزاهة والثقة.",
      quick_links: "روابط سريعة",
      newsletter: "النشرة البريدية",
      newsletter_desc: "اشترك للحصول على آخر التحديثات القانونية.",
      subscribe_ok: "تم",
      copyright: "© 2026 مكتب علاء حمدي للمحاماة. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      disclaimer: "إخلاء المسؤولية",

      // روابط إضافية للفوتر
      link_attorneys: "المحامون",
      link_legal_news: "الأخبار القانونية",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en", // يفضل إضافة هذا السطر لتجنب الأخطاء إذا كانت اللغة غير موجودة
  interpolation: { escapeValue: false },
});

export default i18n;
