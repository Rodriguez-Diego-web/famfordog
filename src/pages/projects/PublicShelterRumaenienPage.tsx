import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, PawPrint, Shield, Leaf, Gift, ChevronRight } from 'lucide-react';
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
        <section className="relative overflow-hidden bg-gray-50">
          <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors group">
                  <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-medium">Zurück zu allen Projekten</span>
                </Link>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 font-futura leading-tight">
                  Public Shelter Rumänien: Hilfe für 400 Hunde
                </h1>
                
                <div className="w-20 h-1 bg-accent-green mb-6"></div>
                
                <p className="text-lg text-gray-700 mb-8 font-futura">
                  Wir unterstützen das öffentliche Tierheim in Baia Mare, Rumänien, um die Lebensbedingungen der rund 400 Hunde zu verbessern und ihnen eine hoffnungsvollere Zukunft zu ermöglichen.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/spenden" 
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-90"
                  >
                    <Heart size={18} className="mr-2" />
                    Jetzt spenden
                  </Link>
                  
                  <a 
                    href="#learn-more" 
                    className="inline-flex items-center bg-white text-accent-green border-2 border-accent-green px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-50"
                  >
                    Mehr erfahren
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/rumaenien/_V9A3209.jpeg" 
                    alt="Tierheim in Baia Mare" 
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Facts Section */}
        <section id="learn-more" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-red-200 p-8 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <PawPrint size={32} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Rund 400 Hunde</h3>
                  <p className="text-gray-700 font-futura">
                    Das öffentliche Tierheim in Baia Mare bietet Schutz für etwa 400 Hunde aus dem gesamten Kreis Maramureș.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-200 p-8 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <Heart size={32} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Engagiertes Team</h3>
                  <p className="text-gray-700 font-futura">
                    Trotz begrenzter Mittel setzt sich das Team der Tierschutzorganisation Salvati Animalele täglich für die Tiere ein.
                  </p>
                </div>
              </div>
              
              <div className="bg-secondary/30 p-8 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <Shield size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Langfristige Hilfe</h3>
                  <p className="text-gray-700 font-futura">
                    Wir arbeiten an einer langfristigen Unterstützung und strategischen Weiterentwicklung des Tierheims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Das öffentliche Tierheim in Baia Mare</h2>
                <div className="w-20 h-1 bg-accent-green mb-6"></div>
                <p className="text-gray-700 mb-4 font-futura">
                  Das öffentliche Tierheim in Baia Mare gehört der Stadt, wird jedoch von der Tierschutzorganisation Salvati Animalele geleitet. Hier finden rund 400 Hunde Schutz – Tiere, die aus dem gesamten Kreis Maramureș stammen und oft von Hundefängern eingefangen wurden.
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Doch wie viele öffentliche Tierheime steht auch dieses vor großen Herausforderungen: Die Pflicht, jedes Tier aufzunehmen, führt schnell zu Überfüllung, während die begrenzten finanziellen Mittel kaum ausreichen, um die hohen Kosten für Futter und medizinische Versorgung zu decken.
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Öffentliche Tierheime unterstehen staatlicher Verwaltung und müssen jedes herrenlose oder abgegebene Tier aufnehmen, unabhängig von Kapazitäten oder Ressourcen. Das erschwert eine individuelle Betreuung und stellt das engagierte Team täglich vor schwierige Entscheidungen.
                </p>
                <p className="text-gray-700 font-futura">
                  Fiona ist regelmäßig vor Ort und hat das Tierheim und seine Bewohner tief ins Herz geschlossen. Nun überlegen wir gemeinsam, wie wir es strategisch weiterentwickeln und langfristig unterstützen können – um nicht nur die aktuelle Situation zu verbessern, sondern den Hunden auch eine hoffnungsvollere Zukunft zu ermöglichen.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/rumaenien/_V9A3209.jpeg" 
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
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Eindrücke aus dem Tierheim</h2>
                <div className="w-20 h-1 bg-accent-green mx-auto mb-6"></div>
                <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                  Bilder sagen mehr als tausend Worte. Hier bekommst du einen Einblick in den Alltag der Hunde im öffentlichen Tierheim in Baia Mare.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/rumaenien/_V9A4231.jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/rumaenien/_V9A4779.jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/rumaenien/_V9A4884.jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/rumaenien/_V9A7678.jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/rumaenien/_V9A9058.jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/rumaenien/IMG_0146.jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/rumaenien/IMG_0653.jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/rumaenien/IMG_8208.jpeg" 
                    alt="Hunde im Tierheim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/rumaenien/IMG_8222.jpeg" 
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
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center bg-gradient-to-r from-accent-green/20 to-primary/10 py-12 px-6 rounded-3xl relative overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 opacity-5">
                  <Heart size={100} className="text-accent-green" />
                </div>
                <div className="absolute bottom-10 right-10 opacity-5">
                  <Heart size={100} className="text-primary" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
                  <PawPrint size={200} className="text-accent-green" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-primary mb-6 font-futura">Unterstütze unser Projekt</h2>
                <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                  Mit deiner Hilfe können wir noch mehr für die Hunde im öffentlichen Tierheim in Baia Mare tun. 
                  Jede Spende trägt dazu bei, die Lebensbedingungen der Tiere zu verbessern und ihnen eine bessere Zukunft zu ermöglichen.
                </p>
                <Link 
                  to="/spenden" 
                  className="bg-accent-green text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg inline-flex items-center font-futura hover:opacity-90"
                >
                  <Heart size={18} className="mr-2" />
                  Jetzt spenden
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
              <div className="w-20 h-1 bg-accent-green mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto font-futura">
                Entdecke unsere anderen Projekte und erfahre, wie wir Straßentieren auf der ganzen Welt helfen.
              </p>
            </div>
            
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
                  <div className="flex items-center text-primary font-medium">
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
                to="/projects/shelter-lombok"
                className="bg-accent-blue/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Shelter Lombok</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Unser Shelter auf Lombok bietet Straßentieren ein sicheres Zuhause und die Chance auf Adoption.
                  </p>
                  <div className="flex items-center text-accent-blue font-medium">
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

export default PublicShelterRumaenienPage;
