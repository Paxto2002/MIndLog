// src/components/EntryForm.jsx
import React from 'react';
import MoodSelector from './MoodSelector';

const EntryForm = ({ mood, setMood, title, setTitle, note, setNote, handleSave, darkMode }) => (
  <div className={`rounded-2xl backdrop-blur-md ${darkMode ? "bg-black/20" : "bg-white/80"} p-6 mb-8 shadow-lg border ${darkMode ? "border-white/10" : "border-emerald-200"}`}>
    <MoodSelector mood={mood} setMood={setMood} darkMode={darkMode} />
    <input
      className={`w-full p-3 rounded-xl ${darkMode ? "bg-white/10 placeholder-gray-400 text-white" : "bg-white/70 placeholder-emerald-600/70 text-emerald-900"} mb-3 focus:outline-none focus:ring-2 ${darkMode ? "focus:ring-emerald-500" : "focus:ring-emerald-400"}`}
      placeholder="Title"
      value={title}
      onChange={e => setTitle(e.target.value)}
    />
    <textarea
      className={`w-full p-3 rounded-xl ${darkMode ? "bg-white/10 placeholder-gray-400 text-white" : "bg-white/70 placeholder-emerald-600/70 text-emerald-900"} mb-3 focus:outline-none focus:ring-2 ${darkMode ? "focus:ring-emerald-500" : "focus:ring-emerald-400"}`}
      placeholder="Write your thoughts..."
      rows={4}
      value={note}
      onChange={e => setNote(e.target.value)}
    ></textarea>
    <button
      onClick={handleSave}
      className={`bg-emerald-500 hover:bg-emerald-600 text-white w-full py-2 rounded-xl transition-all hover:shadow-lg ${darkMode ? "hover:bg-emerald-600/90" : "hover:bg-emerald-500"}`}
    >
      Save Entry
    </button>
  </div>
);

export default EntryForm;