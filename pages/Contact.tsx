
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react';

const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Pueblo+Nuevo+Barquisimeto+Lara";

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <p className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-3">Visítanos</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark">Barquisimeto te espera</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-accent/5">
              <h2 className="text-2xl font-serif font-bold text-dark mb-8">Información de Contacto</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Dirección</h4>
                    <p className="text-text/60">Sector Pueblo Nuevo<br />Barquisimeto, Estado Lara, Venezuela</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Teléfono</h4>
                    <p className="text-text/60">+58 (251) 000-0000</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Email</h4>
                    <p className="text-text/60">contacto@icpueblonuevo.org</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark text-white p-10 rounded-[40px] shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <Clock className="text-accent" />
                <h2 className="text-2xl font-serif font-bold">Nuestros Horarios</h2>
              </div>
              <ul className="space-y-6">
                <li className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="font-medium">Domingo (Adoración)</span>
                  <span className="text-accent font-bold">10:00 AM</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="font-medium">Miércoles (Estudio Bíblico)</span>
                  <span className="text-accent font-bold">07:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Sábado (Oración)</span>
                  <span className="text-accent font-bold">06:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-lg border border-accent/5">
            <h2 className="text-2xl font-serif font-bold text-dark mb-8">Envíanos un mensaje</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text/40 uppercase tracking-widest ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre..."
                    className="w-full px-6 py-4 rounded-2xl bg-light border border-accent/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text/40 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="w-full px-6 py-4 rounded-2xl bg-light border border-accent/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-text/40 uppercase tracking-widest ml-1">Motivo</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-light border border-accent/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                  <option>Consulta General</option>
                  <option>Petición de Oración</option>
                  <option>Deseo un Estudio Bíblico</option>
                  <option>Orientación de la Palabra</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-text/40 uppercase tracking-widest ml-1">Mensaje</label>
                <textarea 
                  rows={6}
                  placeholder="Escribe aquí tu mensaje o petición..."
                  className="w-full px-6 py-4 rounded-2xl bg-light border border-accent/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 rounded-2xl bg-primary text-white font-bold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
              >
                Enviar Mensaje <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Real Google Maps Integration for Pueblo Nuevo, Barquisimeto - CLICKABLE */}
        <div className="mt-20 h-[500px] bg-secondary/10 rounded-[40px] overflow-hidden relative shadow-inner border border-accent/5 group cursor-pointer">
          <a 
            href={MAP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-dark/20 backdrop-blur-[2px]"
          >
             <div className="bg-white text-dark px-10 py-5 rounded-full font-bold flex items-center gap-3 shadow-2xl transform translate-y-6 group-hover:translate-y-0 transition-transform">
                <ExternalLink size={24} className="text-primary" />
                Ver en Google Maps
             </div>
          </a>
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15701.325946112932!2d-69.34994270000001!3d10.0718585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87679774614691%3A0xe5a3c98894452f75!2sPueblo%20Nuevo%2C%20Barquisimeto%2C%20Lara!5e0!3m2!1ses!2sve!4v1715789000000!5m2!1ses!2sve" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Iglesia de Cristo Pueblo Nuevo"
            className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
          
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-accent/10 max-w-xs pointer-events-none z-10 hidden md:block">
            <div className="flex items-center gap-3 text-primary mb-3">
              <MapPin size={22} />
              <h4 className="font-serif font-bold text-dark text-xl">Nuestra Ubicación</h4>
            </div>
            <p className="text-xs text-text/70 leading-relaxed font-medium">Te esperamos en el corazón de Pueblo Nuevo, Barquisimeto. Haz clic en el mapa para iniciar la navegación.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
