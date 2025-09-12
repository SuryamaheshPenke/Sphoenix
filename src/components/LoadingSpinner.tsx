import { useEffect, useState } from 'react';

const LoadingSpinner = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow fade out animation to complete
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center animate-fade-out">
        <div className="relative">
          <div className="phoenix-flying">
            <img 
              src="/src/assets/phoenix-icon.png" 
              alt="Loading..." 
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="mt-4 text-center">
            <div className="loading-dots">
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
        <div className="phoenix-flying">
          <img 
            src="/src/assets/phoenix-icon.png" 
            alt="Loading..." 
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="mt-4 text-center">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;