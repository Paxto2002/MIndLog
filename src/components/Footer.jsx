// src/components/Footer.jsx
import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`border-t ${darkMode ? "border-white/10" : "border-emerald-200"} pt-4 text-center text-sm ${darkMode ? "text-gray-300" : "text-emerald-700"}`}>
      <p>Made with 💚 by Paxto</p>
    </footer>
  );
};

export default Footer;