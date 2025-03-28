import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PawPrint, Map, Heart, Scissors, Utensils, Stethoscope, Play, Instagram, Linkedin, Mail, X } from 'lucide-react';

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Refs für die Scroll-Sektionen
  const missionRef = useRef(null);
  const locationsRef = useRef(null);
  const historyRef = useRef(null);
  const familyRef = useRef(null);
  
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
        // Warte einen Moment, damit die Seite vollständig geladen ist
        setTimeout(() => {
          targetRef.current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location.hash]);

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

  // Team members data
  const boardMembers = [
    {
      name: "Mieke & Fiona",
      role: "Gründerinnen & Vorsitzende",
      bio: "Mieke und Fiona bilden gemeinsam die Doppelspitze des Vereins FAM for Dogs e.V. Beide engagieren sich schon seit vielen Jahren im Tierschutz – seit 2019 setzen sie sich als Team aktiv für Hunde in Not ein. Der Auslöser für ihr gemeinsames Engagement war eine Reise nach Rumänien – ein prägendes Erlebnis für die beiden, das den Wunsch noch mehr zu helfen verstärkt hat. Mieke, von Beruf Rechsanwältin, gründete zunächst den Verein Dogs of Lombok e.V. während eines mehrmonatigen beruflichen Aufenthalts in Indonesien im Jahr 2023. Heute wird der Verein unter dem Namen FAM for Dogs e.V. weitergeführt. Fiona ist Hundephysiotherapeutin und bringt ihre fachliche Expertise in die Betreuung geretteter Hunde ein. Auch ihre eigenen Hunde spiegeln ihre Tierschutzmission wider: Miekes Hund Jack lebte früher auf den Straßen Kuwaits, während Fiona drei Hunde aus Rumänien adoptiert hat – darunter einen mit Handicap. Darüber hinaus haben beide über die Jahre hinweg zahlreiche Pflegehunde bei sich aufgenommen, versorgt und auf ein neues Leben vorbereitet.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    },
    {
      name: "Kira",
      role: "Vorstandsmitglied",
      bio: "Kira ist neben ihrer Arbeit als Autorin, Dozentin und Podcast-Host auch leidenschaftliche Hundemama ihres rumänischen Rüden Homie. Als er 2020 Teil ihrer Familie wurde, war das der ausschlaggebende Punkt, sich mehr im Tierschutz zu engagieren. Erst als stille Spenderin und jetzt als Vorstandsmitglied beim FAM for Dogs e.V.. Kira ist unsere Orga-Queen und kümmert sich unter anderem um unsere Mitglieder und Sponsor:innen.",
      image: "/images/team/Kira.jpeg"
    },
    {
      name: "Chrissy",
      role: "Beisitzerin",
      bio: "Chrissy engagiert sich als Beisitzerin im Vorstand und trägt mit ihrer Expertise zur Weiterentwicklung der Tierschutzprojekte bei.",
      image: "/images/team/WhatsApp Image 2025-03-25 at 23.49.01.jpeg"
    },
    {
      name: "Lara",
      role: "Schatzmeisterin",
      bio: "Lara ist unsere Schatzmeisterin und Head of Finance. Sie hat zwar nicht direkt mit Hunden zu tun, ist aber als beste Freundin von Mieke ein unverzichtbarer Teil des Teams.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    }
  ];

  const activeMembers = [
    {
      name: "Daze",
      role: "Aktives Mitglied",
      bio: "Mehr als 40 Rettungsfälle, mehr als 160 Hunde in unserem Shelter, unzählige Hunde in unserer Feeding-Runde und dir fehlt ein Name? Frag Daze! Sie hat sie alle auf dem Schirm. Jeder Hund, der noch kastriert werden muss, der verletzt ist, der plötzlich sein Futter verweigert, der plötzlich nicht auftaucht – sie bemerkt ihn und organisiert die nötige Hilfe. Ohne sie wären wir verloren. Außerdem zaubert sie aus den schlechtesten Videos, die wir aus Indonesien bekommen beeindruckende Instagram-Stories. Sie ist unersetzlich wenn es darum geht, die Hunde sichtbar zu machen.",
      image: "/Daze/WhatsApp Image 2025-03-26 at 15.08.17.jpeg"
    },
    {
      name: "Hanna",
      role: "Designerin",
      bio: "Mit langjähriger Erfahrung in der Werbebranche sorgt Hanna für die visuelle Identität von FAM for Dogs. Ihr Auge fürs Detail und Gespür für Gestaltung trägt unsere Botschaft und die wichtige Arbeit für den Tierschutz in die Welt.",
      image: "/images/team/Hanna.jpeg"
    },
    {
      name: "Diego",
      role: "Developer",
      bio: "Als leidenschaftlicher Programmierer und Hundeliebhaber vereint Diego seine technischen Fähigkeiten mit seiner Liebe zu Vierbeinern. Er sorgt dafür, dass unsere digitale Präsenz reibungslos funktioniert und unsere Botschaft effektiv in die Online-Welt getragen wird. In seiner Freizeit verbringt er gerne Zeit mit seinem Hund Lucky und engagiert sich für die Rechte und das Wohlbefinden von Hunden.",
      image: "/Diego/Diego:Lucky.jpg"
    }
  ];

  const lombokTeam = [
    {
      name: "Dani",
      role: "Team Lombok",
      bio: "Unser Engel von Lombok. Dani lebt für die Tiere und setzt sich mit unermüdlicher Hingabe für deren Wohl ein. Als der alte Shelter auf Lombok aufgrund von Drohungen aus der Nachbarschaft schließen musste, zögerte sie nicht: Kurzerhand wurde ihr eigenes Zuhause zum neuen Shelter. Wohnzimmer, Garten, Küche, Schlafzimmer, Wintergarten, alle Räume werden nun von Hunden und Katzen und auch von Dani bewohnt. 160 Hunde werden von Dani und ihrer Freundin Rey täglich versorgt. Ob Dani jemals schläft, weiß niemand. Denn jeder Notfall, jede Rettung, jeder Tierarztbesuch, jeder Kastrationstag wird von Dani persönlich organisiert. Sie ist nicht nur eine Tierschützerin, sondern ein wahrer Engel auf Erden.",
      image: "/Dani/WhatsApp Image 2025-03-27 at 23.41.16.jpeg"
    },
    {
      name: "Riani",
      role: "Team Lombok",
      bio: "Riani unterstützt unser Team auf Lombok und hilft bei der Versorgung und Betreuung der Straßenhunde.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    },
    {
      name: "Rita",
      role: "Team Lombok",
      bio: "Rita ist Teil unseres Teams auf Lombok und engagiert sich für das Wohl der Straßenhunde.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    },
    {
      name: "Rey",
      role: "Team Lombok",
      bio: "Rey unterstützt unser Team auf Lombok und trägt zur Verbesserung der Lebensbedingungen der Straßenhunde bei.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    },
    {
      name: "Vito",
      role: "Team Lombok",
      bio: "Vito ist der Sohn der Hausherrin Dani und wuchs umgeben von Tieren auf. Tief beeinflusst von der selbstlosen Liebe seiner Mutter zu allen Lebewesen, entwickelte er selbst ein großes Herz für Tiere. Im Laufe der Jahre hat er schon mehreren Hunden ein liebevolles Zuhause gegeben und kümmert sich mit großer Hingabe um die Hunde und Katzen in Shelter. Vito ist außerdem unser zuverlässiger Fahrer und derjenige, der unsere komplizierten Hunde-Rettungen durchführt.",
      image: "/vito/WhatsApp Image 2025-03-27 at 23.43.56.jpeg"
    },
    {
      name: "Aris",
      role: "Indonesiens Allround-Talent",
      bio: "Aris ist ein Mann mit vielen Talenten. Hunde sind für ihn nicht nur Haustiere, sondern treue Begleiter, die seine Kindheit bereicherten und auch heute noch eine wichtige Rolle in seinem Leben spielen. Sie waren immer Teil seiner Familie und standen als Beschützer an seiner Seite, vor allem für seine Tochter. Aris lebt mit seiner Familie in Lombok, stammt aber ursprünglich aus Flores.",
      image: "/Aris/WhatsApp Image 2025-03-27 at 23.54.21.jpeg"
    }
  ];

  const romaniaTeam = [
    {
      name: "Team Rumänien",
      role: "Wird bald ergänzt",
      bio: "Unser Team in Rumänien wird in Kürze hier vorgestellt.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    }
  ];

  // Function to render team members
  const renderTeamMembers = (members) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-16">
        {members.map((member, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative image-hover">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 hover:scale-105"
                style={
                  member.name === "Kira" ? { objectPosition: "center 20%" } : 
                  member.name === "Hanna" ? { objectPosition: "center 20%" } : 
                  member.name === "Mieke & Fiona" ? { objectPosition: "center 20%" } : 
                  {}
                }
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-sm sm:text-xl font-semibold font-futura">{member.name}</h3>
                <p className="text-white/80 text-xs sm:text-sm font-futura">{member.role}</p>
              </div>
            </div>
            
            <div className="p-3 sm:p-6">
              <p className="text-gray-700 mb-4 font-futura text-xs sm:text-base">{member.bio}</p>
              
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="text-primary hover:text-accent-blue transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a 
                  href="#" 
                  className="text-primary hover:text-accent-blue transition-colors"
                  aria-label={`Instagram-Profil von ${member.name}`}
                >
                  <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8 font-glorious">Über Uns</h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 font-futura">
            FAM for Dogs e.V. setzt sich für die Rettung und Vermittlung von Hunden in Not ein. Wir glauben, dass jeder Hund ein liebevolles Zuhause verdient.
          </p>
          
          {/* Unsere Mission */}
          <div ref={missionRef} className="mb-12 sm:mb-16 py-12 bg-primary/10 rounded-3xl px-6 sm:px-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Unsere Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              <div className="max-h-[400px] sm:max-h-none">
                <img 
                  src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23.jpeg" 
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
              Wir sind an verschiedenen Standorten aktiv, um Hunden in Not zu helfen. Unsere Hauptprojekte befinden sich in Lombok (Indonesien) und Rumänien, wo wir eng mit lokalen Partnern zusammenarbeiten.
            </p>
            
            {/* Lombok Section */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center mb-4">
                <Map size={24} className="text-accent-green mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-primary font-glorious">Lombok, Indonesien</h3>
              </div>
              <div className="pl-4 sm:pl-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-3 sm:mb-4">
                      <Scissors size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Kastrationsprojekte</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Regelmäßige Kastrationsprojekte, um die Population der Straßenhunde nachhaltig zu reduzieren.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
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
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-3 sm:mb-4">
                      <Heart size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Fütterungstouren</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Regelmäßige Touren, um Straßenhunde mit Nahrung zu versorgen und ihren Gesundheitszustand zu überwachen.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-3 sm:mb-4">
                      <PawPrint size={20} className="text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-futura">Bildungsarbeit</h4>
                    <p className="text-gray-600 font-futura text-sm sm:text-base">
                      Aufklärung der lokalen Bevölkerung über verantwortungsvolle Tierhaltung und den respektvollen Umgang mit Straßenhunden.
                    </p>
                  </div>
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
            
            {/* Photo Gallery */}
            <div className="mb-12 sm:mb-16">
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
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Video Section */}
            <div className="mb-12 sm:mb-16">
              <div className="text-center mb-6 sm:mb-10">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 font-glorious">Unsere Arbeit vor Ort</h3>
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
          </div>
          
          {/* Unsere Geschichte */}
          <div ref={historyRef} className="mb-12 sm:mb-16 py-12 bg-accent-green/15 rounded-3xl px-6 sm:px-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Unsere Geschichte</h2>
            <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
              FAM for Dogs e.V. wurde 2018 von einer Gruppe leidenschaftlicher Tierliebhaber gegründet, die die Notwendigkeit einer engagierten Tierschutzorganisation in unserer Gemeinschaft erkannten. Was als kleine Initiative mit nur wenigen Freiwilligen begann, ist zu einer florierenden Organisation mit über 50 aktiven Freiwilligen und Hunderten erfolgreicher Vermittlungen pro Jahr gewachsen.
            </p>
            <p className="text-gray-700 font-futura text-sm sm:text-base">
              Unsere Reise war voller Herausforderungen, aber die Freude, einen Hund sein Für-immer-Zuhause finden zu sehen, macht alles lohnenswert. Wir erweitern kontinuierlich unsere Programme und Dienstleistungen, um mehr Hunden in Not zu helfen und die Öffentlichkeit über verantwortungsvolle Tierhaltung aufzuklären.
            </p>
          </div>
          
          {/* Unsere FAMily */}
          <div ref={familyRef} className="mb-12 sm:mb-16 py-12 bg-accent-pink/15 rounded-3xl px-6 sm:px-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Unsere FAMily</h2>
            
            <h3 className="text-xl font-bold text-primary mb-4 font-glorious">Vorstand</h3>
            {renderTeamMembers(boardMembers)}
            
            <h3 className="text-xl font-bold text-primary mb-4 font-glorious">Aktive Mitglieder</h3>
            {renderTeamMembers(activeMembers)}
            
            <h3 className="text-xl font-bold text-primary mb-4 font-glorious">Unser Team vor Ort auf Lombok</h3>
            {renderTeamMembers(lombokTeam)}
            
            <h3 className="text-xl font-bold text-primary mb-4 font-glorious">Unser Team vor Ort in Rumänien</h3>
            {renderTeamMembers(romaniaTeam)}
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 flex flex-col justify-center bg-primary">
                  <h2 className="text-3xl font-bold text-white mb-6 font-glorious">Werde Teil unseres Teams</h2>
                  <p className="text-white/80 mb-6 font-futura">
                    Wir suchen immer nach engagierten Menschen, die unsere Leidenschaft für Tierschutz teilen. 
                    Ob als Spender, Helfer vor Ort oder Unterstützer von zu Hause aus – jeder kann einen Beitrag leisten.
                  </p>
                  <a 
                    href="/volunteer" 
                    className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg inline-block w-fit font-futura"
                  >
                    Mitmachen
                  </a>
                </div>
                <div className="bg-cover bg-center h-full min-h-[300px]" style={{ backgroundImage: 'url("/images/HeroImage.png")' }}></div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4 font-glorious">Ehrenamtliche Helfer</h3>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl font-futura">
              Neben unserem Kernteam unterstützen uns viele ehrenamtliche Helfer bei unserer Arbeit. 
              Ohne ihr Engagement wäre unsere Arbeit nicht möglich. Wir sind dankbar für jeden, der 
              sich für unsere Mission einsetzt.
            </p>
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
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Platzhalter-URL, bitte durch die tatsächliche Video-URL ersetzen
                title="FAM for Dogs Video"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
