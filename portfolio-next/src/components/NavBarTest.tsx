'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // For client-side routing in Next.js
import { usePathname } from 'next/navigation';
import ThemeToggleButton from '@/context/ThemeContext';
import HamburgerButton from '@/context/HamburgerButton';

const NavbarTest = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b-4 border-border shadow-lg">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo/Brand Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/80 opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              Caio G Brayner
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-primary bg-primary/10 border border-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {/* Conditionally render the dot for the active link */}
                {pathname === link.href ? (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full" style={{ opacity: 1 }}></div>
                    {link.name}
                  </div>
                ) : (
                  link.name
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons (Theme Toggle & Contact) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <ThemeToggleButton/>
            {/* Get in Touch Button */}
            <Link href="/contact" className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-base">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Specific Elements (Theme Toggle & Menu Toggle) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle Button */}
            <ThemeToggleButton/>
            {/* Mobile Menu Toggle Button */}
            <HamburgerButton isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden border-t border-border bg-background/99 backdrop-blur-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-6 py-4 rounded-lg text-base font-semibold transition-all duration-300 ${
                pathname === link.href
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
              onClick={toggleMobileMenu} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block px-6 py-4 mt-6 text-center rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 text-base"
            onClick={toggleMobileMenu} // Close menu on link click
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTest;