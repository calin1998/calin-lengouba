
import React from 'react';
import { Screen } from '../types';

interface HeaderProps {
  onNavigate: (screen: Screen) => void;
  currentScreen: Screen;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentScreen }) => {
  const titles: Record<string, string> = {
    [Screen.Home]: 'Chen TV',
    [Screen.Projects]: 'Activités & Projets',
    [Screen.Live]: 'Chen TV Live',
    [Screen.News]: 'Actualités',
    [Screen.Gallery]: 'Galerie'
  };

  return (
    <div className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-screen-xl mx-auto flex items-center p-4 pb-2 justify-between w-full">
        <div className="flex items-center gap-3">
          {currentScreen !== Screen.Home && (
            <button 
              onClick={() => onNavigate(Screen.Home)}
              className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          )}
          <div className="flex items-center gap-2">
             {currentScreen === Screen.Home && (
               <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                 <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>live_tv</span>
               </div>
             )}
             <h2 className="text-[#111418] dark:text-white text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em]">
               {titles[currentScreen] || 'Chen TV'}
             </h2>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {currentScreen === Screen.Live && (
            <div className="flex items-center gap-1.5 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-full border border-red-100 dark:border-red-900/30 mr-2">
              <span className="animate-pulse size-2 rounded-full bg-red-600"></span>
              <p className="text-red-600 dark:text-red-400 text-xs md:text-sm font-bold uppercase tracking-wider">DIRECT</p>
            </div>
          )}
          <button className="flex items-center justify-center rounded-full size-10 bg-transparent text-[#111418] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined md:text-[28px]">{currentScreen === Screen.News ? 'search' : 'menu'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
