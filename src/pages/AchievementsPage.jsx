import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Award, Star, Calendar, Users, Target, Zap } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'National Science Fair Champions',
    category: 'Academic',
    year: '2024',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'First place in National Science Fair with innovative environmental solutions project',
    participants: 'Robotics Team (8 students)',
    impact: 'Featured in National Geographic Young Explorers',
    icon: Trophy,
    color: 'yellow'
  },
  {
    id: 2,
    title: 'Regional Basketball Championship',
    category: 'Sports',
    year: '2024',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Undefeated season culminating in regional championship victory',
    participants: 'Varsity Basketball Team',
    impact: '15-0 season record, 3 players recruited by Division I schools',
    icon: Medal,
    color: 'orange'
  },
  {
    id: 3,
    title: 'International Art Exhibition',
    category: 'Arts',
    year: '2023',
    image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Student artwork featured in International Youth Art Exhibition in Paris',
    participants: 'Visual Arts Students',
    impact: '5 artworks sold with proceeds donated to charity',
    icon: Star,
    color: 'purple'
  },
  {
    id: 4,
    title: 'Coding Olympics Gold Medal',
    category: 'Technology',
    year: '2024',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Top performance in national programming competition',
    participants: 'Computer Science Club',
    impact: 'Scholarship offers from top tech universities',
    icon: Zap,
    color: 'blue'
  },
  {
    id: 5,
    title: 'Model UN Best Delegation',
    category: 'Leadership',
    year: '2023',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Outstanding performance representing Nova Academia at State Model UN',
    participants: 'Model UN Team (12 students)',
    impact: 'Selected to represent state at national conference',
    icon: Target,
    color: 'green'
  },
  {
    id: 6,
    title: 'Music Festival Grand Prize',
    category: 'Arts',
    year: '2024',
    image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'School orchestra wins grand prize at Regional Music Festival',
    participants: 'Symphony Orchestra (45 students)',
    impact: 'Invited to perform at Carnegie Hall',
    icon: Award,
    color: 'pink'
  },
  {
    id: 7,
    title: 'Environmental Action Award',
    category: 'Community',
    year: '2023',
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Recognition for outstanding environmental conservation efforts',
    participants: 'Environmental Club',
    impact: '10,000+ trees planted, 50% reduction in school waste',
    icon: Trophy,
    color: 'green'
  },
  {
    id: 8,
    title: 'Literary Magazine Excellence',
    category: 'Academic',
    year: '2024',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Student literary magazine wins state-wide excellence award',
    participants: 'Creative Writing Students',
    impact: 'Published anthology available in local bookstores',
    icon: Star,
    color: 'indigo'
  },
  {
    id: 9,
    title: 'Swimming State Champions',
    category: 'Sports',
    year: '2023',
    image: 'https://images.pexels.com/photos/863977/pexels-photo-863977.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Dominant performance at state swimming championships',
    participants: 'Swim Team',
    impact: '8 state records broken, 3 Olympic trial qualifiers',
    icon: Medal,
    color: 'blue'
  },
  {
    id: 10,
    title: 'Community Service Excellence',
    category: 'Community',
    year: '2024',
    image: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Recognized for outstanding community service contributions',
    participants: 'Entire Student Body',
    impact: '5,000+ community service hours completed',
    icon: Award,
    color: 'red'
  }
];

const categories = ['All', 'Academic', 'Sports', 'Arts', 'Technology', 'Leadership', 'Community'];
const years = ['All', '2024', '2023', '2022'];

