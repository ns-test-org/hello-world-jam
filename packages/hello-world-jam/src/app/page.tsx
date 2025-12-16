export default function Landing() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-orange-500 overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-[wave1_8s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/30 to-transparent" />
        </div>
        <div className="absolute inset-0 animate-[wave2_10s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
        </div>
        <div className="absolute inset-0 animate-[wave3_12s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-transparent" />
        </div>
      </div>
      
      <div className="relative text-center z-10">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Hello World
        </h1>
        <p className="text-xl text-gray-600">
          Welcome to your new app!
        </p>
      </div>
    </div>
  );
}










