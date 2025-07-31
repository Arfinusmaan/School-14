import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, Star, Award } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    type: 'news',
    title: 'Nova Academia Wins National Science Competition',
    summary: 'Our robotics team secured first place at the National STEM Championships, showcasing innovative AI-powered solutions.',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Achievement',
    content: 'After months of preparation, our dedicated robotics team has achieved an outstanding victory at the National STEM Championships. The team\'s AI-powered robot demonstrated exceptional problem-solving capabilities, impressing judges with its innovative approach to environmental challenges. This victory marks our third consecutive year winning national competitions.',
    featured: true
  },
  {
    id: 2,
    type: 'event',
    title: 'Annual Arts Festival 2024',
    summary: 'Join us for three days of creative expression featuring student artwork, theatrical performances, and musical showcases.',
    date: '2024-02-20',
    time: '9:00 AM - 6:00 PM',
    location: 'Main Campus Auditorium',
    image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Arts',
    content: 'Our annual Arts Festival returns with an exciting lineup of student performances and exhibitions. This year\'s theme "Colors of Innovation" celebrates the intersection of traditional arts and modern creativity. The festival will feature over 200 student artworks, 15 theatrical performances, and concerts by our award-winning music ensembles.',
    featured: true
  },
  {
    id: 3,
    type: 'news',
    title: 'New Environmental Science Lab Opens',
    summary: 'State-of-the-art laboratory facility dedicated to environmental research and sustainability education.',
    date: '2024-01-08',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Facilities',
    content: 'Nova Academia proudly unveils its newest addition - a cutting-edge Environmental Science Laboratory. Equipped with advanced research instruments and sustainable technology, this facility will enable students to conduct real-world environmental studies and contribute to global sustainability efforts.',
    featured: false
  },
  {
    id: 4,
    type: 'event',
    title: 'International Student Exchange Program Info Session',
    summary: 'Learn about opportunities to study abroad and host international students at Nova Academia.',
    date: '2024-02-10',
    time: '2:00 PM - 4:00 PM',
    location: 'Conference Hall A',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Global',
    content: 'Discover global learning opportunities through our International Student Exchange Program. This session will cover partner schools in 15+ countries, application processes, and testimonials from students who have participated in the program.',
    featured: false
  },
  {
    id: 5,
    type: 'news',
    title: 'Student Literary Magazine "Voices" Wins Regional Award',
    summary: 'Our student-published literary magazine receives recognition for excellence in creative writing and design.',
    date: '2024-01-05',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Achievement',
    content: 'The student editorial team of "Voices" has been honored with the Regional Excellence in Student Publications Award. This recognition celebrates the outstanding creative writing, poetry, and artistic design that our students have contributed to this year\'s issues.',
    featured: false
  },
  {
    id: 6,
    type: 'event',
    title: 'Community Service Day',
    summary: 'Join fellow students and faculty in giving back to our local community through various volunteer projects.',
    date: '2024-02-25',
    time: '8:00 AM - 4:00 PM',
    location: 'Various Community Sites',
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Community',
    content: 'Our annual Community Service Day brings together the entire Nova Academia family to make a positive impact in our local community. Students, faculty, and families will participate in projects including park cleanups, food bank assistance, and educational programs at local community centers.',
    featured: false
  },
  {
    id: 7,
    type: 'news',
    title: 'Technology Integration Initiative Launches',
    summary: 'New program introduces AI and machine learning curriculum across all grade levels.',
    date: '2023-12-20',
    image: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Technology',
    content: 'Nova Academia is pioneering the future of education with our comprehensive Technology Integration Initiative. This groundbreaking program introduces artificial intelligence and machine learning concepts to students of all ages, preparing them for the digital economy of tomorrow.',
    featured: false
  },
  {
    id: 8,
    type: 'event',
    title: 'Alumni Career Fair',
    summary: 'Connect with successful Nova Academia graduates and explore career opportunities across various industries.',
    date: '2024-03-15',
    time: '10:00 AM - 3:00 PM',
    location: 'Main Gymnasium',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Career',
    content: 'Our annual Alumni Career Fair connects current students with successful graduates working in diverse fields. This networking event provides valuable insights into career paths and includes workshops on resume writing, interview skills, and professional development.',
    featured: false
  }
];

const categories = ['All', 'Achievement', 'Arts', 'Facilities', 'Global', 'Community', 'Technology', 'Career'];

