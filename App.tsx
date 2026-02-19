
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Studies from './pages/Studies';
import Lessons from './pages/Sermons'; // Note: component name is updated in the file but imported from existing path for now or updated path
import Devotional from './pages/Devotional';
import Preachers from './pages/Preachers';
import About from './pages/About';
import Contact from './pages/Contact';
import AudioPlayer from './components/AudioPlayer';
import { Lesson } from './types';

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
