import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useImagePreloader from '../hooks/useImagePreloader';
import { getImagesByPath } from '../lib/imageRegistry';
import { useLocation } from 'react-router-dom';

interface LoadingScreenProps {
  minDisplayTime?: number;
}

/**
 * Cineastische Premium-Ladeanimation
 */
const LoadingScreen = ({ minDisplayTime = 3200 }: LoadingScreenProps) => {
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
          className="fixed inset-0 z-[100] bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {/* Dramatic Background Animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary via-black to-primary/70"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              background: [
                "linear-gradient(to bottom right, rgba(1, 82, 73, 0.8), rgba(0, 0, 0, 1), rgba(1, 82, 73, 0.5))",
                "linear-gradient(to bottom right, rgba(1, 82, 73, 0.5), rgba(0, 0, 0, 1), rgba(1, 82, 73, 0.8))"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          {/* Dramatic Light Beams */}
          <div className="absolute inset-0 opacity-30 overflow-hidden">
            <motion.div 
              className="absolute top-[-150%] left-[10%] w-[50px] h-[200%] bg-white blur-[30px] rotate-[35deg]"
              animate={{
                top: ["150%", "-150%"]
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                delay: 1,
                repeat: Infinity,
                repeatDelay: 4
              }}
            />
            <motion.div 
              className="absolute top-[-150%] left-[70%] w-[30px] h-[200%] bg-white blur-[20px] rotate-[35deg]"
              animate={{
                top: ["150%", "-150%"]
              }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
                delay: 0.5,
                repeat: Infinity,
                repeatDelay: 4.5
              }}
            />
          </div>
          
          {/* Particles Overlay */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-70"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 0.7, 0],
                  scale: [0, 1, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Content Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              {/* Logo Container with 3D Animation */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0, y: 30 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  rotateY: [0, 10, 0, -10, 0],
                  rotateX: [0, 5, 0, -5, 0]
                }}
                transition={{
                  scale: { duration: 1.2, ease: [0.23, 1.64, 0.44, 0.99] },
                  opacity: { duration: 1 },
                  y: { duration: 1.2 },
                  rotateY: { 
                    duration: 8, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  },
                  rotateX: { 
                    duration: 12, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }
                }}
                className="relative"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Logo Glow */}
                <motion.div
                  className="absolute inset-0 rounded-full filter blur-lg"
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
                    transform: "translateZ(-10px)"
                  }}
                  animate={{
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
                
                {/* Logo Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <img 
                    src="/images/logo.png" 
                    alt="FAM for Dogs Logo" 
                    className="w-64 h-64 object-contain relative" 
                    style={{ filter: "drop-shadow(0 0 15px rgba(255,255,255,0.3))" }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Slogan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-8 text-white/90 font-futura font-bold text-2xl text-center"
              >
                <span className="tracking-wider">TIERSCHUTZ OHNE GRENZEN</span>
              </motion.div>
              
              {/* Cinematic Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "280px", opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                className="h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mt-5"
              />
              
              {/* Loading Indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="mt-10 flex items-center space-x-2"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-white rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-white rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
