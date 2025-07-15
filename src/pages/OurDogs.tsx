import { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, PawPrint, Home, ChevronDown, Download, Phone, X } from 'lucide-react';
import SEO from '@/components/SEO';
import DogCard from '@/components/DogCard';
import { useScrollToTop } from '@/hooks/useScrollToTop';

// Import dogs data from CMS
import dogsData from '@/data/dogs.json';

const OurDogs = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('sponsorships');
  const navigate = useNavigate();
  const [showPatronageModal, setShowPatronageModal] = useState(false);
  
  // Verwende den zentralen ScrollToTop-Hook
  useScrollToTop();
  
  // Öffne das Modal statt das PDF
  const openPatronageForm = useCallback(() => {
    setShowPatronageModal(true);
    // Verhindere das Scrollen im Hintergrund
    document.body.style.overflow = 'hidden';
  }, []);
  
  // Schließe das Modal
  const closePatronageModal = useCallback(() => {
    setShowPatronageModal(false);
    // Erlaube Scrollen wieder
    document.body.style.overflow = 'auto';
  }, []);
  
  // Refs für die Scroll-Animation
  const sponsorshipsRef = useRef(null);

  // Entferne den redundanten useEffect für window.scrollTo
  useEffect(() => {
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [location]);

  const scrollToSection = useCallback((section) => {
    setActiveSection(section);
    if (section === 'sponsorships') {
      sponsorshipsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Use dogs data from CMS instead of hardcoded array
  const sponsorshipDogs = dogsData;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Unsere Hunde und Patenschaften"
        description="Übernimm eine Patenschaft, um einem Straßenhund zu helfen. Hier findest du Hunde, die Unterstützung brauchen."
        keywords="Hund adoptieren, Straßenhund, Hundepatenschaft, Straßenhunde, Tierschutzhund"
      />
      <Navbar />
      
      {/* Patenschafts-Modal */}
      {showPatronageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-primary">Patenschaft übernehmen</h3>
              <button
                onClick={closePatronageModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Vielen Dank für dein Interesse an einer Patenschaft! Du kannst uns gerne direkt kontaktieren:
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-primary" />
                  <span className="text-sm">+49 (0) 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✉️</span>
                  <span className="text-sm">patenschaft@famfordogs.com</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                Wir melden uns schnellstmöglich bei dir und besprechen alles Weitere!
              </p>
            </div>
          </div>
        </div>
      )}
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          
          {/* Sponsorships Section */}
          <section ref={sponsorshipsRef} className="mb-20 py-8 bg-primary/10 rounded-2xl px-6">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Patenschaften</h2>
              <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
                Mit einer Patenschaft kannst du einen bestimmten Hund unterstützen, ohne ihn zu adoptieren. 
                Deine regelmäßige Spende hilft uns, die Kosten für Futter, medizinische Versorgung und Unterbringung zu decken.
              </p>
              <p className="text-gray-700 mb-8 font-futura text-sm sm:text-base">
                Als Pate bekommst du regelmäßige Updates über deinen Schützling und kannst ihn jederzeit besuchen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sponsorshipDogs.map((dog) => (
                  <DogCard
                    key={dog.id}
                    id={dog.id}
                    name={dog.name}
                    age={dog.age}
                    breed={dog.breed}
                    description={dog.description}
                    image={dog.image}
                    needs={dog.needs}
                    sponsors={dog.sponsors}
                    maxSponsors={dog.maxSponsors}
                    onPatronageClick={openPatronageForm}
                  />
                ))}
              </div>
            </div>
            
            {/* Adoptions Section */}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurDogs;
