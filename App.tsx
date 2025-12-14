import React, { useState, useEffect } from 'react';
import { Language, Product, SearchResult } from './types';
import { searchProducts } from './services/productDb';
import LanguageSelector from './components/LanguageSelector';
import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import SettingsModal from './components/SettingsModal';

function App() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [searched, setSearched] = useState(false);

  // Handle language selection
  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.dir = lang === Language.ARABIC ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  // Handle Search
  const handleSearch = (query: string) => {
    setSearched(true);
    setSelectedProduct(null);
    const results = searchProducts(query);
    setSearchResults(results);
  };

  // Handle Selection
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  // Render Logic
  if (!language) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans relative">
         <div className="absolute top-4 right-4">
            <button 
              id="settings-trigger"
              onClick={() => setShowSettings(true)} 
              className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              ⚙️
            </button>
         </div>
        <LanguageSelector onSelect={handleLanguageSelect} />
        <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
      </div>
    );
  }

  const isRTL = language === Language.ARABIC;
  const labels = {
    header: {
        en: 'SANA Products AI Trainer',
        ar: 'مدرب منتجات سانا الذكي',
        hi: 'साना उत्पाद एआई ट्रेनर'
    },
    subtitle: {
        en: 'Empowering employees with instant product knowledge',
        ar: 'تمكين الموظفين من المعرفة الفورية بالمنتجات',
        hi: 'तत्काल उत्पाद ज्ञान के साथ कर्मचारियों को सशक्त बनाना'
    },
    results: {
        en: 'Search Results',
        ar: 'نتائج البحث',
        hi: 'खोज परिणाम'
    },
    noResults: {
        en: 'Product not found. Please verify the code.',
        ar: 'المنتج غير موجود. يرجى التحقق من الرمز.',
        hi: 'उत्पाद नहीं मिला। कृपया कोड सत्यापित करें।'
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col font-sans transition-all duration-300 ${isRTL ? 'rtl' : 'ltr'}`}>
      
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setSearchResults([]); setSelectedProduct(null); setSearched(false); }}>
            <div className="h-8 w-8 bg-sana-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <h1 className="text-xl font-bold text-slate-800">{labels.header[language]}</h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setLanguage(null)} className="text-sm font-medium text-slate-500 hover:text-sana-600">
               {language.toUpperCase()}
            </button>
            <button 
              id="settings-trigger"
              onClick={() => setShowSettings(true)} 
              className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              ⚙️
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        
        {/* State: Selected Product (AI View) */}
        {selectedProduct ? (
          <ResultCard 
            product={selectedProduct} 
            language={language} 
            onBack={() => setSelectedProduct(null)} 
          />
        ) : (
          <>
            {/* State: Search / List View */}
            <div className="flex flex-col items-center space-y-8 py-8 animate-fade-in">
              {!searched && (
                 <h2 className="text-3xl md:text-4xl font-light text-slate-700 text-center max-w-2xl leading-tight">
                   {labels.subtitle[language]}
                 </h2>
              )}
              
              <div className="w-full">
                <SearchBar onSearch={handleSearch} lang={language} />
              </div>

              {searched && (
                <div className="w-full max-w-4xl mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-slate-500 font-medium">{labels.results[language]}</h3>
                    <span className="text-xs text-slate-400">{searchResults.length} matches</span>
                  </div>
                  
                  {searchResults.length === 0 ? (
                    <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-dashed border-slate-300">
                      <p className="text-slate-500">{labels.noResults[language]}</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {searchResults.map((item) => (
                        <div 
                          key={item.code}
                          onClick={() => handleSelectProduct(item)}
                          className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-sana-500 hover:shadow-md cursor-pointer transition-all flex justify-between items-center group"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-mono text-sana-600 font-bold bg-sana-50 px-2 py-0.5 rounded text-sm">{item.code}</span>
                                {item.similarity < 100 && (
                                    <span className="text-xs text-amber-500 bg-amber-50 px-1.5 rounded">{item.similarity}% match</span>
                                )}
                            </div>
                            <h4 className="text-slate-800 font-medium group-hover:text-sana-700">{item.name}</h4>
                          </div>
                          <div className="text-slate-300 group-hover:text-sana-500">
                             {isRTL ? '←' : '→'}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </main>

      <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
      
      <footer className="py-6 text-center text-slate-400 text-sm">
         © {new Date().getFullYear()} SANA Products Internal Training Tool
      </footer>
    </div>
  );
}

export default App;