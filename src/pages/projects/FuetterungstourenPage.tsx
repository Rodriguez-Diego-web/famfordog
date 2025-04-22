import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, PawPrint, Droplets, Utensils, Calendar, ChevronRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const FuetterungstourenPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SEO 
        title="Fütterungstouren | FAM for Dogs"
        description="Unsere Fütterungstouren versorgen Straßenhunde mit lebenswichtiger Nahrung und Wasser. Erfahre mehr über unsere Arbeit auf Lombok und in Rumänien."
        keywords="Fütterungstouren, Straßenhunde, Tierschutz Lombok, Tierschutz Rumänien, Straßenhunde füttern, Tierhilfe"
      />
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
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-futura">
              <ArrowLeft size={16} className="mr-2" />
              Zurück zu allen Projekten
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-glorious">
                <span className="text-primary">Fütterungs</span><span className="text-accent-pink">touren</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-pink mb-8"></div>
              <p className="text-gray-700 text-lg md:text-xl mb-8 font-futura">
                Regelmäßige Fütterungstouren versorgen Straßentiere mit Nahrung und Wasser – oft die einzige Mahlzeit des Tages.
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
                  src="/images/touren/1.jpeg" 
                  alt="Fütterungsaktion für Straßenhunde" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="md:col-span-4 grid grid-rows-2 gap-4 h-80">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/touren/2.jpeg" 
                    alt="Straßenhunde werden gefüttert" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/touren/3.jpeg" 
                    alt="Fütterung von Straßenhunden" 
                    className="w-full h-full object-cover object-center"
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
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-futura">Lebensnotwendige Unterstützung</h2>
              <div className="w-20 h-1 bg-accent-pink mx-auto mb-6"></div>
              <p className="text-gray-700 mb-4 font-futura">
                Straßenhunde sind auf die Hilfe von Menschen angewiesen, da sie sich aufgrund von Nahrungsmangel und fehlenden Ressourcen nicht selbst versorgen können. Sowohl in Rumänien als auch auf Lombok leiden diese Tiere unter extremem Nahrungsmangel. Sie sind gezwungen, sich durch Müll zu ernähren, da sie nicht mehr in der Lage sind, wie ihre wilden Vorfahren selbst zu jagen.
              </p>
              <p className="text-gray-700 font-futura">
                Diese Hunde sind vom Menschen abhängig, sei es für Nahrung oder sogar für grundlegende medizinische Versorgung.
              </p>
            </div>
          </div>
        </section>

        {/* Riani Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent-pink/10">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:h-auto overflow-hidden lg:order-2">
                  <img 
                    src="/images/touren/3.jpeg" 
                    alt="Riani bei der Fütterung" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/touren/3.jpeg';
                    }}
                  />
                </div>
                <div className="p-8 lg:order-1">
                  <div className="inline-block bg-accent-pink/20 text-accent-pink px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Lombok
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 font-futura">Riani - Unser Fütterungsengel</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Auf Lombok hat unser engagierter Fütterungsengel Riani eine wichtige Rolle übernommen. Täglich fährt sie durch die Straßen und versorgt die Hunde mit Futter – oft die einzige Mahlzeit, die sie an diesem Tag bekommen.
                  </p>
                  <p className="text-gray-700 mb-4 font-futura">
                    Ihre regelmäßigen Fütterungsrunden sind von größter Bedeutung, nicht nur um den Tieren das Überleben zu sichern, sondern auch, um auf gesundheitliche Probleme aufmerksam zu werden. Während sie füttert, fallen ihr oft Verletzungen oder gesundheitliche Auffälligkeiten der Hunde auf. Wenn nötig, kann sie Medikamente ins Futter mischen, um den Tieren sofortige Hilfe zu leisten.
                  </p>
                  <p className="text-gray-700 font-futura">
                    Ein weiteres Problem, mit dem die Straßenhunde auf Lombok zu kämpfen haben, ist die starke Dehydration. Der Zugang zu sauberem Wasser ist für sie nahezu unmöglich, daher verteilt Riani zusätzlich Wasser an den bedürftigen Tieren.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rumänien Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Rumänien
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 font-futura">Unterstützung in Rumänien</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Auch in Rumänien möchten wir feste Fütterungstouren mit einem Team vor Ort aufbauen, um auch dort einigen Straßenhunden eine verlässliche Versorgung zu ermöglichen.
                  </p>
                  <p className="text-gray-700 mb-4 font-futura">
                    Die Situation der Straßenhunde in Rumänien ist besonders prekär. Viele Tiere leben unter schwierigsten Bedingungen und sind auf regelmäßige Fütterungen angewiesen, um zu überleben.
                  </p>
                  <p className="text-gray-700 font-futura">
                    Mit deiner Unterstützung können wir auch hier ein Netzwerk aufbauen, das den Hunden regelmäßige Mahlzeiten und medizinische Grundversorgung bietet.
                  </p>
                </div>
                <div className="lg:h-auto overflow-hidden">
                  <img 
                    src="/images/touren/1.jpeg" 
                    alt="Straßenhunde in Rumänien" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/touren/1.jpeg';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent-pink/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Wie wir helfen</h2>
              <div className="w-20 h-1 bg-accent-pink mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                Unsere Fütterungstouren sind mehr als nur Nahrungsversorgung – sie sind ein Lebensrettungssystem für Straßenhunde.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-primary">
                <div className="bg-primary/20 p-4 rounded-full mb-4">
                  <Utensils size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-futura">Regelmäßige Fütterung</h3>
                <p className="text-gray-700 font-futura">
                  Tägliche Fütterungsrunden versorgen Straßenhunde mit der oft einzigen Mahlzeit des Tages.
                </p>
                <ul className="mt-4 space-y-2 text-left">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Hochwertiges Futter für optimale Nährstoffversorgung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Regelmäßige Routen zu bekannten Aufenthaltsorten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Angepasste Fütterung je nach Bedarf und Alter</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-accent-pink">
                <div className="bg-accent-pink/20 p-4 rounded-full mb-4">
                  <Droplets size={32} className="text-accent-pink" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-futura">Wasserversorgung</h3>
                <p className="text-gray-700 font-futura">
                  Verteilung von sauberem Wasser, um die Dehydration der Straßenhunde zu bekämpfen.
                </p>
                <ul className="mt-4 space-y-2 text-left">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-accent-pink mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Aufstellung von Wasserschalen an strategischen Orten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-accent-pink mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Regelmäßiges Auffüllen und Reinigen der Wasserstellen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-accent-pink mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Besonders wichtig in heißen Klimazonen</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-accent-blue">
                <div className="bg-accent-blue/20 p-4 rounded-full mb-4">
                  <Calendar size={32} className="text-accent-blue" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-futura">Gesundheitsmonitoring</h3>
                <p className="text-gray-700 font-futura">
                  Während der Fütterungen werden Verletzungen und Krankheiten erkannt und behandelt.
                </p>
                <ul className="mt-4 space-y-2 text-left">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-accent-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Regelmäßige Kontrolle des Gesundheitszustands</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-accent-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Verabreichung von Medikamenten im Futter wenn nötig</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-accent-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Identifizierung von Tieren, die dringend medizinische Hilfe benötigen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-primary/20 to-accent-pink/20 rounded-xl p-8 shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-futura">Unsere Wirkung</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl font-bold text-accent-pink mb-2 font-futura">100+</div>
                  <p className="text-gray-700 font-futura">Hunde täglich versorgt</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl font-bold text-accent-pink mb-2 font-futura">2</div>
                  <p className="text-gray-700 font-futura">Länder mit Fütterungstouren</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl font-bold text-accent-pink mb-2 font-futura">365</div>
                  <p className="text-gray-700 font-futura">Tage im Jahr im Einsatz</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent-pink/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Hilf uns zu helfen</h2>
              <div className="w-20 h-1 bg-accent-pink mx-auto mb-6"></div>
              <p className="text-gray-700 mb-8 font-futura">
                Mit deiner Hilfe können wir noch mehr Straßenhunde regelmäßig mit Nahrung und Wasser versorgen. 
                Jede Spende trägt dazu bei, das Überleben dieser Tiere zu sichern.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  to="/spenden" 
                  className="flex items-center bg-gradient-to-r from-primary to-accent-pink text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg inline-block font-futura hover:scale-105 transform"
                >
                  <Heart size={16} className="inline-block mr-2" />
                  Jetzt spenden
                </Link>
                <Link 
                  to="/join-family" 
                  className="flex items-center bg-white border-2 border-accent-pink text-primary px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-accent-pink/10 inline-block font-futura"
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
              <div className="w-20 h-1 bg-accent-pink mx-auto mb-6"></div>
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
                  <div className="flex items-center text-primary font-medium mt-auto">
                    <span>Mehr erfahren</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
              
              <Link 
                to="/projects/wounded-program"
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-secondary flex flex-col h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Wounded Program</h3>
                  <p className="text-gray-700 mb-4 font-futura flex-grow">
                    Wir kümmern uns um verletzte und kranke Straßentiere und bieten ihnen medizinische Versorgung.
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
                  <div className="flex items-center text-accent-blue font-medium mt-auto">
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

export default FuetterungstourenPage;
