import React, { ReactNode } from 'react';

// --- Type Definitions (Highly Recommended for TypeScript) ---

// Assuming your SVG icons are React components that can accept standard SVG props
interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  // Add any specific props your custom SVG components might have here
}

// Define the structure for each technology object
interface Tech {
  icon: React.ElementType<SvgIconProps>; // Expects a React component for the icon
  name: string;
  colorClass?: string; // Optional: if some tech icons don't need a color class
}

// Define the props for the CardContent component itself
interface CardContentProps {
  icon: React.ElementType<SvgIconProps>; // The main icon for the card content
  title: string;
  description: string;
  techs?: Tech[]; // Optional array of technologies
}

// --- CardContent Component ---

export function CardContent({ icon: IconComponent, title, description, techs }: CardContentProps) {
  return (
    <div className="relative flex flex-1 flex-col gap-3 h-full" style={{ filter: "blur(0px)", opacity: 1 }}>
      <div className="w-fit rounded-lg border border-gray-600 p-2">
        {/* Render the icon component and pass necessary Tailwind classes */}
        <IconComponent className="h-5 w-5 text-black dark:text-neutral-400" />
      </div>
      <div className="space-y-3">
        <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
          {title}
        </h3>
        <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
          {description}
        </p>
      </div>
      {techs && techs.length > 0 && ( // Ensure techs array exists and is not empty
        <div className="grid grid-cols-4 gap-2 mt-10">
          {techs.map((tech, i) => (
            <div
              key={i} // Use a more robust key if possible (e.g., tech.id or tech.name if unique)
              className="flex flex-col items-center gap-1 p-2 bg-white/60 dark:bg-black/40 rounded-lg backdrop-blur-sm border border-gray-200/70 dark:border-gray-800/30"
            >
              {/* Render tech icon component and apply its specific color class */}
              <tech.icon className={`w-5 h-5 md:w-6 md:h-6 ${tech.colorClass || ''}`} />
              <span className="text-[10px] font-medium text-center leading-tight text-black dark:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}