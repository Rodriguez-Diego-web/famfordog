import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, PawPrint, Stethoscope, Home, Syringe } from 'lucide-react';
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
        <section className="bg-gradient-to-r from-red-200/50 to-accent-green/30 py-16 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 opacity-10">
            <PawPrint size={200} className="text-red-400" />
          </div>
          <div className="absolute -bottom-16 -left-16 opacity-10">
            <PawPrint size={200} className="text-accent-green" />
          </div>
          <div className="absolute top-1/3 left-1/4 opacity-5 animate-pulse">
            <Heart size={80} className="text-red-400" />
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
                <span className="text-red-500">Tier</span><span className="text-primary">rettungen</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-accent-green mb-8"></div>
              <p className="text-gray-700 text-lg md:text-xl mb-8 font-futura bg-white/70 p-4 rounded-xl shadow-sm">
                Hilfe für verletzte, vergessene und verstoßene Tiere – auf Lombok, in Rumänien und darüber hinaus
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 relative">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
            <div className="absolute -right-24 top-1/4">
              <PawPrint size={200} className="text-red-400" />
            </div>
            <div className="absolute -left-24 bottom-1/4">
              <PawPrint size={200} className="text-accent-green" />
            </div>
          </div>
          
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-block bg-gradient-to-r from-red-400 to-accent-green p-1 rounded-xl mb-6">
                  <h2 className="text-3xl font-bold text-primary px-6 py-2 bg-white rounded-lg font-futura">Notfälle und Rettungsaktionen</h2>
                </div>
                <p className="text-gray-700 mb-4 font-futura">
                  Sowohl auf Lombok (Indonesien) als auch in Rumänien leben viele Hunde unter schlimmsten Bedingungen. Sie kämpfen mit Krankheiten, schweren Verletzungen durch Hundekämpfe oder Autounfälle, und sind oft Opfer absichtlicher Misshandlungen durch Menschen. Unser Team ist rund um die Uhr im Einsatz, um diesen Tieren zu helfen – durch Rettung, medizinische Versorgung und die Suche nach einem sicheren Zuhause.
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Wir haben seit Bestehen des Vereins bereits über 40 Tiere gerettet, die in den schlimmsten Zuständen auf der Straße lebten – krank, schwer verletzt oder misshandelt. Diese Tiere haben nun durch tierärztliche Versorgung eine Chance auf ein besseres Leben erhalten.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl transform rotate-1 border-4 border-white">
                <img 
                  src="/images/projects/rescue1.jpg" 
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
              <div className="text-center mb-8">
                <h2 className="inline-block text-3xl font-bold mb-4 font-futura bg-gradient-to-r from-red-400 to-accent-green text-transparent bg-clip-text">Rettungsgeschichten</h2>
                <div className="w-32 h-1 mx-auto bg-gradient-to-r from-red-400 to-accent-green"></div>
                <p className="text-gray-700 mt-4 max-w-3xl mx-auto font-futura">
                  Einige dieser Tiere möchten wir euch näher vorstellen, um euch einen kleinen Einblick in die leidvollen, aber auch hoffnungsvollen Geschichten zu geben:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-l-4 border-red-400">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Cahyo und Kulon</h3>
                  <p className="text-gray-700 font-futura">
                    Diese beiden Straßenhunde wurden mit schweren Wunden aufgefunden und in einem katastrophalen Zustand vorgefunden. Sie erhielten eine umfassende tierärztliche Versorgung und wurden liebevoll untergebracht und weiter betreut, bis sie sich stabilisierten.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-l-4 border-accent-green">
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
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-l-4 border-accent-green">
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
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-l-4 border-accent-green">
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
            <div className="bg-gradient-to-r from-red-200/30 to-accent-green/30 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-10">
                <Heart size={150} className="text-red-400" />
              </div>
              <div className="absolute -bottom-10 -left-10 opacity-10">
                <PawPrint size={150} className="text-accent-green" />
              </div>
              
              <div className="text-center mb-8 relative z-10">
                <h2 className="text-3xl font-bold text-primary mb-4 font-futura">Weitere Rettungsgeschichten</h2>
                <div className="w-32 h-1 mx-auto bg-gradient-to-r from-red-400 to-accent-green"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Pipo</h3>
                  <p className="text-gray-700 font-futura">
                    Pipo war ein ausgesetzter Hund, der voller Parasiten war und mit schweren Wunden zu kämpfen hatte. Nachdem er geschoren, entfloht, kastriert und medizinisch behandelt wurde, konnte er sich erholen und wurde schließlich wieder freigelassen.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Nugget</h3>
                  <p className="text-gray-700 font-futura">
                    Als vier Wochen alter Welpe ausgesetzt und von anderen Hunden verstoßen, wurde Nugget von einer Touristin aufgenommen. Im Shelter wurde er mit der Flasche gefüttert und wird jetzt liebevoll versorgt.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Ichy und ihre Welpen</h3>
                  <p className="text-gray-700 font-futura">
                    Ichy hatte schwere Hautprobleme und eine alte Verletzung an den Hinterläufen. Sie wurde behandelt und kastriert, doch leider verstarb sie später an einem Schlaganfall. Ihre Welpen wurden geimpft und leben im Shelter.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Depo</h3>
                  <p className="text-gray-700 font-futura">
                    Depo wurde nach einem schweren Autounfall mit Lähmungen der Hinterläufe in eine Klinik gebracht und später vom Shelter aufgenommen. Heute erhält sie die notwendige Pflege, um sich zu erholen im Shelter von Shelter Lombok Dogs (einer anderen Organisation vor Ort).
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 relative z-10">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Charlie</h3>
                  <p className="text-gray-700 font-futura">
                    Charlie, ein Welpe, wurde von Kindern mit Steinen beworfen und schwer verletzt. Nach der Erstversorgung in der Klinik und einer Behandlung der Kopfverletzungen wurde er geimpft und im Shelter aufgenommen.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Malcom</h3>
                  <p className="text-gray-700 font-futura">
                    Malcom wurde ausgesetzt, war abgemagert, verfilzt und konnte nicht laufen. Nach dem Röntgen wurde eine Osteomylitis diagnostiziert, die jetzt mit Antibiotika behandelt wird.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Help Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="inline-block text-3xl font-bold mb-4 font-futura bg-gradient-to-r from-red-400 to-accent-green text-transparent bg-clip-text">Notfallbehandlungen und Medizinische Hilfe</h2>
                <div className="w-48 h-1 mx-auto bg-gradient-to-r from-red-400 to-accent-green"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-red-400">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-red-400 to-primary flex items-center justify-center mb-4 mx-auto">
                    <Stethoscope size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura text-center">Medizinische Versorgung</h3>
                  <p className="text-gray-700 font-futura text-center">
                    Wir leisten erste Hilfe direkt auf der Straße und bieten umfassende tierärztliche Behandlung für verletzte und kranke Tiere.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-accent-green flex items-center justify-center mb-4 mx-auto">
                    <Syringe size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura text-center">Notfallbehandlung</h3>
                  <p className="text-gray-700 font-futura text-center">
                    Behandlung von Wunden, Entfernen von Maden, Versorgung von vergifteten Tieren und Behandlung von Tieren mit schwerem Parasitenbefall.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-accent-green">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-accent-green to-red-400 flex items-center justify-center mb-4 mx-auto">
                    <Home size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura text-center">Rehabilitation</h3>
                  <p className="text-gray-700 font-futura text-center">
                    Nach der Erstversorgung bieten wir den Tieren einen sicheren Ort zur Genesung und langfristigen Betreuung.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mb-16 bg-gradient-to-r from-primary/10 to-red-200/30 py-12 px-6 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 opacity-5">
                  <Heart size={100} className="text-red-400" />
                </div>
                <div className="absolute bottom-10 right-10 opacity-5">
                  <Heart size={100} className="text-red-400" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
                  <PawPrint size={200} className="text-primary" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-primary mb-6 font-futura">Unterstützen Sie unsere Tierrettungen</h2>
                <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                  Mit deiner Hilfe können wir weiterhin vielen Tieren ein neues Leben ermöglichen. Jeder Beitrag zählt, um diese Tiere zu retten und ihnen die notwendige medizinische Hilfe zukommen zu lassen.
                </p>
                <Link 
                  to="/spenden" 
                  className="bg-gradient-to-r from-primary to-red-400 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg inline-block font-futura hover:scale-105 transform"
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

export default TierrettungenPage;
