import Link from 'next/link'
import React from 'react'

const LogoNav = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 group-hover:scale-110 transition-transform duration-300"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/80 opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-300"></div>
      </div>
      <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
        Caio G Brayner
      </span>
    </Link>
  )
}

export default LogoNav
