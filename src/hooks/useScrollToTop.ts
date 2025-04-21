import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook, der automatisch zum Seitenanfang scrollt, wenn sich die Route ändert
 * Verhindert redundante Scrolls und verbessert die Performance
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Nur scrollen, wenn wir uns nicht auf einem Anker befinden
    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // 'auto' ist performanter als 'smooth'
      });
    }
  }, [pathname]);
};
