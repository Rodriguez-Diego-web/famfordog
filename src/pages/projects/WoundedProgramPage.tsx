import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, PawPrint, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WoundedProgramPage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-secondary/10 py-16 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 opacity-5">
            <PawPrint size={200} className="text-primary" />
          </div>
          <div className="absolute -bottom-16 -left-16 opacity-5">
            <PawPrint size={200} className="text-primary" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-futura">
              <ArrowLeft size={16} className="mr-2" />
              Zurück zu allen Projekten
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-glorious">
                Wounded Program
              </h1>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
              <p className="text-gray-700 text-lg md:text-xl mb-8 font-futura">
                Unser Wounded Program kümmert sich um verletzte und kranke Straßentiere. 
                Wir bieten medizinische Versorgung, Rehabilitation und ein sicheres Umfeld für ihre Genesung.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {/* Hero Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg col-span-1 md:col-span-2 lg:col-span-2 h-80">
                <img 
                  src="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.25 (2).jpeg" 
                  alt="Wounded Program - Hauptbild" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="grid grid-cols-1 gap-4 h-80">
                <div className="rounded-xl overflow-hidden shadow-lg h-[48%]">
                  <img 
                    src="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.24 (6).jpeg" 
                    alt="Wounded Program - Detailbild 1" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-[48%]">
                  <img 
                    src="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.24 (2).jpeg" 
                    alt="Wounded Program - Detailbild 2" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Introduction Section */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-futura">Hilfe für die Schwächsten</h2>
              <p className="text-gray-700 mb-4 font-futura">
                Unser Wounded Program ist eine Rettungslinie für verletzte, kranke und misshandelte Straßentiere. 
                Wir bieten medizinische Notfallversorgung, langfristige Behandlung und Rehabilitation für Tiere, 
                die ohne unsere Hilfe keine Überlebenschance hätten.
              </p>
              <p className="text-gray-700 font-futura">
                Von Unfallverletzungen über Krankheiten bis hin zu Misshandlungen – wir sind für die Tiere da, 
                wenn sie uns am dringendsten brauchen.
              </p>
            </div>

            {/* Case Studies */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-futura">Unsere Patienten</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Notfallversorgung</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Viele unserer Patienten kommen mit akuten Verletzungen zu uns – oft nach Unfällen, 
                    Kämpfen oder durch menschliche Gewalt. Unser Team reagiert schnell mit:
                  </p>
                  <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2 font-futura">
                    <li>Sofortiger Schmerzlinderung</li>
                    <li>Wundversorgung und Notfallchirurgie</li>
                    <li>Antibiotika gegen Infektionen</li>
                    <li>Intensivpflege in der kritischen Phase</li>
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.24 (3).jpeg" 
                    alt="Notfallversorgung" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 lg:order-1">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Langzeitbehandlung</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Viele Erkrankungen erfordern eine langfristige Behandlung und Pflege. Wir kümmern uns um:
                  </p>
                  <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2 font-futura">
                    <li>Chronische Erkrankungen wie Hautprobleme und Infektionen</li>
                    <li>Rehabilitation nach Verletzungen</li>
                    <li>Regelmäßige Medikamentengabe und Therapien</li>
                    <li>Spezielle Ernährung für geschwächte Tiere</li>
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                  <img 
                    src="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.26 (1).jpeg" 
                    alt="Langzeitbehandlung" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Rehabilitation und Vermittlung</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Nach der medizinischen Versorgung beginnt der Weg zurück ins Leben:
                  </p>
                  <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2 font-futura">
                    <li>Physiotherapie und Bewegungstraining</li>
                    <li>Verhaltenstherapie für traumatisierte Tiere</li>
                    <li>Sozialisierung und Vorbereitung auf ein neues Zuhause</li>
                    <li>Vermittlung in liebevolle Familien, wenn möglich</li>
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.25 (1).jpeg" 
                    alt="Rehabilitation" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="bg-accent-pink/10 rounded-xl p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-futura">Einblicke in unsere Arbeit</h2>
              <p className="text-gray-700 mb-8 text-center font-futura">
                Sehen Sie selbst, wie wir den Tieren helfen und welche Fortschritte sie machen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.24 (4).jpeg"
                  >
                    <source src="/WOUNDED/WhatsApp Video 2025-03-27 at 22.56.24.mp4" type="video/mp4" />
                    Ihr Browser unterstützt das Video-Tag nicht.
                  </video>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.24 (5).jpeg"
                  >
                    <source src="/WOUNDED/WhatsApp Video 2025-03-27 at 22.56.25 (4).mp4" type="video/mp4" />
                    Ihr Browser unterstützt das Video-Tag nicht.
                  </video>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-secondary/10 rounded-xl p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-futura">Unsere Wirkung</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-4xl font-bold text-secondary mb-2 font-futura">250+</div>
                  <p className="text-gray-700 font-futura">Behandelte Tiere pro Jahr</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-secondary mb-2 font-futura">85%</div>
                  <p className="text-gray-700 font-futura">Erfolgreiche Genesungen</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-secondary mb-2 font-futura">120+</div>
                  <p className="text-gray-700 font-futura">Vermittelte Tiere</p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Hilf uns zu helfen</h2>
              <p className="text-gray-700 mb-6 font-futura">
                Unsere medizinische Versorgung ist kostenintensiv. Medikamente, Operationen, Spezialfutter und Pflegematerialien 
                werden ständig benötigt. Mit deiner Unterstützung können wir noch mehr Tieren helfen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/spenden" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center font-futura"
                >
                  <Heart size={16} className="mr-2" />
                  Jetzt spenden
                </Link>
                <Link 
                  to="/join-family" 
                  className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded-full font-medium transition-all duration-300 font-futura"
                >
                  Mitglied werden
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-futura">Weitere Projekte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                to="/projects/kastrationsprojekte"
                className="bg-primary/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Kastrationsprojekte</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Unsere Kastrationsprojekte helfen, die Population von Straßentieren zu kontrollieren und Tierleid zu verhindern.
                  </p>
                  <div className="flex items-center text-secondary font-medium">
                    <span>Mehr erfahren</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
              
              <Link 
                to="/projects/fuetterungstouren"
                className="bg-accent-pink/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Fütterungstouren</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Regelmäßige Fütterungstouren versorgen Straßentiere mit Nahrung und Wasser.
                  </p>
                  <div className="flex items-center text-secondary font-medium">
                    <span>Mehr erfahren</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
              
              <Link 
                to="/projects/shelter-lombok"
                className="bg-accent-blue/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Shelter Lombok</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Unser Shelter auf Lombok bietet Straßentieren ein sicheres Zuhause und die Chance auf Adoption.
                  </p>
                  <div className="flex items-center text-secondary font-medium">
                    <span>Mehr erfahren</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WoundedProgramPage;
