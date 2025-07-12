'use client';

import React from 'react'
import LogoNav from './LogoNav'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'

type NavBarProps = {
  activeItem: string;
  setActiveItem: (id: string) => void;
};

const NavBar = ({ activeItem, setActiveItem }: NavBarProps) => {
  return (
    <div className='flex items-center justify-between h-24'>
      <LogoNav/>
      <div className='hidden md:flex items-center gap-3'>
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
             >
              <div className='flex items-center gap-2'>
                {link.label}
              </div>
              
            </Link>
          )
        })}
      </div>
      <div className='hidden md:flex items-center gap-4'>
        <button className='relative w-10 h-10 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300 flex items-center justify-center'>
          teste
        </button>
        <Link href={"#"} className='px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-base'>
          Get in touch
        </Link>
      </div>
    </div>
  )
}

export default NavBar
