import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, Camera, Trophy, Newspaper, Mail, School } from 'lucide-react';

const tiles = [
  {
    id: 'about',
    title: 'About Us',
    icon: School,
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Our story & values'
  },
  {
    id: 'academics',
    title: 'Academics',
    icon: BookOpen,
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Programs & curriculum'
  },
  {
    id: 'admissions',
    title: 'Admissions',
    icon: GraduationCap,
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Join our community'
  },
  {
    id: 'campus-life',
    title: 'Campus Life',
    icon: Camera,
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Student experiences'
  },
  {
    id: 'faculty',
    title: 'Faculty',
    icon: Users,
    image: 'https://images.pexels.com/photos/8197528/pexels-photo-8197528.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Our educators'
  },
  {
    id: 'achievements',
    title: 'Achievements',
    icon: Trophy,
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=200',
    description: 'Awards & recognition'
  },
  {
    id: 'news-events',
    title: 'News & Events',
    icon: Newspaper,
    image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Latest updates'
  },
  {
    id: 'contact',
    title: 'Contact Us',
    icon: Mail,
    image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Get in touch'
  }
];

const HomePage = ({ theme, onNavigate }) => {
  const themeClasses = {
    primary: {
      green: 'bg-emerald-600',
      blue: 'bg-blue-600',
      red: 'bg-red-600',
      purple: 'bg-purple-600'
    },
    primaryDark: {
      green: 'bg-emerald-800',
      blue: 'bg-blue-800',
      red: 'bg-red-800',
      purple: 'bg-purple-800'
    },
    text: {
      green: 'text-emerald-900',
      blue: 'text-blue-900',
      red: 'text-red-900',
      purple: 'text-purple-900'
    }
  };

  return (
    <div className="min-h-screen p-8">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className={`text-6xl font-bold text-${theme.text} mb-4`}>Nova Academia</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Where innovation meets education. Explore our digital learning portal and discover excellence in every corner.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile, index) => {
            const IconComponent = tile.icon;
            return (
              <motion.div
                key={tile.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => onNavigate(tile.id)}
                className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group h-80"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${tile.image})` }}
                />
                <div className={`${themeClasses.primaryDark[theme.primary]} bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 absolute inset-0`} />
                <div className={`${themeClasses.text[theme.primary]} absolute inset-0 flex flex-col justify-end p-6`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`${themeClasses.primary[theme.primary]} inline-flex items-center justify-center w-12 h-12 rounded-full mb-4`}
                  >
                    <IconComponent size={24} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">{tile.title}</h3>
                  <p className="text-sm opacity-90">{tile.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;