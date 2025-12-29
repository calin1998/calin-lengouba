
import React from 'react';
import { Screen } from '../types';

interface BioScreenProps {
  onNavigate: (screen: Screen) => void;
  openAI: () => void;
}

const BioScreen: React.FC<BioScreenProps> = ({ onNavigate, openAI }) => {
  return (
    <div className="relative animate-fadeIn bg-background-light dark:bg-background-dark min-h-screen">
      {/* Sticky Header for Bio */}
      <div className="sticky top-0 z-50 flex items-center justify-between bg-white/90 dark:bg-[#101822]/90 backdrop-blur-md p-4 border-b border-gray-100 dark:border-gray-800">
        <button 
          onClick={() => onNavigate(Screen.Home)}
          className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-10">Biographie</h2>
      </div>

      {/* Hero */}
      <div className="relative w-full aspect-[4/5] overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB220_LWg-xEzuMVSwg-0JDHnczZrvH71yLtRxmJSuUJmQGqVtf7OlAx4TWQiWRhAOvZrjEmVgF1MIvBUdarK9jE63ZTKtc8m4gq0ZUS9HvkaaH6Qu_zIl246qtGC9nQdmOZpAjIMyclbe_31Dq8Z8_k2-ZXYYvqSUz6JSU5rN4Ge0lB1pEo1LxTfR9gxxUlzPLK_ALoPmsaj0nmH6fBrjjM27bdiAbd4InSCBSEySMaIWGhvjhll2sSp9T4Gu1dbHoPCBU3QmD2p7W")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start gap-2">
          <div className="inline-flex px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm border border-primary/20 shadow-lg mb-2">
            <p className="text-white text-[10px] font-bold uppercase tracking-wider">Visionnaire</p>
          </div>
          <h1 className="text-3xl font-bold">Silvestre Mezui Obiang</h1>
          <p className="text-primary text-lg font-medium">CEO & Fondateur, Chen TV</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          Figure emblématique du paysage médiatique africain, Silvestre Mezui Obiang a bâti Chen TV avec une ambition claire : <span className="font-semibold text-primary underline decoration-primary/30 underline-offset-4">réinventer la narration du continent.</span>
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mt-4">
          Son parcours est marqué par une volonté inébranlable d'innover et de promouvoir l'excellence. Au-delà des affaires, il incarne un leadership moderne, axé sur l'impact social et l'autonomisation de la jeunesse.
        </p>

        {/* AI Call to Action */}
        <button 
          onClick={openAI}
          className="mt-6 w-full py-4 bg-gradient-to-r from-primary to-indigo-600 rounded-2xl text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95"
        >
          <span className="material-symbols-outlined">auto_awesome</span>
          Explorer ma vision avec l'IA
        </button>
      </div>

      {/* Quote */}
      <div className="px-4 pb-8">
        <div className="relative bg-white dark:bg-[#1a232e] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 text-center shadow-sm">
          <span className="material-symbols-outlined absolute top-4 left-4 text-primary/10 text-4xl">format_quote</span>
          <p className="text-xl font-medium italic leading-normal relative z-10 text-gray-700 dark:text-gray-300">
            "L'avenir appartient à ceux qui croient en la beauté de leurs rêves et qui osent construire les ponts pour les atteindre."
          </p>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-6 py-8 bg-white dark:bg-[#151f2b] rounded-t-[2rem] border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/10 rounded-xl">
             <span className="material-symbols-outlined text-primary">history_edu</span>
          </div>
          <h3 className="text-xl font-bold">Mon Parcours</h3>
        </div>
        <div className="relative border-l-2 border-primary/20 ml-3 space-y-10 pb-4">
          <TimelineItem year="2023" title="Expansion Internationale" text="Lancement des antennes de Chen TV dans 5 nouveaux pays d'Afrique Francophone." active />
          <TimelineItem year="2018" title="Fondation de Chen TV" text="Création de la première chaîne dédiée à l'entrepreneuriat et à la culture locale." />
          <TimelineItem year="2012" title="Début de carrière" text="Premiers pas dans le journalisme d'investigation et la production audiovisuelle." />
        </div>
      </div>

      {/* Call to Action */}
      <div className="p-6 bg-white dark:bg-[#151f2b] pb-24">
         <button 
           onClick={() => onNavigate(Screen.Projects)}
           className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
         >
           Voir mes projets
           <span className="material-symbols-outlined">trending_up</span>
         </button>
      </div>
    </div>
  );
};

const TimelineItem = ({ year, title, text, active = false }: { year: string, title: string, text: string, active?: boolean }) => (
  <div className="relative pl-8 group">
    <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white dark:border-[#151f2b] transition-all ${active ? 'bg-primary scale-125 shadow-[0_0_10px_rgba(19,109,236,0.5)]' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
    <p className={`text-xs font-bold mb-1 tracking-widest ${active ? 'text-primary' : 'text-gray-500'}`}>{year}</p>
    <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{title}</h4>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{text}</p>
  </div>
);

export default BioScreen;
