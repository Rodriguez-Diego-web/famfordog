import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, PawPrint, Home, ChevronDown, Download } from 'lucide-react';

const OurDogs = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('sponsorships');
  
  // PDF-Download-Funktion
  const openPatronageForm = () => {
    // Öffne PDF in einem neuen Fenster
    window.open('/patenschaftsantrag.pdf', '_blank');
  };
  
  // Refs für die Scroll-Animation
  const sponsorshipsRef = useRef(null);
  const adoptionsRef = useRef(null);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Get hash from URL if present
    const hash = location.hash.replace('#', '');
    if (hash === 'adoptions') {
      setActiveSection('adoptions');
      setTimeout(() => {
        adoptionsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const scrollToSection = (section) => {
    setActiveSection(section);
    if (section === 'sponsorships') {
      sponsorshipsRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'adoptions') {
      adoptionsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Placeholder data for sponsorship dogs
  const sponsorshipDogs = [
    {
      id: 2,
      name: 'Max',
      age: '5 Jahre',
      breed: 'Schäferhund-Mix',
      description: 'Max wurde in einem Tierheim in Rumänien gefunden. Er ist ruhig und anhänglich, benötigt aber spezielle Pflege für seine Hüftprobleme.',
      image: '/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (3).jpeg',
      needs: 'Physiotherapie, Spezialfutter'
    },
    {
      id: 3,
      name: 'Bella',
      age: '2 Jahre',
      breed: 'Terrier-Mix',
      description: 'Bella wurde als Welpe ausgesetzt. Sie ist energiegeladen und liebt Menschen, benötigt aber Training und Sozialisierung.',
      image: '/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (5).jpeg',
      needs: 'Training, Sozialisierung'
    },
    {
      id: 4,
      name: 'Rocky',
      age: '7 Jahre',
      breed: 'Labrador-Mix',
      description: 'Rocky ist ein älterer Hund mit einem sanften Wesen. Er benötigt regelmäßige medizinische Versorgung für seine altersbedingten Beschwerden.',
      image: '/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (7).jpeg',
      needs: 'Medizinische Versorgung, Spezialfutter'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8 font-glorious">Unsere Hunde</h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 font-futura">
            Lernen Sie die Hunde kennen, die wir betreuen und unterstützen. Sie können entweder eine Patenschaft übernehmen oder in Zukunft einen Hund adoptieren.
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-4">
            <button 
              className="px-6 py-3 font-medium text-sm sm:text-base transition-all duration-300 rounded-full bg-secondary text-primary border-2 border-secondary"
              onClick={() => scrollToSection('sponsorships')}
            >
              Patenschaften
            </button>
          </div>
          
          {/* Sponsorships Section */}
          <section ref={sponsorshipsRef} className="mb-20 py-8 bg-primary/10 rounded-2xl px-6">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Patenschaften</h2>
              <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
                Mit einer Patenschaft können Sie einen bestimmten Hund unterstützen, ohne ihn zu adoptieren. 
                Ihre regelmäßige Spende hilft uns, die Kosten für Futter, medizinische Versorgung und Unterbringung zu decken.
              </p>
              <p className="text-gray-700 mb-8 font-futura text-sm sm:text-base">
                Als Pate erhalten Sie regelmäßige Updates über Ihren Schützling und können ihn jederzeit besuchen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sponsorshipDogs.map((dog) => (
                  <div key={dog.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64">
                      <img 
                        src={dog.image} 
                        alt={dog.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-primary/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Patenschaft
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2 font-futura">{dog.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2 text-sm">
                        <span className="mr-4">{dog.age}</span>
                        <span>{dog.breed}</span>
                      </div>
                      <p className="text-gray-700 mb-4 font-futura text-sm">{dog.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Benötigt:</h4>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Heart size={16} className="text-accent-pink mr-2" />
                          <span>{dog.needs}</span>
                        </div>
                      </div>
                      
                      <a 
                        onClick={openPatronageForm}
                        className="inline-block bg-secondary hover:bg-secondary/90 text-primary px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm cursor-pointer"
                      >
                        Pate werden
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl mb-8 sm:mb-12 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4 font-futura">So funktioniert eine Patenschaft</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-accent-green/10 p-4 sm:p-6 rounded-xl shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-accent-green flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2 font-futura">Hund auswählen</h4>
                  <p className="text-gray-600 font-futura text-sm">
                    Wählen Sie einen Hund aus, der Ihnen am Herzen liegt und dessen Geschichte Sie berührt.
                  </p>
                </div>
                
                <div className="bg-accent-pink/10 p-4 sm:p-6 rounded-xl shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-accent-pink flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2 font-futura">Patenschaft abschließen</h4>
                  <p className="text-gray-600 font-futura text-sm">
                    Füllen Sie das Formular aus und wählen Sie den monatlichen Betrag, den Sie spenden möchten.
                  </p>
                </div>
                
                <div className="bg-accent-blue/10 p-4 sm:p-6 rounded-xl shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-accent-blue flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2 font-futura">Updates erhalten</h4>
                  <p className="text-gray-600 font-futura text-sm">
                    Erhalten Sie regelmäßige Updates über Ihren Schützling und sehen Sie, wie Ihre Unterstützung hilft.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Adoptions Section */}
          <section ref={adoptionsRef} className="py-8 bg-accent-blue/15 rounded-2xl px-6">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Adoptionen</h2>
              <div className="bg-white p-6 sm:p-8 rounded-2xl mb-8 shadow-md">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <PawPrint size={24} className="text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2 font-futura">Adoptionen bald verfügbar</h3>
                    <p className="text-gray-700 font-futura text-sm sm:text-base">
                      Wir arbeiten derzeit daran, einen Adoptionsprozess einzurichten, um zukünftig die bestmögliche Vermittlung für unsere Hunde zu gewährleisten. Bald wird es hier die Möglichkeit zur Adoption geben.Wir arbeiten derzeit daran, einen Adoptionsprozess einzurichten, um zukünftig die bestmögliche Vermittlung für unsere Hunde zu gewährleisten. Bald wird es hier die Möglichkeit zur Adoption geben.
                    </p>
                    <p className="text-gray-700 mt-4 font-futura text-sm sm:text-base">
                      In der Zwischenzeit können Sie gerne eine Patenschaft übernehmen oder uns kontaktieren, wenn Sie Interesse an einer zukünftigen Adoption haben.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <button 
                        onClick={() => scrollToSection('sponsorships')}
                        className="bg-secondary hover:bg-secondary/90 text-primary px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm flex items-center"
                      >
                        <Heart size={16} className="mr-2" />
                        Patenschaften ansehen
                      </button>
                      <a 
                        href="/contact" 
                        className="bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm flex items-center"
                      >
                        <Home size={16} className="mr-2" />
                        Kontakt aufnehmen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurDogs;
