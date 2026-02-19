
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Cursos', path: '/estudios' },
    { name: 'Enseñanzas', path: '/ensenanzas' },
    { name: 'Devocional', path: '/devocional' },
    { name: 'Hermanos', path: '/predicadores' },
    { name: 'Nuestra Fe', path: '/acerca-de' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-light">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-light/90 backdrop-blur-md border-b border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all">
                <span className="text-primary font-serif text-2xl font-bold">†</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-dark">ICPuebloNuevo</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    isActive(link.path) ? 'text-primary' : 'text-text/70 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute w-full bg-light border-b border-accent/10 py-6 px-4 flex flex-col gap-4 shadow-xl animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium py-2 ${
                  isActive(link.path) ? 'text-primary' : 'text-text/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light/80 pt-20 pb-24 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <span className="text-2xl font-serif font-bold text-white">ICPuebloNuevo</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs opacity-70">
              Iglesia de Cristo en Pueblo Nuevo. Un lugar dedicado al estudio de la Palabra de Dios y al amor entre los hermanos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Navegación</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/estudios" className="hover:text-accent transition-colors">Cursos Bíblicos</Link></li>
              <li><Link to="/ensenanzas" className="hover:text-accent transition-colors">Estudios en Audio</Link></li>
              <li><Link to="/devocional" className="hover:text-accent transition-colors">Devocional Diario</Link></li>
              <li><Link to="/acerca-de" className="hover:text-accent transition-colors">Nuestra Fe</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Horarios</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Domingo (Adoración)</span>
                <span className="text-accent">10:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Miércoles (Estudio)</span>
                <span className="text-accent">07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado (Oración)</span>
                <span className="text-accent">06:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Ubicación</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <span className="opacity-70">Pueblo Nuevo, Barquisimeto, Lara, Venezuela</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="opacity-70">+58 (251) 000-0000</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-[10px] opacity-40 uppercase tracking-widest">
          © {new Date().getFullYear()} Iglesia de Cristo Pueblo Nuevo. Barquisimeto, Venezuela.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
