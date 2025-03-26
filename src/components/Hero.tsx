import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Define hero slide data
const heroSlides = [
  {
    id: 1,
    title: 'FAM',
    subtitle: 'for Dogs e.V.',
    description: 'Fight and Movement for Dogs. Wir setzen uns für nachhaltigen Tierschutz ein – mit Fokus auf die Verbesserung der Lebensbedingungen für Straßenhunde.'
  },
  {
    id: 2,
    title: 'Hilfe',
    subtitle: 'für Straßenhunde',
    description: 'Wir helfen Hunden in Not und geben ihnen eine zweite Chance auf ein glückliches Leben in einem liebevollen Zuhause.'
  },
  {
    id: 3,
    title: 'Liebe',
    subtitle: 'in Aktion',
    description: 'Unsere Freiwilligen arbeiten unermüdlich daran, vernachlässigten und misshandelten Hunden eine bessere Zukunft zu ermöglichen.'
  },
  {
    id: 4,
    title: 'Zuhause',
    subtitle: 'für immer',
    description: 'Durch Adoption und Pflege finden unsere Hunde das liebevolle Zuhause, das sie verdienen – für den Rest ihres Lebens.'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Handle automatic slide transitions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    // Pause autoplay briefly when manually changing slides
    setIsAutoplay(false);
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
    
    // Resume autoplay after a pause
    setTimeout(() => {
      setIsAutoplay(true);
    }, 5000);
  };

  // Setup autoplay
  useEffect(() => {
    if (isAutoplay) {
      autoplayTimerRef.current = setTimeout(() => {
        nextSlide();
      }, 6000); // Change slide every 6 seconds
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
    };
  }, [currentSlide, isAutoplay, nextSlide]);

  // Animation for slide content
  useEffect(() => {
    // Staggered animation on mount and slide change
    const animationDelay = 300;
    
    if (headingRef.current) {
      headingRef.current.style.opacity = '0';
      headingRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        headingRef.current!.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        headingRef.current!.style.opacity = '1';
        headingRef.current!.style.transform = 'translateY(0)';
      }, 100);
    }
    
    if (subheadingRef.current) {
      subheadingRef.current.style.opacity = '0';
      subheadingRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        subheadingRef.current!.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        subheadingRef.current!.style.opacity = '1';
        subheadingRef.current!.style.transform = 'translateY(0)';
      }, animationDelay);
    }
    
    if (buttonRef.current) {
      buttonRef.current.style.opacity = '0';
      buttonRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        buttonRef.current!.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        buttonRef.current!.style.opacity = '1';
        buttonRef.current!.style.transform = 'translateY(0)';
      }, animationDelay * 2);
    }
  }, [currentSlide]); // Re-run animation when slide changes

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Farbenfroher Hintergrund */}
      <div className="absolute inset-0 z-0">
        {/* Hauptfarben-Blöcke mit leichter Transparenz für bessere Lesbarkeit */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/90"></div> {/* Grün links */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-secondary/90"></div> {/* Gelb oben rechts */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-accent-pink/90"></div> {/* Pink unten rechts */}
        <div className="absolute top-0 left-1/3 w-1/3 h-1/2 bg-accent-blue/90"></div> {/* Blau Mitte oben */}
        <div className="absolute bottom-0 left-1/3 w-1/3 h-1/2 bg-accent-green/90"></div> {/* Grün Mitte unten (statt Rot) */}
        
        {/* Dekorative Elemente */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-accent-yellow opacity-70 blur-md"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-primary opacity-50 blur-lg"></div>
        <div className="absolute top-3/4 left-2/3 w-16 h-16 rounded-full bg-accent-pink opacity-60 blur-sm"></div>
        
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 z-20 relative">
        <div className="max-w-2xl">
          <h1 ref={headingRef} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-white font-glorious">{slide.title}</span><br />
            <span className="text-secondary font-glorious">{slide.subtitle}</span>
          </h1>
          
          <p ref={subheadingRef} className="text-white text-lg mb-8 max-w-xl font-futura">
            {slide.description}
          </p>
          
          <div ref={buttonRef} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/mission" className="bg-white hover:bg-opacity-90 text-primary px-8 py-3 rounded-full font-medium transition-all duration-300 text-center hover:shadow-lg hover-arrow font-futura">
              <span>Unsere Mission</span>
            </Link>
            
            <a href="/donate" className="bg-secondary border-none text-primary px-8 py-3 rounded-full font-medium hover:bg-secondary/90 transition-all duration-300 text-center font-futura hover:shadow-lg">
              Spenden
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Pagination - now interactive */}
      <div className="absolute bottom-10 left-6 sm:left-10 md:left-20 flex z-10">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-16 h-16 flex items-center justify-center text-white font-semibold transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-secondary text-primary' 
                : 'bg-black/50 backdrop-blur-sm hover:bg-black/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
