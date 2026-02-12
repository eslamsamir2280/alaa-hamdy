import { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Plus, MessageSquare, Image as ImageIcon, Globe, Edit, 
  Trash2, X, RefreshCw, LogOut, Lock, Mail, Calendar, Folder 
} from 'lucide-react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Admin = () => {
  // --- Auth State ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginPassword, setLoginPassword] = useState('');
  
  // --- Tabs & UI State ---
  const [activeTab, setActiveTab] = useState('articles');
  const [langTab, setLangTab] = useState('en'); 
  const [loading, setLoading] = useState(false);

  // --- Data State ---
  const [messages, setMessages] = useState([]);
  const [articles, setArticles] = useState([]);
  
  // --- Form State ---
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [titleEn, setTitleEn] = useState('');
  const [contentEn, setContentEn] = useState('');
  const [titleAr, setTitleAr] = useState('');
  const [contentAr, setContentAr] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  // 1. Check Auth on Load
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token === 'secret_admin_token') {
      setIsAuthenticated(true);
    }
  }, []);

  // 2. Fetch Data
  useEffect(() => {
    if (isAuthenticated) {
      if (activeTab === 'messages') fetchMessages();
      if (activeTab === 'articles') fetchArticles();
    }
  }, [activeTab, isAuthenticated]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/contact');
      setMessages(res.data);
    } catch (err) { console.error(err); }
  };

  const fetchArticles = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/articles');
      setArticles(res.data);
    } catch (err) { console.error(err); }
  };

  // --- Auth Handlers ---
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // نرسل الطلب للسيرفر للتحقق
      const res = await axios.post('http://localhost:5000/api/login', { password: loginPassword });
      if (res.data.success) {
        localStorage.setItem('adminToken', 'secret_admin_token');
        setIsAuthenticated(true);
      }
    } catch (err) {
      alert("Wrong Password! / كلمة السر خاطئة");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  // --- Article Handlers ---
  const startEdit = (article) => {
    setEditMode(true);
    setCurrentId(article._id);
    setTitleEn(article.titleEn);
    setContentEn(article.contentEn);
    setTitleAr(article.titleAr);
    setContentAr(article.contentAr);
    setCategory(article.category);
    setImage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditMode(false);
    setCurrentId(null);
    setTitleEn(''); setContentEn('');
    setTitleAr(''); setContentAr('');
    setCategory(''); setImage(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this article?")) {
      try {
        await axios.delete(`http://localhost:5000/api/articles/${id}`);
        setArticles(articles.filter((a) => a._id !== id));
      } catch (err) { console.error(err); }
    }
  };

  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('titleEn', titleEn);
    formData.append('contentEn', contentEn);
    formData.append('titleAr', titleAr);
    formData.append('contentAr', contentAr);
    formData.append('category', category);
    if (image) formData.append('image', image);

    try {
      if (editMode) {
        await axios.put(`http://localhost:5000/api/articles/${currentId}`, formData);
        alert('Updated!');
      } else {
        await axios.post('http://localhost:5000/api/articles', formData);
        alert('Published!');
      }
      cancelEdit();
      fetchArticles();
    } catch (err) {
      alert('Error saving article');
    } finally {
      setLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'clean']
    ],
  };

  // --- Login Screen ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B1120] p-4">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-md">
          <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Lock className="text-[#0B1120]" size={32} />
          </div>
          <h2 className="text-2xl font-serif-display font-bold text-center mb-8 text-[#0B1120]">Admin Access</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input 
                type="password" 
                placeholder="Enter Admin Password" 
                className="w-full border-2 border-gray-100 p-4 rounded-lg outline-none focus:border-[#D4AF37] transition-all"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <button className="w-full bg-[#0B1120] text-white py-4 rounded-lg font-bold hover:bg-[#1a2436] transition-all shadow-lg">
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- Main Dashboard Screen ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Sidebar/TopNav Mockup */}
      <div className="bg-[#0B1120] text-white p-4 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#D4AF37] text-[#0B1120] flex items-center justify-center font-bold">A</div>
          <span className="font-bold tracking-widest hidden md:inline">ALAA HAMDY ADMIN</span>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors">
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto p-6 md:p-12">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-10 bg-white p-2 rounded-xl shadow-sm w-fit border border-gray-100">
          <button onClick={() => {setActiveTab('articles'); cancelEdit();}} className={`px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all ${activeTab === 'articles' ? 'bg-[#D4AF37] text-[#0B1120]' : 'text-gray-500 hover:bg-gray-50'}`}>
            <Plus size={18} /> Articles
          </button>
          <button onClick={() => setActiveTab('messages')} className={`px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all ${activeTab === 'messages' ? 'bg-[#D4AF37] text-[#0B1120]' : 'text-gray-500 hover:bg-gray-50'}`}>
            <MessageSquare size={18} /> Messages
          </button>
        </div>

        {activeTab === 'articles' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-[#0B1120]">{editMode ? 'Edit Article' : 'New Article'}</h2>
                  {editMode && <button onClick={cancelEdit} className="text-red-500 text-sm flex items-center gap-1 hover:underline"><X size={14}/> Cancel</button>}
                </div>

                <form onSubmit={handleArticleSubmit} className="space-y-6">
                  {/* Lang Switcher */}
                  <div className="flex bg-gray-100 p-1 rounded-lg w-fit">
                    <button type="button" onClick={() => setLangTab('en')} className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${langTab === 'en' ? 'bg-white shadow text-[#0B1120]' : 'text-gray-500'}`}>English</button>
                    <button type="button" onClick={() => setLangTab('ar')} className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${langTab === 'ar' ? 'bg-white shadow text-[#0B1120]' : 'text-gray-500'}`}>العربية</button>
                  </div>

                  {langTab === 'en' ? (
                    <div className="space-y-4 animate-fadeIn">
                      <input type="text" value={titleEn} onChange={(e) => setTitleEn(e.target.value)} placeholder="Article Title (EN)" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#D4AF37] text-xl font-serif-display" />
                      <div className="h-64 mb-12"><ReactQuill theme="snow" value={contentEn} onChange={setContentEn} modules={modules} className="h-full" /></div>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-fadeIn" dir="rtl">
                      <input type="text" value={titleAr} onChange={(e) => setTitleAr(e.target.value)} placeholder="عنوان المقال (عربي)" className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#D4AF37] text-xl font-serif-display" />
                      <div className="h-64 mb-12"><ReactQuill theme="snow" value={contentAr} onChange={setContentAr} modules={modules} className="h-full" /></div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                    <div>
                      <label className="text-xs font-bold uppercase text-gray-400 mb-2 block">Category</label>
                      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border p-3 rounded-lg bg-gray-50 outline-none" required>
                        <option value="">Choose...</option>
                        <option value="Corporate Law">Corporate Law</option>
                        <option value="Family Law">Family Law</option>
                        <option value="Criminal Law">Criminal Law</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-gray-400 mb-2 block">Cover Image</label>
                      <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w-full text-sm text-gray-500" />
                    </div>
                  </div>

                  <button disabled={loading} className="w-full bg-[#0B1120] text-[#D4AF37] py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all flex justify-center items-center gap-2">
                    {loading ? 'Saving...' : editMode ? <><RefreshCw size={20}/> Update Article</> : <><Globe size={20}/> Publish Now</>}
                  </button>
                </form>
              </div>
            </div>

            {/* List Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-400 uppercase text-xs tracking-widest">Recent Articles</h3>
              <div className="space-y-3">
                {articles.map((art) => (
                  <div key={art._id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 group">
                    <div className="flex gap-3">
                      <img src={`http://localhost:5000/images/${art.image}`} className="w-12 h-12 rounded object-cover" alt="" />
                      <div className="flex-grow overflow-hidden">
                        <h4 className="font-bold text-sm truncate">{art.titleEn}</h4>
                        <p className="text-[10px] text-gray-400 uppercase">{art.category}</p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => startEdit(art)} className="p-2 text-blue-500 hover:bg-blue-50 rounded"><Edit size={16}/></button>
                      <button onClick={() => handleDelete(art._id)} className="p-2 text-red-500 hover:bg-red-50 rounded"><Trash2 size={16}/></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((m) => (
              <div key={m._id} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#D4AF37]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-[#0B1120] text-lg">{m.firstName} {m.lastName}</h3>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                      <span className="flex items-center gap-1"><Mail size={12}/> {m.email}</span>
                      <span className="flex items-center gap-1"><Calendar size={12}/> {new Date(m.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500 uppercase">{m.practiceArea}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl italic">"{m.message}"</p>
              </div>
            ))}
            {messages.length === 0 && <div className="text-center py-20 text-gray-400">No messages found.</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;