'use client'
import Link from 'next/link'; // Assuming you are using Next.js Link
import React, { useState, ReactNode } from 'react';

// Define types for your SVG icons if they are React components
interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  // Add any specific props your SVG components might have
}

// Define the shape of a technology object if you have more details
interface Tech {
  icon: React.ElementType<SvgIconProps>; // Expects a React component for the icon
  name: string;
  colorClass: string;
}

interface CardProps {
  title: string;
  description: string;
  icon: React.ElementType<SvgIconProps>; // Expects a React component for the icon
  href?: string; // Optional link
  techs?: Tech[]; // Optional array of technologies for the Modern Tech Stack card
  glow?: boolean; // Controls if the base glow effect is always active
  overlayContent?: ReactNode; // New prop for content shown on hover
  glowingEffectProps?: { // Optional props to customize the glowing effect's starting point
    start: string;
    // You can add more glow-specific properties here if needed
  };
}

// Helper component for the main card content to avoid repetition
const CardContent: React.FC<{
  icon: React.ElementType<SvgIconProps>;
  title: string;
  description: string;
  techs?: Tech[];
}> = ({ icon: IconComponent, title, description, techs }) => (
  <div className="relative flex flex-1 flex-col justify-between gap-3 h-full group cursor-pointer">
    <div className="w-fit rounded-lg border border-gray-600 p-2">
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
    {techs && techs.length > 0 && (
      <div className="grid grid-cols-4 gap-2 mt-10">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-1 p-2 bg-white/60 dark:bg-black/40 rounded-lg backdrop-blur-sm border border-gray-200/70 dark:border-gray-800/30"
          >
            <tech.icon className={`w-5 h-5 md:w-6 md:h-6 ${tech.colorClass}`} />
            <span className="text-[10px] font-medium text-center leading-tight text-black dark:text-white">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    )}
  </div>
);

export function Card({
  title,
  description,
  icon,
  href,
  techs,
  glow = false, // Base glow state
  overlayContent, // Content to show on hover
  glowingEffectProps,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Combine `glow` prop with `isHovered` for glow effect control
  const activeGlow = glow || isHovered;

  const glowingStyle = {
    '--blur': '0px',
    '--spread': '80',
    '--start': glowingEffectProps?.start || '0', // Dynamic start for the glow
    '--active': activeGlow ? '1' : '0', // Control glow opacity based on activeGlow
    '--glowingeffect-border-width': '3px',
    '--repeating-conic-gradient-times': '5',
    '--gradient': `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                  radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                  radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
                  radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                  repeating-conic-gradient(
                    from 236.84deg at 50% 50%,
                    #dd7bbb 0%,
                    #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                    #5a922c calc(50% / var(--repeating-conic-gradient-times)),
                    #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                    #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                  );`,
  } as React.CSSProperties; // Assert as React.CSSProperties for custom CSS variables

  return (
    <div
      className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity`}
        style={glowingStyle} // Apply the dynamic glowingStyle here
      >
        <div className="glow rounded-[inherit] after:content-[''] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))] after:[border:var(--glowingeffect-border-width)_solid_transparent] after:[background:var(--gradient)] after:[background-attachment:fixed] after:opacity-[var(--active)] after:transition-opacity after:duration-300 after:[mask-clip:padding-box,border-box] after:[mask-composite:intersect] after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]" />
      </div>

      <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-white/90 dark:bg-black/80 backdrop-blur-sm border border-gray-300/80 dark:border-gray-800/50 shadow-lg dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
        {/* Main Card Content (always visible) */}
        {href ? (
          <Link href={href} className="block h-full">
            <CardContent icon={icon} title={title} description={description} techs={techs} />
          </Link>
        ) : (
          <div className="block h-full">
            <CardContent icon={icon} title={title} description={description} techs={techs} />
          </div>
        )}

        {/* Overlay Card - Appears on hover */}
        {overlayContent && (
          <div
            className={`
              absolute inset-0 rounded-xl p-6 md:p-6
              flex flex-col justify-center items-center text-center
              bg-white/5 dark:bg-black/5 backdrop-blur-sm
              border border-gray-300/80 dark:border-gray-800/50
              shadow-lg dark:shadow-[0px_0px_27px_0px_#2D2D2D]
              transition-opacity duration-300 ease-in-out
              ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
            `}
          >
            {overlayContent}
          </div>
        )}
      </div>
    </div>
  );
}