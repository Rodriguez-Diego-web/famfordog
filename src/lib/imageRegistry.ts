/**
 * Zentrales Bildregister für die Famfordogs Website
 * 
 * Vorteile:
 * - Single Source of Truth für Bildpfade
 * - Einfache Aktualisierung von Bildpfaden
 * - Bessere Typsicherheit
 * - Einfachere Verwaltung von Bildgruppen
 */

// Cache für bereits geladene Bilder
const loadedImages = new Set<string>();

export const logos = {
  primary: '/images/logo.png',
  paypal: '/images/paypal-logo.png',
};

export const heroImages = {
  background: '/images/hero-background.png',
};

export const dogImages = {
  // Hunde für Featured Section und Adoption
  wednesday: '/images/dogs/wednesday.jpeg',
  boogey: '/images/dogs/boogey.jpeg',
  anton: '/images/dogs/anton.jpeg',
};

export const locationImages = {
  romania: {
    main: '/images/lombook/main.jpg',
    shelter: '/images/Shelter Rumänien/overview.jpg',
  },
  lombok: {
    main: '/images/lombok/main.jpg',
  }
};

export const projectImages = {
  kastration: '/images/Kastaration/main.jpg',
  wounded: '/images/WOUNDED/main.jpg',
};

export const teamImages = {
  // Teammitglieder
  vito: '/images/vito/profile.jpg',
  lara: '/images/Lara/profile.jpg',
  kira: '/images/kira/profile.jpg',
  dhany: '/images/Dhany/profile.jpg',
  hanna: '/images/Hanna/profile.jpg',
};

/**
 * Funktionen zum Vorladen von Bildern basierend auf der Seite
 * Optimiert, um Bilder nur einmal zu laden
 */

// Grundlegende Bilder, die für alle Seiten wichtig sind
const basicImages = [
  logos.primary,
];

// Bilder für die Startseite (ohne Duplikate)
export const getHomepageImages = (): string[] => [
  ...basicImages,
  heroImages.background,
  dogImages.wednesday,
  dogImages.boogey,
  dogImages.anton,
];

// Bilder für die Über uns Seite (ohne Duplikate)
export const getAboutImages = (): string[] => [
  ...basicImages,
  teamImages.vito,
  teamImages.lara,
  teamImages.kira,
  teamImages.dhany,
  teamImages.hanna,
];

// Bilder für Projektseiten (ohne Duplikate)
export const getProjectImages = (): string[] => [
  ...basicImages,
  projectImages.kastration,
  projectImages.wounded,
  locationImages.romania.main,
  locationImages.lombok.main,
];

/**
 * Hilfsfunktion zum Abrufen von Bildern basierend auf dem aktuellen Pfad
 * Optimiert, um Bilder nur einmal zu laden
 */
export const getImagesByPath = (path: string): string[] => {
  let imagesToLoad: string[] = [];
  
  if (path === '/' || path.includes('index')) {
    imagesToLoad = getHomepageImages();
  } else if (path.includes('about') || path.includes('mission')) {
    imagesToLoad = getAboutImages();
  } else if (path.includes('projects')) {
    imagesToLoad = getProjectImages();
  } else {
    imagesToLoad = basicImages;
  }
  
  // Filtere bereits geladene Bilder heraus
  return imagesToLoad.filter(img => !loadedImages.has(img));
};

/**
 * Markiere ein Bild als geladen
 */
export const markImageAsLoaded = (imagePath: string): void => {
  loadedImages.add(imagePath);
};
