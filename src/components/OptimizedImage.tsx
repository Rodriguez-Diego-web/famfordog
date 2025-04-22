import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

/**
 * Optimierte Bildkomponente mit Lazy Loading und Placeholder
 * Verbessert die Performance durch:
 * - Lazy Loading (nur laden, wenn sichtbar)
 * - Progressives Laden mit Placeholder
 * - Vermeidung von Layout-Shifts
 */
const OptimizedImage = ({ src, alt, className, width, height, onClick }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  
  useEffect(() => {
    // Bild vorladen
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);
  
  // Spezielle Bildposition für bestimmte Hunde
  let imageStyle = {};
  let objectPositionClass = "";
  
  if (alt === "Wednesday" || alt === "Rijonde") {
    imageStyle = { objectPosition: "center 20%" };
    objectPositionClass = "object-top";
  } else if (alt === "Roket") {
    imageStyle = { objectPosition: "center 5%" }; // Viel tiefer für Roket
    objectPositionClass = "object-top";
  } else if (alt === "Nugget") {
    imageStyle = { objectPosition: "center 60%" }; // Viel höher für Nugget
    objectPositionClass = "object-bottom";
  }
  
  return (
    <div 
      className={`relative ${className || ''}`} 
      style={{ width, height }}
      onClick={onClick}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md"></div>
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${objectPositionClass}`}
          loading="lazy"
          style={imageStyle}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
