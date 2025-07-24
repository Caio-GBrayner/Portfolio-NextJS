export default function BackgroundDecor() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-auto pattern-image">
      </div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl" style={{ transform: "translateY(-34px)" }} />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-primary/10 rounded-full blur-3xl" style={{ transform: "translateY(-68px)" }} />
    </>
  );
}