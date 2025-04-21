import { useEffect, useState } from 'react';
import { markImageAsLoaded } from '../lib/imageRegistry';

// Cache für bereits geladene Bilder
const preloadedImages = new Set<string>();

/**
 * Hook zum Vorladen wichtiger Bilder während der Ladeanimation
 * @param imageUrls Array von Bild-URLs, die vorgeladen werden sollen
 * @returns Objekt mit Informationen zum Ladefortschritt
 */
const useImagePreloader = (imageUrls: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  
  // Filtere bereits geladene Bilder heraus
  const imagesToLoad = imageUrls.filter(url => !preloadedImages.has(url));
  const [totalCount] = useState(imagesToLoad.length);

  useEffect(() => {
    // Wenn keine Bilder zu laden sind oder alle bereits im Cache
    if (!imagesToLoad.length) {
      setImagesPreloaded(true);
      return;
    }

    let loadedImages = 0;
    const images: HTMLImageElement[] = [];

    const handleImageLoad = (src: string) => {
      loadedImages += 1;
      setLoadedCount(loadedImages);
      
      // Zum Cache hinzufügen
      preloadedImages.add(src);
      markImageAsLoaded(src);
      
      if (loadedImages === imagesToLoad.length) {
        setImagesPreloaded(true);
      }
    };

    imagesToLoad.forEach(src => {
      const image = new Image();
      image.onload = () => handleImageLoad(src);
      image.onerror = () => handleImageLoad(src); // Auch bei Fehler weitermachen
      
      // Prüfe, ob das Bild bereits im Browser-Cache ist
      if (image.complete) {
        handleImageLoad(src);
      } else {
        image.src = src;
        images.push(image);
      }
    });

    // Cleanup
    return () => {
      images.forEach(image => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, [imagesToLoad]);

  return { imagesPreloaded, loadedCount, totalCount };
};

export default useImagePreloader;
