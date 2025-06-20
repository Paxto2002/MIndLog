// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mood, setMood] = useState("😊");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSave = () => {
    if (title.trim() && note.trim()) {
      const newEntry = { mood, title, note, date: new Date().toLocaleDateString() };
      setEntries([newEntry, ...entries]);
      setTitle("");
      setNote("");
      setMood("😊");
    }
  };

  return (
    <div className={darkMode ? "dark bg-gray-900" : "bg-emerald-50"}>
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                mood={mood}
                setMood={setMood}
                title={title}
                setTitle={setTitle}
                note={note}
                setNote={setNote}
                handleSave={handleSave}
                entries={entries}
              />
            }
          />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;