
import React from 'react';
import { MOCK_GALLERY } from '../constants';

const GalleryScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 animate-fadeIn max-w-7xl mx-auto w-full">
      {/* Tabs */}
      <div className="flex border-b dark:border-gray-800 md:max-w-md md:mx-auto w-full">
        <button className="flex-1 py-4 text-primary font-bold border-b-2 border-primary md:text-lg">Photos</button>
        <button className="flex-1 py-4 text-gray-500 font-bold border-b-2 border-transparent md:text-lg">Vidéos</button>
      </div>

      {/* Categories */}
      <div className="flex gap-3 px-4 py-4 overflow-x-auto no-scrollbar md:justify-center">
        {['Tout', 'Événements', 'Chen TV', 'Meetings'].map((cat, i) => (
          <button key={cat} className={`flex h-10 md:h-12 items-center gap-2 px-6 rounded-full text-sm md:text-base font-medium transition-all ${i === 0 ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg shadow-black/10' : 'bg-white dark:bg-gray-800 border dark:border-gray-700'}`}>
            <span className="material-symbols-outlined text-[18px] md:text-[22px]">grid_view</span>
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Carousel / Masonry Grid */}
      <div className="px-4">
        <h3 className="text-lg md:text-2xl font-bold pb-4">Galerie Multimédia</h3>
        
        {/* Responsive Layout: Adaptive columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 pb-12">
          {MOCK_GALLERY.map((item) => (
            <div key={item.id} className="break-inside-avoid bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-gray-100 dark:border-gray-700">
              <div className="relative overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all">
                        <span className="material-symbols-outlined text-3xl md:text-4xl">play_arrow</span>
                     </div>
                  </div>
                )}
                
                {item.featured && (
                   <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                      FEATURED
                   </div>
                )}
              </div>
              <div className="p-4 md:p-6">
                <p className="font-bold text-base md:text-lg leading-tight group-hover:text-primary transition-colors">{item.title}</p>
                <div className="flex items-center gap-2 mt-2">
                   <span className="material-symbols-outlined text-gray-400 text-sm">location_on</span>
                   <p className="text-gray-500 text-xs md:text-sm">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryScreen;
