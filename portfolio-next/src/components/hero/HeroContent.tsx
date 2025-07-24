import HeroActions from "./HeroActions";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex-1 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 h-auto min-h-[1.2em] flex items-center justify-center text-center w-full">
        <div className="bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent leading-tight">
          <span className="inline-flex items-baseline min-h-[1.2em]">
            <span className="text-left">Hi, I am Caio</span>
            {/* <span className="inline-block w-0.5 h-[0.8em] bg-primary ml-1"></span> */}
          </span>
        </div>
      </div>
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 flex items-center justify-center text-center px-4">
        <span className="font-bold text-primary dark:text-[#E0D7FF] dark:drop-shadow-[0_1px_8px_rgba(167,139,250,0.25)]">
          Solutions Architect &amp; AI Engineer
        </span>
      </div>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed px-4">
        Building innovative AI solutions and scalable architectures that drive business transformation.
      </p>
      <HeroActions />
      {/* Scroll indicator */}
      <div className="mt-8 flex flex-col items-center text-muted-foreground opacity-0">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center overflow-visible">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}