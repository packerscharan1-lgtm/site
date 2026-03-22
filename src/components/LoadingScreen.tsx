import { useEffect, useState } from 'react';
import { Truck, Package, Box } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center px-4">
      {/* Logo Container */}
      <div className="relative mb-8">
        {/* Animated rings */}
        <div className="absolute inset-0 -m-8">
          <div 
            className="absolute inset-0 border-2 border-secondary/30 animate-ping"
            style={{ animationDuration: '2s' }}
          />
        </div>
        
        {/* Logo */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-white p-4 shadow-2xl">
          <img 
            src="/images/logo.jpg" 
            alt="Charan Packers & Movers" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Floating icons */}
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 animate-fade-in delay-200">
          <Box className="w-6 h-6 sm:w-8 sm:h-8 text-secondary/60" />
        </div>
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 animate-fade-in delay-300">
          <Package className="w-6 h-6 sm:w-8 sm:h-8 text-secondary/60" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 animate-fade-in delay-400">
          <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-secondary/60" />
        </div>
      </div>

      {/* Company Name */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white text-center mb-2 animate-fade-in">
        Charan Packers
        <span className="text-secondary block">& Movers</span>
      </h1>
      
      <p className="text-white/60 text-sm sm:text-base font-medium animate-fade-in delay-100">
        Moving Made Simple
      </p>

      {/* Progress Bar */}
      <div className="mt-10 w-64 sm:w-80 animate-fade-in delay-200">
        <div className="h-1.5 bg-white/20 overflow-hidden">
          <div 
            className="h-full bg-secondary transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-white/50 font-medium">
          <span>Loading</span>
          <span>{progress}%</span>
        </div>
      </div>

      {/* Service Tags */}
      <div className="mt-8 flex gap-4 sm:gap-6 animate-fade-in delay-300">
        {['Pack', 'Move', 'Deliver'].map((tag, index) => (
          <span 
            key={tag}
            className="text-xs sm:text-sm text-white/40 font-medium uppercase tracking-wider"
            style={{ animationDelay: `${400 + index * 100}ms` }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
