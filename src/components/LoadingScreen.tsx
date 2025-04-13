import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useImagePreloader from '../hooks/useImagePreloader';
import { getImagesByPath } from '../lib/imageRegistry';
import { useLocation } from 'react-router-dom';

interface LoadingScreenProps {
  minDisplayTime?: number;
}

/**
 * Premium Ladeanimation im Stil von EA Sports FC
 */
const LoadingScreen = ({ minDisplayTime = 3000 }: LoadingScreenProps) => {
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
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1] // Besonders glatte Easingkurve
          }}
        >
          {/* Hintergrund-Effekte */}
          <motion.div 
            className="absolute inset-0 bg-primary overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            {/* Subtile Lichtstrahlen im Hintergrund */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0.1] }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="absolute top-1/2 left-1/2 w-[120%] h-40 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-white/20 to-transparent rotate-45"></div>
              <div className="absolute top-1/3 left-1/3 w-[80%] h-60 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-white/10 to-transparent -rotate-30"></div>
            </motion.div>
          </motion.div>

          {/* Hauptcontainer für Logo und Ladebalken */}
          <div className="flex flex-col items-center justify-center relative z-10">
            {/* Logo mit Effekten */}
            <motion.div
              className="relative mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -5, 0]
              }}
              transition={{
                opacity: { duration: 0.6 },
                scale: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] },
                y: { 
                  duration: 3.5, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              {/* Leuchtaura um das Logo */}
              <motion.div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px 0px rgba(255, 255, 255, 0.05)",
                    "0 0 40px 10px rgba(255, 255, 255, 0.12)",
                    "0 0 20px 0px rgba(255, 255, 255, 0.05)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />

              {/* Rotierender Ring */}
              <motion.div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-white/[0.07]"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  ease: "linear",
                  repeat: Infinity
                }}
              />

              {/* Zweiter gegenläufiger Ring */}
              <motion.div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-white/[0.05]"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  ease: "linear",
                  repeat: Infinity
                }}
              />

              {/* Logo selbst */}
              <img 
                src="/images/logo.png" 
                alt="FAM for Dogs Logo" 
                className="w-48 h-48 object-contain relative z-10"
              />
            </motion.div>
            
            {/* Ultra-dezenter Ladebalken */}
            <motion.div 
              className="w-60 h-[1px] bg-white/5 rounded-full overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                className="h-full bg-white/20"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: minDisplayTime / 1000 - 0.5, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
