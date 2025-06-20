// src/Pages/Home.jsx
import React from "react";
import EntryForm from "../components/EntryForm";
import JournalEntry from "../components/JournalEntry";
import Footer from "../components/Footer";

const Home = ({
  mood,
  setMood,
  title,
  setTitle,
  note,
  setNote,
  handleSave,
  entries,
  darkMode,
}) => (
  <>
    <main className="max-w-3xl mx-auto pt-28 px-4 sm:px-8 pb-8 min-h-screen flex flex-col justify-between">
      <div>
        <section id="journal" className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-emerald-900"}`}>
            Today's Entry
          </h2>
          <EntryForm
            mood={mood}
            setMood={setMood}
            title={title}
            setTitle={setTitle}
            note={note}
            setNote={setNote}
            handleSave={handleSave}
            darkMode={darkMode}
          />
        </section>

        <section className="mb-12">
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-emerald-900"}`}>
            Past Entries
          </h2>
          {entries.length === 0 ? (
            <p className={darkMode ? "text-gray-400" : "text-emerald-700"}>No entries yet.</p>
          ) : (
            entries.map((entry, index) => (
              <JournalEntry key={index} entry={entry} darkMode={darkMode} />
            ))
          )}
        </section>
      </div>
    </main>
    <Footer darkMode={darkMode} />
  </>
);

export default Home;