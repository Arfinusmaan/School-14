import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, BookOpen, Globe, Star, Trophy, Lightbulb, Shield, Zap, Compass } from 'lucide-react';

const AboutPage = ({ theme }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const coreValues = [
    {
      id: 1,
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'We believe in pushing boundaries and achieving excellence in academics, character development, and personal growth. Our commitment to excellence is reflected in our rigorous curriculum, dedicated faculty, and state-of-the-art facilities.'
    },
    {
      id: 2,
      icon: Heart,
      title: 'Compassion',
      description: 'Building empathy and understanding in our community',
      image: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'Compassion is at the heart of our educational philosophy. We teach students to understand, respect, and care for others, fostering a supportive environment where everyone can thrive and contribute positively to society.'
    },
    {
      id: 3,
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing creativity and forward-thinking solutions',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'Innovation drives our approach to education. We encourage creative thinking, problem-solving, and the exploration of new ideas. Our students learn to adapt to change and become leaders in an ever-evolving world.'
    },
    {
      id: 4,
      icon: Shield,
      title: 'Integrity',
      description: 'Upholding honesty and moral principles',
      image: 'https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'Integrity forms the foundation of our character education. We instill in our students the importance of honesty, accountability, and ethical behavior in all aspects of life.'
    },
    {
      id: 5,
      icon: Globe,
      title: 'Global Perspective',
      description: 'Preparing students for a connected world',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'We prepare our students to be global citizens who understand diverse cultures, perspectives, and challenges. Our international programs and multicultural environment foster global awareness and understanding.'
    },
    {
      id: 6,
      icon: Zap,
      title: 'Empowerment',
      description: 'Enabling students to reach their full potential',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'We empower our students by providing them with the tools, confidence, and opportunities they need to succeed. Every student is encouraged to discover their unique talents and pursue their passions.'
    }
  ];

  const achievements = [
    { icon: Trophy, label: 'Awards Won', value: '150+', color: 'yellow' },
    { icon: Users, label: 'Students Graduated', value: '5,000+', color: 'blue' },
    { icon: BookOpen, label: 'Years of Excellence', value: '25+', color: 'green' },
    { icon: Star, label: 'Faculty Members', value: '120+', color: 'purple' }
  ];

  const facilities = [
    {
      title: 'Modern Classrooms',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Smart boards and interactive learning environments'
    },
    {
      title: 'Science Laboratories',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'State-of-the-art equipment for hands-on learning'
    },
    {
      title: 'Digital Library',
      image: 'https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Extensive collection of books and digital resources'
    },
    {
      title: 'Sports Complex',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Olympic-size pool and multi-sport facilities'
    },
    {
      title: 'Arts Center',
      image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Music rooms, art studios, and performance spaces'
    },
    {
      title: 'Innovation Lab',
      image: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Robotics, coding, and STEM project workspace'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold text-${theme.primaryDark} mb-4`}>About Nova Academia</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 25 years, Nova Academia has been a beacon of educational excellence, nurturing young minds and shaping future leaders through innovative teaching and holistic development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="space-y-6">
            <h2 className={`text-3xl font-bold text-${theme.primaryDark} mb-6`}>Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 1999 with a vision to revolutionize education, Nova Academia began as a small institution with big dreams. Our founders believed that every child deserves access to world-class education that not only imparts knowledge but also builds character and nurtures creativity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we stand as one of the region's most respected educational institutions, having graduated over 5,000 students who have gone on to excel in various fields around the world. Our commitment to excellence, innovation, and holistic development remains unwavering.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Nova Academia, we believe that education is not just about academic achievement—it's about developing critical thinking, fostering creativity, building character, and preparing students to be responsible global citizens who can make a positive impact on the world.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div 
              className="h-48 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600)' }}
            />
            <div 
              className="h-48 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600)' }}
            />
            <div 
              className="h-48 bg-cover bg-center rounded-xl col-span-2"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600)' }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className={`text-3xl font-bold text-${theme.primaryDark} text-center mb-12`}>Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedValue(value)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                >
                  <div 
                    className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${value.image})` }}
                  />
                  <div className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-${theme.primary}  rounded-full mb-4 shadow-lg`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className={`text-xl font-semibold text-${theme.primaryDark} mb-3`}>{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-12 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold text-${theme.primaryDark} mb-6`}>Principal's Message</h2>
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "Education is the most powerful weapon which you can use to change the world. At Nova Academia, we don't just teach subjects; we inspire minds, nurture talents, and build the leaders of tomorrow. Every student who walks through our doors is unique, and our mission is to help them discover their potential and achieve their dreams."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div 
                  className="w-16 h-16 bg-cover bg-center rounded-full"
                  style={{ backgroundImage: 'url(https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=200)' }}
                />
                <div>
                  <div className={`font-semibold text-${theme.primaryDark}`}>Dr. Sarah Chen</div>
                  <div className="text-gray-600">Principal, Nova Academia</div>
                </div>
              </div>
            </div>
            <div 
              className="h-96 bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/8197528/pexels-photo-8197528.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${theme.primary} rounded-full mb-4 shadow-lg`}>
                  <IconComponent size={32} />
                </div>
                <div className={`text-3xl font-bold text-${theme.primary} mb-2`}>{achievement.value}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-20"
        >
          <h2 className={`text-3xl font-bold text-${theme.primaryDark} text-center mb-12`}>Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${facility.image})` }}
                />
                <div className="p-6">
                  <h3 className={`text-xl font-semibold text-${theme.primaryDark} mb-3`}>{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white rounded-3xl shadow-2xl p-12"
        >
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold text-${theme.primaryDark} mb-4`}>Why Choose Nova Academia?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just education—we provide a transformative experience that prepares students for success in life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Academic Excellence',
                description: 'Rigorous curriculum with personalized learning approaches',
                image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: Users,
                title: 'Expert Faculty',
                description: 'Highly qualified teachers with years of experience',
                image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: Compass,
                title: 'Holistic Development',
                description: 'Focus on academics, sports, arts, and character building',
                image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: Globe,
                title: 'Global Perspective',
                description: 'International programs and multicultural environment',
                image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div 
                    className="h-32 bg-cover bg-center rounded-xl mb-4"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${theme.primary}  rounded-full mb-4 shadow-lg`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className={`text-xl font-semibold text-${theme.primaryDark} mb-3`}>{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {selectedValue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedValue(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedValue.image})` }}
              />
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${theme.primary}  rounded-full mb-6 shadow-lg`}>
                  {React.createElement(selectedValue.icon, { size: 32 })}
                </div>
                <h2 className={`text-3xl font-bold text-${theme.primaryDark} mb-4`}>{selectedValue.title}</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{selectedValue.details}</p>
                <button
                  onClick={() => setSelectedValue(null)}
                  className={`bg-${theme.primary}  px-8 py-3 rounded-lg hover:opacity-90 transition-opacity`}
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

export default AboutPage;