// src/Pages/Contact.jsx
import React from "react";
import Footer from "../components/Footer";

const Contact = ({ darkMode }) => (
  <>
    <div className="flex items-center justify-center min-h-screen pt-28 pb-10 px-4">
      <div className={`max-w-2xl w-full backdrop-blur-lg ${darkMode ? "bg-black/20" : "bg-white/80"} p-8 rounded-3xl shadow-2xl border ${darkMode ? "border-white/10" : "border-emerald-200"}`}>
        <h2 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-emerald-900"}`}>
          Contact
        </h2>
        <p className={`mb-2 ${darkMode ? "text-gray-300" : "text-emerald-800"}`}>
          📧 Email: hafizwaseemahmed2002@gmail.com
        </p>
        <p className={`mb-2 ${darkMode ? "text-gray-300" : "text-emerald-800"}`}>
          📞 Phone: +92 341 2011877
        </p>
        <p className={darkMode ? "text-gray-300" : "text-emerald-800"}>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/hafiz-waseem-ahmed-50a4b2347/"
            className={`${darkMode ? "text-blue-400" : "text-emerald-600"} underline`}
            target="_blank"
            rel="noreferrer"
          >
            hafiz-waseem-ahmed
          </a>
        </p>
      </div>
    </div>
    <Footer darkMode={darkMode} />
  </>
);

export default Contact;