import React from 'react'
import NavBar from './NavBar'

const ResponsiveNavBar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b-4 border-border shadow-lg'>
      <div className='max-w-8xl mx-auto px-6  sm:px-8 lg:px-12'>
        <NavBar/>
      </div>
    </nav>
  )
}

export default ResponsiveNavBar
