import { Routes, Route } from 'react-router-dom'; // استدعاء Routes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import PracticeAreas from './components/PracticeAreas';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './pages/Admin'; // استدعاء صفحة الأدمن
import ArticleDetails from './pages/ArticleDetails';
import './i18n';

// مكون للموقع الرئيسي عشان نجمع الأقسام
const MainSite = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <WhyUs />
      <PracticeAreas />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Routes>
        {/* الصفحة الرئيسية */}
        <Route path="/" element={<MainSite />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        
        {/* صفحة لوحة التحكم */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;