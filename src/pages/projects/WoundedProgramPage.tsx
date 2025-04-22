import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, PawPrint, ChevronRight, Bandage, Activity, Home, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const WoundedProgramPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SEO 
        title="Wounded Program | FAM for Dogs"
        description="Unser Wounded Program kümmert sich um verletzte und kranke Straßentiere. Wir bieten medizinische Versorgung, Rehabilitation und ein sicheres Umfeld für ihre Genesung."
        keywords="Wounded Program, verletzte Straßenhunde, Tierschutz Lombok, Tierschutz Rumänien, Straßenhunde, Tiermedizin, Tierhilfe"
      />
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary/20 to-accent-pink/20 py-16 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 opacity-10">
            <PawPrint size={200} className="text-secondary" />
          </div>
          <div className="absolute -bottom-16 -left-16 opacity-10">
            <PawPrint size={200} className="text-secondary" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-futura">
              <ArrowLeft size={16} className="mr-2" />
              Zurück zu allen Projekten
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-glorious">
                <span className="text-secondary">Wounded</span> <span className="text-primary">Program</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent-pink mb-8"></div>
              <p className="text-gray-700 text-lg md:text-xl mb-8 font-futura">
                Unser Wounded Program kümmert sich um verletzte und kranke Straßentiere. 
                Wir bieten medizinische Versorgung, Rehabilitation und ein sicheres Umfeld für ihre Genesung.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            {/* Hero Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16">
              <div className="md:col-span-8 rounded-xl overflow-hidden shadow-lg h-80">
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
              <div className="md:col-span-4 grid grid-rows-2 gap-4 h-80">
                <div className="rounded-xl overflow-hidden shadow-lg">
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
                <div className="rounded-xl overflow-hidden shadow-lg">
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
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
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

            {/* Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-secondary">
                <div className="bg-secondary/20 p-4 rounded-full mb-4">
                  <Bandage size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-futura">Notfallversorgung</h3>
                <p className="text-gray-700 font-futura">
                  Wir reagieren schnell auf Notfälle und bieten sofortige medizinische Hilfe für verletzte und kranke Straßentiere.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-accent-pink">
                <div className="bg-accent-pink/20 p-4 rounded-full mb-4">
                  <Activity size={32} className="text-accent-pink" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-futura">Langzeitbehandlung</h3>
                <p className="text-gray-700 font-futura">
                  Wir behandeln chronische Erkrankungen und begleiten die Tiere durch langwierige Genesungsprozesse.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-accent-blue">
                <div className="bg-accent-blue/20 p-4 rounded-full mb-4">
                  <Home size={32} className="text-accent-blue" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-futura">Rehabilitation</h3>
                <p className="text-gray-700 font-futura">
                  Wir helfen den Tieren, wieder auf die Beine zu kommen und bereiten sie auf ein neues Leben vor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Unsere Patienten</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto font-futura">
                Jeder Patient hat seine eigene Geschichte. Hier sind einige Beispiele unserer Arbeit und wie wir helfen.
              </p>
            </div>

            {/* Case Study 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Notfallversorgung
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 font-futura">Sofortige Hilfe bei akuten Verletzungen</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Viele unserer Patienten kommen mit akuten Verletzungen zu uns – oft nach Unfällen, 
                    Kämpfen oder durch menschliche Gewalt. Unser Team reagiert schnell mit:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-futura">Sofortige Schmerzlinderung</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-futura">Wundversorgung und Notfallchirurgie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-futura">Antibiotika gegen Infektionen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-futura">Intensivpflege in der kritischen Phase</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:h-auto overflow-hidden">
                  <img 
                    src="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.24 (3).jpeg" 
                    alt="Notfallversorgung" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:h-auto overflow-hidden lg:order-2">
                  <img 
                    src="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.26 (1).jpeg" 
                    alt="Langzeitbehandlung" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="p-8 lg:order-1">
                  <div className="inline-block bg-accent-pink/20 text-accent-pink px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Langzeitbehandlung
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 font-futura">Kontinuierliche Betreuung für chronische Fälle</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Viele Erkrankungen erfordern eine langfristige Behandlung und Pflege. Wir kümmern uns um:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-accent-pink mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-futura">Chronische Erkrankungen wie Hautprobleme und Infektionen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-accent-pink mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-futura">Rehabilitation nach Verletzungen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-accent-pink mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-futura">Regelmäßige Medikamentengabe und Therapien</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-accent-pink mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-futura">Spezielle Ernährung für geschwächte Tiere</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Case Study 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <div className="inline-block bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Rehabilitation
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 font-futura">Der Weg zurück ins Leben</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Nach der medizinischen Versorgung beginnt der Weg zurück ins Leben:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-accent-blue mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-futura">Physiotherapie und Bewegungstraining</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-accent-blue mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-futura">Verhaltenstherapie für traumatisierte Tiere</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-accent-blue mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-futura">Sozialisierung und Vorbereitung auf ein neues Zuhause</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-accent-blue mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-futura">Vermittlung in liebevolle Familien, wenn möglich</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:h-auto overflow-hidden">
                  <img 
                    src="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.25 (1).jpeg" 
                    alt="Rehabilitation" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-gradient-to-r from-secondary/10 to-accent-pink/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Einblicke in unsere Arbeit</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                Schau dir selbst an, wie wir den Tieren helfen und welche Fortschritte sie machen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.24 (4).jpeg"
                  >
                    <source src="/WOUNDED/WhatsApp Video 2025-03-27 at 22.56.24.mp4" type="video/mp4" />
                    Dein Browser unterstützt das Video-Tag nicht.
                  </video>
                </div>
                <h3 className="text-lg font-bold text-primary mt-4 mb-2 font-futura">Notfallrettung eines verletzten Hundes</h3>
                <p className="text-gray-700 font-futura">Sieh, wie wir einem Straßenhund nach einem Unfall helfen konnten.</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.24 (5).jpeg"
                  >
                    <source src="/WOUNDED/WhatsApp Video 2025-03-27 at 22.56.25 (4).mp4" type="video/mp4" />
                    Dein Browser unterstützt das Video-Tag nicht.
                  </video>
                </div>
                <h3 className="text-lg font-bold text-primary mt-4 mb-2 font-futura">Rehabilitation nach schwerer Verletzung</h3>
                <p className="text-gray-700 font-futura">Ein Einblick in den Genesungsprozess eines unserer Schützlinge.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-secondary/20 to-accent-blue/20 rounded-xl p-8 shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-futura">Unsere Wirkung</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl font-bold text-secondary mb-2 font-futura">250+</div>
                  <p className="text-gray-700 font-futura">Behandelte Tiere pro Jahr</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl font-bold text-secondary mb-2 font-futura">85%</div>
                  <p className="text-gray-700 font-futura">Erfolgreiche Genesungen</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl font-bold text-secondary mb-2 font-futura">120+</div>
                  <p className="text-gray-700 font-futura">Vermittelte Tiere</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Hilf uns zu helfen</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-gray-700 mb-8 font-futura">
                Unsere medizinische Versorgung ist kostenintensiv. Medikamente, Operationen, Spezialfutter und Pflegematerialien 
                werden ständig benötigt. Mit deiner Unterstützung können wir noch mehr Tieren helfen.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  to="/spenden" 
                  className="flex items-center bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg inline-block font-futura hover:scale-105 transform"
                >
                  <Heart size={16} className="inline-block mr-2" />
                  Jetzt spenden
                </Link>
                <Link 
                  to="/join-family" 
                  className="flex items-center bg-white border-2 border-secondary text-primary px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-secondary/10 inline-block font-futura"
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
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Weitere Projekte</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                Entdecke unsere anderen Projekte und erfahre, wie wir Straßentieren helfen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                to="/projects/kastrationsprojekte"
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary flex flex-col h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Kastrationsprojekte</h3>
                  <p className="text-gray-700 mb-4 font-futura flex-grow">
                    Unsere Kastrationsprojekte helfen, die Population von Straßentieren zu kontrollieren und Tierleid zu verhindern.
                  </p>
                  <div className="flex items-center text-secondary font-medium mt-auto">
                    <span>Mehr erfahren</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
              
              <Link 
                to="/projects/fuetterungstouren"
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent-pink flex flex-col h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Fütterungstouren</h3>
                  <p className="text-gray-700 mb-4 font-futura flex-grow">
                    Regelmäßige Fütterungstouren versorgen Straßentiere mit Nahrung und Wasser.
                  </p>
                  <div className="flex items-center text-secondary font-medium mt-auto">
                    <span>Mehr erfahren</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
              
              <Link 
                to="/projects/shelter-lombok"
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent-blue flex flex-col h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Shelter Lombok</h3>
                  <p className="text-gray-700 mb-4 font-futura flex-grow">
                    Unser Shelter auf Lombok bietet Straßentieren ein sicheres Zuhause und die Chance auf Adoption.
                  </p>
                  <div className="flex items-center text-secondary font-medium mt-auto">
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
