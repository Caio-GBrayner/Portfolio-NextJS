import React from 'react';
import { motion } from 'framer-motion';

interface TechStackIconProps {
  icon: React.ReactNode;
  name: string;
}

const TechStackIcon = ({ icon, name }: TechStackIconProps) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-1 p-2 bg-white/60 dark:bg-black/40 rounded-lg backdrop-blur-sm border border-gray-200/70 dark:border-gray-800/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      {icon}
      <span className="text-[10px] font-medium text-center leading-tight text-black dark:text-white">
        {name}
      </span>
    </motion.div>
  );
};

export default TechStackIcon;