const NewsEventsPage = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEvents, setShowEvents] = useState(false);

  const filteredItems = newsItems.filter(item => {
    const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    const typeMatch = showEvents ? item.type === 'event' : item.type === 'news';
    return categoryMatch && typeMatch;
  });

  const featuredItems = newsItems.filter(item => item.featured);

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold text-${theme.text} mb-4`}>News & Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with the latest happenings, achievements, and upcoming events at Nova Academia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setShowEvents(false)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  !showEvents
                    ? `bg-${theme.primary} text-black`
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Latest News
              </button>
              <button
                onClick={() => setShowEvents(true)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  showEvents
                    ? `bg-${theme.primary} text-black`
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Upcoming Events
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? `bg-${theme.accent} text-black`
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {!showEvents && featuredItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className={`text-3xl font-bold text-${theme.text} mb-8 text-center`}>Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -10, rotateY: 5 }}
                  onClick={() => setSelectedItem(item)}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer group relative"
                >
                  <div className="relative">
                    <div 
                      className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`inline-flex items-center px-3 py-1 bg-${theme.primary} text-black rounded-full text-sm font-semibold shadow-lg`}>
                        <Star size={14} className="mr-1 text-black" />
                        Featured
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className={`inline-block px-3 py-1 text-xs font-semibold bg-${theme.bg} text-${theme.primary} rounded-full mb-4`}>
                      {item.category}
                    </div>
                    <h3 className={`text-2xl font-bold text-${theme.text} mb-4 group-hover:text-${theme.primary} transition-colors`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{item.summary}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar size={16} />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <ArrowRight className={`text-${theme.primary} group-hover:translate-x-2 transition-transform`} size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${showEvents}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, rotateX: 5 }}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
              >
                <div 
                  className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`inline-block px-3 py-1 text-xs font-semibold bg-${theme.bg} text-${theme.primary} rounded-full`}>
                      {item.category}
                    </div>
                    {item.type === 'event' && (
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock size={12} className="mr-1" />
                        {item.time}
                      </div>
                    )}
                  </div>
                  <h3 className={`text-lg font-semibold text-${theme.text} mb-3 line-clamp-2`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.summary}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    {item.type === 'event' && item.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span className="truncate max-w-20">{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-white rounded-3xl shadow-2xl p-12"
        >
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold text-${theme.text} mb-4`}>Stay Connected</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss out on important updates and exciting events. Subscribe to our newsletter and follow us on social media.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
                title: 'Weekly Newsletter',
                description: 'Get the latest news delivered to your inbox every Friday'
              },
              {
                image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
                title: 'Event Calendar',
                description: 'Never miss an important date with our interactive calendar'
              },
              {
                image: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400',
                title: 'Social Media',
                description: 'Follow us for daily updates and behind-the-scenes content'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div 
                  className="h-32 bg-cover bg-center rounded-xl mb-4"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <h3 className={`text-xl font-semibold text-${theme.text} mb-2`}>{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className={`bg-${theme.primary} text-black px-6 py-2 rounded-lg hover:opacity-90 transition-opacity`}>
                  Subscribe
                </button>
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
              initial={{ scale: 0.8, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.8, rotateY: 90 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${selectedItem.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute bottom-6 left-6 text-black">
                  <div className={`inline-block px-4 py-2 bg-${theme.primary} rounded-full text-sm font-semibold mb-3`}>
                    {selectedItem.category}
                  </div>
                  <h2 className="text-3xl font-bold">{selectedItem.title}</h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-6 mb-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar size={18} />
                    <span>{new Date(selectedItem.date).toLocaleDateString()}</span>
                  </div>
                  {selectedItem.time && (
                    <div className="flex items-center space-x-2">
                      <Clock size={18} />
                      <span>{selectedItem.time}</span>
                    </div>
                  )}
                  {selectedItem.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin size={18} />
                      <span>{selectedItem.location}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{selectedItem.content}</p>
                
                <div className="flex items-center justify-between">
                  <button
                    className={`bg-${theme.primary} text-black px-8 py-3 rounded-lg hover:opacity-90 transition-opacity`}
                  >
                    {selectedItem.type === 'event' ? 'Register for Event' : 'Read More'}
                  </button>
                  <button
                    onClick={() => setSelectedItem(null)}
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

export default NewsEventsPage;