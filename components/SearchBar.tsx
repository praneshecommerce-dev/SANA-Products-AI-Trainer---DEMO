import React, { useState } from 'react';
import { Language } from '../types';

interface Props {
  onSearch: (query: string) => void;
  lang: Language;
}

const SearchBar: React.FC<Props> = ({ onSearch, lang }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  const placeholder = {
    [Language.ENGLISH]: "Enter product code (e.g., CEM-A10) or name...",
    [Language.ARABIC]: "أدخل رمز المنتج (مثل CEM-A10) أو الاسم...",
    [Language.HINDI]: "उत्पाद कोड (जैसे CEM-A10) या नाम दर्ज करें...",
  };

  const isRTL = lang === Language.ARABIC;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder[lang]}
          className={`w-full p-5 text-lg rounded-full shadow-lg border border-slate-200 focus:outline-none focus:ring-4 focus:ring-sana-100 focus:border-sana-500 transition-all text-slate-700 placeholder-slate-400 ${isRTL ? 'text-right pr-6 pl-16' : 'pl-6 pr-16'}`}
          dir={isRTL ? 'rtl' : 'ltr'}
        />
        <button 
          type="submit"
          className={`absolute top-2 bottom-2 ${isRTL ? 'left-2' : 'right-2'} bg-sana-600 hover:bg-sana-700 text-white rounded-full px-6 transition-colors font-medium`}
        >
          {isRTL ? 'بحث' : lang === Language.HINDI ? 'खोजें' : 'Search'}
        </button>
      </form>
      
      <div className={`flex flex-wrap gap-2 text-sm text-slate-500 ${isRTL ? 'justify-end' : 'justify-start'}`}>
        <span>{lang === Language.ENGLISH ? 'Try:' : lang === Language.ARABIC ? 'جرب:' : 'प्रयास करें:'}</span>
        <button onClick={() => onSearch('CEM-A10-M12')} className="hover:text-sana-600 hover:underline">CEM-A10-M12</button>
        <span className="text-slate-300">|</span>
        <button onClick={() => onSearch('BRO-PT-H110')} className="hover:text-sana-600 hover:underline">BRO-PT-H110</button>
        <span className="text-slate-300">|</span>
        <button onClick={() => onSearch('3M Scotch')} className="hover:text-sana-600 hover:underline">3M Scotch</button>
      </div>
    </div>
  );
};

export default SearchBar;