import React from 'react';

interface HeroSectionProps {
  children: React.ReactNode;
}

export const HeroSectionAbout: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <section className="py-8 relative overflow-visible">
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-primary/5 rounded-full blur-3xl"></div>
      <div className="relative z-10 w-full mx-auto px-4 md:px-6 overflow-visible">
        {children}
      </div>
    </section>
  );
};