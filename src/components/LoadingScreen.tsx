import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useImagePreloader from '../hooks/useImagePreloader';
import { getImagesByPath } from '../lib/imageRegistry';
import { useLocation } from 'react-router-dom';

interface LoadingScreenProps {
  minDisplayTime?: number;
}

/**
 * Einfache Ladeanimation passend zum Famfordogs-Design
 */
const LoadingScreen = ({ minDisplayTime = 2000 }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  
  const imagesToPreload = getImagesByPath(location.pathname);
  const { imagesPreloaded } = useImagePreloader(imagesToPreload);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, minDisplayTime);
    };

    if (document.readyState === 'complete' && imagesPreloaded) {
      handleLoad();
    } else {
      const loadListener = () => {
        if (imagesPreloaded) {
          handleLoad();
          window.removeEventListener('load', loadListener);
        }
      };
      
      window.addEventListener('load', loadListener);
      return () => window.removeEventListener('load', loadListener);
    }
  }, [minDisplayTime, imagesPreloaded]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -8, 0]
              }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 0.5 },
                y: { duration: 2, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              <img 
                src="/images/logo.png" 
                alt="FAM for Dogs Logo" 
                className="w-40 h-40 object-contain" 
              />
            </motion.div>
            
            {/* Diskreter Ladeindikator */}
            <motion.div 
              className="mt-8 flex space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
