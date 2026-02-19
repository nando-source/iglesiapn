
import React, { useState } from 'react';
import { Play, Download, Search, Calendar, User, BookOpen } from 'lucide-react';
import { LESSONS, PREACHERS } from '../constants.tsx';
import { Lesson } from '../types.ts';

interface LessonsProps {
  onPlay: (lesson: Lesson) => void;
}

const Lessons: React.FC<LessonsProps> = ({ onPlay }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLessons = LESSONS.filter(lesson => 
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lesson.bibleText.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <p className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-3">Estudios en Audio</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark">Enseñanzas Bíblicas</h1>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text/40" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por tema o pasaje..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-accent/10 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <div className="bg-white rounded-[40px] border border-accent/10 shadow-sm overflow-hidden">
          <div className="hidden lg:grid grid-cols-12 gap-4 px-10 py-8 bg-light border-b border-accent/10 text-[10px] font-bold text-text/40 uppercase tracking-[0.2em]">
            <div className="col-span-1"></div>
            <div className="col-span-5">Título y Pasaje Bíblico</div>
            <div className="col-span-2 text-center">Enseñando</div>
            <div className="col-span-2 text-center">Fecha</div>
            <div className="col-span-1 text-center">Duración</div>
            <div className="col-span-1"></div>
          </div>

          <div className="divide-y divide-accent/5">
            {filteredLessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 px-10 py-8 items-center hover:bg-secondary/10 transition-colors group"
              >
                <div className="col-span-1 flex justify-center lg:justify-start">
                  <button 
                    onClick={() => onPlay(lesson)}
                    className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm group-hover:scale-110"
                  >
                    <Play size={24} fill="currentColor" className="ml-1" />
                  </button>
                </div>
                
                <div className="col-span-5 text-center lg:text-left">
                  <h4 className="font-bold text-dark text-xl mb-2 group-hover:text-primary transition-colors">{lesson.title}</h4>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-text/60 text-base">
                    <BookOpen size={16} />
                    <span className="font-verse italic">{lesson.bibleText}</span>
                  </div>
                </div>

                <div className="col-span-2 flex flex-col items-center justify-center">
                  <span className="lg:hidden text-[10px] font-bold text-text/30 uppercase tracking-widest mb-2">Hermano</span>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center overflow-hidden border border-accent/10">
                      <img src={PREACHERS.find(p => p.id === lesson.preacherId)?.photo} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm font-medium text-text/80">{PREACHERS.find(p => p.id === lesson.preacherId)?.name}</span>
                  </div>
                </div>

                <div className="col-span-2 flex flex-col items-center justify-center">
                  <span className="lg:hidden text-[10px] font-bold text-text/30 uppercase tracking-widest mb-2">Fecha</span>
                  <div className="flex items-center gap-2 text-sm text-text/60">
                    <Calendar size={16} />
                    <span>{new Date(lesson.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>

                <div className="col-span-1 flex flex-col items-center justify-center">
                  <span className="lg:hidden text-[10px] font-bold text-text/30 uppercase tracking-widest mb-2">Duración</span>
                  <span className="text-sm font-semibold text-text/60">{lesson.duration}</span>
                </div>

                <div className="col-span-1 flex justify-center lg:justify-end">
                  <button className="p-4 text-text/40 hover:text-primary transition-all rounded-2xl hover:bg-primary/5">
                    <Download size={22} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {filteredLessons.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-text/40 font-medium italic text-xl">No se encontraron enseñanzas con esos criterios.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lessons;
