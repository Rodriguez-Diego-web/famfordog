import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  priority?: boolean; // Für kritische Above-the-fold Bilder
  quality?: number;   // JPEG/WebP Qualität (1-100)
  sizes?: string;     // Responsive Größeninformationen
}

/**
 * Erweiterte Optimierte Bildkomponente mit Lazy Loading und Placeholder
 * Verbessert die Performance durch:
 * - Lazy Loading (nur laden, wenn sichtbar)
 * - Intersection Observer für besseres Lazy Loading
 * - Progressives Laden mit Placeholder
 * - Vermeidung von Layout-Shifts
 * - Bilder mit Priorität für Above-the-fold Inhalte
 * - Automatische Größenanpassung für verschiedene Geräte
 * - WebP-Unterstützung, wenn verfügbar
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  onClick, 
  priority = false,
  quality = 85,
  sizes = '100vw'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [isVisible, setIsVisible] = useState(priority); // Prioritätsbilder sofort laden
  const imgRef = useRef<HTMLDivElement>(null);
  
  // Versuche WebP-Version zu finden, wenn die Browser es unterstützt
  const getOptimizedSrc = (originalSrc: string): string => {
    // Wenn das Bild bereits in /images/optimized/ ist, verwende es direkt
    if (originalSrc.includes('/optimized/')) {
      return originalSrc;
    }
    
    // Versuche, die optimierte Version im optimized-Verzeichnis zu finden
    // Format: /images/original.jpg -> /images/optimized/original.webp
    const basePath = originalSrc.substring(0, originalSrc.lastIndexOf('/') + 1);
    const fileName = originalSrc.substring(originalSrc.lastIndexOf('/') + 1);
    const fileNameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
    
    return `${basePath}optimized/${fileNameWithoutExt}.webp`;
  };
  
  useEffect(() => {
    if (!priority) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: '200px' } // 200px Vorladen vor sichtbarem Bereich
      );
      
      if (imgRef.current) {
        observer.observe(imgRef.current);
      }
      
      return () => observer.disconnect();
    }
  }, [priority]);
  
  useEffect(() => {
    if (priority || isVisible) {
      // Versuche zuerst die optimierte Version zu laden
      const optimizedSrc = getOptimizedSrc(src);
      const img = new Image();
      img.src = optimizedSrc;
      
      img.onload = () => {
        setImageSrc(optimizedSrc);
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        // Fallback auf die Original-Quelle
        const fallbackImg = new Image();
        fallbackImg.src = src;
        
        fallbackImg.onload = () => {
          setImageSrc(src);
          setIsLoaded(true);
        };
      };
      
      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }
  }, [src, isVisible, priority]);
  
  
  let imageStyle = {};
  let objectPositionClass = "";
  
  if (alt === "Wednesday" || alt === "Rijonde") {
    imageStyle = { objectPosition: "center 20%" };
    objectPositionClass = "object-top";
  } else if (alt === "Roket") {
    imageStyle = { objectPosition: "center 5%" }; 
    objectPositionClass = "object-top";
  } else if (alt === "Nugget") {
    imageStyle = { objectPosition: "center 60%" }; 
    objectPositionClass = "object-bottom";
  }
  
  return (
    <div 
      ref={imgRef}
      className={`relative ${className || ''}`} 
      style={{ width, height }}
      onClick={onClick}
    >
      {(!isLoaded || !imageSrc) && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md"></div>
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${objectPositionClass}`}
          loading={priority ? 'eager' : 'lazy'} // Prioritätsbilder sofort laden
          style={imageStyle}
          sizes={sizes}
          decoding="async" // Verbessert Rendering-Performance
        />
      )}
    </div>
  );
};

export default OptimizedImage;
