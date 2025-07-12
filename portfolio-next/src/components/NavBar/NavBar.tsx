'use client';

import React, { useEffect, useRef, useState } from 'react'
import LogoNav from './LogoNav'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import ThemeToggleButton from '@/context/ThemeContext';
import { motion } from 'framer-motion';

type NavBarProps = {
  activeItem: string;
  setActiveItem: (id: string) => void;
};

const NavBar = ({ activeItem, setActiveItem }: NavBarProps) => {
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [indicatorStyles, setIndicatorStyles] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeLinkElement = linkRefs.current[activeItem];
    if (activeLinkElement) {
      setIndicatorStyles({
        left: activeLinkElement.offsetLeft,
        width: activeLinkElement.offsetWidth,
      });
    }
  }, [activeItem]);

  return (
    <div className='flex items-center justify-between h-24'>
      <LogoNav/>
      <div className='hidden md:flex items-center gap-3'>
          {activeItem && (
            <motion.div
              className="absolute bottom-1 h-1 bg-primary rounded-full z-0"
              layoutId="navbar-indicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              initial={false}
              style={{ left: indicatorStyles.left, width: indicatorStyles.width }}
            />
          )}
        {navLinks.map((link) => {
          const linkClasses =`
            relative px-8 py-4 text-base font-semibold rounded-xl
            transition-all duration-300
            ${activeItem === link.id
              ? 'text-primary bg-primary/10 border border-primary/20' 
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
            }
          `;
          return (
            <Link className={linkClasses}
             key={link.id} href={link.url}
             onClick={() => setActiveItem(link.id)}
             ref={(el) => { linkRefs.current[link.id] = el; }}
             >
              <div className='flex items-center gap-2'>
                {link.label}
              </div>
              
            </Link>
          )
        })}
      </div>
      <div className='hidden md:flex items-center gap-4'>
        <ThemeToggleButton/>
        <Link href={"#"} className='px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-base'>
          Get in touch
        </Link>
      </div>
    </div>
  )
}

export default NavBar
