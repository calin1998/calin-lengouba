
import React from 'react';

const LiveScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 animate-fadeIn p-4">
      {/* Live Hero */}
      <div className="flex flex-col rounded-xl shadow-md bg-white dark:bg-slate-800 overflow-hidden">
        <div 
          className="w-full aspect-video bg-cover bg-center relative" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNXjjEcuqgcKB9tNE1KqL9wh-8VNScZlbPZPrAWId96TI6V5EHWBEL4q1TgjW8VZxWfaWJdG8h-8IxWbENv1BRl0tvQQILQ8f-FlwSgsSac-K8xtO01ujlmT0pcDwHVI4zG3oh0WsMSV5l66PvbYcXfeeRmAbmNVAuMECmePvKP3nCDnMrjh52Vtegr-FWqYW_aRic5HEb8cvmNuTHC_ierCvGrhqfP4-WrpuV0tT9S4FrDcqQUj2zB-VTJ8qJ_iv_WWL-dOZ5qSN0")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">ON AIR NOW</span>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-3">
          <div>
            <h1 className="text-2xl font-bold">The Voice of the Community</h1>
            <p className="text-gray-500 dark:text-slate-400 mt-1">Live broadcasts and uncensored truth led by Silvestre Mezui Obiang.</p>
          </div>
          <div className="flex items-center gap-3 justify-between">
            <button className="flex-1 bg-primary hover:bg-blue-600 transition-colors text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">play_circle</span>
              Regarder en Direct
            </button>
            <button className="size-12 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-slate-800 p-4 shadow-sm">
        <div className="flex flex-col justify-center gap-2 flex-[2]">
          <p className="text-lg font-bold">À Propos de Chen TV</p>
          <p className="text-gray-500 text-sm">Libérer les récits et dire la vérité à la communauté. Nous vous apportons des histoires qui comptent.</p>
        </div>
        <div className="w-24 h-24 bg-cover bg-center rounded-lg shadow-inner" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHf94PR1_uU4SQ69WKq7m4IQ6GihGNzc5laTQ79ehyLgEucDPPVjx2jq_CM4iC6Vz7fHEYKehGtqiwkFwV1wnhGm7CK59w0myw29f5l40qZIv5d9Qsb033dNrzRu93ezRcecVhp1zMxH0jhBPHsCxLVlStVdupFF5KUkb5AMdADRakIclEaXUS8NFmyXORdYtUNGqBaYGj9D0oGJrlHKsTGvFfD8NagAi_UsbO4X70EaRGqA1hvkXCiD_xLJ9WA3-UOfbN6CBUS8lj")' }}></div>
      </div>

      {/* Schedule */}
      <h3 className="text-lg font-bold pt-4">Programme du Jour</h3>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm space-y-8">
        <ScheduleItem icon="analytics" time="14:00" title="Analyse Politique" active={false} />
        <ScheduleItem icon="groups" time="16:00" title="Forum Jeunesse" active={true} badge="LIVE" />
        <ScheduleItem icon="feed" time="18:00" title="Journal du Soir" active={false} isLast />
      </div>
    </div>
  );
};

const ScheduleItem = ({ icon, time, title, active, badge, isLast }: { icon: string, time: string, title: string, active: boolean, badge?: string, isLast?: boolean }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className={`p-2 rounded-full ${active ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'}`}>
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>
      {!isLast && <div className="w-0.5 grow bg-slate-100 dark:bg-slate-700 mt-2"></div>}
    </div>
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <p className={`font-bold ${active ? 'text-primary' : ''}`}>{title}</p>
        {badge && <span className="bg-red-100 text-red-600 text-[10px] px-1.5 py-0.5 rounded font-bold">{badge}</span>}
      </div>
      <p className="text-gray-500 text-sm">{time} • En direct du studio</p>
    </div>
  </div>
);

export default LiveScreen;
