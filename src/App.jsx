import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import CampusLifePage from './pages/CampusLifePage';
import FacultyPage from './pages/FacultyPage';
import AchievementsPage from './pages/AchievementsPage';
import NewsEventsPage from './pages/NewsEventsPage';
import ContactPage from './pages/ContactPage';
import ThemeSwitcher from './components/ThemeSwitcher';
import Logo from './components/Logo';

const themes = {
  green: {
    primary: 'emerald-600',
    primaryDark: 'emerald-800',
    bg: 'emerald-50',
    text: 'emerald-900',
    accent: 'emerald-500'
  },
  blue: {
    primary: 'blue-600',
    primaryDark: 'blue-800',
    bg: 'blue-50',
    text: 'blue-900',
    accent: 'blue-500'
  },
  red: {
    primary: 'red-600',
    primaryDark: 'red-800',
    bg: 'red-50',
    text: 'red-900',
    accent: 'red-500'
  },
  purple: {
    primary: 'purple-600',
    primaryDark: 'purple-800',
    bg: 'purple-50',
    text: 'purple-900',
    accent: 'purple-500'
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentTheme, setCurrentTheme] = useState('green');

  useEffect(() => {
    const savedTheme = localStorage.getItem('nova-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('nova-theme', theme);
  };

  const renderPage = () => {
    const pageComponents = {
      home: HomePage,
      about: AboutPage,
      academics: AcademicsPage,
      admissions: AdmissionsPage,
      'campus-life': CampusLifePage,
      faculty: FacultyPage,
      achievements: AchievementsPage,
      'news-events': NewsEventsPage,
      contact: ContactPage
    };

    const PageComponent = pageComponents[currentPage];
    return PageComponent ? <PageComponent theme={themes[currentTheme]} onNavigate={setCurrentPage} /> : null;
  };

  return (
    <div className={`min-h-screen bg-stone-50 theme-${currentTheme}`}>
      <div className={`h-1 bg-gradient-to-r from-${themes[currentTheme].primary} to-${themes[currentTheme].accent}`} />
      
      {currentPage !== 'home' && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-6 left-6 z-50"
        >
          <Logo onClick={() => setCurrentPage('home')} theme={themes[currentTheme]} />
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <ThemeSwitcher 
        currentTheme={currentTheme} 
        onThemeChange={handleThemeChange}
        themes={themes}
      />
    </div>
  );
}

export default App;