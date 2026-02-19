
export interface Preacher {
  id: string;
  name: string;
  bio: string;
  photo: string;
  topics: string[];
}

export interface Lesson {
  id: string;
  title: string;
  preacherId: string;
  date: string;
  bibleText: string;
  audioUrl: string;
  duration: string;
  category: string;
}

export interface Study {
  id: string;
  title: string;
  keyVerse: string;
  description: string;
  preacherId: string;
  duration: string;
  topic: string;
  sessions: {
    title: string;
    audioUrl: string;
  }[];
}

export interface Devotional {
  id: string;
  date: string;
  title: string;
  verse: string;
  reflection: string;
  prayer: string;
  audioUrl: string;
}

export interface Event {
  id: string;
  date: string;
  time: string;
  name: string;
  preacher: string;
}

export interface AudioState {
  isPlaying: boolean;
  currentLesson: Lesson | null;
  playbackSpeed: number;
}
