import React, { useEffect, useState } from 'react';
import { Product, AIResponse, Language } from '../types';
import { generateProductExplanation } from '../services/geminiService';

interface Props {
  product: Product;
  language: Language;
  onBack: () => void;
}

const ResultCard: React.FC<Props> = ({ product, language, onBack }) => {
  const [data, setData] = useState<AIResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await generateProductExplanation(product, language);
        if (mounted) setData(result);
      } catch (err: any) {
        if (mounted) {
           if (err.message === "API Key missing") {
             setError("API_MISSING");
           } else {
             setError("Failed to load explanation. Please try again.");
           }
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => { mounted = false; };
  }, [product, language]);

  const isRTL = language === Language.ARABIC;

  return (
    <div className="w-full max-w-5xl mx-auto pb-12" dir={isRTL ? 'rtl' : 'ltr'}>
      <button 
        onClick={onBack}
        className={`mb-6 text-sana-600 hover:text-sana-800 flex items-center gap-2 font-medium ${isRTL ? 'flex-row-reverse' : ''}`}
      >
        <span>←</span> 
        {language === Language.ENGLISH ? 'Back to Search' : language === Language.ARABIC ? 'العودة للبحث' : 'खोज पर वापस जाएं'}
      </button>

      {/* Header */}
      <div className="bg-white rounded-t-2xl p-8 border-b border-slate-100 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="bg-sana-100 text-sana-800 px-3 py-1 rounded-full text-sm font-mono font-bold tracking-wider">
              {product.code}
            </span>
            <h1 className="text-3xl font-bold text-slate-900 mt-3">{product.name}</h1>
          </div>
          <div className="hidden md:block">
            <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
               {/* Placeholder Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="bg-white rounded-b-2xl shadow-lg min-h-[400px]">
        {loading ? (
          <div className="p-12 space-y-8 animate-pulse">
             <div className="h-4 bg-slate-200 rounded w-3/4"></div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                    <div className="h-4 bg-slate-200 rounded w-4/6"></div>
                </div>
                <div className="space-y-4">
                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                </div>
             </div>
          </div>
        ) : error ? (
           <div className="p-12 text-center">
             <div className="text-red-500 mb-4 text-lg font-semibold">
               {error === "API_MISSING" ? "Setup Required" : "Error Loading AI Content"}
             </div>
             <p className="text-slate-500 mb-6">
               {error === "API_MISSING" 
                 ? "Please configure your Gemini API Key in the settings to generate explanations." 
                 : "The AI service is currently unavailable. Please check your connection or key."}
             </p>
             {error === "API_MISSING" && (
                <button 
                  onClick={() => document.getElementById('settings-trigger')?.click()}
                  className="bg-sana-600 text-white px-6 py-2 rounded-lg hover:bg-sana-700"
                >
                  Open Settings
                </button>
             )}
           </div>
        ) : (
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column: Specs */}
              <div>
                <h3 className="text-lg font-bold text-sana-800 mb-4 flex items-center gap-2 border-b pb-2 border-slate-100">
                  <span className="text-xl">🛠</span>
                  {language === Language.ENGLISH ? 'Specifications' : language === Language.ARABIC ? 'المواصفات التقنية' : 'तकनीकी विवरण'}
                </h3>
                <ul className="space-y-3">
                  {data?.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                      <span className="text-sana-500 mt-1.5 text-xs">●</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Usage */}
              <div>
                <h3 className="text-lg font-bold text-sana-800 mb-4 flex items-center gap-2 border-b pb-2 border-slate-100">
                  <span className="text-xl">📏</span>
                  {language === Language.ENGLISH ? 'Usage & Ratings' : language === Language.ARABIC ? 'الاستخدام والتقييم' : 'उपयोग और रेटिंग'}
                </h3>
                <ul className="space-y-3">
                  {data?.usage.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom: Learning Summary */}
            <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6 relative overflow-hidden">
               <div className={`absolute top-0 w-1 h-full bg-amber-400 ${isRTL ? 'right-0' : 'left-0'}`}></div>
               <h3 className="text-amber-800 font-bold mb-2 flex items-center gap-2">
                 <span className="text-xl">🎓</span>
                 {language === Language.ENGLISH ? 'Learning Summary' : language === Language.ARABIC ? 'ملخص التعلم' : 'सीखने का सारांश'}
               </h3>
               <p className="text-amber-900/80 leading-relaxed font-medium">
                 {data?.summary}
               </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultCard;