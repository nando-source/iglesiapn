
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, BookOpen, MapPin, ExternalLink } from 'lucide-react';
import { EVENTS } from '../constants.tsx';
import { generateVerseReflection } from '../services/geminiService.ts';
import { useScrollReveal } from '../hooks/useScrollReveal.ts';

const BANNER_IMAGES = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"
];

const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Pueblo+Nuevo+Barquisimeto+Lara";

const Home: React.FC = () => {
  const [reflection, setReflection] = useState<string>('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredVerse = "Y conoceréis la verdad, y la verdad os hará libres - Juan 8:32";

  useScrollReveal();

  useEffect(() => {
    generateVerseReflection(featuredVerse).then(setReflection);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {BANNER_IMAGES.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={img} 
                alt="Naturaleza de Dios" 
                className="w-full h-full object-cover transform scale-105"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-dark/45 backdrop-blur-[1px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-accent font-bold tracking-[0.4em] uppercase mb-4 animate-fade-in text-xs md:text-sm bg-dark/10 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
            Bienvenido a la casa de Dios
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-2xl">
            Iglesia de Cristo <br className="hidden md:block" /> Pueblo Nuevo
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto opacity-95 font-body drop-shadow-md">
            Creciendo en el conocimiento de las Escrituras y el amor del Señor.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/ensenanzas" 
              className="bg-primary text-white px-10 py-5 rounded-full font-semibold shadow-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group border border-primary/20 scale-105"
            >
              Estudiar la Palabra
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/estudios" 
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-dark transition-all flex items-center justify-center gap-3"
            >
              Cursos Bíblicos
            </Link>
          </div>
          <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3">
            {BANNER_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  index === currentSlide ? 'w-12 bg-accent' : 'w-3 bg-white/40'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-light relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="reveal mb-10 inline-block p-4 bg-white rounded-2xl text-accent shadow-sm border border-accent/10">
            <BookOpen size={32} />
          </div>
          <blockquote className="reveal reveal-delay-1 font-verse text-3xl md:text-5xl text-dark leading-snug mb-10 italic">
            "{featuredVerse.split(' - ')[0]}"
          </blockquote>
          <cite className="reveal reveal-delay-2 block text-primary font-bold tracking-[0.3em] text-sm md:text-base uppercase mb-16">— Juan 8:32</cite>
          
          <div className="reveal reveal-delay-3 p-10 md:p-16 bg-white border border-accent/10 rounded-[40px] text-left shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            <h3 className="text-2xl font-serif font-bold text-dark mb-6 relative z-10">Reflexión de la Palabra</h3>
            <p className="text-text/80 text-lg leading-relaxed mb-8 italic relative z-10">
              {reflection || 'Cargando reflexión de las Escrituras...'}
            </p>
            <Link to="/devocional" className="text-primary font-bold text-base flex items-center gap-2 hover:underline relative z-10">
              Profundizar en la reflexión <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal flex justify-between items-end mb-16">
            <div>
              <p className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-3">Vida de Iglesia</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark">Próximas Reuniones</h2>
            </div>
            <Link to="/contacto" className="hidden md:block text-primary font-semibold hover:underline">Horarios detallados</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {EVENTS.map((event, index) => (
              <div key={event.id} className={`reveal reveal-delay-${index + 1} bg-light p-10 rounded-[35px] border border-accent/5 shadow-sm hover:shadow-xl transition-all flex items-start gap-8 group`}>
                <div className="bg-secondary/30 p-6 rounded-3xl flex flex-col items-center justify-center min-w-[120px] transition-colors group-hover:bg-primary/10">
                  <span className="text-xs font-bold text-primary uppercase mb-1">{event.date.split(' ')[0]}</span>
                  <span className="text-3xl font-serif font-bold text-dark">{event.date.split(' ')[1]}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-text/50 text-sm font-semibold mb-3">
                    <Calendar size={16} />
                    <span>{event.time}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-dark mb-5 group-hover:text-primary transition-colors">{event.name}</h4>
                  <div className="flex items-center gap-3 text-primary font-medium">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User size={18} />
                    </div>
                    <span>{event.preacher}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <header className="reveal mb-12">
            <p className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-3">¿Dónde estamos?</p>
            <h2 className="text-4xl font-serif font-bold text-dark mb-4">Te esperamos en Barquisimeto</h2>
            <p className="text-text/60 max-w-xl mx-auto italic">Pueblo Nuevo, Estado Lara. Haz clic en el mapa para abrir en Google Maps.</p>
          </header>

          <div className="reveal reveal-delay-1 relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl border border-accent/10 group cursor-pointer">
            <a 
              href={MAP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-dark/20 backdrop-blur-[2px]"
            >
               <div className="bg-white text-dark px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <ExternalLink size={20} className="text-primary" />
                  Abrir en Google Maps
               </div>
            </a>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15701.325946112932!2d-69.34994270000001!3d10.0718585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87679774614691%3A0xe5a3c98894452f75!2sPueblo%20Nuevo%2C%20Barquisimeto%2C%20Lara!5e0!3m2!1ses!2sve!4v1715789000000!5m2!1ses!2sve" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Ubicación Iglesia de Cristo Pueblo Nuevo"
              className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-accent/10 text-left max-w-xs hidden md:block">
              <div className="flex items-center gap-3 text-primary mb-2">
                <MapPin size={20} />
                <span className="font-bold text-sm uppercase tracking-widest">Pueblo Nuevo</span>
              </div>
              <p className="text-xs text-text/70 leading-relaxed font-medium">Barquisimeto, Estado Lara. Haz clic para obtener indicaciones de navegación.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
