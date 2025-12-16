export default function Landing() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blue-500 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px] animate-[grid_20s_linear_infinite]" />
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




