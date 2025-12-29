
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Bonjour ! Je suis l'assistant virtuel de Silvestre Mezui Obiang. Comment puis-je vous renseigner sur mon parcours ou sur Chen TV ?" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `Tu es l'assistant de Silvestre Mezui Obiang, fondateur de Chen TV. Réponds de manière professionnelle et inspirante. Voici le contexte : Silvestre est un visionnaire des médias africains, fondateur de Chen TV à Libreville, engagé pour l'excellence et l'autonomisation de la jeunesse. Question de l'utilisateur : ${userMsg}` }] }
        ],
        config: {
          systemInstruction: "Tu agis comme le porte-parole officiel de Silvestre Mezui Obiang. Ton ton est diplomatique, ambitieux et bienveillant. Réponds en français.",
          maxOutputTokens: 500,
        }
      });

      const text = response.text || "Désolé, je rencontre une petite difficulté technique. Pouvez-vous reformuler ?";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Une erreur est survenue lors de la connexion à l'intelligence artificielle." }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:justify-end p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#151f2b] w-full max-w-md h-[80vh] sm:h-[600px] sm:mr-8 rounded-t-3xl sm:rounded-3xl flex flex-col shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
        <div className="p-4 bg-primary text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">smart_toy</span>
            <span className="font-bold">Assistant Visionnaire</span>
          </div>
          <button onClick={onClose} className="hover:bg-white/10 p-1 rounded-full transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-gray-50 dark:bg-[#151f2b]">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm md:text-base ${
                m.role === 'user' 
                ? 'bg-primary text-white rounded-tr-none shadow-md shadow-primary/10' 
                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none border border-gray-100 dark:border-gray-700 shadow-sm'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl animate-pulse flex gap-1 shadow-sm border dark:border-gray-700">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#101822]">
          <div className="flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Posez votre question..."
              className="flex-1 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-primary text-white size-12 flex items-center justify-center rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
