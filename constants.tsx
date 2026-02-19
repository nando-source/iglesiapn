
import { Preacher, Lesson, Study, Devotional, Event } from './types';

export const PREACHERS: Preacher[] = [
  {
    id: 'pred-1',
    name: 'Herman Rodríguez',
    bio: 'Dedicado a la enseñanza de las Escrituras y la formación bíblica de los creyentes.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop',
    topics: ['Palabra de Dios', 'Evangelio', 'Doctrina de Cristo']
  },
  {
    id: 'pred-2',
    name: 'Evangelista Martínez',
    bio: 'Pasión por el estudio de las profecías bíblicas y el cumplimiento de la Palabra.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop',
    topics: ['Escrituras', 'Antiguo Pacto', 'Defensa de la Fe']
  },
  {
    id: 'pred-3',
    name: 'José Hernández',
    bio: 'Enfocado en la vida cristiana práctica y el crecimiento espiritual en amor.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop',
    topics: ['Vida Cristiana', 'Familia', 'Oración']
  }
];

export const LESSONS: Lesson[] = [
  {
    id: 'ser-1',
    title: 'La Fidelidad de Dios en la Aflicción',
    preacherId: 'pred-1',
    date: '2024-05-12',
    bibleText: 'Salmos 46:1-3',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: '45 min',
    category: 'Consolación'
  },
  {
    id: 'ser-2',
    title: 'La Oración en el Espíritu',
    preacherId: 'pred-3',
    date: '2024-05-05',
    bibleText: 'Lucas 18:1-8',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    duration: '38 min',
    category: 'Oración'
  },
  {
    id: 'ser-3',
    title: 'Caminando como Hijos de Luz',
    preacherId: 'pred-2',
    date: '2024-04-28',
    bibleText: '1 Juan 1:5-10',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: '42 min',
    category: 'Vida en Cristo'
  }
];

export const STUDIES: Study[] = [
  {
    id: 'est-1',
    title: 'Fundamentos de la Doctrina',
    keyVerse: 'Hebreos 6:1',
    description: 'Un recorrido por las bases de las Escrituras que sostienen nuestra fe.',
    preacherId: 'pred-1',
    duration: '6 sesiones',
    topic: 'Doctrina Bíblica',
    sessions: [
      { title: 'Inspiración de las Escrituras', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      { title: 'La Naturaleza de Dios', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
    ]
  },
  {
    id: 'est-2',
    title: 'Las Enseñanzas de Jesús',
    keyVerse: 'Mateo 5:3',
    description: 'Estudio exhaustivo del Sermón del Monte y la ética del Reino.',
    preacherId: 'pred-2',
    duration: '8 sesiones',
    topic: 'Evangelios',
    sessions: []
  },
  {
    id: 'est-3',
    title: 'Vida de David',
    keyVerse: '1 Samuel 13:14',
    description: 'Lecciones de fe y arrepentimiento de la vida del rey David.',
    preacherId: 'pred-3',
    duration: '10 sesiones',
    topic: 'Historia Bíblica',
    sessions: []
  }
];

export const EVENTS: Event[] = [
  {
    id: 'ev-1',
    date: 'Dom 19 Mayo',
    time: '10:00 AM',
    name: 'Reunión de Adoración y Enseñanza',
    preacher: 'Herman Rodríguez'
  },
  {
    id: 'ev-2',
    date: 'Mie 22 Mayo',
    time: '07:00 PM',
    name: 'Estudio de la Palabra',
    preacher: 'Evangelista Martínez'
  }
];

export const DEVOTIONAL_TODAY: Devotional = {
  id: 'dev-1',
  date: '15 de Mayo, 2024',
  title: 'La Paz de Cristo',
  verse: 'Filipenses 4:7 - Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.',
  reflection: 'En medio de las pruebas, la paz de Dios no es la ausencia de dificultades, sino el descanso en Su soberanía. Confiar en el Señor es permitir que Su Palabra calme nuestra alma.',
  prayer: 'Padre Celestial, gracias por Tu paz. Ayúdame a descansar en Ti hoy, sabiendo que Tú cuidas de Tus hijos. Amén.',
  audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
};
