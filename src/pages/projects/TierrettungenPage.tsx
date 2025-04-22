import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, PawPrint, Stethoscope, Home, Syringe, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TierrettungenPage = () => {
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
                  Tierrettungen: Hilfe für Notfälle
                </h1>
                
                <div className="w-20 h-1 bg-red-400 mb-6"></div>
                
                <p className="text-lg text-gray-700 mb-8 font-futura">
                  Hilfe für verletzte, vergessene und verstoßene Tiere – auf Lombok, in Rumänien und darüber hinaus. Wir retten Tiere in Not und geben ihnen eine zweite Chance.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/spenden" 
                    className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-90"
                  >
                    <Heart size={18} className="mr-2" />
                    Jetzt spenden
                  </Link>
                  
                  <a 
                    href="#learn-more" 
                    className="inline-flex items-center bg-white text-red-500 border-2 border-red-500 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-50"
                  >
                    Mehr erfahren
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.24 (6).jpeg" 
                    alt="Tierrettung" 
                    className="w-full h-auto object-cover rounded-xl"
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
        
        {/* Key Facts Section */}
        <section id="learn-more" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-red-200 p-8 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <PawPrint size={32} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Über 40 Rettungen</h3>
                  <p className="text-gray-700 font-futura">
                    Seit Bestehen des Vereins haben wir bereits über 40 Tiere gerettet, die unter schwersten Bedingungen leben mussten.
                  </p>
                </div>
              </div>
              
              <div className="bg-secondary/30 p-8 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <Stethoscope size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Medizinische Hilfe</h3>
                  <p className="text-gray-700 font-futura">
                    Wir bieten umfassende tierärztliche Versorgung für verletzte und kranke Straßentiere in Notfällen.
                  </p>
                </div>
              </div>
              
              <div className="bg-primary/30 p-8 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <Home size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Sichere Unterbringung</h3>
                  <p className="text-gray-700 font-futura">
                    Wir sorgen für sichere Unterbringung und Pflege während der Genesung und suchen geeignete Bleiben.
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Notfälle und Rettungsaktionen</h2>
                <div className="w-20 h-1 bg-red-400 mb-6"></div>
                <p className="text-gray-700 mb-4 font-futura">
                  Sowohl auf Lombok (Indonesien) als auch in Rumänien leben viele Hunde unter schlimmsten Bedingungen. Sie kämpfen mit Krankheiten, schweren Verletzungen durch Hundekämpfe oder Autounfälle, und sind oft Opfer absichtlicher Misshandlungen durch Menschen.
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Unser Team ist rund um die Uhr im Einsatz, um diesen Tieren zu helfen – durch Rettung, medizinische Versorgung und die Suche nach einem sicheren Zuhause.
                </p>
                <p className="text-gray-700 font-futura">
                  Wir haben seit Bestehen des Vereins bereits über 40 Tiere gerettet, die in den schlimmsten Zuständen auf der Straße lebten – krank, schwer verletzt oder misshandelt. Diese Tiere haben nun durch tierärztliche Versorgung eine Chance auf ein besseres Leben erhalten.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/WOUNDED/WhatsApp Image 2025-03-27 at 22.56.26.jpeg" 
                  alt="Tierrettung" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg'; // Fallback image
                  }}
                />
              </div>
            </div>

            {/* Rettungsgeschichten Section */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Rettungsgeschichten</h2>
                <div className="w-20 h-1 bg-red-400 mx-auto mb-6"></div>
                <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                  Einige dieser Tiere möchten wir dir näher vorstellen, um dir einen kleinen Einblick in die leidvollen, aber auch hoffnungsvollen Geschichten zu geben:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-l-4 border-red-400">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Cahyo und Kulon</h3>
                  <p className="text-gray-700 font-futura">
                    Diese beiden Straßenhunde wurden mit schweren Wunden aufgefunden und in einem katastrophalen Zustand vorgefunden. Sie erhielten eine umfassende tierärztliche Versorgung und wurden liebevoll untergebracht und weiter betreut, bis sie sich stabilisierten.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-l-4 border-secondary">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Welpe Dumbo</h3>
                  <p className="text-gray-700 font-futura">
                    Dumbo, ein junger Welpe, konnte aufgrund schwerer Hautverletzungen und akuter Mangelernährung nicht laufen. Doch durch intensive medizinische Behandlung und fürsorgliche Pflege konnte sein Zustand stabilisiert werden, und er hat wieder Hoffnung auf ein besseres Leben.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-l-4 border-red-400">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Abian</h3>
                  <p className="text-gray-700 font-futura">
                    Abian litt unter einer stark infizierten, von Maden befallenen Schnauzenverletzung. Nach der sofortigen medizinischen Versorgung und sorgfältigen Behandlung konnte sein Zustand erheblich verbessert werden.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-l-4 border-secondary">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Achille</h3>
                  <p className="text-gray-700 font-futura">
                    Achille wurde mit schweren Verletzungen am Bein und Genitalbereich aufgefunden, die durch eine fortgeschrittene Krebserkrankung verursacht wurden. Nach der Erstversorgung wurde eine gezielte klinische Behandlung eingeleitet, und eine Chemotherapie gab ihm eine neue Chance.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-l-4 border-red-400">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Mr. Monkey</h3>
                  <p className="text-gray-700 font-futura">
                    Mr. Monkey, ein Hund, der nach einem Autounfall teilweise paralysiert war, wurde von unserem Tierärzteteam gedartet und umgehend in eine Klinik gebracht. Heute lebt er sicher im Shelter und hat sich gut erholt.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-l-4 border-secondary">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Fura</h3>
                  <p className="text-gray-700 font-futura">
                    Diese tapfere Seele wurde mit einer Machete schwer verletzt aufgefunden. Sie erhielt umgehend medizinische Hilfe und wurde in den Shelter gebracht, wo sie nun liebevoll versorgt wird.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-l-4 border-red-400">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Roket</h3>
                  <p className="text-gray-700 font-futura">
                    Nach einem schweren Autounfall mit Kopfverletzungen wurde Roket schnell in eine Klinik gebracht, wo er medizinisch versorgt wurde und nun in einem sicheren Zuhause lebt.
                  </p>
                </div>
              </div>
            </div>

            {/* More Stories Section */}
            <div className="bg-gray-100 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden shadow-lg">
              <div className="text-center mb-8 relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Weitere Rettungsgeschichten</h2>
                <div className="w-20 h-1 bg-red-400 mx-auto mb-6"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Pipo</h3>
                  <p className="text-gray-700 font-futura">
                    Pipo war ein ausgesetzter Hund, der voller Parasiten war und mit schweren Wunden zu kämpfen hatte. Nachdem er geschoren, entfloht, kastriert und medizinisch behandelt wurde, konnte er sich erholen und wurde schließlich wieder freigelassen.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Nugget</h3>
                  <p className="text-gray-700 font-futura">
                    Als vier Wochen alter Welpe ausgesetzt und von anderen Hunden verstoßen, wurde Nugget von einer Touristin aufgenommen. Im Shelter wurde er mit der Flasche gefüttert und wird jetzt liebevoll versorgt.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Ichy und ihre Welpen</h3>
                  <p className="text-gray-700 font-futura">
                    Ichy hatte schwere Hautprobleme und eine alte Verletzung an den Hinterläufen. Sie wurde behandelt und kastriert, doch leider verstarb sie später an einem Schlaganfall. Ihre Welpen wurden geimpft und leben im Shelter.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Depo</h3>
                  <p className="text-gray-700 font-futura">
                    Depo wurde nach einem schweren Autounfall mit Lähmungen der Hinterläufe in eine Klinik gebracht und später vom Shelter aufgenommen. Heute erhält sie die notwendige Pflege, um sich zu erholen im Shelter von Shelter Lombok Dogs.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 relative z-10">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Charlie</h3>
                  <p className="text-gray-700 font-futura">
                    Charlie, ein Welpe, wurde von Kindern mit Steinen beworfen und schwer verletzt. Nach der Erstversorgung in der Klinik und einer Behandlung der Kopfverletzungen wurde er geimpft und im Shelter aufgenommen.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Malcom</h3>
                  <p className="text-gray-700 font-futura">
                    Malcom wurde ausgesetzt, war abgemagert, verfilzt und konnte nicht laufen. Nach dem Röntgen wurde eine Osteomylitis diagnostiziert, die jetzt mit Antibiotika behandelt wird.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-red-100 to-red-200 py-12 px-6 rounded-3xl relative overflow-hidden shadow-lg mb-16">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 opacity-5">
                  <Heart size={100} className="text-red-500" />
                </div>
                <div className="absolute bottom-10 right-10 opacity-5">
                  <Heart size={100} className="text-primary" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
                  <PawPrint size={200} className="text-red-500" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-primary mb-6 font-futura">Unterstütze unsere Rettungsaktionen</h2>
                <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                  Mit deiner Hilfe können wir noch mehr Tiere in Not retten und ihnen eine zweite Chance geben. 
                  Jede Spende trägt dazu bei, notwendige medizinische Behandlungen zu finanzieren und den Tieren ein besseres Leben zu ermöglichen.
                </p>
                <Link 
                  to="/spenden" 
                  className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg inline-flex items-center font-futura hover:opacity-90"
                >
                  <Heart size={18} className="mr-2" />
                  Jetzt spenden
                </Link>
              </div>
            </div>

            {/* Our Services Section */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Unsere Hilfsleistungen</h2>
                <div className="w-20 h-1 bg-red-400 mx-auto mb-6"></div>
                <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                  Unsere Hilfe für Tiere in Not umfasst verschiedene Bereiche der medizinischen Versorgung und Rehabilitation:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="bg-red-500/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Stethoscope size={28} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura text-center">Medizinische Versorgung</h3>
                  <p className="text-gray-700 font-futura text-center">
                    Wir leisten erste Hilfe direkt auf der Straße und bieten umfassende tierärztliche Behandlung für verletzte und kranke Tiere.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Syringe size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura text-center">Notfallbehandlung</h3>
                  <p className="text-gray-700 font-futura text-center">
                    Behandlung von Wunden, Entfernen von Maden, Versorgung von vergifteten Tieren und Behandlung von Tieren mit schwerem Parasitenbefall.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="bg-secondary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Home size={28} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura text-center">Rehabilitation</h3>
                  <p className="text-gray-700 font-futura text-center">
                    Nach der Erstversorgung bieten wir den Tieren einen sicheren Ort zur Genesung und langfristigen Betreuung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Weitere Projekte</h2>
              <div className="w-20 h-1 bg-red-400 mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto font-futura">
                Entdecke unsere anderen Projekte und erfahre, wie wir Straßentieren auf der ganzen Welt helfen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                to="/projects/kastrationsprojekte"
                className="bg-primary/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
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
                className="bg-secondary/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
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
                className="bg-accent-blue/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
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

export default TierrettungenPage;
