
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Studies from './pages/Studies.tsx';
import Lessons from './pages/Sermons.tsx';
import Devotional from './pages/Devotional.tsx';
import Preachers from './pages/Preachers.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import AudioPlayer from './components/AudioPlayer.tsx';
import { Lesson } from './types.ts';

const App: React.FC = () => {
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  const handlePlayLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
  };

  const handleClosePlayer = () => {
    setCurrentLesson(null);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estudios" element={<Studies />} />
        <Route path="/ensenanzas" element={<Lessons onPlay={handlePlayLesson} />} />
        <Route path="/devocional" element={<Devotional onPlay={handlePlayLesson} />} />
        <Route path="/predicadores" element={<Preachers />} />
        <Route path="/acerca-de" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      
      {currentLesson && (
        <AudioPlayer 
          sermon={currentLesson} 
          onClose={handleClosePlayer} 
        />
      )}
    </Layout>
  );
};

export default App;
