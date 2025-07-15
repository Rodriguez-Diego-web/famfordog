import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JoinTeamSection from '@/components/JoinTeamSection';
import { PawPrint, Map, Heart, Scissors, Utensils, Stethoscope, Play, Instagram, Linkedin, Mail, X, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import SEO from '@/components/SEO';
import { loadTeamMembersByCategory, type TeamMember } from '@/lib/cms';

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Refs für die Scroll-Sektionen
  const missionRef = useRef(null);
  const locationsRef = useRef(null);
  const historyRef = useRef(null);
  const familyRef = useRef(null);
  
  // State für Team-Daten
  const [boardMembers, setBoardMembers] = useState<TeamMember[]>([]);
  const [activeMembers, setActiveMembers] = useState<TeamMember[]>([]);
  const [lombokTeam, setLombokTeam] = useState<TeamMember[]>([]);
  const [romaniaTeam, setRomaniaTeam] = useState<TeamMember[]>([]);
  const [vetTeam, setVetTeam] = useState<TeamMember[]>([]);
  const [teamLoading, setTeamLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  
  // Lade Team-Daten
  useEffect(() => {
    const loadTeamData = async () => {
      try {
        const [board, active, lombok, romania, vets] = await Promise.all([
          loadTeamMembersByCategory('Vorstand'),
          loadTeamMembersByCategory('Aktive Mitglieder'),
          loadTeamMembersByCategory('Lombok Team'),
          loadTeamMembersByCategory('Rumänien Team'),
          loadTeamMembersByCategory('Tierärzte')
        ]);

        setBoardMembers(board);
        setActiveMembers(active);
        setLombokTeam(lombok);
        setRomaniaTeam(romania);
        setVetTeam(vets);
      } catch (error) {
        console.error('Fehler beim Laden der Team-Daten:', error);
      } finally {
        setTeamLoading(false);
      }
    };

    loadTeamData();
  }, []);
  
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Prüfe, ob ein Hash in der URL ist und scrolle zur entsprechenden Sektion
    if (location.hash) {
      const hash = location.hash.substring(1); // Entferne das # vom Anfang
      const targetRef = {
        'mission': missionRef,
        'locations': locationsRef,
        'history': historyRef,
        'family': familyRef
      }[hash];
      
      if (targetRef && targetRef.current) {
        setTimeout(() => {
          targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Romanian dog images
  const romaniaImages = [
    "images/rumaenien/_V9A3209.jpeg",
    "images/rumaenien/_V9A4231.jpeg",
    "images/rumaenien/_V9A4779.jpeg",
    "images/rumaenien/_V9A4884.jpeg",
    "images/rumaenien/_V9A7678.jpeg",
    "images/rumaenien/_V9A9058.jpeg",
    "images/rumaenien/IMG_0146.jpeg",
    "images/rumaenien/IMG_0653.jpeg",
    "images/rumaenien/IMG_8222.jpeg"
  ];

  // Lombok dog images
  const lombokImages = [
    "images/lombook/WhatsApp Image 2025-03-24 at 18.13.22.jpeg",
    "images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (1).jpeg",
    "images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (3).jpeg",
    "images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (5).jpeg",
    "images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (7).jpeg",
    "images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (10).jpeg"
  ];

  // For the image lightbox/modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // For video modal
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Bereits deklarierte State-Variablen werden über useEffect geladen
  const handleImageError = (key: string) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(prevId => (prevId === cardId ? null : cardId));
  };

  // State für Slideshow der Tierärztebilder
  const [currentSlide, setCurrentSlide] = useState(0);

  // Nächstes Bild in der Slideshow anzeigen
  const nextSlide = (imageArray) => {
    setCurrentSlide((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1));
  };

  // Vorheriges Bild in der Slideshow anzeigen
  const prevSlide = (imageArray) => {
    setCurrentSlide((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1));
  };

  // Function to render team members
  const renderTeamMembers = (members) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
        {members.map((member, index) => {
          const cardId = `${member.name}-${index}`;
          const isExpanded = expandedCard === cardId;
          const imageKey = `${member.name}-${index}`;

          return (
            <div
              key={index}
              className="relative rounded-3xl shadow-xl group h-[720px] overflow-hidden cursor-pointer"
              onClick={() => toggleCardExpansion(cardId)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                {imageErrors[imageKey] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500 font-futura text-sm">Bild nicht verfügbar</span>
                  </div>
                ) : (
                  <img
                    src={member.image.startsWith('/') ? member.image : `/${member.image}`}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    style={
                      member.name === "Fiona & Mieke" ? { objectPosition: "center 35%" } : 
                      member.name === "Kira" ? { objectPosition: "center 30%" } : 
                      member.name === "Chrissy" ? { objectPosition: "center 25%" } : 
                      member.name === "Lara" ? { objectPosition: "center 30%" } : 
                      member.name === "Daze" ? { objectPosition: "center 35%" } : 
                      member.name === "Daniel" ? { objectPosition: "center 15%" } : 
                      member.name === "Vanessa" ? { objectPosition: "center 30%" } : 
                      member.name === "Hanna" ? { objectPosition: "center 20%" } : 
                      member.name === "Diego" ? { objectPosition: "center 15%" } : 
                      member.name === "Dhany" ? { objectPosition: "center 25%" } : 
                      member.name === "Riani" ? { objectPosition: "center 1%" } : 
                      member.name === "Rita" ? { objectPosition: "center 1%" } : 
                      member.name === "Rey" ? { objectPosition: "center 25%" } : 
                      member.name === "Vito" ? { objectPosition: "center 35%" } : 
                      member.name === "Aris" ? { objectPosition: "center 30%" } : 
                      member.name === "Monika Bohoni" ? { objectPosition: "center 15%" } : 
                      {}
                    }
                    onError={() => handleImageError(imageKey)}
                  />
                )}
              </div>

              {/* Sliding Content Panel */}
              <div
                className={`absolute bottom-0 left-0 w-full bg-white transition-transform duration-500 ease-in-out p-6 text-left transform 
                  ${isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-250px)]'}
                `}
                style={{ height: 'calc(100% - 20px)' }}
              >
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="text-center pb-4 flex-shrink-0">
                    <h3 className="text-2xl font-bold text-primary font-glorious mb-1">{member.name}</h3>
                    <p className="text-secondary text-base font-semibold font-futura uppercase tracking-wider mb-4">{member.role}</p>
                  </div>

                  {/* Bio */}
                  <div className="flex-grow overflow-y-auto no-scrollbar">
                      <p className="text-gray-700 font-futura text-base leading-relaxed mb-6">
                        {member.bio}
                      </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 flex-shrink-0 pt-2" onClick={(e) => e.stopPropagation()}>
                    {member.name === "Diego" ? (
                      <>
                        <a href="https://rodriguez-web.de" target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 p-3 rounded-full shadow-md hover:shadow-lg" aria-label="Diego's Website"><Globe size={20} /></a>
                        <a href="mailto:diego@rodriguez-web.de" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 p-3 rounded-full shadow-md hover:shadow-lg" aria-label={`Email ${member.name}`}><Mail size={20} /></a>
                        <a href="https://www.instagram.com/diego_rodriguez_web/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 p-3 rounded-full shadow-md hover:shadow-lg" aria-label={`Instagram-Profil von ${member.name}`}><Instagram size={20} /></a>
                      </>
                    ) : member.name === "Fiona & Mieke" ? (
                      <>
                        <a href="mailto:info@famfordogs.com" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 p-3 rounded-full shadow-md hover:shadow-lg" aria-label={`Email ${member.name}`}><Mail size={20} /></a>
                        <a href="https://www.instagram.com/miekewi/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 p-3 rounded-full shadow-md hover:shadow-lg" aria-label="Mieke's Instagram" title="Mieke's Instagram"><Instagram size={20} /></a>
                        <a href="https://www.instagram.com/fiona_bliedtner/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 p-3 rounded-full shadow-md hover:shadow-lg" aria-label="Fiona's Instagram" title="Fiona's Instagram"><Instagram size={20} /></a>
                      </>
                    ) : member.name === "Kira" ? (
                      <>
                        <a href="mailto:info@famfordogs.com" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 p-3 rounded-full shadow-md hover:shadow-lg" aria-label={`Email ${member.name}`}><Mail size={20} /></a>
                        <a href="https://www.instagram.com/kiramariecremer/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 p-3 rounded-full shadow-md hover:shadow-lg" aria-label={`Instagram-Profil von ${member.name}`}><Instagram size={20} /></a>
                      </>
                    ) : member.name === "Chrissy" ? (
                    <>
                      <a href="mailto:info@famfordogs.com" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 p-3 rounded-full shadow-md hover:shadow-lg" aria-label={`Email ${member.name}`}><Mail size={20} /></a>
                      <a href="https://www.instagram.com/_chrissy_242/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 p-3 rounded-full shadow-md hover:shadow-lg" aria-label={`Instagram-Profil von ${member.name}`}><Instagram size={20} /></a>
                    </>
                    ) : ( // Default case for other members
                      <>
                        <a href="mailto:info@famfordogs.com" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 p-3 rounded-full shadow-md hover:shadow-lg" aria-label={`Email ${member.name}`}><Mail size={20} /></a>
                        {/* Assuming a generic or no instagram link for members like Daniel, Vanessa, Hanna, Lara etc. Add if available */}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Über uns"
        description="FAM for Dogs e.V. ist ein Tierschutzverein, der sich für Straßenhunde in Rumänien und Lombok einsetzt. Lerne unser Team, unsere Geschichte und unsere Mission kennen."
        keywords="FAM for Dogs, Tierschutzverein, Tierschutz Team, Tierschutz Rumänien, Tierschutz Lombok, Tierschutz Geschichte, Tierschutz Mission, Tierhilfe Team"
      />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8 font-glorious">Über Uns</h1>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-2/3">
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 font-futura">
              FAM for Dogs e.V. (Fight and Movement for Dogs) setzt sich für nachhaltigen Tierschutz ein und verbessert langfristig die Lebensbedingungen für Straßenhunde vor Ort. Denn für uns kennt Tierschutz keine Grenzen! Und das sind wir.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img src="images/FAM_Logo_Fortitude.png" alt="FAM Logo" className="max-h-48" />
            </div>
          </div>
          
          {/* Unsere Mission */}
          <div ref={missionRef} className="mb-12 sm:mb-16 py-12 bg-primary/10 rounded-3xl px-6 sm:px-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Unsere Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              <div className="max-h-[400px] sm:max-h-none">
                <img 
                  src="images/rumaenien/IMG_0146.jpeg" 
                  alt="Hunde im Shelter" 
                  className="rounded-2xl w-full h-full object-cover shadow-lg max-h-[400px] sm:max-h-none"
                />
              </div>
              <div>
                <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
                  Wir von FAM for Dogs e.V. (Fight and Movement for Dogs) setzen uns für nachhaltigen Tierschutz ein – mit Fokus auf die Verbesserung der Lebensbedingungen für Straßenhunde. Denn für uns kennt Tierschutz keine Grenzen!
                </p>
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
          </div>
          
          {/* Unsere Standorte */}
          <div ref={locationsRef} className="mb-12 sm:mb-16 py-12 bg-accent-blue/15 rounded-3xl px-6 sm:px-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Unsere Standorte</h2>
            <p className="text-gray-700 mb-8 font-futura text-sm sm:text-base">
              Wir sind an verschiedenen Standorten aktiv, um Hunden in Not zu helfen. Unsere Hauptprojekte befinden sich auf Lombok (Indonesien) und Rumänien, wo wir eng mit lokalen Partnern zusammenarbeiten.
            </p>
            
            {/* Lombok Section */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-4">
                <Map size={24} className="text-accent-green mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-primary font-glorious">Lombok, Indonesien</h3>
              </div>
              <div className="pl-4 sm:pl-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => navigate('/projects/kastrationsprojekte')}>
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-3 sm:mb-4">
                      <Scissors size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Kastrationsprojekte</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Regelmäßige Kastrationsprojekte, um die Population der Straßenhunde nachhaltig zu reduzieren.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => navigate('/projects/wounded-program')}>
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-3 sm:mb-4">
                      <Stethoscope size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Medizinische Versorgung</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Medizinische Versorgung, Impfungen und Parasitenbehandlung für Straßenhunde, um ihr Leid zu lindern.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-4 sm:mt-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => navigate('/projects/fuetterungstouren')}>
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-3 sm:mb-4">
                      <Heart size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Fütterungstouren</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Regelmäßige Touren, um Straßenhunde mit Nahrung zu versorgen und ihren Gesundheitszustand zu überwachen.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => navigate('/projects/shelter-lombok')}>
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-3 sm:mb-4">
                      <PawPrint size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">SHELTER LOMBOK</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Wir unterstützen ein Shelter auf Lombok, das rund 160 geretteten Hunden ein neues Zuhause bietet, die zuvor ausgesetzt, misshandelt oder schwer verletzt wurden.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Lombok Shelter Bilder */}
              <div className="mt-8 mb-8">
                <h4 className="text-lg font-semibold text-primary mb-4 font-futura text-center">Eindrücke aus dem Tierheim</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {lombokImages.map((image, index) => (
                    <div 
                      key={index}
                      className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`Lombok Shelter Bild ${index + 1}`} 
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Romania Section */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-4">
                <Map size={24} className="text-accent-pink mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-primary font-glorious">Rumänien</h3>
              </div>
              <div className="pl-4 sm:pl-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => navigate('/projects/kastrationsprojekte')}>
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#fabddc] flex items-center justify-center mb-3 sm:mb-4">
                      <Scissors size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Kastrationsprojekte</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Geplante Kastrationsprojekte, um die Population der Straßenhunde langfristig zu reduzieren.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => navigate('/projects/public-shelter-rumaenien')}>
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#fabddc] flex items-center justify-center mb-3 sm:mb-4">
                      <Heart size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Tierheim-Unterstützung</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Unterstützung eines bestehenden öffentlichen Tierheims mit dem Ziel, die Lebensbedingungen der Hunde zu verbessern.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Photo Gallery */}
              <div className="mt-16 sm:mt-24 mb-12 sm:mb-16">
                <div className="text-center mb-6 sm:mb-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 font-glorious">Unsere Arbeit in Rumänien</h3>
                  <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                  {romaniaImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`Rumänien Projekt Bild ${index + 1}`} 
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Unsere Geschichte */}
          <div ref={historyRef} className="mb-12 sm:mb-16 py-12 bg-accent-green/15 rounded-3xl px-6 sm:px-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Unsere Geschichte</h2>
            
            <h3 className="text-lg font-bold text-primary mb-2 font-glorious">Gründung von Dogs of Lombok e.V.</h3>
            <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
              Manchmal bringt das Schicksal genau die richtigen Menschen zusammen. So auch auf der indonesischen Insel Lombok: Mieke reiste für drei Monate beruflich nach Indonesien – und begegnete dort dem Leid unzähliger Straßenhunde. Als sie einem verletzten Hund begegnete, war für sie klar: Sie möchte aktiv helfen.
            </p>
            <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
              Aus dieser Erfahrung entstand der Verein Dogs of Lombok e.V. – mit dem Ziel, nachhaltigen Tierschutz vor Ort zu ermöglichen. Durch eine glückliche Fügung lernte Mieke die indonesische Tierschützerin Dhany kennen. Aus dieser Begegnung wurde nicht nur eine Freundschaft, sondern auch eine enge Kooperation mit der Popi Foundation. Gemeinsam wurde ein Fütterungs- und Wundversorgungsprogramm sowie ein Kastrationsprojekt aufgebaut und der bereits bestehende Shelter finanziell unterstützt.
            </p>
            <p className="text-gray-700 mb-6 font-futura text-sm sm:text-base">
              In Deutschland bekam das Team starke Unterstützung: Chrissy und Daze stiegen tatkräftig ein, übernahmen das Social Media und die Mitorganisation der Projekte vor Ort. Gemeinsam mit Mieke führten sie nun zu dritt den Verein Dogs of Lombok e.V.
            </p>
            
            <h3 className="text-lg font-bold text-primary mb-2 font-glorious">Aus Dogs of Lombok e.V. wird FAM for Dogs e.V.</h3>
            <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
              Während Mieke sich in Indonesien für Straßenhunde einsetzte, war Fiona seit Jahren in Rumänien im aktiven Tierschutz tätig. Beide erlebten hautnah die Herausforderungen vor Ort und erkannten, wie wichtig es ist, Synergien zu nutzen, um nachhaltige Veränderungen zu bewirken. Aus dieser gemeinsamen Überzeugung entstand die Idee, ihre Kräfte zu bündeln und den Tierschutz auf ein neues Level zu heben.
            </p>
            <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
              Gemeinsam entschieden sie sich die Freundinnen den Verein neu auszurichten. Fiona, Hundephysiotherapeutin mit Tierschutzherz, Kira, deren Hund Homie aus Rumänien stammt, sowie Lara, die Expertin für Organisation und Finanzen, traten als neue Vorstandsmitglieder dazu. Auch Chrissy wurde zum neuen Vorstandsmitglied gewählt.
            </p>
            <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
              In dieser neuen Konstellation entschieden sie sich, den Verein umzugestalten, die Satzung anzupassen und einen neuen Namen zu wählen, der ihre gemeinsame Vision widerspiegelt. Aus Dogs of Lombok e.V. wurde FAM for Dogs e.V. – Fight and Movement for Dogs. Der neue Name steht für den Kampf und die Bewegung, die wir für die Straßentiere weltweit anstoßen wollen.
            </p>
            <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
              Heute ist FAM for Dogs e.V. in Indonesien und Rumänien aktiv. Wir setzen uns für nachhaltigen Tierschutz ein: durch Kastrationen, Versorgung verletzter Tiere, Aufklärungsarbeit und langfristige Strukturen vor Ort.
            </p>
            <p className="text-gray-700 font-futura text-sm sm:text-base">
              FAM for Dogs e.V. steht für Einsatz, Herzblut und den festen Glauben daran, dass Bewegung Veränderung schafft – für jedes einzelne Tier.
            </p>
          </div>
          
          {/* Unsere FAMily */}
          <div ref={familyRef} className="mb-12 sm:mb-16 py-12 bg-accent-pink/15 rounded-3xl px-0 sm:px-10">
            <div className="px-6 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Unsere FAMily</h2>
            <h3 className="text-xl font-bold text-primary mb-4 font-glorious">Vorstand</h3>
            </div>
            {teamLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Lade Team-Daten...</p>
              </div>
            ) : renderTeamMembers(boardMembers)}
            
            <div className="px-6 sm:px-0">
            <h3 className="text-xl font-bold text-primary mb-4 font-glorious">Aktive Mitglieder</h3>
            </div>
            {teamLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Lade Team-Daten...</p>
              </div>
            ) : renderTeamMembers(activeMembers)}
            
            <div className="px-6 sm:px-0">
            <h3 className="text-xl font-bold text-primary mb-4 font-glorious">Unser Team in Rumänien</h3>
            </div>
            {teamLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Lade Team-Daten...</p>
              </div>
            ) : renderTeamMembers(romaniaTeam)}
            
            <div className="px-6 sm:px-0">
            <h3 className="text-xl font-bold text-primary mb-4 font-glorious">Unser Team vor Ort auf Lombok</h3>
            </div>
            {teamLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Lade Team-Daten...</p>
              </div>
            ) : renderTeamMembers(lombokTeam)}
            
            {/* Tierärzte Team auf Lombok */}
            <div className="px-6 sm:px-0">
              <h3 className="text-xl font-bold text-primary mb-4 font-glorious">Tierärzte Team auf Lombok</h3>
            </div>
            {teamLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Lade Team-Daten...</p>
              </div>
            ) : renderTeamMembers(vetTeam)}
            
            <div className="px-6 sm:px-0">
              <JoinTeamSection contained={false} />
            
              <h3 className="text-xl font-bold text-primary mb-4 font-glorious mt-12">Ehrenamtliche Helfer</h3>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl font-futura">
              Neben unserem Kernteam unterstützen uns viele ehrenamtliche Helfer bei unserer Arbeit. 
              Ohne ihr Engagement wäre unsere Arbeit nicht möglich. Wir sind dankbar für jeden, der 
              sich für unsere Mission einsetzt.
            </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Image Lightbox/Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button 
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Schließen"
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Vergrößertes Bild" 
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
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
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              onClick={() => setIsVideoPlaying(false)}
              aria-label="Schließen"
            >
              <X size={24} />
            </button>
            <div className="aspect-video w-full" onClick={(e) => e.stopPropagation()}>
              <video 
                src="/videos/ImageVideo.mp4" 
                controls 
                autoPlay 
                className="w-full h-full rounded-lg"
              >
                Ihr Browser unterstützt kein Video-Tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
