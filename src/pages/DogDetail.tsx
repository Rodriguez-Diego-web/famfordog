import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, ArrowLeft, Calendar, MapPin, PawPrint, MessageCircle, Phone } from 'lucide-react';

// Typ-Definition für einen Hund
interface Dog {
  id: number;
  name: string;
  age: string;
  breed: string;
  description: string;
  image: string;
  needs: string;
  location?: string;
  sex?: string;
  size?: string;
  personality?: string[];
  history?: string;
  medicalInfo?: string;
  suitableFor?: string[];
  notSuitableFor?: string[];
}

const DogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dog, setDog] = useState<Dog | null>(null);
  const [loading, setLoading] = useState(true);

  // Funktion zum Öffnen des Patenschaftsantrags
  const openPatronageForm = () => {
    window.open('/patenschaftsantrag.pdf', '_blank');
  };

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // In einer echten Anwendung würden wir hier die Hundedaten von einer API abrufen
    // Für jetzt simulieren wir das mit einem Timeout
    const loadDogData = () => {
      setLoading(true);
      
      // Simuliere API-Aufruf mit Beispieldaten
      setTimeout(() => {
        // Beispieldaten für Hunde
        const dogsData: Dog[] = [
          {
            id: 1,
            name: "Luna",
            age: "3 Jahre",
            breed: "Mischling",
            description: "Luna ist eine freundliche und verspielte Hündin, die gerne mit Menschen und anderen Hunden zusammen ist. Sie wurde auf den Straßen von Lombok gefunden und in unser Shelter gebracht.",
            image: "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (1).jpeg",
            needs: "Regelmäßige Bewegung, Sozialisierung",
            location: "Shelter Lombok",
            sex: "Weiblich",
            size: "Mittelgroß",
            personality: ["Verspielt", "Sozial", "Liebevoll", "Aktiv"],
            history: "Luna wurde im März 2022 auf den Straßen von Lombok gefunden. Sie war unterernährt und hatte Hautprobleme. Nach intensiver Pflege hat sie sich vollständig erholt und wartet nun auf eine Patenschaft.",
            medicalInfo: "Vollständig geimpft, kastriert, keine bekannten gesundheitlichen Probleme.",
            suitableFor: ["Aktive Menschen", "Familien mit älteren Kindern", "Haushalte mit anderen Hunden"],
            notSuitableFor: ["Sehr kleine Wohnungen ohne Auslauf"]
          },
          {
            id: 2,
            name: "Max",
            age: "5 Jahre",
            breed: "Schäferhund-Mix",
            description: "Max wurde in einem Tierheim in Rumänien gefunden. Er ist ruhig und anhänglich, benötigt aber spezielle Pflege für seine Hüftprobleme.",
            image: "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (3).jpeg",
            needs: "Physiotherapie, Spezialfutter",
            location: "Shelter Rumänien",
            sex: "Männlich",
            size: "Groß",
            personality: ["Ruhig", "Loyal", "Anhänglich", "Intelligent"],
            history: "Max wurde aus einem überfüllten Tierheim in Rumänien gerettet, wo er keine angemessene medizinische Versorgung für seine Hüftprobleme erhielt.",
            medicalInfo: "Behandelte Hüftdysplasie, benötigt regelmäßige Physiotherapie und spezielles Futter für die Gelenke.",
            suitableFor: ["Ruhige Haushalte", "Erfahrene Hundehalter", "Menschen mit Geduld für seine medizinischen Bedürfnisse"],
            notSuitableFor: ["Sehr aktive Familien", "Haushalte mit vielen Treppen"]
          },
          {
            id: 3,
            name: "Bella",
            age: "2 Jahre",
            breed: "Terrier-Mix",
            description: "Bella wurde als Welpe ausgesetzt. Sie ist energiegeladen und liebt Menschen, benötigt aber Training und Sozialisierung.",
            image: "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (5).jpeg",
            needs: "Training, Sozialisierung",
            location: "Shelter Lombok",
            sex: "Weiblich",
            size: "Klein",
            personality: ["Energiegeladen", "Neugierig", "Lernwillig", "Verschmust"],
            history: "Bella wurde als Welpe in einer Kiste am Straßenrand gefunden. Sie hat anfängliche Vertrauensprobleme mit Fremden, aber macht große Fortschritte.",
            medicalInfo: "Vollständig geimpft, kastriert, gesund.",
            suitableFor: ["Aktive Menschen", "Familien mit Geduld für Training", "Haushalte mit gesichertem Garten"],
            notSuitableFor: ["Sehr ruhige, zurückgezogene Menschen", "Haushalte ohne Zeit für Training"]
          },
          {
            id: 4,
            name: "Rocky",
            age: "7 Jahre",
            breed: "Labrador-Mix",
            description: "Rocky ist ein älterer Hund mit einem sanften Wesen. Er benötigt regelmäßige medizinische Versorgung für seine altersbedingten Beschwerden.",
            image: "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (7).jpeg",
            needs: "Medizinische Versorgung, Spezialfutter",
            location: "Shelter Rumänien",
            sex: "Männlich",
            size: "Mittelgroß",
            personality: ["Sanft", "Ausgeglichen", "Ruhig", "Anhänglich"],
            history: "Rocky hat die meiste Zeit seines Lebens auf der Straße verbracht, bevor er von unserem Team gefunden wurde. Trotz seiner harten Vergangenheit ist er ein äußerst freundlicher und geduldiger Hund.",
            medicalInfo: "Altersbedingte Arthritis, benötigt Schmerzmedikation und spezielles Futter für die Gelenke.",
            suitableFor: ["Ruhige Haushalte", "Ältere Menschen", "Geduldige Familien"],
            notSuitableFor: ["Sehr aktive Haushalte", "Familien mit kleinen Kindern"]
          }
        ];
        
        const foundDog = dogsData.find(dog => dog.id === parseInt(id || "0"));
        setDog(foundDog || null);
        setLoading(false);
      }, 500);
    };
    
    loadDogData();
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-32 w-32 bg-primary/20 rounded-full mb-4"></div>
            <div className="h-6 w-48 bg-primary/20 rounded mb-2"></div>
            <div className="h-4 w-64 bg-primary/10 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!dog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Hund nicht gefunden</h1>
            <p className="text-gray-600 mb-8">Der gesuchte Hund konnte leider nicht gefunden werden.</p>
            <button 
              onClick={() => navigate('/our-dogs')}
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
            >
              Zurück zu allen Hunden
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          {/* Zurück-Button */}
          <button 
            onClick={() => navigate('/our-dogs')}
            className="flex items-center text-primary mb-6 hover:underline transition-all duration-300"
          >
            <ArrowLeft size={18} className="mr-2" />
            Zurück zu allen Hunden
          </button>
          
          {/* Hero-Bereich mit Bild und Namen */}
          <div className="bg-primary/5 rounded-3xl overflow-hidden mb-8 sm:mb-12">
            <div className="h-80 md:h-96 relative">
              <img 
                src={dog.image} 
                alt={dog.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 sm:p-8 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 font-glorious">{dog.name}</h1>
                      <div className="flex flex-wrap items-center text-white/90 gap-4 mb-2">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          <span>{dog.age}</span>
                        </div>
                        {dog.location && (
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            <span>{dog.location}</span>
                          </div>
                        )}
                        {dog.breed && (
                          <div className="flex items-center">
                            <PawPrint size={16} className="mr-1" />
                            <span>{dog.breed}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <button 
                      onClick={openPatronageForm}
                      className="bg-secondary hover:bg-secondary/90 text-primary px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center hidden sm:flex"
                    >
                      <Heart size={18} className="mr-2" />
                      Pate werden
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile CTA für kleine Bildschirme */}
          <div className="sm:hidden mb-6">
            <button 
              onClick={openPatronageForm}
              className="bg-secondary hover:bg-secondary/90 text-primary px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center w-full justify-center"
            >
              <Heart size={18} className="mr-2" />
              Pate werden
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Linke Spalte - Hauptinfo */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 font-futura">Über {dog.name}</h2>
                <p className="text-gray-700 mb-6 font-futura">{dog.description}</p>
                
                {dog.history && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary mb-2 font-futura">Geschichte</h3>
                    <p className="text-gray-700 font-futura">{dog.history}</p>
                  </div>
                )}
                
                {dog.medicalInfo && (
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 font-futura">Gesundheitsinformationen</h3>
                    <p className="text-gray-700 font-futura">{dog.medicalInfo}</p>
                  </div>
                )}
              </div>
              
              {/* Persönlichkeit */}
              {dog.personality && dog.personality.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4 font-futura">Persönlichkeit</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dog.personality.map((trait, index) => (
                      <span 
                        key={index} 
                        className="bg-accent-blue/10 text-accent-blue px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Rechte Spalte - Details */}
            <div>
              {/* Geeignet für / Nicht geeignet für */}
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-8">
                <h2 className="text-xl font-bold text-primary mb-4 font-futura">Passt {dog.name} zu dir?</h2>
                
                {dog.suitableFor && dog.suitableFor.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-primary mb-2 font-futura">Geeignet für:</h3>
                    <ul className="list-disc list-inside text-gray-700 font-futura pl-2 space-y-1">
                      {dog.suitableFor.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {dog.notSuitableFor && dog.notSuitableFor.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2 font-futura">Nicht geeignet für:</h3>
                    <ul className="list-disc list-inside text-gray-700 font-futura pl-2 space-y-1">
                      {dog.notSuitableFor.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Benötigt */}
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-8">
                <h2 className="text-xl font-bold text-primary mb-4 font-futura">Besondere Bedürfnisse</h2>
                <div className="flex items-start">
                  <Heart size={20} className="text-accent-pink mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-futura">{dog.needs}</p>
                </div>
              </div>
              
              {/* Kontaktieren */}
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-bold text-primary mb-4 font-futura">Interesse an {dog.name}?</h2>
                <p className="text-gray-700 mb-4 font-futura">
                  Bei Fragen zu {dog.name} oder wenn du eine Patenschaft übernehmen möchtest, kontaktiere uns:
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:015679624274" 
                    className="bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center w-full justify-center"
                  >
                    <Phone size={18} className="mr-2" />
                    015679 624 274
                  </a>
                  <a 
                    href="/emergency-report" 
                    className="bg-accent-pink/10 hover:bg-accent-pink/20 text-accent-pink px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center w-full justify-center"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    Nachricht senden
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DogDetail;
