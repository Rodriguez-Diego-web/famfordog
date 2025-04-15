/**
 * Zentrales Bildregister für die Famfordogs Website
 * 
 * Vorteile:
 * - Single Source of Truth für Bildpfade
 * - Einfache Aktualisierung von Bildpfaden
 * - Bessere Typsicherheit
 * - Einfachere Verwaltung von Bildgruppen
 */

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
 */

// Bilder für die Startseite
export const getHomepageImages = (): string[] => [
  logos.primary,
  heroImages.background,
  dogImages.wednesday,
  dogImages.boogey,
  dogImages.anton,
];

// Bilder für die Über uns Seite
export const getAboutImages = (): string[] => [
  logos.primary,
  teamImages.vito,
  teamImages.lara,
  teamImages.kira,
  teamImages.dhany,
  teamImages.hanna,
];

// Bilder für Projektseiten
export const getProjectImages = (): string[] => [
  logos.primary,
  projectImages.kastration,
  projectImages.wounded,
  locationImages.romania.main,
  locationImages.lombok.main,
];

// Fallback: Grundlegende Bilder, die für alle Seiten wichtig sind
export const getBasicImages = (): string[] => [
  logos.primary,
];

/**
 * Hilfsfunktion zum Abrufen von Bildern basierend auf dem aktuellen Pfad
 */
export const getImagesByPath = (path: string): string[] => {
  if (path === '/' || path.includes('index')) {
    return getHomepageImages();
  } else if (path.includes('about') || path.includes('mission')) {
    return getAboutImages();
  } else if (path.includes('projects')) {
    return getProjectImages();
  }
  
  return getBasicImages();
};
