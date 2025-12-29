
import React, { useState } from 'react';
import { MOCK_NEWS } from '../constants';

const NewsScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredNews = MOCK_NEWS.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Tous' || news.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8 animate-fadeIn max-w-6xl mx-auto w-full">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto w-full">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
        <input 
          type="text"
          placeholder="Rechercher une actualité..."
          className="w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl pl-10 pr-4 py-3 text-sm md:text-base outline-none focus:ring-2 focus:ring-primary shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Featured News Hero (Only show if no active search) */}
      {!searchTerm && activeCategory === 'Tous' && (
        <div className="group relative flex flex-col items-start justify-end h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDIGX0gJlwazO_k59cKWLeR3EnlKW8l-umDJBYM7SszL0_lve4zbAXz7dLHocE9yzT1AeqW85NPcF42bRI5w-xjemPA_QZCsjDjHvsmSL0J7nDcT_alt2Jug1D4lafNjiq5bLveA6_oiT01UUlchkpYQsqQ3nuHZ-wzT2BVIilfJ6sx0gEfWzSEBKRTaj4JniyBFfDdVC9woQrSk1XaNxt2o1C5-WLM_h7t_Q8xXHyuJwikkTghLMSr0xl3PrLH_d1QlQSBldgISD2")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
          </div>
          <div className="relative z-10 p-5 md:p-10 flex flex-col gap-2 w-full">
            <span className="bg-primary/90 backdrop-blur-sm px-2.5 py-1 text-[10px] md:text-xs font-bold text-white rounded-md w-fit uppercase tracking-wider">À la une</span>
            <h3 className="text-white text-xl md:text-3xl font-bold leading-tight line-clamp-2 max-w-3xl">
              Interview exclusive : La vision de Chen TV pour l'horizon 2024
            </h3>
            <p className="text-gray-300 text-sm md:text-base font-medium line-clamp-1">
              Silvestre Mezui Obiang dévoile les ambitions du groupe.
            </p>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 md:justify-center">
        {['Tous', 'Politique', 'Économie', 'Culture'].map((cat) => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-all shrink-0 border ${
              activeCategory === cat 
              ? 'bg-primary text-white border-primary shadow-md shadow-primary/20' 
              : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Feed - Responsive Grid */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg md:text-2xl font-bold">Récents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.length > 0 ? filteredNews.map(news => (
            <article key={news.id} className="flex flex-col gap-4 p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/20 transition-all cursor-pointer group">
              <div className="w-full aspect-video rounded-xl bg-cover bg-center shadow-inner overflow-hidden" style={{ backgroundImage: `url("${news.imageUrl}")` }}>
                 <div className="w-full h-full bg-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex flex-col justify-between py-1 flex-1">
                <div>
                  <p className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${news.category === 'Politique' ? 'text-blue-600' : 'text-indigo-600'}`}>
                    {news.category}
                  </p>
                  <h4 className="text-sm md:text-lg font-bold line-clamp-2 leading-tight mt-1 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {news.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-400 text-[10px] md:text-xs font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] md:text-[16px]">schedule</span>
                    {news.time}
                  </span>
                  <span className="material-symbols-outlined text-gray-300 group-hover:text-primary text-lg md:text-2xl transition-colors">arrow_forward</span>
                </div>
              </div>
            </article>
          )) : (
            <div className="col-span-full py-12 flex flex-col items-center gap-4 text-center">
               <span className="material-symbols-outlined text-6xl text-gray-200">newspaper</span>
               <p className="text-gray-500 font-medium text-lg">Aucun résultat trouvé pour votre recherche.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsScreen;
