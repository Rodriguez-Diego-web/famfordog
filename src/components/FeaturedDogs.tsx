import { useState, useEffect } from 'react';
import { Heart, ArrowRight, PawPrint, Image as ImageIcon, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Aktualisierte Daten für die angezeigten Hunde, übernommen aus OurDogs.tsx
const featuredDogs = [
  {
    id: 1,
    name: 'Anton',
    age: '7 Monate',
    breed: 'Mischling',
    description: 'Anton wurde von Mieke im November 2024 während einer Fütterungsrunde mit Rita und Riani entdeckt. Er lebte mit seiner Mutter Ichi und seinen Geschwistern Albert und Ocha bei einer Familie, die sich leider nicht mehr um sie kümmern konnte.',
    image: '/images/dogs/anton.jpeg',
    fallbackImage: '/images/dog-placeholder.jpg',
    tags: ['Freundlich', 'Verspielt', 'Sozial'],
    sponsors: [
      { id: 1, name: 'Heike', initials: 'H', color: '#3498db' },
      
    ],
    maxSponsors: 3
  },
  {
    id: 3,
    name: 'Boogey',
    age: '1,5 Jahre',
    breed: 'Mischling',
    description: 'Boogey lebte in einem Abwasserkanal mit ihren 6 Welpen. Sie wurde so schwer verletzt, dass sie ihre Babys kaum schützen konnte. Nach monatelangem Leben im Kanal ist sie jetzt glücklicherweise gerettet.',
    image: '/images/dogs/boogey.jpeg',
    fallbackImage: '/images/dog-placeholder.jpg',
    tags: ['Energiegeladen', 'Verspielt', 'Neugierig'],
    sponsors: [
      { id: 4, name: 'Lisa K.', initials: 'LK', color: '#9b59b6' },
      { id: 5, name: 'Thomas B.', initials: 'TB', color: '#f39c12' },
      { id: 6, name: 'Sarah M.', initials: 'SM', color: '#1abc9c' }
    ],
    maxSponsors: 3
  },
  {
    id: 14,
    name: 'Wednesday',
    age: '4 Jahre',
    breed: 'Mischling',
    description: 'Wednesday ist eine besondere Hündin mit einem einzigartigen Charakter. Sie ist loyal und beschützend. Sie sucht eine liebevolle Patenschaft.',
    image: '/OneDrive_15_2.4.2025/Wednesday/IMG_2217.jpeg',
    fallbackImage: '/images/dog-placeholder.jpg',
    tags: ['Loyal', 'Beschützend', 'Einzigartig'],
    sponsors: [],
    maxSponsors: 3
  }
];

const FeaturedDogs = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [imageLoaded, setImageLoaded] = useState<{[key: number]: boolean}>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('featured-dogs-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleImageLoad = (id: number) => {
    setImageLoaded(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const handleImageError = (id: number) => {
    console.log(`Image failed to load for dog ${id}`);
  };

  return (
    <section id="featured-dogs-section" className="py-20 bg-accent-blue/15 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 opacity-5">
        <PawPrint size={200} className="text-primary" />
      </div>
      <div className="absolute -bottom-16 -left-16 opacity-5">
        <PawPrint size={200} className="text-primary" />
      </div>
      
      <div className={`container mx-auto px-6 relative z-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-glorious">Unsere Hunde</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto font-futura mb-4">
            Unsere Hunde im Shelter auf Lombok suchen Patenschaften, um weiterhin gut versorgt zu werden. Jeder von ihnen hat eine einzigartige Persönlichkeit und individuelle Bedürfnisse.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto font-futura">
            Unterstütze sie jetzt mit einer Futterpatenschaft und schenke ihnen eine bessere Zukunft.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDogs.map((dog) => (
            <div 
              key={dog.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              style={{ 
                animation: `fade-in-up 0.6s ease-out forwards ${dog.id * 0.15}s`,
                opacity: 0
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gray-200 flex items-center justify-center ${imageLoaded[dog.id] ? 'hidden' : ''}`}>
                  <ImageIcon size={48} className="text-gray-400" />
                </div>
                <img 
                  src={dog.image} 
                  alt={dog.name} 
                  onLoad={() => handleImageLoad(dog.id)}
                  onError={() => handleImageError(dog.id)}
                  className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${imageLoaded[dog.id] ? '' : 'opacity-0'}`}
                  style={dog.name === "Wednesday" ? { objectPosition: "center 20%" } : {}}
                />
                <button 
                  onClick={() => toggleFavorite(dog.id)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                  aria-label={favorites.includes(dog.id) ? `${dog.name} aus Favoriten entfernen` : `${dog.name} zu Favoriten hinzufügen`}
                >
                  <Heart 
                    size={20} 
                    className={favorites.includes(dog.id) ? "fill-secondary text-secondary" : "text-gray-600"}
                  />
                </button>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-primary font-futura">{dog.name}</h3>
                  
                  {/* Paten-Anzeige */}
                  {(dog.sponsors.length > 0 || (dog.maxSponsors - dog.sponsors.length) > 0) && (
                    <div className="flex items-center space-x-1">
                      {/* Vorhandene Paten */}
                      {dog.sponsors.map((sponsor) => (
                        <div 
                          key={sponsor.id}
                          className="group relative"
                        >
                          <div 
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                            style={{ backgroundColor: sponsor.color }}
                          >
                            {sponsor.initials}
                          </div>
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            Pate: {sponsor.name}
                          </div>
                        </div>
                      ))}
                      
                      {/* Freie Patenplätze */}
                      {(dog.maxSponsors - dog.sponsors.length) > 0 && (
                        <div className="group relative">
                          <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors">
                            <Users size={10} />
                          </div>
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {dog.maxSponsors - dog.sponsors.length} {(dog.maxSponsors - dog.sponsors.length) === 1 ? 'Patenplatz' : 'Patenplätze'} frei
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500 font-futura">{dog.age}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 font-futura">{dog.breed}</p>
                
                {/* Paten-Status */}
                {dog.sponsors.length > 0 && (
                  <div className="mb-3">
                    <div className="flex items-center text-sm text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                      <Heart size={14} className="mr-1" />
                      <span>
                        {dog.sponsors.length} {dog.sponsors.length === 1 ? 'Pate' : 'Paten'}
                        {(dog.maxSponsors - dog.sponsors.length) > 0 && (
                          <span className="text-gray-500 ml-1">
                            • {dog.maxSponsors - dog.sponsors.length} {(dog.maxSponsors - dog.sponsors.length) === 1 ? 'Platz' : 'Plätze'} frei
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                )}
                
                <p className="text-gray-700 mb-4 font-futura line-clamp-4" dangerouslySetInnerHTML={{ __html: dog.description }}></p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {dog.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-3 py-1 rounded-full bg-accent-blue text-primary font-medium font-futura whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Link 
                    to={`/dogs/${dog.id}`} 
                    className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white text-center py-3 rounded-lg transition-colors group font-futura"
                  >
                    <span>Patenschaft für {dog.name}</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <Link 
            to="/our-dogs" 
            className="inline-block bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg font-futura"
          >
            Alle Hunde ansehen
          </Link>
        </div>
      </div>

      {/* Add animations through inline styles instead of JSX */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        `
      }} />
    </section>
  );
};

export default FeaturedDogs;
