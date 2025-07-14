'use client'
import React from "react";

type ApproachCardPropos = {
    phase : string;
    title : string;
    description: string;
}

const ApproachCard = ({ phase, title, description }: ApproachCardPropos) => {
  return (
    <div className="border border-border group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl bg-gradient-to-br from-card to-card/60 dark:from-card dark:to-card/80 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 perspective-1000">
      {/* Corner SVGs */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -top-3 -left-3 text-foreground opacity-30">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -bottom-3 -left-3 text-foreground opacity-30">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -top-3 -right-3 text-foreground opacity-30">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute h-10 w-10 -bottom-3 -right-3 text-foreground opacity-30">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path>
      </svg>

      <div className="relative z-20 px-10">
        {/* Phase Button */}
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          <div>
            <button className="relative inline-flex overflow-hidden rounded-full p-[1px]" tabIndex={0}>
              <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,#3b82f6_50%,hsl(var(--primary))_100%)] animate-spin-slow"></span> {/* Added animate-spin-slow */}
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-card/90 backdrop-blur-sm px-5 py-2 text-black dark:text-foreground font-bold text-2xl border border-border/50 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10 group-hover:text-white">
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                {phase}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </button>
          </div>
        </div>

        {/* Title and Description */}
        <h2 className="text-foreground text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-foreground group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:text-foreground text-center text-muted-foreground group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ApproachCard