
import React, { useState } from 'react';
import { Book, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';
import { STUDIES, PREACHERS } from '../constants';
import { Study } from '../types';

const Studies: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudies = STUDIES.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          study.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = filter === '' || study.topic === filter;
    return matchesSearch && matchesTopic;
  });

  const topics = Array.from(new Set(STUDIES.map(s => s.topic)));

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <p className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-3">Enseñanza</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-8">Estudios para crecer en la fe</h1>
          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text/40" size={18} />
              <input 
                type="text" 
                placeholder="Buscar estudios..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-accent/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              <button 
                onClick={() => setFilter('')}
                className={`px-6 py-4 rounded-2xl whitespace-nowrap font-medium transition-all ${
                  filter === '' ? 'bg-primary text-white' : 'bg-white text-dark/70 border border-accent/10'
                }`}
              >
                Todos
              </button>
              {topics.map(topic => (
                <button 
                  key={topic}
                  onClick={() => setFilter(topic)}
                  className={`px-6 py-4 rounded-2xl whitespace-nowrap font-medium transition-all ${
                    filter === topic ? 'bg-primary text-white' : 'bg-white text-dark/70 border border-accent/10'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div key={study.id} className="group bg-white rounded-3xl border border-accent/10 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-video bg-secondary/20 relative flex items-center justify-center overflow-hidden">
                <Book className="text-primary/20 group-hover:scale-110 transition-transform" size={80} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {study.topic}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <p className="font-verse text-accent text-sm mb-2">"{study.keyVerse}"</p>
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{study.title}</h3>
                <p className="text-text/70 text-sm mb-8 line-clamp-2">{study.description}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-accent/5">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-text/40 font-bold uppercase tracking-widest">Predicador</span>
                    <span className="text-sm font-medium text-dark">{PREACHERS.find(p => p.id === study.preacherId)?.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                    <Clock size={14} />
                    <span>{study.duration}</span>
                  </div>
                </div>
                
                <button className="w-full mt-8 py-4 rounded-xl bg-light text-primary font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                  Ver estudio <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Studies;
