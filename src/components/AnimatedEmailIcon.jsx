import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedEmailIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-16 h-16 text-blue-500 mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.rect
        x="2" y="4" width="20" height="16" rx="2"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0.8 : 1 }}
      />
      <motion.polyline
        points="22,6 12,13 2,6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.svg>
  );
};

export default AnimatedEmailIcon;
