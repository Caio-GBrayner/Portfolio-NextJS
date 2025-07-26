// components/StatsGrid.tsx
import React from 'react';
import { StatCard } from '@/components/about/StatCard';
import { ChipIcon, CodeDivIcon, LineChartIcon, ZapIconAbout } from '@/components/icons/icons';

interface Stat {
  icon: string; 
  value: string;
  label: string;
}

interface StatsGridProps {
  stats: Stat[];
}

const iconMap: { [key: string]: React.ElementType } = {
  ChipIcon: ChipIcon,
  CodeDivIcon: CodeDivIcon,
  LineChartIcon: LineChartIcon,
  ZapIconAbout: ZapIconAbout,
};

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const IconComponent = iconMap[stat.icon];
        return (
          <StatCard
            key={index}
            icon={IconComponent ? <IconComponent /> : null}
            value={stat.value}
            label={stat.label}
          />
        );
      })}
    </div>
  );
};