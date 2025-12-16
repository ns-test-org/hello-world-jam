export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora background layers */}
      <div className="absolute inset-0 bg-aurora-layer-1"></div>
      <div className="absolute inset-0 bg-aurora-layer-2"></div>
      <div className="absolute inset-0 bg-aurora-layer-3"></div>
      <div className="absolute inset-0 bg-particles"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-bold text-white mb-6 animate-pulse">
          Hello Universe!
        </h1>
        <p className="text-3xl text-white/90 mb-4">
          Exploring the cosmos of web development
        </p>
        <p className="text-xl text-white/80">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </div>
  );
}



