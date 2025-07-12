import Link from 'next/link'
import React from 'react'

const LogoNav = () => {
  return (
    <Link className='flex items-center gap-3 group' href='/'>
        <div className='relative'>

        </div>
        <span className='text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300'>
            Caio Brayner
        </span>
    </Link>
  )
}

export default LogoNav
