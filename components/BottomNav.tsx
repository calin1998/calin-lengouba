
import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onNavigate }) => {
  const navItems = [
    { id: Screen.Home, icon: 'home', label: 'Accueil' },
    { id: Screen.Bio, icon: 'person', label: 'Bio' },
    { id: Screen.Live, icon: 'live_tv', label: 'Direct' },
    { id: Screen.News, icon: 'newspaper', label: 'Actus' },
    { id: Screen.Contact, icon: 'mail', label: 'Contact' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-screen-xl mx-auto w-full px-4 pb-6 flex justify-center">
        <div className="bg-white/95 dark:bg-[#101822]/95 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl flex items-center justify-between px-4 md:px-12 py-2 pointer-events-auto w-full md:w-auto md:min-w-[500px]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center min-w-[64px] md:min-w-[80px] gap-1 p-2 transition-all group ${
                activeScreen === item.id ? 'text-primary' : 'text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-white'
              }`}
            >
              <span className={`material-symbols-outlined md:text-[28px] group-hover:scale-110 transition-transform ${activeScreen === item.id ? 'fill-1' : ''}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] md:text-xs tracking-tight ${activeScreen === item.id ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
