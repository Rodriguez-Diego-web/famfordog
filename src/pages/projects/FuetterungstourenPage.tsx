import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, PawPrint, Droplets, Utensils, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FuetterungstourenPage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 to-accent-pink/30 py-16 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 opacity-10">
            <PawPrint size={200} className="text-primary" />
          </div>
          <div className="absolute -bottom-16 -left-16 opacity-10">
            <PawPrint size={200} className="text-accent-pink" />
          </div>
          <div className="absolute top-1/3 left-1/4 opacity-5 animate-pulse">
            <Heart size={80} className="text-primary" />
          </div>
          <div className="absolute bottom-1/4 right-1/3 opacity-5 animate-pulse" style={{ animationDelay: '1s' }}>
            <Heart size={60} className="text-accent-pink" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-futura bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <ArrowLeft size={16} className="mr-2" />
              Zurück zu allen Projekten
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-glorious">
                <span className="text-primary">Fütterungs</span><span className="text-accent-pink">touren</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-pink mb-8"></div>
              <p className="text-gray-700 text-lg md:text-xl mb-8 font-futura bg-white/70 p-4 rounded-xl shadow-sm">
                für Straßenhunde
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
              <PawPrint size={200} className="text-accent-pink" />
            </div>
          </div>
          
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-block bg-gradient-to-r from-primary to-accent-pink p-1 rounded-xl mb-6">
                  <h2 className="text-3xl font-bold text-primary px-6 py-2 bg-white rounded-lg font-futura">Lebensnotwendige Unterstützung</h2>
                </div>
                <p className="text-gray-700 mb-4 font-futura">
                  Straßenhunde sind auf die Hilfe von Menschen angewiesen, da sie sich aufgrund von Nahrungsmangel und fehlenden Ressourcen nicht selbst versorgen können. Sowohl in Rumänien als auch auf Lombok leiden diese Tiere unter extremem Nahrungsmangel. Sie sind gezwungen, sich durch Müll zu ernähren, da sie nicht mehr in der Lage sind, wie ihre wilden Vorfahren selbst zu jagen. Diese Hunde sind vom Menschen abhängig, sei es für Nahrung oder sogar für grundlegende medizinische Versorgung.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl transform rotate-1 border-4 border-white">
                <img 
                  src="/images/projects/feeding.jpg" 
                  alt="Fütterungsaktion für Straßenhunde" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg'; // Fallback image
                  }}
                />
              </div>
            </div>

            {/* Second Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="rounded-2xl overflow-hidden shadow-xl transform -rotate-1 border-4 border-white order-first lg:order-last">
                <img 
                  src="/images/projects/feeding2.jpg" 
                  alt="Straßenhunde werden gefüttert" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg'; // Fallback image
                  }}
                />
              </div>
              <div>
                <div className="inline-block bg-gradient-to-r from-accent-pink to-primary p-1 rounded-xl mb-6">
                  <h2 className="text-3xl font-bold text-primary px-6 py-2 bg-white rounded-lg font-futura">Riani - Unser Fütterungsengel</h2>
                </div>
                <p className="text-gray-700 mb-4 font-futura">
                  Auf Lombok hat unser engagierter Fütterungsengel Riani eine wichtige Rolle übernommen. Täglich fährt sie durch die Straßen und versorgt die Hunde mit Futter – oft die einzige Mahlzeit, die sie an diesem Tag bekommen. Ihre regelmäßigen Fütterungsrunden sind von größter Bedeutung, nicht nur um den Tieren das Überleben zu sichern, sondern auch, um auf gesundheitliche Probleme aufmerksam zu werden. Während sie füttert, fallen ihr oft Verletzungen oder gesundheitliche Auffälligkeiten der Hunde auf. Wenn nötig, kann sie Medikamente ins Futter mischen, um den Tieren sofortige Hilfe zu leisten.
                </p>
                <p className="text-gray-700 font-futura">
                  Ein weiteres Problem, mit dem die Straßenhunde auf Lombok zu kämpfen haben, ist die starke Dehydration. Der Zugang zu sauberem Wasser ist für sie nahezu unmöglich, daher verteilt Riani zusätzlich Wasser an den bedürftigen Tieren. Diese einfachen, aber lebenswichtigen Maßnahmen sind entscheidend, um das Überleben der Hunde zu sichern und sie vor Krankheiten und weiteren gesundheitlichen Schäden zu bewahren.
                </p>
              </div>
            </div>

            {/* Rumänien Section */}
            <div className="bg-gradient-to-r from-primary/20 to-accent-pink/30 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-10">
                <Heart size={150} className="text-primary" />
              </div>
              <div className="absolute -bottom-10 -left-10 opacity-10">
                <PawPrint size={150} className="text-accent-pink" />
              </div>
              
              <div className="text-center mb-8 relative z-10">
                <h2 className="text-3xl font-bold text-primary mb-4 font-futura">Unterstützung in Rumänien</h2>
                <div className="w-32 h-1 mx-auto bg-gradient-to-r from-primary to-accent-pink"></div>
              </div>
              
              <div className="relative z-10 bg-white/80 p-6 rounded-xl shadow-md">
                <p className="text-gray-700 font-futura text-center">
                  Auch in Rumänien möchten wir feste Fütterungstouren mit einem Team vor Ort aufbauen, um auch dort einigen Straßenhunden eine verlässliche Versorgung zu ermöglichen.
                </p>
              </div>
            </div>

            {/* How We Help Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="inline-block text-3xl font-bold mb-4 font-futura bg-gradient-to-r from-primary to-accent-pink text-transparent bg-clip-text">Wie wir helfen</h2>
                <div className="w-32 h-1 mx-auto bg-gradient-to-r from-primary to-accent-pink"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-accent-pink flex items-center justify-center mb-4 mx-auto">
                    <Utensils size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura text-center">Regelmäßige Fütterung</h3>
                  <p className="text-gray-700 font-futura text-center">
                    Tägliche Fütterungsrunden versorgen Straßenhunde mit der oft einzigen Mahlzeit des Tages.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-accent-pink">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-accent-pink to-primary flex items-center justify-center mb-4 mx-auto">
                    <Droplets size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura text-center">Wasserversorgung</h3>
                  <p className="text-gray-700 font-futura text-center">
                    Verteilung von sauberem Wasser, um die Dehydration der Straßenhunde zu bekämpfen.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-accent-pink flex items-center justify-center mb-4 mx-auto">
                    <Calendar size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura text-center">Gesundheitsmonitoring</h3>
                  <p className="text-gray-700 font-futura text-center">
                    Während der Fütterungen werden Verletzungen und Krankheiten erkannt und behandelt.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mb-16 bg-gradient-to-r from-primary/10 to-accent-pink/30 py-12 px-6 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 opacity-5">
                  <Heart size={100} className="text-primary" />
                </div>
                <div className="absolute bottom-10 right-10 opacity-5">
                  <Heart size={100} className="text-accent-pink" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
                  <PawPrint size={200} className="text-primary" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-primary mb-6 font-futura">Unterstützen Sie unser Projekt</h2>
                <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                  Mit Ihrer Hilfe können wir noch mehr Straßenhunde regelmäßig mit Nahrung und Wasser versorgen. 
                  Jede Spende trägt dazu bei, das Überleben dieser Tiere zu sichern.
                </p>
                <Link 
                  to="/donate" 
                  className="bg-gradient-to-r from-primary to-accent-pink text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg inline-block font-futura hover:scale-105 transform"
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

export default FuetterungstourenPage;
