import React from 'react'
import LogoNav from './LogoNav'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between h-24'>
      <LogoNav/>
      <div className='hidden md:flex items-center gap-3'>
        {navLinks.map((link) => {
          return (
            <Link className='relative px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-secondary/50'
             key={link.id} href={link.url}
             >
              {link.label}
            </Link>
          )
        })}
      </div>
      <div className='hidden md:flex items-center gap-4'>
        <button className='bg-background relative w-10 h-10 rounded-full'>
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
