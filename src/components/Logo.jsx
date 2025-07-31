import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowBigLeftIcon } from 'lucide-react';

const Logo = ({ onClick, theme }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className={`w-12 h-12 bg-${theme.primary}  rounded-xl flex items-center justify-center shadow-lg`}
        >
          <ArrowBigLeftIcon size={24} />
        </motion.div>
        <div>
          <h1 className={`text-2xl font-bold text-${theme.primaryDark}`}>Nova</h1>
          <p className="text-sm text-gray-500 -mt-1">Academia</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Logo;