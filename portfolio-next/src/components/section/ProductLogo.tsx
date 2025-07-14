"use client"

import React from "react";
import { motion } from "framer-motion";

type ProductLogoProps = {
  name: string;
  idGradient: string;
  viewBox: string;
  children: React.ReactNode;
};


const ProductLogo = ({ name, idGradient, viewBox, children }: ProductLogoProps) => {
  return (
    <motion.div
      className="group relative overflow-visible cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative rounded-[24px] p-8 h-32 flex items-center justify-center bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} className="w-full h-full transition-transform duration-300 ease-in-out" preserveAspectRatio="xMidYMid meet">
            <defs>
              {/* Common gradients for light/dark mode text */}
              <linearGradient id={`${idGradient}-gradient-light`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000000" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#333333" stopOpacity="1"></stop>
              </linearGradient>
              <linearGradient id={`${idGradient}-gradient-dark`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#F3F4F6" stopOpacity="1"></stop>
              </linearGradient>
              {/* Special gradient for the actual logo text (dynamic) */}
              {children}
            </defs>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="20" fill={`url(#${idGradient}-special-gradient)`} className="drop-shadow-sm dark:hidden">
              {name}
            </text>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="20" fill={`url(#${idGradient}-special-gradient)`} className="hidden dark:block">
              {name}
            </text>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="20" fill={`url(#${idGradient}-special-gradient)`} opacity="0.6" filter="blur(4px)" className="hidden dark:block">
              {name}
            </text>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductLogo