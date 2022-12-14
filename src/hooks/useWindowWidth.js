// IMPORTS:
import { useState, useEffect } from 'react';

// Custom Hook:
function useWindowWidth() {
  // Constants:
  const [screenWidth, setScreenWidth] = useState(0);

  // Side-effects:
  useEffect(() => {
    const getWindowWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', getWindowWidth);
    getWindowWidth();

    return () => window.removeEventListener('resize', getWindowWidth);
  }, []);

  return screenWidth;
}

export default useWindowWidth;
