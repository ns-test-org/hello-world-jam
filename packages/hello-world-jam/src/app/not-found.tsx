import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="font-sans grid min-h-screen place-items-center p-8 bg-gradient-to-br from-orange-900 via-black to-orange-950">
      <div className="text-center">
        <h1 className="font-mono text-6xl font-bold text-orange-400">404</h1>
        <p className="mt-4 text-lg text-orange-200">Oops! This page got lost in the aurora</p>
        <Link 
          href="/" 
          className="mt-8 inline-block rounded-full border-2 border-orange-500 transition-colors flex items-center justify-center bg-orange-600 text-white gap-2 hover:bg-orange-700 hover:border-orange-400 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Return to Aurora
        </Link>
      </div>
    </div>
  );
}





