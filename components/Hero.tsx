import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] print:h-[400px] flex items-center justify-center overflow-hidden bg-slate-900 print:bg-white print:text-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000" 
          alt="School Life" 
          className="w-full h-full object-cover opacity-40 print:opacity-100"
        />
        {/* Screen gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent print:hidden"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 print:mt-0 print:w-full print:px-8">
        {/* Text Container with Backdrop for Print Readability */}
        <div className="print:bg-white/85 print:backdrop-blur-sm print:p-8 print:rounded-2xl print:shadow-lg print:border print:border-blue-100">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400 text-blue-300 print:bg-blue-600 print:text-white print:border-none text-sm font-bold mb-6 backdrop-blur-sm print:mb-4">
            水戸葵陵高校 Digital X コース
          </span>
          <h2 className="text-5xl md:text-7xl print:text-4xl font-black text-white print:text-slate-900 leading-tight mb-6 tracking-tight print:mb-3">
            未来を<br className="md:hidden print:hidden"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 print:text-blue-600 print:bg-none">デザイン</span>する<br/>
            新しい学び。
          </h2>
          <p className="text-slate-300 print:text-slate-700 text-lg md:text-xl mb-10 print:mb-0 max-w-2xl mx-auto leading-relaxed font-medium">
            教科の枠を超え、大学や地域と連携しながら最先端のテクノロジーと探究心で未来を切り拓く。<br className="hidden print:block"/>
            Digital Xコースの最新の活動をお届けします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
              <a href="#news" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-transform hover:scale-105 shadow-xl shadow-blue-900/20">
                最新の活動を見る
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;