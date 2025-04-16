import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, PawPrint, Home, Shield, Gift, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ShelterLombokPage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-accent-blue/30 to-accent-green/30 py-16 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 opacity-10">
            <PawPrint size={200} className="text-accent-blue" />
          </div>
          <div className="absolute -bottom-16 -left-16 opacity-10">
            <PawPrint size={200} className="text-accent-green" />
          </div>
          <div className="absolute top-1/3 left-1/4 opacity-5 animate-pulse">
            <Heart size={80} className="text-accent-blue" />
          </div>
          <div className="absolute bottom-1/4 right-1/3 opacity-5 animate-pulse" style={{ animationDelay: '1s' }}>
            <Heart size={60} className="text-accent-green" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-futura bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <ArrowLeft size={16} className="mr-2" />
              Zurück zu allen Projekten
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-glorious">
                <span className="text-accent-blue">Shelter</span> <span className="text-primary">auf</span> <span className="text-accent-green">Lombok</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-green mb-8"></div>
              <p className="text-gray-700 text-lg md:text-xl mb-8 font-futura bg-white/70 p-4 rounded-xl shadow-sm">
                Ein sicherer Ort für 160 gerettete Seelen
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 relative">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
            <div className="absolute -right-24 top-1/4">
              <PawPrint size={200} className="text-accent-blue" />
            </div>
            <div className="absolute -left-24 bottom-1/4">
              <PawPrint size={200} className="text-accent-green" />
            </div>
          </div>
          
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-block bg-gradient-to-r from-accent-blue to-accent-green p-1 rounded-xl mb-6">
                  <h2 className="text-3xl font-bold text-primary px-6 py-2 bg-white rounded-lg font-futura">Ein besonderer Ort für besondere Hunde</h2>
                </div>
                <p className="text-gray-700 mb-4 font-futura">
                  Auf der indonesischen Insel Lombok unterstützen wir einen ganz besonderen Shelter unserer Partner-Organisation Popi Foundation. Hier finden rund 160 Hunde ein neues Zuhause – Hunde, die zuvor ausgesetzt, misshandelt, verletzt oder dem Tod überlassen wurden. Viele kamen als hilflose Welpen, die noch kein Auge geöffnet hatten, andere wurden angefahren, angeschossen, mit Macheten verletzt oder schlimmeres.
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Im Shelter leben die Hunde in kleinen Rudeln – versorgt, gefüttert und vor allem geliebt. Ein ganz besonderes Herzstück dieses Ortes ist Rey, unsere Hundeflüsterin. Sie lebt mit einem Teil der Hunde direkt zusammen, pflegt sie mit selbst entwickelten Kräutertinkturen und Ölen und schenkt ihnen genau das, was sie so lange vermisst haben: Nähe, Vertrauen und Heilung. Für viele traumatisierte Hunde ist sie der erste Mensch, der ihnen wieder zeigt, dass nicht alle Menschen Schmerz bedeuten.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl transform rotate-1 border-4 border-white">
                <img 
                  src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (3).jpeg" 
                  alt="Hunde im Shelter Lombok" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg'; // Fallback image
                  }}
                />
              </div>
            </div>

            {/* Second Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 flex-row-reverse">
              <div>
                <p className="text-gray-700 mb-4 font-futura">
                  Im anderen Teil des Hauses leben Dhany und ihre Tochter. Auch bei ihnen sind die Tiere allgegenwärtig – es gibt keinen Raum ohne Hunde (und auch ein paar Katzen). Alles ist voller Leben und Gewusel, jeder Winkel wird genutzt. Für die Menschen bleibt kaum Platz, aber das macht den Ort so einzigartig: Hier steht das Wohl der Tiere an erster Stelle.
                </p>
                <p className="text-gray-700 font-futura">
                  Wir als Organisation übernehmen fast alle anfallenden Tierarztkosten, finanzieren Medikamente, Impfungen und leisten monatlich Unterstützung für Futter. Durch die enge Zusammenarbeit mit der POPI Foundation sorgen wir dafür, dass aus Notfällen Schützlinge werden – mit einem Zuhause, Liebe und neuer Hoffnung.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl transform -rotate-1 border-4 border-white order-first lg:order-last">
                <img 
                  src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (1).jpeg" 
                  alt="Hunde im Shelter Lombok" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg'; // Fallback image
                  }}
                />
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="inline-block text-3xl font-bold mb-4 font-futura bg-gradient-to-r from-accent-blue to-accent-green text-transparent bg-clip-text">Eindrücke aus dem Shelter</h2>
                <div className="w-48 h-1 mx-auto bg-gradient-to-r from-accent-blue to-accent-green"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.22.jpeg" 
                    alt="Hunde im Shelter" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (5).jpeg" 
                    alt="Hunde im Shelter" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (7).jpeg" 
                    alt="Hunde im Shelter" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (10).jpeg" 
                    alt="Hunde im Shelter" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (11).jpeg" 
                    alt="Hunde im Shelter" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (4).jpeg" 
                    alt="Hunde im Shelter" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* How We Help Section */}
            <div className="bg-gradient-to-r from-accent-blue/20 to-accent-green/20 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-10">
                <Heart size={150} className="text-accent-blue" />
              </div>
              <div className="absolute -bottom-10 -left-10 opacity-10">
                <PawPrint size={150} className="text-accent-green" />
              </div>
              
              <div className="text-center mb-8 relative z-10">
                <h2 className="text-3xl font-bold text-primary mb-4 font-futura">Wie wir helfen</h2>
                <div className="w-32 h-1 mx-auto bg-gradient-to-r from-accent-blue to-accent-green"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-accent-blue">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-accent-blue to-primary flex items-center justify-center mb-4 mx-auto">
                    <Gift size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura text-center">Finanzielle Unterstützung</h3>
                  <p className="text-gray-700 font-futura">
                    Wir übernehmen Tierarztkosten, finanzieren Medikamente und Impfungen und leisten monatliche Unterstützung für Futter.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-accent-green flex items-center justify-center mb-4 mx-auto">
                    <Shield size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura text-center">Schutz und Sicherheit</h3>
                  <p className="text-gray-700 font-futura">
                    Wir sorgen für einen sicheren Ort, an dem die geretteten Hunde in Ruhe leben und sich von ihren Traumata erholen können.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-accent-green">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-accent-green to-accent-blue flex items-center justify-center mb-4 mx-auto">
                    <Home size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura text-center">Ein Zuhause</h3>
                  <p className="text-gray-700 font-futura">
                    Durch die Zusammenarbeit mit der POPI Foundation sorgen wir dafür, dass aus Notfällen Schützlinge werden – mit einem Zuhause, Liebe und neuer Hoffnung.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mb-16 bg-gradient-to-r from-primary/10 to-accent-blue/10 py-12 px-6 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 opacity-5">
                  <Heart size={100} className="text-accent-blue" />
                </div>
                <div className="absolute bottom-10 right-10 opacity-5">
                  <Heart size={100} className="text-accent-blue" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
                  <PawPrint size={200} className="text-primary" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-primary mb-6 font-futura">Unterstützen Sie unser Projekt</h2>
                <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                  Mit Ihrer Hilfe können wir noch mehr für die Hunde im Shelter auf Lombok tun. 
                  Jede Spende trägt dazu bei, die Lebensbedingungen der Tiere zu verbessern und ihnen eine bessere Zukunft zu ermöglichen.
                </p>
                <Link 
                  to="/spenden" 
                  className="bg-gradient-to-r from-primary to-accent-blue text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg inline-block font-futura hover:scale-105 transform"
                >
                  Jetzt spenden
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
                to="/projects/wounded-program"
                className="bg-secondary/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Wounded Program</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Wir kümmern uns um verletzte und kranke Straßentiere und bieten ihnen medizinische Versorgung.
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShelterLombokPage;
