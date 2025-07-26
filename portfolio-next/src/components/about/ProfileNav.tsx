// components/ProfileNav.tsx
import React from 'react';

interface ProfileNavProps {
  activeSection: 'vision' | 'expertise' | 'innovation';
  setActiveSection: (section: 'vision' | 'expertise' | 'innovation') => void;
}

export const ProfileNav: React.FC<ProfileNavProps> = ({ activeSection, setActiveSection }) => {
  const getButtonClass = (section: string) =>
    `flex-1 px-3 py-2 md:px-4 md:py-3 rounded-lg text-sm font-medium transition-all duration-200 ` +
    (activeSection === section
      ? 'bg-primary text-primary-foreground shadow-md'
      : 'text-muted-foreground hover:text-foreground');

  return (
    <div className="flex flex-wrap space-x-1 bg-muted/50 rounded-xl p-1 mb-6">
      <button
        className={getButtonClass('vision')}
        onClick={() => setActiveSection('vision')}
      >
        Vision
      </button>
      <button
        className={getButtonClass('expertise')}
        onClick={() => setActiveSection('expertise')}
      >
        Expertise
      </button>
      <button
        className={getButtonClass('innovation')}
        onClick={() => setActiveSection('innovation')}
      >
        Innovation
      </button>
    </div>
  );
};