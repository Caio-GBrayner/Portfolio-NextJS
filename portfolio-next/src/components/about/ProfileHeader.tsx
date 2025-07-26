// components/ProfileHeader.tsx
import React from 'react';

export const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8 text-center md:text-left">
      <div className="relative">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-2xl md:text-3xl font-bold text-white">CB</span>
        </div>
        <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-green-500 rounded-full border-4 border-background shadow-md"></div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Caio Gomes Brayner</h2>
        <div className="flex items-center justify-center md:justify-start">
          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
          <p className="text-primary font-semibold">AI Solutions Architect</p>
        </div>
        <div className="mt-2 flex items-center text-sm text-muted-foreground justify-center md:justify-start">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
          Available for new projects
        </div>
      </div>
    </div>
  );
};