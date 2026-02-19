
import React from 'react';
import { Volume2, ChevronRight, MessageSquare } from 'lucide-react';
import { PREACHERS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Preachers: React.FC = () => {
  useScrollReveal();

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="reveal mb-20 text-center">
          <p className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-3">Servidores</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">Nuestros Hermanos</h1>
          <p className="text-text/60 max-w-2xl mx-auto leading-relaxed">
            Hombres dedicados a la proclamación de las Buenas Nuevas y la edificación del cuerpo de Cristo mediante la sana doctrina.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PREACHERS.map((preacher, index) => (
            <div key={preacher.id} className={`reveal reveal-delay-${index + 1} group text-center`}>
              <div className="relative mb-8 inline-block">
                <div className="w-56 h-56 rounded-[50px] overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
                  <img src={preacher.photo} alt={preacher.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:-translate-y-2 transition-transform">
                  <MessageSquare size={24} />
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-dark mb-2">{preacher.name}</h3>
              <p className="text-text/60 text-sm mb-6 max-w-xs mx-auto leading-relaxed">{preacher.bio}</p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {preacher.topics.map(topic => (
                  <span key={topic} className="px-3 py-1 bg-light border border-accent/10 rounded-full text-[10px] font-bold text-accent uppercase tracking-wider">
                    {topic}
                  </span>
                ))}
              </div>
              
              <button className="flex items-center gap-2 mx-auto text-primary font-bold text-sm group-hover:gap-4 transition-all">
                Ver todas sus enseñanzas <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preachers;
