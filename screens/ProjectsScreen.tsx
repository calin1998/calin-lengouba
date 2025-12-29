
import React, { useState } from 'react';
import { Screen, ProjectItem } from '../types';
import { MOCK_PROJECTS } from '../constants';

interface ProjectsScreenProps {
  onNavigate: (screen: Screen) => void;
}

const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const filters = ['Tous', 'Média', 'Business', 'Social', 'Immobilier'];

  const filteredProjects = activeFilter === 'Tous' 
    ? MOCK_PROJECTS 
    : MOCK_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col gap-4 md:gap-8 animate-fadeIn p-4 md:p-8 max-w-6xl mx-auto w-full">
      {/* Filters */}
      <div className="w-full pb-2 md:flex md:justify-center">
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`snap-start flex h-9 md:h-11 shrink-0 items-center justify-center rounded-full px-5 md:px-8 text-sm md:text-base font-medium transition-all ${
                activeFilter === filter 
                ? 'bg-primary text-white shadow-md shadow-primary/20' 
                : 'bg-white dark:bg-[#1a202c] border border-gray-100 dark:border-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Project */}
      <div className="w-full">
        <h2 className="text-[22px] md:text-3xl font-bold py-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">star</span>
          Projet Phare
        </h2>
        <div className="flex flex-col lg:flex-row rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a202c] overflow-hidden">
          <div className="relative w-full lg:w-1/2 aspect-video bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6N1zwNWmQwgdYNeqmupY89E6cU3k8ESrl06A7h_kFFlxha48-0W7rd1muTrvTwfLlwy5d8hUK47laMF0SyUgNLn1_gI6rZpSTSWTLy9gGK-nPUk0sFp6nXtnPkHZV5eSNG4HQBLRWM4QFXms8Z2mI6SCfpWFpqGhvm_K1kQQgAskR3yX92kG4j2MKUC914CHzGQ6YTfxxcVJrl8SZcfo_2HKZZ39aLvJcDg-rDJ6dc88-YOo8QPFepY6bSG7wlkutRbHYYZCl7mcQ")' }}>
            <div className="absolute top-3 right-3 bg-red-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <span className="block w-2 h-2 rounded-full bg-white animate-pulse"></span>
              EN DIRECT
            </div>
          </div>
          <div className="p-5 md:p-10 lg:w-1/2 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-xl md:text-3xl font-bold">L'Empire Chen TV</h3>
              <span className="bg-primary/10 text-primary text-xs md:text-sm font-semibold px-2 py-1 rounded">Média</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg mb-6">Redéfinir le paysage médiatique africain avec une vision moderne et inclusive.</p>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 mb-4">
              <div className="bg-primary h-2 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-xs md:text-sm font-medium">En cours • 85% Complété</p>
              <button className="text-primary text-sm md:text-base font-semibold flex items-center gap-1 hover:underline">
                En savoir plus <span className="material-symbols-outlined text-[18px] md:text-[22px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard icon="domain" value="15+" label="Projets Réalisés" />
        <StatCard icon="groups" value="500+" label="Emplois Soutenus" />
        <StatCard icon="public" value="5" label="Pays Actifs" />
        <StatCard icon="visibility" value="2.5M" label="Audience" />
      </div>

      {/* List - Responsive Grid */}
      <div className="w-full">
        <h2 className="text-[22px] md:text-3xl font-bold py-6">Initiatives Récentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="flex rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a202c] overflow-hidden group hover:shadow-md transition-all">
              <div className="w-32 md:w-48 bg-cover bg-center shrink-0" style={{ backgroundImage: `url("${project.imageUrl}")` }} />
              <div className="flex grow flex-col justify-between p-4 md:p-6">
                <div>
                  <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm md:text-base mt-1 line-clamp-2">{project.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className={`px-2 py-1 rounded text-xs md:text-sm font-medium ${project.category === 'Social' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'}`}>
                    {project.status}
                  </span>
                  <button className="rounded-full bg-gray-100 dark:bg-gray-800 p-2 text-gray-600 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[20px] md:text-[24px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label }: { icon: string, value: string, label: string }) => (
  <div className="bg-white dark:bg-[#1a202c] p-5 md:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center md:items-start gap-1 text-center md:text-left group hover:bg-primary transition-colors">
    <div className="bg-primary/10 p-2 md:p-3 rounded-xl mb-1 group-hover:bg-white/20">
      <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">{icon}</span>
    </div>
    <span className="text-2xl md:text-4xl font-bold group-hover:text-white transition-colors">{value}</span>
    <p className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-widest group-hover:text-white/80 transition-colors">{label}</p>
  </div>
);

export default ProjectsScreen;
