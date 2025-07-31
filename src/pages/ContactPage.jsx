import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';

const ContactPage = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold text-${theme.text} mb-4`}>Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with Nova Academia. We're here to answer your questions and help you on your educational journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className={`text-3xl font-bold text-${theme.text} mb-6`}>Get in Touch</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Visit Us',
                    content: '123 Education Boulevard\nNova City, NC 12345',
                    image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600'
                  },
                  {
                    icon: Phone,
                    title: 'Call Us',
                    content: '+1 (555) 123-4567\nAdmissions: +1 (555) 123-4568',
                    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600'
                  },
                  {
                    icon: Mail,
                    title: 'Email Us',
                    content: 'info@novaacademia.edu\nadmissions@novaacademia.edu',
                    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600'
                  },
                  {
                    icon: Clock,
                    title: 'Office Hours',
                    content: 'Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 2:00 PM',
                    image: 'https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=600'
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div 
                        className="w-16 h-16 bg-cover bg-center rounded-xl flex-shrink-0"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <IconComponent className={`text-${theme.primary} flex-shrink-0`} size={20} />
                          <h3 className={`font-semibold text-${theme.text}`}>{item.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm whitespace-pre-line">{item.content}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
              />
              <div className="p-6">
                <h3 className={`text-xl font-semibold text-${theme.text} mb-3`}>Campus Location</h3>
                <p className="text-gray-600">
                  Located in the heart of Nova City, our beautiful campus spans 50 acres of modern facilities and green spaces, providing an ideal environment for learning and growth.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className={`text-3xl font-bold text-${theme.text} mb-6`}>Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-semibold text-${theme.text} mb-2`}>
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${theme.primary} focus:border-transparent transition-all`}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`block text-sm font-semibold text-${theme.text} mb-2`}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${theme.primary} focus:border-transparent transition-all`}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold text-${theme.text} mb-2`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${theme.primary} focus:border-transparent transition-all`}
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold text-${theme.text} mb-2`}>
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${theme.primary} focus:border-transparent transition-all resize-none`}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-${theme.primary} text-black py-4 px-8 rounded-lg font-semibold shadow-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2`}
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
              title: 'Admissions Office',
              description: 'Questions about enrollment, applications, and campus tours',
              contact: 'admissions@novaacademia.edu'
            },
            {
              image: 'https://images.pexels.com/photos/8197528/pexels-photo-8197528.jpeg?auto=compress&cs=tinysrgb&w=600',
              title: 'Academic Support',
              description: 'Curriculum questions, academic programs, and student services',
              contact: 'academics@novaacademia.edu'
            },
            {
              image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600',
              title: 'Student Life',
              description: 'Clubs, activities, events, and campus community information',
              contact: 'studentlife@novaacademia.edu'
            }
          ].map((department, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${department.image})` }}
              />
              <div className="p-6">
                <h3 className={`text-xl font-semibold text-${theme.text} mb-3`}>{department.title}</h3>
                <p className="text-gray-600 mb-4">{department.description}</p>
                <div className={`text-${theme.primary} font-medium text-sm`}>{department.contact}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;