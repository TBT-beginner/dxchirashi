import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 print:bg-slate-100 print:text-slate-900 text-white pt-16 pb-8 print:py-8 print:break-inside-avoid print:mt-8">
      <div className="container mx-auto px-6 print:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 print:mb-6 print:gap-4 print:items-center">
          <div className="md:w-1/3 print:w-auto print:text-center">
            <h2 className="text-2xl font-black tracking-tighter mb-6 print:mb-2 print:text-slate-900">
              Digital X <span className="font-light text-blue-400 print:text-blue-600">COURSE</span>
            </h2>
            <p className="text-slate-400 print:text-slate-600 text-sm leading-relaxed mb-6 print:mb-0">
              水戸葵陵高等学校 Digital X コース<br className="print:hidden"/>
              テクノロジーと探究心で、新しい時代のリーダーを育成します。
            </p>
            <div className="flex gap-4 print:hidden">
              {/* Social placeholders - Hidden in print */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-lg">𝕏</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <span className="text-lg">📷</span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 print:flex print:gap-12 print:w-auto">
            <div>
              <h4 className="font-bold text-lg mb-4 text-blue-400 print:text-blue-700 print:mb-2 print:text-base">お問い合わせ</h4>
              <p className="text-slate-400 print:text-slate-700 text-sm mb-2 print:mb-0">〒310-0035 茨城県水戸市東原3-2-1</p>
              <p className="text-slate-400 print:text-slate-700 text-sm print:font-bold">TEL: 029-224-1111</p>
            </div>
            <div className="print:hidden">
              <h4 className="font-bold text-lg mb-4 text-blue-400">リンク</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">水戸葵陵高等学校 公式サイト</a></li>
                <li><a href="#" className="hover:text-white transition-colors">入試情報</a></li>
                <li><a href="#" className="hover:text-white transition-colors">コース紹介動画</a></li>
                <li><a href="#" className="hover:text-white transition-colors">資料請求・お問い合わせ</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 print:pt-4 print:border-slate-300 text-center text-slate-500 print:text-slate-500 text-sm">
          <p>&copy; 2025 Mito Kiryo High School Digital X Course. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;