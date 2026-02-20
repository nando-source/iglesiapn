
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react';
import { Lesson } from '../types.ts';

interface AudioPlayerProps {
  sermon: Lesson | null;
  onClose: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ sermon, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (sermon && audioRef.current) {
      audioRef.current.play().catch(err => console.error("Error playing audio:", err));
    }
  }, [sermon]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skip = (amount: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += amount;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const toggleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const nextSpeed = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
    setSpeed(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!sermon) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-audio-player border-t border-accent/20 px-6 py-4 md:px-12 z-50 shadow-2xl animate-slide-up">
      <audio
        ref={audioRef}
        src={sermon.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 w-full md:w-auto overflow-hidden">
          <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">Escuchando Estudio</p>
          <h4 className="text-dark font-bold truncate text-lg">{sermon.title}</h4>
          <p className="text-xs text-text/60 truncate font-verse italic">{sermon.bibleText}</p>
        </div>

        <div className="flex items-center gap-8">
          <button onClick={() => skip(-15)} className="text-dark/50 hover:text-primary transition-colors">
            <SkipBack size={24} />
          </button>
          
          <button 
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all shadow-xl hover:scale-110 active:scale-95"
          >
            {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
          </button>

          <button onClick={() => skip(15)} className="text-dark/50 hover:text-primary transition-colors">
            <SkipForward size={24} />
          </button>
        </div>

        <div className="hidden md:flex flex-col flex-1 gap-2">
          <div className="w-full h-1.5 bg-dark/5 rounded-full relative cursor-pointer group">
            <div 
              className="absolute h-full bg-primary rounded-full transition-all" 
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-text/40 font-bold tracking-widest uppercase">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={toggleSpeed}
            className="text-[10px] font-black px-3 py-1.5 border-2 border-dark/5 rounded-lg hover:border-primary/20 hover:text-primary transition-all min-w-[50px] uppercase"
          >
            {speed}x
          </button>
          <button onClick={onClose} className="text-dark/20 hover:text-red-500 transition-colors p-2">
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
