import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';

const ThemeSwitcher = ({ currentTheme, onThemeChange, themes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const themeInfo = {
    green: { emoji: '🟢', name: 'Green', bgClass: 'bg-emerald-50', borderClass: 'border-emerald-600', circleClass: 'bg-emerald-600' },
    blue: { emoji: '🔵', name: 'Blue', bgClass: 'bg-blue-50', borderClass: 'border-blue-600', circleClass: 'bg-blue-600' },
    purple: { emoji: '🟣', name: 'Purple', bgClass: 'bg-purple-50', borderClass: 'border-purple-600', circleClass: 'bg-purple-600' },
    red: { emoji: '🔴', name: 'Red', bgClass: 'bg-red-50', borderClass: 'border-red-600', circleClass: 'bg-red-600' }
  };

  const currentThemeInfo = themeInfo[currentTheme];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 ${currentThemeInfo.circleClass} text-black rounded-full shadow-xl flex items-center justify-center border-2 border-white`}
      >
        <Palette size={24} className="text-black" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 min-w-48"
          >
            <div className="text-center mb-3">
              <p className="text-sm font-semibold text-gray-700">🎨 Choose Theme</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(themeInfo).map(([themeName, info]) => (
                <motion.button
                  key={themeName}
                  onClick={() => {
                    onThemeChange(themeName);
                    setIsOpen(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    currentTheme === themeName
                      ? `${info.borderClass} ${info.bgClass}`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">{info.emoji}</div>
                    <div className={`w-8 h-8 ${info.circleClass} rounded-full mx-auto mb-2`} />
                    <div className="text-xs font-medium text-gray-700">
                      {info.name}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;