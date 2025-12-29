
import React from 'react';

interface ContactScreenProps {
  onBack: () => void;
}

const ContactScreen: React.FC<ContactScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col animate-fadeIn bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-white/95 dark:bg-[#101822]/95 backdrop-blur-md p-4 justify-between border-b dark:border-gray-800">
        <button 
          onClick={onBack}
          className="size-12 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg md:text-xl font-bold flex-1 text-center pr-12">Contact & Partenariat</h2>
      </div>

      <div className="max-w-6xl mx-auto w-full p-4 md:p-8 flex flex-col gap-8 pb-12">
        {/* Banner */}
        <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg group">
           <div 
             className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
             style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMA7q8JiSjp2-JCzBd16UGQkxT3JEGBWjbsFV_eRMHzfHGeIJZuhNFnuz3cm0puFqxOXrHal180N5u_tCGe_aFxq-osFSZQaWJ5WdJUI2F0tMreXG9yE5Wvzx5NRzK_3Zox9TN27UZzZF1MmxEOuGnVTj9ONJ0A95OCThxBrAVDDhrlUVExNZHFO1bI64vag2C6CHMidxHYgHJexQ7bJG2qGbKR2JgA1E9qbRu5bAPkg-mDmHIyOtBLjUVz5PyHxCFoGbGhX31ULFi")' }}
           />
           <div className="absolute inset-0 bg-black/40 flex items-end p-6 md:p-12">
              <div className="max-w-2xl">
                <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md">Connect with the Vision</h1>
                <p className="text-gray-200 text-sm md:text-lg mt-2">Rejoignez l'aventure Chen TV et construisons ensemble les médias de demain.</p>
              </div>
           </div>
        </div>

        {/* Responsive Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 mt-4">
          
          {/* Left Column: Info & Map */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl md:text-3xl font-bold">Nos Coordonnées</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                <ContactInfoCard icon="mail" label="Email" value="contact@chentv.com" />
                <ContactInfoCard icon="call" label="Téléphone" value="+240 222 555 888" />
                <ContactInfoCard icon="location_on" label="Siège Social" value="Malabo, Equatorial Guinea" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
               <h3 className="text-lg font-bold">Localisation</h3>
               <div 
                className="h-60 md:h-80 bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden relative shadow-inner border dark:border-gray-700"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANPB7s56mYTQ8_s8n9sS_g-7bHUFrIAUv_RkH7VjIP9IqBX05842ovGDdzoTjgdM7iC1FXbRFCa0ZzrTwFpTzMaLfEGN0abJJWbnjIJ4ERERpH9X3QlTmeY3lOZjCtT9_ec06peujUG7wZRyBtQd6qDRM1V24zVwJYti3Kn0gcN8QNhDeWyEWAexBQ8dcptfxDREEvRA-im4LcqqdcABbUVlsV01b3oED2ukcAFdbJBPwCLADu8knbCUZ-Ry6sm5Cg3IIXPh3CWOSE")', backgroundSize: 'cover' }}
              >
                <div className="absolute bottom-4 right-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl text-primary flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined">near_me</span>
                  <span className="text-sm font-bold">Ouvrir Maps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-xl md:text-3xl font-bold">Envoyez-nous un message</h3>
            <div className="bg-white dark:bg-[#1a2634] p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Nom complet" placeholder="Votre nom" />
                <InputField label="Adresse Email" placeholder="votre@email.com" type="email" />
              </div>
              <InputField label="Sujet" placeholder="Partenariat, Presse, Feedback..." />
              <div className="flex flex-col gap-2">
                 <label className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">Message</label>
                 <textarea className="min-h-[150px] w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 p-4 focus:ring-2 focus:ring-primary outline-none transition-all text-base" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button className="w-full h-14 bg-primary text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                Envoyer le message <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoCard = ({ icon, label, value }: { icon: string, label: string, value: string }) => (
  <div className="flex items-center gap-4 bg-white dark:bg-[#1a2634] p-5 rounded-2xl shadow-sm hover:border-primary/40 border border-transparent transition-all cursor-pointer group">
    <div className="flex items-center justify-center size-12 md:size-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
      <span className="material-symbols-outlined text-2xl md:text-3xl">{icon}</span>
    </div>
    <div className="flex-1">
      <p className="font-bold text-gray-900 dark:text-white md:text-lg">{label}</p>
      <p className="text-sm md:text-base text-gray-500 group-hover:text-primary transition-colors">{value}</p>
    </div>
    <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">chevron_right</span>
  </div>
);

const InputField = ({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">{label}</label>
    <input 
      type={type} 
      className="h-12 md:h-14 w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900 px-4 focus:ring-2 focus:ring-primary outline-none transition-all text-base" 
      placeholder={placeholder} 
    />
  </div>
);

export default ContactScreen;
