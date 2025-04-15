import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, PawPrint, Shield, Leaf, Gift } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PublicShelterRumaenienPage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 to-secondary/30 py-16 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 opacity-10">
            <PawPrint size={200} className="text-primary" />
          </div>
          <div className="absolute -bottom-16 -left-16 opacity-10">
            <PawPrint size={200} className="text-secondary" />
          </div>
          <div className="absolute top-1/3 left-1/4 opacity-5 animate-pulse">
            <Heart size={80} className="text-primary" />
          </div>
          <div className="absolute bottom-1/4 right-1/3 opacity-5 animate-pulse" style={{ animationDelay: '1s' }}>
            <Heart size={60} className="text-secondary" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-futura bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <ArrowLeft size={16} className="mr-2" />
              Zurück zu allen Projekten
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-glorious">
                <span className="text-primary">Public</span> <span className="text-secondary">Shelter</span> <span className="text-primary">Rumänien</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-8"></div>
              <p className="text-gray-700 text-lg md:text-xl mb-8 font-futura bg-white/70 p-4 rounded-xl shadow-sm">
                Wir unterstützen das öffentliche Tierheim in Baia Mare, Rumänien, um die Lebensbedingungen der rund 400 Hunde zu verbessern und ihnen eine hoffnungsvollere Zukunft zu ermöglichen.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 relative">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
            <div className="absolute -right-24 top-1/4">
              <PawPrint size={200} className="text-primary" />
            </div>
            <div className="absolute -left-24 bottom-1/4">
              <PawPrint size={200} className="text-secondary" />
            </div>
          </div>
          
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-block bg-gradient-to-r from-primary to-secondary p-1 rounded-xl mb-6">
                  <h2 className="text-3xl font-bold text-primary px-6 py-2 bg-white rounded-lg font-futura">Das öffentliche Tierheim in Baia Mare</h2>
                </div>
                <p className="text-gray-700 mb-4 font-futura">
                  Das öffentliche Tierheim in Baia Mare gehört der Stadt, wird jedoch von der Tierschutzorganisation Salvati Animalele geleitet. Hier finden rund 400 Hunde Schutz – Tiere, die aus dem gesamten Kreis Maramureș stammen und oft von Hundefängern eingefangen wurden. Doch wie viele öffentliche Tierheime steht auch dieses vor großen Herausforderungen: Die Pflicht, jedes Tier aufzunehmen, führt schnell zu Überfüllung, während die begrenzten finanziellen Mittel kaum ausreichen, um die hohen Kosten für Futter und medizinische Versorgung zu decken.
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Öffentliche Tierheime unterstehen staatlicher Verwaltung und müssen jedes herrenlose oder abgegebene Tier aufnehmen, unabhängig von Kapazitäten oder Ressourcen. Das erschwert eine individuelle Betreuung und stellt das engagierte Team täglich vor schwierige Entscheidungen.
                </p>
                <p className="text-gray-700 font-futura">
                  Fiona ist regelmäßig vor Ort und hat das Tierheim und seine Bewohner tief ins Herz geschlossen. Nun überlegen wir gemeinsam, wie wir es strategisch weiterentwickeln und langfristig unterstützen können – um nicht nur die aktuelle Situation zu verbessern, sondern den Hunden auch eine hoffnungsvollere Zukunft zu ermöglichen.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl transform rotate-1 border-4 border-white">
                <img 
                  src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (3).jpeg" 
                  alt="Hunde im Public Shelter Rumänien" 
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
                <h2 className="inline-block text-3xl font-bold mb-4 font-futura bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Eindrücke aus dem Tierheim</h2>
                <div className="w-48 h-1 mx-auto bg-gradient-to-r from-primary to-secondary"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.22.jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (1).jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (5).jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (7).jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (10).jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300 border-4 border-white">
                  <img 
                    src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (11).jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mb-16 bg-gradient-to-r from-primary/10 to-secondary/30 py-12 px-6 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 opacity-5">
                  <Heart size={100} className="text-primary" />
                </div>
                <div className="absolute bottom-10 right-10 opacity-5">
                  <Heart size={100} className="text-primary" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
                  <PawPrint size={200} className="text-primary" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-primary mb-6 font-futura">Unterstützen Sie unser Projekt</h2>
                <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                  Mit Ihrer Hilfe können wir noch mehr für die Hunde im öffentlichen Tierheim in Baia Mare tun. 
                  Jede Spende trägt dazu bei, die Lebensbedingungen der Tiere zu verbessern und ihnen eine bessere Zukunft zu ermöglichen.
                </p>
                <Link 
                  to="/spenden" 
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg inline-block font-futura hover:scale-105 transform"
                >
                  Jetzt spenden
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PublicShelterRumaenienPage;
