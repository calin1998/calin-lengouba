
import React from 'react';
import { Screen } from '../types';
import { MOCK_NEWS } from '../constants';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col gap-6 animate-fadeIn">
      {/* Hero Section */}
      <div className="p-4 pt-6">
        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYd99txOiLY0ev2DbYId1Iv4TpkVVdCKabMSx05HeFzHWITCGxeJ2tQnlsmdS47zkHCo_r3ffraZqrZ1Zq-GPn4CKOMTmprtNCUtNRs2WQkmDzEQfrzhgCQl1P7hkZCIxB7FfhI52bsSAG9nEI0XTjv5Tm7b_7dMiKLJzINwg3XneeFWBlSsNs7nnBEg0JGXp_NAQI2syTwxuWRLxAM6roAtlb4k3wlTqa0KX0N5NxSj6ZNEUrG_twg41VRrH5X0feARpzfFFnnMNC")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 flex flex-col justify-end h-full">
            <span className="inline-flex items-center px-3 py-1 mb-3 text-xs font-bold tracking-wider text-white uppercase bg-white/20 backdrop-blur-md rounded-full w-fit border border-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mr-2 animate-pulse"></span>
              Président Fondateur
            </span>
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-2 drop-shadow-lg">Silvestre Mezui Obiang</h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium tracking-wide">La voix de l'excellence</p>
          </div>
        </div>
      </div>

      {/* Official Presentation */}
      <div className="flex flex-col gap-3 px-4 max-w-4xl mx-auto w-full">
        <h3 className="text-[#111418] dark:text-white text-lg md:text-xl font-bold">Présentation Officielle</h3>
        <div 
          className="relative flex items-center justify-center bg-[#111418] bg-cover bg-center aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 group cursor-pointer"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSc0YdNXaEBiRefkY1F1uP02jp-IXAtGAT3pGCU3J6qqUETcCcZ99GUYSho3-ZtaUrwYGlJT2Msy8nuQip4Yhd-VEav-EJW9GVsgXUraQ4966IyItskz7Y95Pk_nnSGszR_UusTcLDMN8U0JJgiYC6H4Z44lrY8vzS0FKmZyNJ10pMkgfKLiSzWMDvuDLkVSQldfX89zqDbdOMkDs5-gCSXTS_sFNCbon4lMvh7kR3j4wAuQZ0aQ8FD6piqn21ax1YQV6cEEh0vmjc")' }}
        >
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
          <button className="relative flex shrink-0 items-center justify-center rounded-full size-14 md:size-20 bg-white/20 backdrop-blur-md text-white shadow-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300 ring-1 ring-white/50">
            <span className="material-symbols-outlined" style={{ fontSize: '40px', fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
          </button>
        </div>
      </div>

      {/* News Slider/Grid */}
      <div className="flex flex-col pt-2 px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#111418] dark:text-white text-lg md:text-xl font-bold">À la une sur Chen TV</h3>
          <button 
            onClick={() => onNavigate(Screen.News)}
            className="text-primary text-sm font-bold hover:text-primary-dark transition-colors flex items-center gap-1"
          >
            Voir tout
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        
        {/* Responsive Layout: Scroll on mobile, Grid on md+ */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-x-visible gap-4 pb-8 no-scrollbar snap-x snap-mandatory">
          {MOCK_NEWS.map((news) => (
            <div 
              key={news.id}
              className="min-w-[280px] md:min-w-0 snap-center flex flex-col bg-white dark:bg-[#1a232e] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group cursor-pointer hover:shadow-md transition-all duration-300"
            >
              <div 
                className="h-40 md:h-48 w-full bg-cover bg-center relative overflow-hidden" 
                style={{ backgroundImage: `url("${news.imageUrl}")` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className={`absolute top-3 left-3 ${news.badgeColor || 'bg-primary'} text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-md shadow-sm tracking-wide`}>
                  {news.category}
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h4 className="text-[#111418] dark:text-white font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2 text-[15px] md:text-base">
                  {news.title}
                </h4>
                <div className="mt-auto flex items-center gap-2 pt-1">
                  <span className="material-symbols-outlined text-gray-400 text-[16px]">schedule</span>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">{news.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
