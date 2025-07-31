import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Users, CheckCircle, Clock, Mail } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Application',
    icon: FileText,
    description: 'Submit your online application with required documents',
    timeline: 'September - January',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    title: 'Assessment',
    icon: Clock,
    description: 'Complete entrance examination and skill assessments',
    timeline: 'February',
    image: 'https://images.pexels.com/photos/5427879/pexels-photo-5427879.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    title: 'Interview',
    icon: Users,
    description: 'Personal interview with our admissions committee',
    timeline: 'March',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    title: 'Decision',
    icon: CheckCircle,
    description: 'Receive admission decision and enrollment package',
    timeline: 'April',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    title: 'Enrollment',
    icon: Calendar,
    description: 'Complete enrollment and prepare for your journey',
    timeline: 'May - August',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const AdmissionsPage = ({ theme }) => {
  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold text-${theme.text} mb-4`}>Join Nova Academia</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Begin your journey toward excellence. Our admissions process is designed to identify and nurture exceptional talent.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden lg:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}
                >
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 lg:mb-0">
                      <div className={`flex items-center ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-center mb-4`}>
                        <div className={`w-16 h-16 bg-${theme.primary}  rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                          <IconComponent size={32} />
                        </div>
                        <div>
                          <h3 className={`text-2xl font-bold text-${theme.text}`}>{step.title}</h3>
                          <p className={`text-${theme.accent} font-semibold`}>{step.timeline}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-8 h-8 bg-${theme.primary} rounded-full border-4 border-white shadow-lg`} />
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`overflow-hidden rounded-2xl shadow-xl ${isEven ? 'lg:ml-8' : 'lg:mr-8'}`}
                    >
                      <div 
                        className="h-64 bg-cover bg-center"
                        style={{ backgroundImage: `url(${step.image})` }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 bg-white rounded-3xl shadow-2xl p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold text-${theme.text} mb-6`}>Ready to Apply?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Take the first step toward your future. Our admissions team is here to guide you through every stage of the process.
              </p>
              <div className="space-y-4">
                {[
                  'No application fee required',
                  'Rolling admissions available',
                  'Financial aid opportunities',
                  'Merit-based scholarships'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className={`text-${theme.primary}`} size={20} />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full border-2 border-${theme.primary} bg-${theme.primary}  py-4 px-8 rounded-xl text-lg font-semibold shadow-lg`}
              >
                Start Application
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full border-2 border-${theme.primary} text-${theme.primary} py-4 px-8 rounded-xl text-lg font-semibold`}
              >
                Schedule Campus Tour
              </motion.button>
              <div className={`flex items-center justify-center space-x-2 text-${theme.text}`}>
                <Mail size={20} />
                <span>admissions@novaacademia.edu</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400',
              title: 'Diverse Community',
              description: 'Students from 50+ countries creating a rich cultural environment'
            },
            {
              image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400',
              title: 'Academic Excellence',
              description: '96% university acceptance rate with top-tier institution placements'
            },
            {
              image: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400',
              title: 'Holistic Development',
              description: 'Beyond academics - arts, sports, and leadership opportunities'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-6">
                <h3 className={`text-xl font-semibold text-${theme.text} mb-3`}>{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionsPage;