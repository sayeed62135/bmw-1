
import React, { useState, useRef, useEffect } from 'react';
import { getConciergeResponse } from '../services/geminiService';
import { Message, ChatState } from '../types';

const AIConcierge: React.FC = () => {
  const [state, setState] = useState<ChatState>({
    messages: [
      { 
        role: 'model', 
        text: "Greetings. I am your Executive Motors Concierge. How may I assist you in finding your perfect luxury vehicle today?", 
        timestamp: new Date() 
      }
    ],
    isLoading: false,
    isOpen: false,
  });
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (state.isOpen) scrollToBottom();
  }, [state.messages, state.isOpen]);

  const handleSend = async () => {
    if (!input.trim() || state.isLoading) return;

    const userMessage: Message = { role: 'user', text: input, timestamp: new Date() };
    setState(prev => ({ 
      ...prev, 
      messages: [...prev.messages, userMessage],
      isLoading: true 
    }));
    setInput('');

    // Prepare history for API
    const history = state.messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await getConciergeResponse(input, history);
    
    const modelMessage: Message = { 
      role: 'model', 
      text: responseText, 
      timestamp: new Date() 
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, modelMessage],
      isLoading: false
    }));
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {/* Toggle Button */}
      <button 
        onClick={() => setState(prev => ({ ...prev, isOpen: !prev.isOpen }))}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${state.isOpen ? 'bg-red-600 rotate-90' : 'bg-blue-600 hover:scale-110'}`}
      >
        {state.isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>

      {/* Chat Window */}
      {state.isOpen && (
        <div className="absolute bottom-20 right-0 w-[400px] h-[600px] bg-neutral-900 border border-white/10 shadow-2xl rounded-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-900 flex items-center gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
              <span className="text-white font-bold">EM</span>
            </div>
            <div>
              <h3 className="font-bold text-white tracking-tight">AI Concierge</h3>
              <p className="text-blue-200 text-xs">Available 24/7</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {state.messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white/10 text-gray-200 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {state.isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-4 rounded-2xl text-gray-400 italic text-xs animate-pulse">
                  The Concierge is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about a model, price, or feature..."
                className="w-full bg-neutral-800 border border-white/10 rounded-full px-6 py-4 pr-16 focus:outline-none focus:border-blue-500 text-sm transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={state.isLoading}
                className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors disabled:opacity-50"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mt-3 text-center uppercase tracking-widest">Powered by Executive Motors Intelligence</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConcierge;
