// src/components/MoodSelector.jsx
import React from 'react';

const moods = ['😊', '😢', '😡', '😴', '🤔', '😍'];

const MoodSelector = ({ mood, setMood, darkMode }) => (
  <div className="flex justify-center gap-3 mb-4">
    {moods.map((m, i) => (
      <button
        key={i}
        className={`text-2xl p-2 rounded-full backdrop-blur-sm transition-all ${
          m === mood 
            ? (darkMode ? 'bg-white/50' : 'bg-emerald-400/80') 
            : (darkMode ? 'bg-white/20' : 'bg-emerald-300/50')
        } hover:scale-110`}
        onClick={() => setMood(m)}
      >
        {m}
      </button>
    ))}
  </div>
);

export default MoodSelector;