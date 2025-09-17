import { useEffect, useState } from 'react';
import phoenixLogo from '@/assets/phoenix-logo-blue.png';

const PhoenixSpinner = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-background/90 backdrop-blur-sm flex items-center justify-center">
      <div className="relative">
        <div className="animate-spin duration-1000">
          <img 
            src={phoenixLogo} 
            alt="Sphoenix Loading..." 
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoenixSpinner;