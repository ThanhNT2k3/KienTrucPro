import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Bot } from 'lucide-react';
import { askConstructionConsultant } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm the KienTrucPro AI assistant. How can I help you with your construction or renovation questions today?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askConstructionConsultant(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 md:w-96 h-[450px] flex flex-col mb-4 border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-secondary p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-1.5 rounded-full">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">AI Consultant</h3>
                <p className="text-gray-400 text-xs">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm flex items-center space-x-2">
                   <Loader2 size={16} className="animate-spin text-primary" />
                   <span className="text-xs text-gray-500">Typing...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about materials, costs..."
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-secondary text-white p-2 rounded hover:bg-slate-800 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-amber-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default AIConsultant;