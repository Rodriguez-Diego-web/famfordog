import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, ArrowLeft, Calendar, MapPin, PawPrint, MessageCircle, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

// Import dogs data from CMS
import dogsData from '@/data/dogs.json';

// Typ-Definition für einen Hund
interface Dog {
  id: number;
  name: string;
  age: string;
  breed: string;
  description: string;
  image: string;
  additionalImages?: string[];
  needs: string;
  location?: string;
  sex?: string;
  size?: string;
  personality?: string[];
  history?: string;
  medicalInfo?: string;
  suitableFor?: string[];
  notSuitableFor?: string[];
  videoLinks?: string[];
}

const DogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [dog, setDog] = useState<Dog | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<string[]>([]);

  // Funktion zum Öffnen des Patenschaftsantrags
  const openPatronageForm = () => {
    // Öffne das Modal mit dem Fundraising Box-Formular
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto';
    modal.innerHTML = `
      <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div class="flex justify-between items-center p-4 border-b">
          <h2 class="text-2xl font-bold text-primary font-futura">Patenschaft übernehmen</h2>
          <button id="close-modal" class="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="p-2 overflow-y-auto" style="max-height: calc(90vh - 70px)">
          <iframe 
            src="https://secure.fundraisingbox.com/app/payment?hash=rsg5g3e1y9kkxqoc&t=425786862dfc0c7d09f672538bbd229f&fb_id=25409"
            title="Fundraising Box Patenschaftsformular"
            width="100%"
            height="2100"
            class="md:h-[1800px]" 
            frameborder="0"
            allowtransparency="true"
            allow="payment"
            style="display: block; margin: 0 auto"
          ></iframe>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Event-Listener zum Schließen des Modals
    const closeButton = modal.querySelector('#close-modal');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
      });
    }
    
    // Schließen des Modals durch Klick außerhalb
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
      }
    });
  };

  // Funktion zum Öffnen des Kontaktbereichs
  const openContactSection = () => {
    navigate('/contact');
  };

  // Funktion zum Öffnen des Kontaktformulars
  const handleMessageClick = () => {
    navigate('/join-family#volunteer-form');
  };

  // Hook für das Abrufen der Hundedaten
  useEffect(() => {
    const loadDogData = () => {
      setLoading(true);
      
      // Verwende CMS-Daten
      setTimeout(() => {
        const selectedDog = dogsData.find(dog => dog.id === parseInt(id || '1'));
        setDog(selectedDog || null);
        
        if (selectedDog) {
          const images = [selectedDog.image, ...(selectedDog.additionalImages || [])];
          setAllImages(images);
        }
        
        setLoading(false);
      }, 500);
    };

    loadDogData();
    
    // Scroll zum Anfang der Seite, wenn die Komponente geladen wird
    window.scrollTo(0, 0);
  }, [id]);

  // Funktion zum Ändern des angezeigten Bildes
  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Funktionen für Vor- und Zurück-Navigation in der Galerie
  const goToPreviousImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  }, [allImages.length]);

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  }, [allImages.length]);

  // Event-Listener für Tastatur-Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPreviousImage();
      } else if (e.key === 'ArrowRight') {
        goToNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [allImages.length, goToPreviousImage, goToNextImage]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="animate-pulse">
            <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
            <div className="h-8 bg-gray-200 rounded-lg mb-4 w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded-lg mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded-lg mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded-lg mb-6 w-3/4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="h-6 bg-gray-200 rounded-lg mb-4 w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-2 w-full"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-2 w-full"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-6 w-5/6"></div>
              </div>
              <div>
                <div className="h-6 bg-gray-200 rounded-lg mb-4 w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-2 w-full"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-2 w-full"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!dog) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Hund nicht gefunden</h2>
          <p className="mb-8">Der gesuchte Hund konnte leider nicht gefunden werden.</p>
          <button 
            onClick={() => navigate('/our-dogs')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md flex items-center mx-auto"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Zurück zur Übersicht
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Zurück-Button mit mehr Abstand nach oben, um unter der Navigation zu erscheinen */}
        <div className="pt-16 md:pt-12">
          <button 
            onClick={() => navigate('/our-dogs')}
            className="mb-8 flex items-center text-amber-600 hover:text-amber-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Zurück zur Übersicht
          </button>
        </div>
        
        {/* Hero-Bereich mit Bild und Grundinformationen */}
        <div className="relative rounded-xl overflow-hidden mb-10">
          <img 
            src={allImages[currentImageIndex]} 
            alt={dog.name} 
            className={`w-full h-[350px] md:h-[450px] object-cover ${dog.name === "Wednesday" || dog.name === "Rijonde" ? "object-top" : ""}`}
            style={dog.name === "Wednesday" || dog.name === "Rijonde" ? { objectPosition: "center 20%" } : {}}
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h1 className="text-4xl font-bold text-white mb-2">{dog.name}</h1>
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" /> 
                {dog.age}
              </div>
              <div className="flex items-center">
                <PawPrint className="mr-2 h-5 w-5" /> 
                {dog.breed}
              </div>
              {dog.location && (
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" /> 
                  {dog.location}
                </div>
              )}
              {dog.sex && (
                <div className="flex items-center">
                  {dog.sex}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Hauptinformationen */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border-2 border-primary/20">
            <h2 className="text-2xl font-semibold mb-4">Über {dog.name}</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {dog.description}
            </p>
            
            {dog.history && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Geschichte</h3>
                <p className="text-gray-700">{dog.history}</p>
              </div>
            )}
            
            {dog.personality && dog.personality.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Persönlichkeit</h3>
                <div className="flex flex-wrap gap-2">
                  {dog.personality.map((trait, index) => (
                    <span 
                      key={index}
                      className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {dog.medicalInfo && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Medizinische Informationen</h3>
                <p className="text-gray-700">{dog.medicalInfo}</p>
              </div>
            )}
          </div>
          
          {/* Seitenleiste mit weiteren Informationen */}
          <div>
            <div className="bg-accent-pink p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Persönlichkeit</h3>
              <ul className="space-y-2">
                {dog.personality?.map((trait, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent-yellow p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Heart className="mr-2 h-5 w-5 text-primary" /> 
                Besondere Bedürfnisse
              </h3>
              <p className="text-gray-700 mb-6">{dog.needs}</p>
              
              <button 
                onClick={openPatronageForm}
                className="w-full bg-primary hover:bg-primary/80 text-white py-3 px-4 rounded-md flex items-center justify-center transition-colors font-medium"
              >
                <Heart className="mr-2 h-5 w-5" /> Pate werden
              </button>
            </div>
            
            {(dog.suitableFor || dog.notSuitableFor) && (
              <div className="bg-accent-blue/30 rounded-xl p-6 mb-6">
                {dog.suitableFor && dog.suitableFor.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Geeignet für:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {dog.suitableFor.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {dog.notSuitableFor && dog.notSuitableFor.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Nicht geeignet für:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {dog.notSuitableFor.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="bg-accent-blue p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Kontakt</h3>
              <button
                onClick={handleMessageClick}
                className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Nachricht senden
              </button>
            </div>
          </div>
        </div>
        
        {/* Videos Bereich, falls vorhanden */}
        {dog.videoLinks && dog.videoLinks.length > 0 && (
          <div className="mt-10 bg-accent-orange/20 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dog.videoLinks.map((videoLink, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <video 
                    controls 
                    className="w-full h-auto"
                    poster={dog.image} // Verwende das Hauptbild des Hundes als Poster
                  >
                    <source src={videoLink} type="video/mp4" />
                    Dein Browser unterstützt keine Videos.
                  </video>
                  <p className="mt-2 text-sm text-gray-600 bg-white p-2 rounded-b-lg">{dog.name} - Video {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Bildergalerie */}
        <div className="mt-10 bg-secondary/30 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Bildergalerie</h3>
          {allImages.length > 1 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
              {allImages.map((image, index) => (
                <div 
                  key={index}
                  className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 transform ${
                    currentImageIndex === index ? 'ring-4 ring-primary scale-105' : 'hover:scale-105'
                  }`}
                  onClick={() => handleImageChange(index)}
                >
                  <img 
                    src={image} 
                    alt={`${dog.name} - Bild ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
          <div className="mt-4 rounded-xl overflow-hidden shadow-lg relative">
            <img 
              src={allImages[currentImageIndex]} 
              alt={`${dog.name} - Großansicht`}
              className="w-full max-h-[500px] object-contain bg-gray-100"
            />
            
            {/* Navigationspfeile */}
            {allImages.length > 1 && (
              <>
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md transition-all duration-300"
                  onClick={goToPreviousImage}
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md transition-all duration-300"
                  onClick={goToNextImage}
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Bildindikator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-3 py-1 rounded-full text-sm text-gray-700">
                  {currentImageIndex + 1} / {allImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DogDetail;
