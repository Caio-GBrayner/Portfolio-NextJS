// components/StatCard.tsx
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode | null;
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 rounded-xl p-4 md:p-5 text-center hover:shadow-lg hover:bg-gradient-to-br hover:from-primary/20 hover:to-blue-500/20 transition-all duration-300">
      <div className="flex items-center justify-center mb-3 text-primary">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold mb-2">
        <span className="text-foreground">{value}</span>
      </div>
      <div className="text-sm font-medium leading-tight text-muted-foreground">
        {label}
      </div>
    </div>
  );
};