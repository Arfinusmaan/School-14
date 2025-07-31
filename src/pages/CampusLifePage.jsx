import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Music, Palette, Trophy, Users, BookOpen, Heart, Star } from 'lucide-react';

const categories = ['All', 'Sports', 'Arts', 'Events', 'Clubs', 'Daily Life'];

const galleryItems = [
  {
    id: 1,
    category: 'Sports',
    title: 'Championship Victory',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Our basketball team celebrating their regional championship win'
  },
  {
    id: 2,
    category: 'Arts',
    title: 'Spring Concert',
    image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Students performing at our annual spring music concert'
  },
  {
    id: 3,
    category: 'Daily Life',
    title: 'Library Study',
    image: 'https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Students collaborating in our modern library spaces'
  },
  {
    id: 4,
    category: 'Events',
    title: 'Science Fair',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Annual science fair showcasing student innovations'
  },
  {
    id: 5,
    category: 'Clubs',
    title: 'Robotics Team',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Students working on their award-winning robot design'
  },
  {
    id: 6,
    category: 'Arts',
    title: 'Art Exhibition',
    image: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Student artwork displayed in our gallery space'
  },
  {
    id: 7,
    category: 'Daily Life',
    title: 'Lunch Time',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Students enjoying lunch in our campus courtyard'
  },
  {
    id: 8,
    category: 'Sports',
    title: 'Swimming Competition',
    image: 'https://images.pexels.com/photos/863977/pexels-photo-863977.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Competitive swimming practice in our Olympic-size pool'
  },
  {
    id: 9,
    category: 'Events',
    title: 'Graduation Day',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Celebrating our graduates and their achievements'
  },
  {
    id: 10,
    category: 'Clubs',
    title: 'Drama Club',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Drama club rehearsing for the spring theatrical production'
  },
  {
    id: 11,
    category: 'Arts',
    title: 'Dance Performance',
    image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Contemporary dance performance at our cultural festival'
  },
  {
    id: 12,
    category: 'Daily Life',
    title: 'Morning Assembly',
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Daily morning assembly bringing our community together'
  }
];

const activities = [
  { icon: Trophy, title: 'Sports Teams', count: '15+', description: 'Competitive and recreational sports' },
  { icon: Palette, title: 'Art Programs', count: '20+', description: 'Creative expression opportunities' },
  { icon: Music, title: 'Music Ensembles', count: '8', description: 'Bands, choirs, and orchestras' },
  { icon: Users, title: 'Student Clubs', count: '35+', description: 'Interest-based communities' },
  { icon: BookOpen, title: 'Academic Clubs', count: '12', description: 'Subject-specific groups' },
  { icon: Heart, title: 'Community Service', count: '100+', description: 'Hours per student annually' }
];

const CampusLifePage = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold text-${theme.text} mb-4`}>Campus Life</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the vibrant community that makes Nova Academia special. From academics to athletics, arts to service, discover endless opportunities for growth and connection.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-${theme.primary} text-black rounded-full mb-4 shadow-lg`}>
                  <IconComponent size={24} />
                </div>
                <div className={`text-2xl font-bold text-${theme.primary} mb-1`}>{activity.count}</div>
                <div className="font-semibold text-gray-800 mb-2">{activity.title}</div>
                <div className="text-xs text-gray-600">{activity.description}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? `bg-${theme.primary} text-black shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedItem(item)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
                >
                  <div 
                    className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="p-4">
                    <div className={`inline-block px-3 py-1 text-xs font-semibold bg-${theme.bg} text-${theme.primary} rounded-full mb-2`}>
                      {item.category}
                    </div>
                    <h3 className={`font-semibold text-${theme.text} mb-2`}>{item.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-12 mt-16"
        >
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold text-${theme.text} mb-4`}>Student Life Highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every day at Nova Academia is filled with opportunities for learning, growing, and creating lasting memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Morning Classes',
                time: '8:00 AM - 12:00 PM',
                description: 'Engaging academic sessions with expert faculty'
              },
              {
                image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Lunch Break',
                time: '12:00 PM - 1:00 PM',
                description: 'Social time and nutritious meals in our dining hall'
              },
              {
                image: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Afternoon Activities',
                time: '1:00 PM - 4:00 PM',
                description: 'Sports, clubs, and enrichment programs'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div 
                  className="h-48 bg-cover bg-center rounded-xl mb-4"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <h3 className={`text-xl font-semibold text-${theme.text} mb-2`}>{item.title}</h3>
                <div className={`text-${theme.primary} font-medium mb-2`}>{item.time}</div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedItem.image})` }}
              />
              <div className="p-6">
                <div className={`inline-block px-3 py-1 text-sm font-semibold bg-${theme.bg} text-${theme.primary} rounded-full mb-4`}>
                  {selectedItem.category}
                </div>
                <h3 className={`text-2xl font-bold text-${theme.text} mb-4`}>{selectedItem.title}</h3>
                <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                <button
                  onClick={() => setSelectedItem(null)}
                  className={`bg-${theme.primary} text-black px-6 py-2 rounded-lg hover:opacity-90 transition-opacity`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CampusLifePage;