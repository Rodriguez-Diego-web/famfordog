import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Scissors, Heart, Map, Utensils, Stethoscope, PawPrint, Play } from 'lucide-react';

const Mission = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  // Romanian dog images
  const romaniaImages = [
    "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.22.jpeg",
    "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (1).jpeg",
    "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (3).jpeg",
    "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (5).jpeg",
    "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (7).jpeg",
    "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (10).jpeg"
  ];

  // Placeholder for Lombok images
  const lombokPlaceholder = Array(6).fill("/images/HeroImage.png");

  // For the image lightbox/modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // For video modal
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8 font-glorious">Unsere Mission</h1>
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 max-w-3xl font-futura">
            Wir von FAM for Dogs e.V. (Fight and Movement for Dogs) setzen uns für nachhaltigen Tierschutz ein – mit Fokus auf die Verbesserung der Lebensbedingungen für Straßenhunde. Denn für uns kennt Tierschutz keine Grenzen!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="max-h-[400px] sm:max-h-none">
              <img 
                src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23.jpeg" 
                alt="Hunde im Shelter" 
                className="rounded-2xl w-full h-full object-cover shadow-lg max-h-[400px] sm:max-h-none"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Unsere Vision</h2>
              <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
                Unsere Vision ist eine Welt, in der Straßenhunde nicht mehr leiden müssen. Wir glauben an einen respektvollen Umgang mit allen Lebewesen und setzen uns dafür ein, dass Straßenhunde ein würdiges Leben führen können.
              </p>
              <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
                Durch nachhaltige Maßnahmen wie Kastrationsprogramme, medizinische Versorgung und Aufklärungsarbeit wollen wir langfristige Lösungen schaffen, anstatt nur Symptome zu bekämpfen.
              </p>
              <p className="text-gray-700 font-futura text-sm sm:text-base">
                Unser Ziel ist es, vor Ort strukturelle Verbesserungen zu schaffen und die lokale Bevölkerung für Tierschutz zu sensibilisieren. Denn nur so kann eine dauerhafte Verbesserung erreicht werden.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 sm:p-8 rounded-2xl mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Unsere Standorte</h2>
            
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center mb-4">
                <Map size={24} className="text-accent-blue mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-primary font-glorious">Lombok</h3>
              </div>
              <div className="pl-4 sm:pl-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-3 sm:mb-4">
                      <Utensils size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Eigenes Shelter</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Unser Shelter bietet Schutz und Versorgung für 160 Hunde, die ohne uns keine Überlebenschance hätten.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-3 sm:mb-4">
                      <Scissors size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Kastrationsprogramm</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Über 1.500 Hunde wurden bereits kastriert, um das Populationswachstum nachhaltig zu kontrollieren.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-3 sm:mb-4">
                      <Stethoscope size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Wounded-Programm</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Medizinische Versorgung, Impfungen und Parasitenbehandlung für Straßenhunde, um ihr Leid zu lindern.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-3 sm:mb-4">
                      <Heart size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Fütterungstouren</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Regelmäßige Touren, um Straßenhunde mit Nahrung zu versorgen und ihren Gesundheitszustand zu überwachen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Map size={24} className="text-accent-blue mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-primary font-glorious">Rumänien</h3>
              </div>
              <div className="pl-4 sm:pl-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#fabddc] flex items-center justify-center mb-3 sm:mb-4">
                      <Heart size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Tierheim-Unterstützung</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Unterstützung eines bestehenden öffentlichen Tierheims mit dem Ziel, die Lebensbedingungen der Hunde zu verbessern.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#fabddc] flex items-center justify-center mb-3 sm:mb-4">
                      <Scissors size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Kastrationsprojekte</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Geplante Kastrationsprojekte, um die Population der Straßenhunde langfristig zu reduzieren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Section - Our Work on Site */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4 font-glorious">Unsere Arbeit vor Ort</h2>
              <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto font-futura mb-6 sm:mb-8 text-sm sm:text-base">
                Erleben Sie einen Einblick in unsere tägliche Arbeit mit den Hunden vor Ort.
                Dieses Video zeigt, mit wie viel Liebe und Hingabe sich unser Team um die Tiere kümmert.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div 
                className="relative w-full max-w-4xl h-[250px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 hover:bg-black/30 transition-colors duration-300">
                  <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-5 rounded-full">
                    <Play className="text-white h-8 w-8 sm:h-10 sm:w-10 fill-white" />
                  </div>
                </div>
                {/* Video thumbnail */}
                <img 
                  src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (2).jpeg" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Lombok Photo Gallery */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4 font-glorious">Unsere Arbeit in Lombok</h2>
              <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto font-futura text-sm sm:text-base">
                Seit 2019 setzen wir uns auf Lombok für bessere Lebensbedingungen der Straßenhunde ein. 
                Hier bekommen Sie einen Einblick in unsere tägliche Arbeit.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
              {lombokPlaceholder.map((img, index) => (
                <div 
                  key={`lombok-${index}`}
                  className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer h-40 sm:h-64"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="absolute inset-0 bg-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full">
                      <PawPrint className="text-white h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="absolute bottom-0 left-0 p-2 sm:p-4">
                      <p className="text-white font-futura text-xs sm:text-sm">Lombok Shelter</p>
                    </div>
                  </div>
                  <img 
                    src={img} 
                    alt={`Lombok Bild ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 font-futura italic">
              Hinweis: Lombok-Bilder werden in Kürze hinzugefügt
            </div>
          </div>
          
          {/* Rumänien Photo Gallery */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4 font-glorious">Unsere Arbeit in Rumänien</h2>
              <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto font-futura text-sm sm:text-base">
                In Rumänien unterstützen wir lokale Tierheime und führen Kastrationsprojekte durch, 
                um langfristig die Lebensbedingungen für Straßenhunde zu verbessern.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
              {romaniaImages.map((img, index) => (
                <div 
                  key={`romania-${index}`}
                  className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer h-40 sm:h-64"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="absolute inset-0 bg-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full">
                      <PawPrint className="text-white h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="absolute bottom-0 left-0 p-2 sm:p-4">
                      <p className="text-white font-futura text-xs sm:text-sm">Rumänisches Tierheim</p>
                    </div>
                  </div>
                  <img 
                    src={img} 
                    alt={`Rumänien Bild ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Join Our Team Section */}
          <div className="mb-8 sm:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Werde Teil unseres Teams</h2>
                <div className="w-16 sm:w-20 h-1 bg-primary mb-4 sm:mb-6"></div>
                <p className="text-gray-700 mb-6 sm:mb-8 font-futura text-sm sm:text-base">
                  Wir suchen immer nach engagierten Menschen, die unsere Leidenschaft für Tierschutz teilen. 
                  Ob als Spender, Helfer vor Ort oder Unterstützer von zu Hause aus – jeder kann einen Beitrag leisten.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a href="/volunteer" className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg font-futura text-center text-sm sm:text-base">
                    Mitmachen
                  </a>
                  <a href="/donate" className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg font-futura text-center text-sm sm:text-base">
                    Spenden
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/Team.jpg" 
                    alt="Unser Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Preview Modal/Lightbox */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div 
                className="max-w-4xl max-h-[80vh] sm:max-h-[90vh] relative cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute -top-10 right-0 text-white hover:text-accent-blue"
                  onClick={() => setSelectedImage(null)}
                >
                  <span className="text-xl sm:text-2xl">✕</span>
                </button>
                <img 
                  src={selectedImage} 
                  alt="Vergrößertes Bild" 
                  className="max-h-[80vh] sm:max-h-[90vh] max-w-full object-contain rounded-md"
                />
              </div>
            </div>
          )}
          
          {/* Video Modal */}
          {isVideoPlaying && (
            <div 
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              onClick={() => setIsVideoPlaying(false)}
            >
              <div 
                className="max-w-4xl w-full relative cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute -top-8 sm:-top-10 right-0 text-white hover:text-accent-blue"
                  onClick={() => setIsVideoPlaying(false)}
                >
                  <span className="text-xl sm:text-2xl">✕</span>
                </button>
                <video 
                  className="w-full rounded-lg"
                  controls
                  autoPlay
                  src="/WhatsApp Video 2025-03-24 at 12.48.12.mp4"
                >
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;
