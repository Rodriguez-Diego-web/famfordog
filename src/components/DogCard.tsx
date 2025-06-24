import { memo, useCallback } from 'react';
import { Heart, Users } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { useNavigate } from 'react-router-dom';

// Interface für Paten
interface Sponsor {
  id: number;
  name: string;
  initials: string;
  color: string;
}

// Interface für die Hundedaten
interface DogProps {
  id: number;
  name: string;
  age: string;
  breed: string;
  description: string;
  image: string;
  needs: string;
  sponsors?: Sponsor[];
  maxSponsors?: number;
  onPatronageClick: () => void;
}

/**
 * Optimierte Hundekarten-Komponente
 * - Verwendet React.memo zur Vermeidung unnötiger Rerenders
 * - Nutzt OptimizedImage für bessere Bildperformance
 * - Verwendet useCallback für Event-Handler
 * - Zeigt Paten mit Icons und Namen an
 */
const DogCard = memo(({ id, name, age, breed, description, image, needs, sponsors = [], maxSponsors = 3, onPatronageClick }: DogProps) => {
  const navigate = useNavigate();
  
  // Event-Handler mit useCallback für bessere Performance
  const handleNavigate = useCallback(() => {
    navigate(`/dogs/${id}`);
  }, [id, navigate]);
  
  const remainingSpots = maxSponsors - sponsors.length;
  const hasAvailableSpots = remainingSpots > 0;
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-64 cursor-pointer" onClick={handleNavigate}>
        <OptimizedImage 
          src={image} 
          alt={name}
          className="w-full h-full" 
        />
        <div className="absolute top-4 right-4 bg-primary/80 text-white px-3 py-1 rounded-full text-sm font-medium">
          Patenschaft
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 
              className="text-xl font-bold text-primary font-futura cursor-pointer hover:text-primary/80 transition-colors" 
              onClick={handleNavigate}
            >
              {name}
            </h3>
            
            {/* Paten-Anzeige */}
            {(sponsors.length > 0 || hasAvailableSpots) && (
              <div className="flex items-center space-x-1">
                {/* Vorhandene Paten */}
                {sponsors.map((sponsor) => (
                  <div 
                    key={sponsor.id}
                    className="group relative"
                  >
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm`}
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
                {hasAvailableSpots && (
                  <div className="group relative">
                    <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors">
                      <Users size={14} />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      {remainingSpots} {remainingSpots === 1 ? 'Patenplatz' : 'Patenplätze'} frei
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="flex items-center text-gray-600 mb-2 text-sm">
            <span className="mr-4">{age}</span>
            <span>{breed}</span>
          </div>
          
          {/* Paten-Status */}
          {sponsors.length > 0 && (
            <div className="mb-3">
              <div className="flex items-center text-sm text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                <Heart size={14} className="mr-1" />
                <span>
                  {sponsors.length} {sponsors.length === 1 ? 'Pate' : 'Paten'}
                  {hasAvailableSpots && (
                    <span className="text-gray-500 ml-1">
                      • {remainingSpots} {remainingSpots === 1 ? 'Platz' : 'Plätze'} frei
                    </span>
                  )}
                </span>
              </div>
            </div>
          )}
          
          <div className="h-20 overflow-hidden mb-4">
            <p className="text-gray-700 font-futura text-sm">{description}</p>
          </div>
        </div>
        
        <div className="mt-auto">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Benötigt:</h4>
          <div className="h-10 overflow-hidden mb-6">
            <div className="flex items-start text-gray-600 text-sm">
              <Heart size={16} className="text-accent-pink mr-2 flex-shrink-0 mt-1" />
              <span>{needs}</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={onPatronageClick}
            className={`inline-block px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm cursor-pointer ${
              hasAvailableSpots 
                ? 'bg-secondary hover:bg-secondary/90 text-primary' 
                : 'bg-green-100 hover:bg-green-200 text-green-700'
            }`}
          >
            {hasAvailableSpots ? 'Pate werden' : 'Auch Pate werden'}
          </button>
          <button 
            onClick={handleNavigate}
            className="inline-block bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm cursor-pointer"
          >
            Mehr erfahren
          </button>
        </div>
      </div>
    </div>
  );
});

export default DogCard;
