import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calculator, Palette, Globe, Microscope, Music, Code, Trophy } from 'lucide-react';

const programs = [
  {
    id: 'stem',
    title: 'STEM',
    icon: Microscope,
    color: 'blue',
    description: 'Science, Technology, Engineering & Mathematics',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science'],
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { students: '300+', labs: '12', projects: '50+' }
  },
  {
    id: 'arts',
    title: 'Creative Arts',
    icon: Palette,
    color: 'pink',
    description: 'Visual Arts, Performing Arts & Design',
    subjects: ['Fine Arts', 'Drama', 'Music', 'Digital Design', 'Photography'],
    image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { students: '250+', studios: '8', exhibitions: '20+' }
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: Globe,
    color: 'green',
    description: 'Literature & World Languages',
    subjects: ['English Literature', 'Spanish', 'French', 'Mandarin', 'Creative Writing'],
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { students: '400+', languages: '8', exchange: '15' }
  },
  {
    id: 'business',
    title: 'Business & Economics',
    icon: Calculator,
    color: 'orange',
    description: 'Entrepreneurship & Financial Literacy',
    subjects: ['Economics', 'Business Studies', 'Accounting', 'Marketing', 'Ethics'],
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { students: '200+', partnerships: '25', startups: '12' }
  },
  {
    id: 'technology',
    title: 'Technology',
    icon: Code,
    color: 'purple',
    description: 'Programming & Digital Innovation',
    subjects: ['Web Development', 'Mobile Apps', 'AI/ML', 'Robotics', 'Cybersecurity'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { students: '180+', projects: '40+', certifications: '95%' }
  },
  {
    id: 'sports',
    title: 'Athletics',
    icon: Trophy,
    color: 'red',
    description: 'Physical Education & Competitive Sports',
    subjects: ['Basketball', 'Soccer', 'Swimming', 'Track & Field', 'Yoga'],
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: { students: '350+', teams: '15', championships: '8' }
  }
];

const AcademicsPage = ({ theme }) => {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-5xl font-bold text-${theme.text} mb-4`}>Academic Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive curriculum designed to nurture well-rounded, future-ready students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className={`text-2xl font-semibold text-${theme.text} mb-6`}>Programs</h3>
            <div className="space-y-3">
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <motion.button
                    key={program.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedProgram(program)}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      selectedProgram.id === program.id
                        ? `bg-${theme.primary}  shadow-lg border-2 border-${theme.primary}`
                        : ` hover:bg-${theme.bg} text-gray-700 border-2 border-transparent`
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent 
                        size={24} 
                        className={selectedProgram.id === program.id ? 'text-black' : `text-${theme.primary}`}
                      />
                      <div>
                        <div className="font-semibold">{program.title}</div>
                        <div className={`text-sm ${
                          selectedProgram.id === program.id ? 'text-black opacity-90' : 'text-gray-500'
                        }`}>
                          {program.description}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProgram.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${selectedProgram.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                  <div className="absolute bottom-6 left-6 text-black">
                    <h2 className="text-3xl font-bold mb-2">{selectedProgram.title}</h2>
                    <p className="text-lg opacity-90">{selectedProgram.description}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {Object.entries(selectedProgram.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-2xl font-bold text-${theme.primary} mb-1`}>{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <h3 className={`text-xl font-semibold text-${theme.text} mb-4`}>Core Subjects</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProgram.subjects.map((subject, index) => (
                      <motion.div
                        key={subject}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-3 bg-${theme.bg} rounded-lg text-${theme.text} font-medium text-center`}
                      >
                        {subject}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Our Curriculum Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-12"
        >
          <h2 className={`text-4xl font-bold text-${theme.text} mb-4`}>Our Curriculum</h2>
          <p className="text-lg text-gray-600">
            Explore our comprehensive curriculum designed to nurture well-rounded, future-ready students.
          </p>
        </motion.div>

        {/* Subjects Grid Section */}
        <div className="mb-12">
          <h3 className={`text-2xl font-semibold text-${theme.text} mb-4`}>Subjects Offered</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {programs.flatMap(program => 
              program.subjects.map(subject => (
                <motion.div
                  key={subject}
                  className={`p-4 bg-${theme.bg} rounded-lg text-${theme.text} font-medium text-center transition-transform transform hover:scale-105 shadow-lg`}
                >
                  <div className="flex items-center justify-center mb-2">
                    <program.icon size={24} className={`text-${theme.primary}`} />
                  </div>
                  <div>{subject}</div>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Teaching Methodology Cards Section */}
        <h3 className={`text-2xl font-semibold text-${theme.text} mb-4`}>Teaching Methodology</h3>
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
          {[
            {
              title: 'Interactive Learning',
              description: 'Engaging students through interactive sessions and hands-on activities.',
              image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              title: 'Project-Based Learning',
              description: 'Encouraging students to learn through real-world projects and collaboration.',
              image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400'
            },
            {
              title: 'Personalized Education',
              description: 'Tailoring learning experiences to meet individual student needs.',
              image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400'
            }
          ].map((methodology, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img src={methodology.image} alt={methodology.title} className="h-32 w-full object-cover" />
              <div className="p-4 text-center">
                <div className={`text-xl font-bold text-${theme.primary} mb-1`}>{methodology.title}</div>
                <div className="text-sm text-gray-600">{methodology.description}</div>
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
              title: 'Expert Teachers',
              value: '98%',
              label: 'PhD Qualified'
            },
            {
              image: 'https://images.pexels.com/photos/8197528/pexels-photo-8197528.jpeg?auto=compress&cs=tinysrgb&w=400',
              title: 'Small Classes',
              value: '15:1',
              label: 'Student-Teacher Ratio'
            },
            {
              image: 'https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=400',
              title: 'Modern Facilities',
              value: '100%',
              label: 'Tech-Enabled Classrooms'
            },
            {
              image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
              title: 'Success Rate',
              value: '96%',
              label: 'University Acceptance'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div 
                className="h-32 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-4 text-center">
                <div className={`text-2xl font-bold text-${theme.primary} mb-1`}>{item.value}</div>
                <div className="text-sm text-gray-600 mb-2">{item.label}</div>
                <div className="font-medium text-gray-800">{item.title}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicsPage;
