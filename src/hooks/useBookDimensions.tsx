import { useState, useEffect } from 'react';

export const useBookDimensions = () => {
  const [isMobile, setIsMobile] = useState(false);

  const updateDimensions = () => {
    const width = window.innerWidth;
    if (width <= 768) { // Mobile
      setIsMobile(true);
    } else if (width <= 1024) { // Tablet
      setIsMobile(false);
    } else { // Desktop
      setIsMobile(false);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      // clean up
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return { isMobile };
};

export default useBookDimensions;