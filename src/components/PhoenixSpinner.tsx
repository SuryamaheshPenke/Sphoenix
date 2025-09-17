import { useEffect, useState } from 'react';
import phoenixLogo from '@/assets/phoenix-logo-blue.png';

const PhoenixSpinner = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-[9999] bg-background/90 backdrop-blur-sm flex items-center justify-center animate-fade-out">
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
  }

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