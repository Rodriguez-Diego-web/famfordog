import { useEffect, useState } from 'react';

/**
 * Hook zum Vorladen wichtiger Bilder während der Ladeanimation
 * @param imageUrls Array von Bild-URLs, die vorgeladen werden sollen
 * @returns Objekt mit Informationen zum Ladefortschritt
 */
const useImagePreloader = (imageUrls: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalCount] = useState(imageUrls.length);

  useEffect(() => {
    if (!imageUrls.length) {
      setImagesPreloaded(true);
      return;
    }

    let loadedImages = 0;
    const images: HTMLImageElement[] = [];

    const handleImageLoad = () => {
      loadedImages += 1;
      setLoadedCount(loadedImages);
      
      if (loadedImages === imageUrls.length) {
        setImagesPreloaded(true);
      }
    };

    imageUrls.forEach(src => {
      const image = new Image();
      image.onload = handleImageLoad;
      image.onerror = handleImageLoad; // Auch bei Fehler weitermachen
      image.src = src;
      images.push(image);
    });

    // Cleanup
    return () => {
      images.forEach(image => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, [imageUrls]);

  return { imagesPreloaded, loadedCount, totalCount };
};

export default useImagePreloader;
