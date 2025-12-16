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
        <h1 className="text-6xl font-bold text-white mb-4">
          Hello World
        </h1>
        <p className="text-2xl text-white/90">
          Welcome to your Jam site!
        </p>
      </div>
    </div>
  );
}


