// components/VisionStatement.tsx
import React from 'react';

interface VisionStatementProps {
  title: string;
  description: string;
  tags: string[];
}

export const VisionStatement: React.FC<VisionStatementProps> = ({ title, description, tags }) => {
  return (
    <div className="mb-8 bg-gradient-to-br from-muted/30 to-card/50 rounded-xl p-4 md:p-6 border border-border/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-foreground/90 leading-relaxed">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};