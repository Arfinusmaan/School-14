import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Award, BookOpen, Star, ChevronLeft, ChevronRight, Users } from 'lucide-react';

const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    position: 'Principal & Mathematics',
    department: 'Leadership',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Leading Nova Academia with 20+ years in educational excellence. PhD in Mathematics Education from Stanford.',
    specialties: ['Educational Leadership', 'Advanced Mathematics', 'Curriculum Development'],
    email: 's.chen@novaacademia.edu',
    awards: ['Excellence in Education 2023', 'Outstanding Principal Award']
  },
  {
    id: 2,
    name: 'Prof. Michael Rodriguez',
    position: 'Head of Sciences',
    department: 'STEM',
    image: 'https://images.pexels.com/photos/8197528/pexels-photo-8197528.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Former NASA researcher bringing real-world science to the classroom. Passionate about inspiring the next generation of scientists.',
    specialties: ['Physics', 'Astronomy', 'Research Methods'],
    email: 'm.rodriguez@novaacademia.edu',
    awards: ['Teacher of the Year 2022', 'Science Excellence Award']
  },
  {
    id: 3,
    name: 'Ms. Emma Thompson',
    position: 'Creative Arts Director',
    department: 'Arts',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Professional artist and educator fostering creativity in all its forms. Graduate of Royal College of Art.',
    specialties: ['Visual Arts', 'Drama', 'Creative Writing'],
    email: 'e.thompson@novaacademia.edu',
    awards: ['Arts Educator Excellence', 'Creative Innovation Award']
  },
  {
    id: 4,
    name: 'Dr. James Park',
    position: 'Technology & Innovation',
    department: 'Technology',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Former Silicon Valley engineer teaching the future of technology. Expert in AI, robotics, and coding education.',
    specialties: ['Computer Science', 'Robotics', 'AI & Machine Learning'],
    email: 'j.park@novaacademia.edu',
    awards: ['Tech Innovation in Education', 'STEM Excellence Award']
  },
  {
    id: 5,
    name: 'Ms. Sofia Andersson',
    position: 'Languages & Culture',
    department: 'Humanities',
    image: 'https://images.pexels.com/photos/5427879/pexels-photo-5427879.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Polyglot educator speaking 7 languages. Connecting cultures through language learning and global awareness.',
    specialties: ['World Languages', 'Cultural Studies', 'International Relations'],
    email: 's.andersson@novaacademia.edu',
    awards: ['Global Education Award', 'Language Excellence Recognition']
  },
  {
    id: 6,
    name: 'Coach Marcus Williams',
    position: 'Athletics Director',
    department: 'Sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Former Olympic athlete dedicated to developing champions both on and off the field. Sports psychology specialist.',
    specialties: ['Athletic Training', 'Sports Psychology', 'Team Leadership'],
    email: 'm.williams@novaacademia.edu',
    awards: ['Coach of the Year 2023', 'Athletic Excellence Award']
  },
  {
    id: 7,
    name: 'Dr. Lisa Kumar',
    position: 'Student Counselor',
    department: 'Wellness',
    image: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Child psychologist focused on student mental health and academic success. Creating supportive learning environments.',
    specialties: ['Student Counseling', 'Mental Health', 'Academic Support'],
    email: 'l.kumar@novaacademia.edu',
    awards: ['Student Support Excellence', 'Wellness Leadership Award']
  },
  {
    id: 8,
    name: 'Mr. David Okafor',
    position: 'Music & Performing Arts',
    department: 'Arts',
    image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Professional musician and composer bringing harmony to education. Leading our award-winning music programs.',
    specialties: ['Music Composition', 'Orchestra', 'Musical Theater'],
    email: 'd.okafor@novaacademia.edu',
    awards: ['Music Education Excellence', 'Performing Arts Leadership']
  }
];

const departments = ['All', 'Leadership', 'STEM', 'Arts', 'Technology', 'Humanities', 'Sports', 'Wellness'];

const FacultyPage = ({ theme }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const filteredFaculty = selectedDepartment === 'All' 
    ? facultyMembers 
    : facultyMembers.filter(member => member.department === selectedDepartment);

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold text-${theme.text} mb-4`}>Our Faculty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate educators who inspire, challenge, and guide our students toward excellence every day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedDepartment === dept
                    ? `bg-${theme.primary} text-black shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredFaculty.map((faculty, index) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedFaculty(faculty)}
              className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
            >
              <div className="relative">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${faculty.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-black">
                  <div className={`inline-block px-3 py-1 text-xs font-semibold bg-${theme.primary} rounded-full mb-2`}>
                    {faculty.department}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold text-${theme.text} mb-2`}>{faculty.name}</h3>
                <p className={`text-${theme.accent} font-semibold mb-3`}>{faculty.position}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{faculty.bio}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {faculty.specialties.slice(0, 2).map((specialty, idx) => (
                    <span 
                      key={idx}
                      className={`px-2 py-1 text-xs bg-${theme.bg} text-${theme.text} rounded-md`}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Mail size={16} />
                    <span className="text-xs">Contact</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {faculty.awards.map((_, idx) => (
                      <Award key={idx} size={16} className={`text-${theme.primary}`} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              image: 'https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=600',
              title: 'Faculty Excellence',
              stat: '98%',
              description: 'Hold advanced degrees in their field'
            },
            {
              image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
              title: 'Student Success',
              stat: '15:1',
              description: 'Average student-to-teacher ratio'
            },
            {
              image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600',
              title: 'Global Experience',
              stat: '25+',
              description: 'Countries represented in our faculty'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-6 text-center">
                <div className={`text-3xl font-bold text-${theme.primary} mb-2`}>{item.stat}</div>
                <h3 className={`text-xl font-semibold text-${theme.text} mb-2`}>{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedFaculty(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div 
                  className="h-96 lg:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedFaculty.image})` }}
                />
                <div className="p-8">
                  <div className={`inline-block px-4 py-2 text-sm font-semibold bg-${theme.primary} text-black rounded-full mb-4`}>
                    {selectedFaculty.department}
                  </div>
                  <h2 className={`text-3xl font-bold text-${theme.text} mb-2`}>{selectedFaculty.name}</h2>
                  <p className={`text-xl text-${theme.accent} font-semibold mb-6`}>{selectedFaculty.position}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{selectedFaculty.bio}</p>
                  
                  <div className="mb-6">
                    <h3 className={`text-lg font-semibold text-${theme.text} mb-3`}>Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedFaculty.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className={`px-3 py-1 text-sm bg-${theme.bg} text-${theme.text} rounded-lg`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className={`text-lg font-semibold text-${theme.text} mb-3`}>Awards & Recognition</h3>
                    <div className="space-y-2">
                      {selectedFaculty.awards.map((award, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Award size={16} className={`text-${theme.primary}`} />
                          <span className="text-gray-600">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button
                      className={`flex items-center space-x-2 bg-${theme.primary} text-black px-6 py-3 rounded-lg hover:opacity-90 transition-opacity`}
                    >
                      <Mail size={18} />
                      <span>Contact</span>
                    </button>
                    <button
                      onClick={() => setSelectedFaculty(null)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FacultyPage;