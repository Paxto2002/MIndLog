// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ darkMode, setDarkMode }) => {
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path ? 'font-bold' : '';

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 backdrop-blur-lg ${darkMode ? "bg-black/30" : "bg-white/80"} shadow-md border-b ${darkMode ? "border-white/10" : "border-emerald-200"}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-emerald-900"}`}>
          MindLog 💚
        </h1>
        <nav className="flex items-center space-x-6">
          <Link 
            to="/" 
            className={`${darkMode ? "hover:text-emerald-300" : "hover:text-emerald-600"} ${isActive('/')} ${darkMode ? "text-white" : "text-emerald-900"}`}
          >
            Journal
          </Link>
          <Link 
            to="/about" 
            className={`${darkMode ? "hover:text-emerald-300" : "hover:text-emerald-600"} ${isActive('/about')} ${darkMode ? "text-white" : "text-emerald-900"}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`${darkMode ? "hover:text-emerald-300" : "hover:text-emerald-600"} ${isActive('/contact')} ${darkMode ? "text-white" : "text-emerald-900"}`}
          >
            Contact
          </Link>
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className={`ml-4 px-3 py-1 rounded-full ${darkMode ? "bg-emerald-500/30 hover:bg-emerald-600/30" : "bg-emerald-500/80 hover:bg-emerald-600/80"} text-white transition-all`}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;