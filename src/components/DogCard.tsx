import { memo, useCallback } from 'react';
import { Heart } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { useNavigate } from 'react-router-dom';

// Interface für die Hundedaten
interface DogProps {
  id: number;
  name: string;
  age: string;
  breed: string;
  description: string;
  image: string;
  needs: string;
  onPatronageClick: () => void;
}

/**
 * Optimierte Hundekarten-Komponente
 * - Verwendet React.memo zur Vermeidung unnötiger Rerenders
 * - Nutzt OptimizedImage für bessere Bildperformance
 * - Verwendet useCallback für Event-Handler
 */
const DogCard = memo(({ id, name, age, breed, description, image, needs, onPatronageClick }: DogProps) => {
  const navigate = useNavigate();
  
  // Event-Handler mit useCallback für bessere Performance
  const handleNavigate = useCallback(() => {
    navigate(`/dogs/${id}`);
  }, [id, navigate]);
  
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
          <h3 
            className="text-xl font-bold text-primary mb-2 font-futura cursor-pointer hover:text-primary/80 transition-colors" 
            onClick={handleNavigate}
          >
            {name}
          </h3>
          
          <div className="flex items-center text-gray-600 mb-2 text-sm">
            <span className="mr-4">{age}</span>
            <span>{breed}</span>
          </div>
          
          <div className="h-24 overflow-hidden mb-4">
            <p className="text-gray-700 font-futura text-sm">{description}</p>
          </div>
        </div>
        
        <div className="mb-6 mt-auto">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Benötigt:</h4>
          <div className="flex items-center text-gray-600 text-sm">
            <Heart size={16} className="text-accent-pink mr-2 flex-shrink-0" />
            <span>{needs}</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={onPatronageClick}
            className="inline-block bg-secondary hover:bg-secondary/90 text-primary px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm cursor-pointer"
          >
            Pate werden
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
