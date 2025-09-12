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
      <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center animate-fade-out">
        <div className="relative">
          <div className="phoenix-soar">
            <img 
              src={phoenixLogo} 
              alt="Sphoenix Loading..." 
              className="w-20 h-20 object-contain"
            />
          </div>
          <div className="mt-6 text-center">
            <div className="phoenix-flame-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
      <div className="relative">
        <div className="phoenix-soar">
          <img 
            src={phoenixLogo} 
            alt="Sphoenix Loading..." 
            className="w-20 h-20 object-contain"
          />
        </div>
        <div className="mt-6 text-center">
          <div className="phoenix-flame-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoenixSpinner;