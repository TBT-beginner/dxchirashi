import React from 'react';
import { FEATURES } from '../data';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 print:py-8 bg-white relative">
      <div className="container mx-auto px-6 print:px-8">
        <div className="text-center mb-16 print:mb-8">
          <h3 className="text-3xl font-bold text-slate-800 mb-4 print:text-2xl print:mb-2 print:text-blue-900">Digital X コースの学び</h3>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full print:bg-blue-500"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 print:gap-6">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-slate-50 print:bg-blue-50/30 rounded-2xl p-8 print:p-6 border border-slate-100 print:border-blue-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 print:w-14 print:h-14 bg-white print:bg-white rounded-2xl flex items-center justify-center text-3xl print:text-2xl shadow-sm mb-6 print:mb-3 group-hover:scale-110 transition-transform duration-300 border border-slate-100 print:border-blue-100 text-blue-600 print:text-blue-600 print:shadow-md">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3 print:mb-2 print:text-blue-900">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm print:text-xs print:text-slate-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;