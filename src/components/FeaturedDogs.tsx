import { useState } from 'react';
import { Heart, ArrowRight, PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data for featured dogs
const featuredDogs = [
  {
    id: 1,
    name: 'Max',
    age: '5 Jahre',
    breed: 'Schäferhund-Mix',
    description: 'Max wurde in einem Tierheim in Rumänien gefunden. Er ist ruhig und anhänglich.',
    image: '/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (3).jpeg',
    tags: ['Ruhig', 'Anhänglich', 'Spezielle Pflege']
  },
  {
    id: 2,
    name: 'Bella',
    age: '2 Jahre',
    breed: 'Terrier-Mix',
    description: 'Bella wurde als Welpe ausgesetzt. Sie ist energiegeladen und liebt Menschen.',
    image: '/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (5).jpeg',
    tags: ['Energiegeladen', 'Freundlich', 'Training']
  },
  {
    id: 3,
    name: 'Daze',
    age: '4 Jahre',
    breed: 'Mischling',
    description: 'Daze wurde in einem verlassenen Gebäude gefunden. Er ist freundlich und liebevoll.',
    image: '/Hunde:Daze/WhatsApp Image 2025-03-26 at 15.08.17.jpeg',
    tags: ['Freundlich', 'Liebevoll', 'Besondere Aufmerksamkeit']
  }
];

const FeaturedDogs = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <section className="py-20 bg-accent-blue/15 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 opacity-5">
        <PawPrint size={200} className="text-primary" />
      </div>
      <div className="absolute -bottom-16 -left-16 opacity-5">
        <PawPrint size={200} className="text-primary" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-glorious">Unsere Hunde</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto font-futura">
            Diese liebevollen Begleiter warten auf ihr Für-immer-Zuhause. Jeder von ihnen hat seine eigene Persönlichkeit und Bedürfnisse.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDogs.map((dog) => (
            <div key={dog.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dog.image} 
                  alt={dog.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <button 
                  onClick={() => toggleFavorite(dog.id)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                >
                  <Heart 
                    size={20} 
                    className={favorites.includes(dog.id) ? "fill-secondary text-secondary" : "text-gray-600"}
                  />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-primary font-futura">{dog.name}</h3>
                  <span className="text-sm text-gray-500 font-futura">{dog.age}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 font-futura">{dog.breed}</p>
                <p className="text-gray-700 mb-4 font-futura">{dog.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {dog.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-3 py-1 rounded-full bg-accent-blue text-primary font-medium font-futura"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/dogs/${dog.id}`} 
                  className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white text-center py-3 rounded-lg transition-colors group font-futura"
                >
                  <span>Lerne {dog.name} kennen</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
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
    </section>
  );
};

export default FeaturedDogs;
