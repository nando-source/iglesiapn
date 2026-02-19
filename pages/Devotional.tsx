
import React from 'react';
import { Play, Calendar, Quote, Heart } from 'lucide-react';
import { DEVOTIONAL_TODAY } from '../constants';
import { Lesson } from '../types';

interface DevotionalProps {
  onPlay: (lesson: Lesson) => void;
}

const Devotional: React.FC<DevotionalProps> = ({ onPlay }) => {
  const devotionalAsLesson: Lesson = {
    id: DEVOTIONAL_TODAY.id,
    title: DEVOTIONAL_TODAY.title,
    preacherId: 'dev',
    date: DEVOTIONAL_TODAY.date,
    bibleText: DEVOTIONAL_TODAY.verse.split(' - ')[0],
    audioUrl: DEVOTIONAL_TODAY.audioUrl,
    duration: '5 min',
    category: 'Devocional'
  };

  return (
    <div className="py-24 bg-light animate-fade-in min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-20">
          <p className="text-accent font-bold text-xs uppercase tracking-[0.4em] mb-4">Crecimiento en el Señor</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-dark mb-6">Reflexión de la Palabra</h1>
          <div className="flex items-center justify-center gap-3 text-primary font-bold text-sm tracking-widest uppercase">
            <Calendar size={20} />
            <span>{DEVOTIONAL_TODAY.date}</span>
          </div>
        </header>

        <div className="bg-white p-10 md:p-20 rounded-[50px] shadow-2xl border border-accent/5 relative overflow-hidden">
          <div className="absolute top-12 right-12 text-secondary/20 -z-0">
            <Quote size={180} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16 pb-16 border-b border-accent/10">
              <button 
                onClick={() => onPlay(devotionalAsLesson)}
                className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all hover:bg-primary/90 group"
              >
                <Play size={36} fill="currentColor" className="ml-1 transition-transform group-hover:scale-110" />
              </button>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-3">{DEVOTIONAL_TODAY.title}</h2>
                <p className="text-text/50 font-medium tracking-wide">Escuchar estudio breve de hoy</p>
              </div>
            </div>

            <div className="space-y-16">
              <div className="bg-light p-10 md:p-14 rounded-[40px] border-l-8 border-primary shadow-sm">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] block mb-6">Versículo Clave</span>
                <p className="font-verse text-2xl md:text-3xl text-dark leading-relaxed italic">
                  "{DEVOTIONAL_TODAY.verse}"
                </p>
              </div>

              <div className="space-y-8">
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] block">Reflexión Bíblica</span>
                <p className="text-xl text-text/80 leading-loose first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:text-primary first-letter:mt-2">
                  {DEVOTIONAL_TODAY.reflection}
                </p>
              </div>

              <div className="bg-secondary/15 p-10 rounded-[40px] border border-accent/10">
                <div className="flex items-center gap-3 text-primary font-bold uppercase text-[10px] tracking-[0.3em] mb-6">
                  <Heart size={18} />
                  <span>Oración en el Espíritu</span>
                </div>
                <p className="text-lg text-text/70 italic leading-relaxed font-body">
                  {DEVOTIONAL_TODAY.prayer}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="text-primary font-bold hover:underline tracking-widest text-sm uppercase">
            Archivo de estudios anteriores
          </button>
        </div>
      </div>
    </div>
  );
};

export default Devotional;
