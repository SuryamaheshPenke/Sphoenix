import { useEffect, useState } from 'react';
import phoenixLogo from '@/assets/phoenix-logo-transparent.png';

const PhoenixSpinner = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-[9999] bg-transparent flex items-center justify-center animate-fade-out">
        <div className="relative">
          <div className="animate-spin">
            <img 
              src={phoenixLogo} 
              alt="Sphoenix Loading..." 
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-transparent flex items-center justify-center">
      <div className="relative">
        <div className="animate-spin">
          <img 
            src={phoenixLogo} 
            alt="Sphoenix Loading..." 
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoenixSpinner;