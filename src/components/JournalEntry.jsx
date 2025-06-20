// src/components/JournalEntry.jsx
import React from 'react';

const JournalEntry = ({ entry, darkMode }) => (
  <div className={`mb-4 p-4 rounded-2xl backdrop-blur-md ${darkMode ? "bg-black/20" : "bg-white/80"} shadow-md border ${darkMode ? "border-white/10" : "border-emerald-200"} transition-all hover:shadow-lg`}>
    <div className="flex justify-between mb-2">
      <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-emerald-900"}`}>
        {entry.title}
      </h3>
      <span className="text-xl">{entry.mood}</span>
    </div>
    <p className={`mb-2 ${darkMode ? "text-gray-300" : "text-emerald-800"}`}>
      {entry.note}
    </p>
    <small className={darkMode ? "text-gray-400" : "text-emerald-600"}>
      {entry.date}
    </small>
  </div>
);

export default JournalEntry;