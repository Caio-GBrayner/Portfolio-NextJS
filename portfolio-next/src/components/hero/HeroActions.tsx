export default function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 w-full max-w-lg mx-auto">
      <a
        href="/Caio-Brayner-CV.pdf"
        download
        className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center gap-2 justify-center transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-600/90 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        {/* Ícone de download */}
        <svg className="w-4 h-4 relative z-10 group-hover:animate-bounce" /* ...props... */ />
        <span className="relative z-10">Download CV</span>
      </a>
      <a
        href="https://calendly.com/Caio/get-to-know-me"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-primary text-foreground hover:text-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2 justify-center transition-all duration-300 hover:bg-primary/5"
      >
        {/* Ícone de calendário */}
        <svg className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" /* ...props... */ />
        <span>Let's Build Together</span>
      </a>
    </div>
  );
}