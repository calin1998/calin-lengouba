
import React, { useState } from 'react';
import { Screen } from './types';
import HomeScreen from './screens/HomeScreen';
import BioScreen from './screens/BioScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import LiveScreen from './screens/LiveScreen';
import NewsScreen from './screens/NewsScreen';
import GalleryScreen from './screens/GalleryScreen';
import ContactScreen from './screens/ContactScreen';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Home);
  const [isAiOpen, setIsAiOpen] = useState(false);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Home: return <HomeScreen onNavigate={setCurrentScreen} />;
      case Screen.Bio: return <BioScreen onNavigate={setCurrentScreen} openAI={() => setIsAiOpen(true)} />;
      case Screen.Projects: return <ProjectsScreen onNavigate={setCurrentScreen} />;
      case Screen.Live: return <LiveScreen />;
      case Screen.News: return <NewsScreen />;
      case Screen.Gallery: return <GalleryScreen />;
      case Screen.Contact: return <ContactScreen onBack={() => setCurrentScreen(Screen.Home)} />;
      default: return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  const showHeader = currentScreen !== Screen.Bio && currentScreen !== Screen.Contact;
  const showNav = currentScreen !== Screen.Contact;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-200">
      <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto shadow-2xl relative overflow-x-hidden bg-background-light dark:bg-background-dark">
        {showHeader && <Header onNavigate={setCurrentScreen} currentScreen={currentScreen} />}
        
        <main className={`flex-1 ${showNav ? 'pb-24' : ''}`}>
          {renderScreen()}
        </main>

        {showNav && <BottomNav activeScreen={currentScreen} onNavigate={setCurrentScreen} />}
        
        {/* Floating AI Assistant Button - Positioned responsively */}
        {currentScreen !== Screen.Contact && (
          <button 
            onClick={() => setIsAiOpen(true)}
            className="fixed bottom-24 right-6 md:right-12 size-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-40 border-4 border-white dark:border-background-dark"
          >
            <span className="material-symbols-outlined animate-bounce">smart_toy</span>
          </button>
        )}

        <AIAssistant isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
      </div>
    </div>
  );
};

export default App;
