// src/Pages/About.jsx
import React from "react";
import Footer from "../components/Footer";

const About = ({ darkMode }) => (
  <>
    <div className="flex items-center justify-center min-h-screen pt-28 pb-10 px-4">
      <div className={`max-w-2xl w-full backdrop-blur-lg ${darkMode ? "bg-black/20" : "bg-white/80"} p-8 rounded-3xl shadow-2xl border ${darkMode ? "border-white/10" : "border-emerald-200"}`}>
        <h2 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-emerald-900"}`}>
          About MindLog
        </h2>
        <p className={darkMode ? "text-gray-300" : "text-emerald-800"}>
          MindLog is your safe digital space to reflect on your emotions,
          organize your thoughts, and grow in mindfulness. Designed with
          simplicity and care, it helps you log daily entries and monitor your
          moods with ease. Whether you're happy, sad, confused, or inspired —
          this space allows you to capture your thoughts without judgment. It's
          built using modern React principles, styled with Glassmorphism UI, and
          will soon support rich analytics and cloud sync.
        </p>
      </div>
    </div>
    <Footer darkMode={darkMode} />
  </>
);

export default About;