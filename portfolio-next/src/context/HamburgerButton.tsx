'use client';

import React from 'react';
import { motion } from 'framer-motion';

type HamburgerButtonProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const HamburgerButton = ({ isOpen, toggleMenu }: HamburgerButtonProps) => {
  const topBarVariants = {
    open: { rotate: 45, y: 6 },
    closed: { rotate: 0, y: 0 },
  };

  const middleBarVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomBarVariants = {
    open: { rotate: -45, y: -6 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <motion.button
      className="flex flex-col items-center justify-center w-8 h-8 text-foreground backdrop-blur-md borde transition-all duration-300"
      onClick={toggleMenu}
      aria-label="Toggle mobile menu"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="block h-0.5 w-5 bg-foreground rounded-full my-0.5"
        variants={topBarVariants}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.2 }}
      ></motion.span>
      <motion.span
        className="block h-0.5 w-5 bg-foreground rounded-full my-0.5"
        variants={middleBarVariants}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.2 }}
      ></motion.span>
      <motion.span
        className="block h-0.5 w-5 bg-foreground rounded-full my-0.5"
        variants={bottomBarVariants}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.2 }}
      ></motion.span>
    </motion.button>
  );
};

export default HamburgerButton;