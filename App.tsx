import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import NewsGrid from './components/NewsGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 印刷用ヘッダー（画面では非表示） */}
      <div className="hidden print:flex justify-between items-center p-8 border-b border-slate-200">
        <h1 className="text-2xl font-black tracking-tighter text-slate-900">
          水戸葵陵高校 <span className="text-blue-600">Digital X</span> コース通信
        </h1>
        <div className="text-sm text-slate-500 text-right">
            発行日: {new Date().toLocaleDateString('ja-JP')}
        </div>
      </div>

      <Header />
      <main>
        <Hero />
        <Features />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default App;