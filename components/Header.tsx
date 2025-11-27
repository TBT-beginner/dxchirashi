import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className={`text-xl font-black tracking-tighter ${isScrolled ? 'text-blue-600' : 'text-slate-800'}`}>
          Digital X <span className="font-light">COURSE</span>
        </h1>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">ホーム</a>
          <a href="#features" className="hover:text-blue-600 transition-colors">特徴</a>
          <a href="#news" className="hover:text-blue-600 transition-colors">活動報告</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">お問い合わせ</a>
        </nav>
        <div className="flex gap-3">
          <button 
            onClick={() => window.print()} 
            className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border ${isScrolled ? 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50' : 'border-white/50 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 001.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
            </svg>
            チラシ印刷
          </button>
          <a 
            href="#" 
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all shadow-lg ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-slate-100'}`}
          >
            資料請求
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;