/**
 * Optimierter Image-Loader mit Caching und Priorisierung
 * Verbessert die Ladezeiten und reduziert Netzwerkanfragen
 */

// Cache für bereits geladene Bilder
const imageCache = new Map<string, HTMLImageElement>();

// Priorität der Bilder (niedrigere Zahl = höhere Priorität)
const imagePriorities = new Map<string, number>();

// Bilder, die gerade geladen werden
const loadingImages = new Set<string>();

/**
 * Lädt ein Bild mit optionaler Priorität
 * @param src Die URL des Bildes
 * @param priority Die Priorität des Bildes (niedrigere Zahl = höhere Priorität)
 * @returns Ein Promise, das resolved, wenn das Bild geladen ist
 */
export const loadImage = (src: string, priority: number = 10): Promise<HTMLImageElement> => {
  // Wenn das Bild bereits im Cache ist, gib es zurück
  if (imageCache.has(src)) {
    return Promise.resolve(imageCache.get(src)!);
  }
  
  // Wenn das Bild gerade geladen wird, warte darauf
  if (loadingImages.has(src)) {
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (imageCache.has(src)) {
          clearInterval(checkInterval);
          resolve(imageCache.get(src)!);
        }
      }, 100);
    });
  }
  
  // Setze die Priorität des Bildes
  imagePriorities.set(src, priority);
  
  // Markiere das Bild als "wird geladen"
  loadingImages.add(src);
  
  // Lade das Bild
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      imageCache.set(src, img);
      loadingImages.delete(src);
      resolve(img);
    };
    
    img.onerror = (error) => {
      loadingImages.delete(src);
      reject(error);
    };
    
    img.src = src;
  });
};

/**
 * Lädt mehrere Bilder mit optionaler Priorität
 * @param sources Die URLs der Bilder
 * @param priority Die Priorität der Bilder (niedrigere Zahl = höhere Priorität)
 * @returns Ein Promise, das resolved, wenn alle Bilder geladen sind
 */
export const loadImages = (sources: string[], priority: number = 10): Promise<HTMLImageElement[]> => {
  return Promise.all(sources.map(src => loadImage(src, priority)));
};

/**
 * Lädt Bilder im Voraus, um sie später schneller anzeigen zu können
 * @param sources Die URLs der Bilder
 * @param priority Die Priorität der Bilder (niedrigere Zahl = höhere Priorität)
 */
export const preloadImages = (sources: string[], priority: number = 20): void => {
  // Sortiere die Bilder nach Priorität
  const sortedSources = [...sources].sort((a, b) => {
    const priorityA = imagePriorities.get(a) || priority;
    const priorityB = imagePriorities.get(b) || priority;
    return priorityA - priorityB;
  });
  
  // Lade die Bilder nacheinander
  let index = 0;
  
  const loadNext = () => {
    if (index >= sortedSources.length) return;
    
    const src = sortedSources[index++];
    loadImage(src, priority).then(() => {
      // Lade das nächste Bild nach einer kurzen Pause
      setTimeout(loadNext, 100);
    }).catch(() => {
      // Bei Fehler trotzdem weitermachen
      setTimeout(loadNext, 100);
    });
  };
  
  // Starte den Ladevorgang
  loadNext();
};

/**
 * Prüft, ob ein Bild bereits im Cache ist
 * @param src Die URL des Bildes
 * @returns true, wenn das Bild im Cache ist, sonst false
 */
export const isImageCached = (src: string): boolean => {
  return imageCache.has(src);
};

/**
 * Löscht ein Bild aus dem Cache
 * @param src Die URL des Bildes
 */
export const clearImageFromCache = (src: string): void => {
  imageCache.delete(src);
  imagePriorities.delete(src);
};

/**
 * Löscht alle Bilder aus dem Cache
 */
export const clearImageCache = (): void => {
  imageCache.clear();
  imagePriorities.clear();
};