const AchievementsPage = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const filteredAchievements = achievements.filter(achievement => {
    const categoryMatch = selectedCategory === 'All' || achievement.category === selectedCategory;
    const yearMatch = selectedYear === 'All' || achievement.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  const stats = [
    { label: 'Total Awards', value: '150+', icon: Trophy },
    { label: 'National Recognitions', value: '25', icon: Medal },
    { label: 'State Championships', value: '40+', icon: Award },
    { label: 'Students Recognized', value: '500+', icon: Users }
  ];

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold text-${theme.text} mb-4`}>Our Achievements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence across academics, arts, athletics, and community service. Our students and faculty continue to reach new heights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${theme.primary} text-black rounded-full mb-4 shadow-lg`}>
                  <IconComponent size={32} />
                </div>
                <div className={`text-3xl font-bold text-${theme.primary} mb-2`}>{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? `bg-${theme.primary} text-black shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center gap-3">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedYear === year
                    ? `bg-${theme.accent} text-black`
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedYear}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", damping: 15 }}
                  whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
                  onClick={() => setSelectedAchievement(achievement)}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group relative"
                >
                  <div className="relative">
                    <div 
                      className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${achievement.image})` }}
                    />
                    <div className="absolute top-4 right-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-${achievement.color}-500 text-black rounded-full shadow-lg`}>
                        <IconComponent size={24} />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className={`inline-block px-3 py-1 bg-${theme.primary} text-black rounded-full text-sm font-semibold`}>
                        {achievement.year}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <div className={`inline-block px-3 py-1 text-xs font-semibold bg-${theme.bg} text-${theme.primary} rounded-full mb-3`}>
                      {achievement.category}
                    </div>
                    <h3 className={`text-xl font-bold text-${theme.text} mb-3 group-hover:text-${theme.primary} transition-colors`}>
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{achievement.description}</p>
                    <div className="flex items-center space-x-2 text-gray-500 text-xs">
                      <Users size={14} />
                      <span className="truncate">{achievement.participants}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-white rounded-3xl shadow-2xl p-12"
        >
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold text-${theme.text} mb-4`}>Recognition & Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our achievements reflect our commitment to excellence and our students' dedication to making a positive impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Academic Excellence',
                description: 'Consistently ranked among top schools nationally',
                metric: '98% Success Rate'
              },
              {
                image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Innovation Awards',
                description: 'Leading in educational technology and teaching methods',
                metric: '15+ Innovation Awards'
              },
              {
                image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Community Impact',
                description: 'Students contributing to positive social change',
                metric: '10,000+ Service Hours'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div 
                  className="h-48 bg-cover bg-center rounded-xl mb-6"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className={`text-2xl font-bold text-${theme.primary} mb-2`}>{item.metric}</div>
                <h3 className={`text-xl font-semibold text-${theme.text} mb-3`}>{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.8, rotateY: 90 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${selectedAchievement.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute bottom-6 left-6 text-black">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`inline-block px-4 py-2 bg-${theme.primary} rounded-full text-sm font-semibold`}>
                      {selectedAchievement.category}
                    </div>
                    <div className={`inline-block px-4 py-2 bg-${selectedAchievement.color}-500 rounded-full text-sm font-semibold`}>
                      {selectedAchievement.year}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold">{selectedAchievement.title}</h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className={`text-xl font-semibold text-${theme.text} mb-4`}>Achievement Details</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{selectedAchievement.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className={`font-semibold text-${theme.text} mb-2`}>Participants</h4>
                        <p className="text-gray-600">{selectedAchievement.participants}</p>
                      </div>
                      <div>
                        <h4 className={`font-semibold text-${theme.text} mb-2`}>Impact</h4>
                        <p className="text-gray-600">{selectedAchievement.impact}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center text-center">
                    <div className={`inline-flex items-center justify-center w-24 h-24 bg-${selectedAchievement.color}-500 text-black rounded-full mb-6`}>
                      {React.createElement(selectedAchievement.icon, { size: 48 })}
                    </div>
                    <div className={`text-4xl font-bold text-${theme.primary} mb-2`}>{selectedAchievement.year}</div>
                    <div className="text-gray-600">Year of Achievement</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-8 pt-8 border-t">
                  <button
                    className={`bg-${theme.primary} text-black px-8 py-3 rounded-lg hover:opacity-90 transition-opacity`}
                  >
                    Share Achievement
                  </button>
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AchievementsPage;