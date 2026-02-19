
import React from 'react';
import { CheckCircle2, Shield, Heart, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  useScrollReveal();

  const values = [
    { title: 'La verdad sobre todo', icon: <Shield />, desc: 'Predicamos la Palabra de Dios sin diluir, confiando plenamente en su autoridad.' },
    { title: 'Amor fraternal', icon: <Heart />, desc: 'Somos una familia en Cristo, donde cada miembro es valorado y cuidado.' },
    { title: 'Santidad', icon: <CheckCircle2 />, desc: 'Buscamos vivir vidas que honren a Dios en lo privado y lo público.' },
    { title: 'Servicio', icon: <Zap />, desc: 'Ponemos nuestros dones a disposición del Señor para el beneficio de los demás.' }
  ];

  return (
    <div className="animate-fade-in">
      <section className="py-24 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="reveal text-4xl md:text-6xl font-serif font-bold text-dark mb-8">Nuestra Historia</h1>
          <p className="reveal reveal-delay-1 text-lg md:text-xl text-text/70 leading-relaxed font-medium">
            "Para que la multiforme sabiduría de Dios sea ahora dada a conocer por medio de la iglesia." - Efesios 3:10
          </p>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="reveal flex-1 space-y-8">
            <h2 className="text-3xl font-serif font-bold text-dark">Cómo comenzó todo</h2>
            <p className="text-text/80 leading-relaxed">
              La Iglesia de Cristo en Pueblo Nuevo nació de un deseo profundo de un pequeño grupo de creyentes por volver a las raíces del cristianismo bíblico. Fundada en el año 2005, nuestra misión siempre ha sido predicar "todo el consejo de Dios" con fidelidad y amor.
            </p>
            <p className="text-text/80 leading-relaxed">
              A lo largo de casi dos décadas, hemos visto la mano de Dios obrando en cientos de vidas, restaurando familias y levantando una generación que ama su Palabra.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="reveal reveal-delay-2 p-6 bg-light rounded-3xl">
                <p className="text-3xl font-serif font-bold text-primary mb-1">2005</p>
                <p className="text-xs font-bold text-text/40 uppercase tracking-widest">Año de Fundación</p>
              </div>
              <div className="reveal reveal-delay-3 p-6 bg-light rounded-3xl">
                <p className="text-3xl font-serif font-bold text-primary mb-1">Pueblo Nuevo</p>
                <p className="text-xs font-bold text-text/40 uppercase tracking-widest">Nuestra Sede</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-2 flex-1">
            <img 
              src="https://images.unsplash.com/photo-1510133595913-97970099f1d2?q=80&w=800&auto=format&fit=crop" 
              alt="Estudio bíblico histórico" 
              className="rounded-[40px] shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal text-3xl md:text-4xl font-serif font-bold text-dark mb-16 text-center">Lo que creemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'La Biblia', text: 'Creemos que la Biblia es la Palabra inspirada de Dios, nuestra única regla de fe y práctica, infalible en su propósito original.' },
              { title: 'Jesucristo', text: 'Creemos en Jesucristo como el único Salvador del mundo, Su nacimiento virginal, Su sacrificio expiatorio en la cruz y Su resurrección corporal.' },
              { title: 'La Salvación', text: 'Creemos que la salvación es por gracia por medio de la fe, un don gratuito de Dios que produce una vida transformada.' },
              { title: 'La Iglesia', text: 'Creemos que la iglesia es el cuerpo de Cristo en la tierra, llamada a adorar, edificar y evangelizar a todas las naciones.' }
            ].map((belief, index) => (
              <div key={index} className={`reveal reveal-delay-${index + 1} bg-white p-10 rounded-3xl border border-accent/5 shadow-sm`}>
                <h3 className="text-xl font-bold text-primary mb-4">{belief.title}</h3>
                <p className="text-text/70 leading-relaxed italic">{belief.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal text-3xl md:text-4xl font-serif font-bold text-dark mb-16 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} p-8 bg-light rounded-[32px] text-center hover:bg-secondary/10 transition-colors`}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  {v.icon}
                </div>
                <h4 className="text-lg font-bold text-dark mb-3">{v.title}</h4>
                <p className="text-sm text-text/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
