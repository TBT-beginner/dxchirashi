import React from 'react';
import { BLOG_POSTS } from '../data';

const NewsGrid: React.FC = () => {
  return (
    <section id="news" className="py-20 print:py-6 bg-slate-50 print:bg-white">
      <div className="container mx-auto px-6 print:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 print:mb-6 gap-4 print:items-center">
          <div className="print:text-center print:w-full">
            <h3 className="text-3xl font-bold text-slate-800 mb-2 print:text-2xl print:mb-1 print:text-blue-900">Activities</h3>
            <p className="text-slate-500 print:text-sm print:text-blue-500 font-medium">コース通信「お知らせ」ピックアップ</p>
          </div>
          <button className="text-blue-600 font-bold hover:underline flex items-center gap-1 print:hidden">
            すべての記事を見る
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:gap-6">
          {BLOG_POSTS.map((post, index) => (
            // 印刷時は上位3件のみ表示する
            <article key={post.id} className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-slate-100 print:shadow-sm print:border print:border-slate-200 ${index >= 3 ? 'print:hidden' : ''}`}>
              <div className="relative h-48 print:h-40 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 print:top-3 print:left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm print:bg-blue-600 print:text-white print:shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 print:p-5 flex flex-col flex-grow">
                <div className="flex items-center text-slate-400 text-xs font-medium mb-3 print:mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.date}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3 print:mb-2 line-clamp-2 leading-tight print:text-base print:text-slate-900">
                  <a href="#" className="hover:text-blue-600 transition-colors pointer-events-none print:pointer-events-none text-black">
                    {post.title}
                  </a>
                </h4>
                <p className="text-slate-500 text-sm line-clamp-3 mb-6 print:mb-0 flex-grow leading-relaxed print:text-xs print:text-slate-600">
                  {post.summary}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 print:hidden">
                  <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group">
                    記事を読む
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 transition-transform group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;