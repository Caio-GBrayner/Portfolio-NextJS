// components/ProfileCard.tsx
import React, { useState } from 'react';
import { ProfileHeader } from './ProfileHeader';
import { ProfileNav } from './ProfileNav';
import { VisionStatement } from './VisionStatement';
import { StatsGrid } from './StatsGrid';

interface Stat {
  icon: string;
  value: string;
  label: string;
}

const visionStats: Stat[] = [
  { icon: 'SquareIcon', value: '25+', label: 'AI Models Deployed' },
  { icon: 'CodeIcon', value: '50+', label: 'Projects Delivered' },
  { icon: 'LineChartIcon', value: '4+', label: 'Years Experience' },
  { icon: 'ZapIcon', value: '20+', label: 'Technologies Mastered' },
];

const expertiseStats: Stat[] = [
  { icon: 'AwardIcon', value: '10+', label: 'Certifications' },
  { icon: 'GlobeIcon', value: '5+', label: 'Global Projects' },
  { icon: 'CpuIcon', value: 'Cloud', label: 'Platform Focus' },
  { icon: 'UsersIcon', value: 'Lead', label: 'Team Leadership' },
];

const innovationStats: Stat[] = [
  { icon: 'LightbulbIcon', value: '8+', label: 'Patents Filed' },
  { icon: 'SparklesIcon', value: '3+', label: 'Research Papers' },
  { icon: 'RocketIcon', value: 'Startup', label: 'Venture Backed' },
  { icon: 'FlaskConicalIcon', value: 'Labs', label: 'R&D Initiatives' },
];

export const ProfileCard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'vision' | 'expertise' | 'innovation'>('vision');

  let currentStats: Stat[];
  let currentTitle: string;
  let currentDescription: string;
  let currentTags: string[];

  switch (activeSection) {
    case 'expertise':
      currentStats = expertiseStats;
      currentTitle = 'Expertise';
      currentDescription = 'Com uma vasta experiência, trago um profundo conhecimento técnico em diversas áreas da IA e arquitetura de sistemas.';
      currentTags = ['Machine Learning', 'Deep Learning', 'Cloud Architecture', 'Data Science'];
      break;
    case 'innovation':
      currentStats = innovationStats;
      currentTitle = 'Innovation';
      currentDescription = 'Minha paixão por inovação me impulsiona a explorar novas fronteiras e desenvolver soluções disruptivas que redefinem o futuro.';
      currentTags = ['R&D', 'Prototyping', 'Emerging Tech', 'Problem Solving'];
      break;
    case 'vision':
    default:
      currentStats = visionStats;
      currentTitle = 'Vision';
      currentDescription = 'Pioneering o futuro de aplicações impulsionadas por IA, eu me especializo em transformar desafios complexos de negócios em soluções inteligentes e escaláveis que entregam impacto mensurável.';
      currentTags = ['Strategic Planning', 'AI Innovation', 'Solution Architecture'];
      break;
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg md:max-w-full mx-auto">
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-4 md:p-8 shadow-2xl">
          <ProfileHeader />
          <ProfileNav activeSection={activeSection} setActiveSection={setActiveSection} />
          <VisionStatement title={currentTitle} description={currentDescription} tags={currentTags} />
          <StatsGrid stats={currentStats} />
        </div>
      </div>
    </div>
  );
};