import React from 'react';
import { Language } from '../types';

interface Props {
  onSelect: (lang: Language) => void;
}

const LanguageSelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-slate-800">Select Language</h2>
        <p className="text-slate-500">Choose your preferred language to start training</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        <button
          onClick={() => onSelect(Language.ENGLISH)}
          className="group relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border-2 border-transparent hover:border-sana-500 hover:shadow-xl transition-all duration-300"
        >
          <span className="text-6xl mb-4">🇺🇸</span>
          <span className="text-xl font-bold text-slate-700 group-hover:text-sana-600">English</span>
        </button>

        <button
          onClick={() => onSelect(Language.ARABIC)}
          className="group relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border-2 border-transparent hover:border-sana-500 hover:shadow-xl transition-all duration-300"
        >
          <span className="text-6xl mb-4">🇸🇦</span>
          <span className="text-xl font-bold font-sans text-slate-700 group-hover:text-sana-600">العربية</span>
        </button>

        <button
          onClick={() => onSelect(Language.HINDI)}
          className="group relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border-2 border-transparent hover:border-sana-500 hover:shadow-xl transition-all duration-300"
        >
          <span className="text-6xl mb-4">🇮🇳</span>
          <span className="text-xl font-bold text-slate-700 group-hover:text-sana-600">हिंदी</span>
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;