'use client'; 

import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constant/constant'
import MobileNavBar from './MobileNavBar'

export default function ResponsiveNavBar() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect (() => {
    const foundItem = navLinks.find(link => link.url === pathname);
    if (foundItem) {
      setActiveItem(foundItem.id);
    }else {
      setActiveItem('1');
    }
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.removeEventListener('resize', handleResize);

    return () => window.addEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b-4 border-border shadow-lg'>
      <div className='max-w-8xl mx-auto px-6  sm:px-8 lg:px-12'>
        {isMobile ? (
          <MobileNavBar
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        )
        : (
          <NavBar
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        )}
      </div>
    </nav>
  );
}