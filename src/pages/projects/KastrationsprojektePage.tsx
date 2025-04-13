import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, PawPrint } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const KastrationsprojektePage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Kastrationsprojekte"
        description="Nachhaltiger Tierschutz durch Kastrationsprojekte: Wir haben bereits über 1.500 Straßenhunde auf Lombok kastriert und damit rechnerisch rund 18 Millionen ungewollte Nachkommen verhindert."
        keywords="Kastrationsprojekte, Straßenhunde kastrieren, Tierschutz Lombok, Tierschutz Rumänien, Straßenhunde, Nachhaltiger Tierschutz, Lombok, Rumänien"
      />
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
            <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-futura">
              <ArrowLeft size={16} className="mr-2" />
              Zurück zu allen Projekten
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-glorious">
                <span className="text-primary">Kastrations</span><span className="text-secondary">projekte</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-8"></div>
              <p className="text-gray-700 text-lg md:text-xl mb-8 font-futura">
                <span className="font-bold">KASTRATIONSPROJEKTE</span><br />
                Nachhaltiger Tierschutz beginnt mit Kastration: Mit unserem Programm haben wir bereits 
                über 1.500 Straßenhunde auf Lombok kastriert und damit rechnerisch rund 18 Millionen
                ungewollte Nachkommen verhindert.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="inline-block text-3xl font-bold mb-4 font-futura bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Unsere Erfolge</h2>
                <div className="w-48 h-1 mx-auto bg-gradient-to-r from-primary to-secondary"></div>
                <p className="text-gray-700 mb-4 font-futura">
                  <span className="font-bold">1.500 kastrierte Straßenhunde durch unser Programm – 18 Millionen verhinderte Straßenhunde</span>
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Stand heute haben wir bereits über 1.500 Hunde auf Lombok kastriert – und damit rechnerisch rund 18 Millionen ungewollte Nachkommen verhindert!
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Eine Hündin bekommt ca. 2 Würfe pro Jahr, durchschnittlich 6 Welpen pro Wurf. Das ergibt 12 Welpen pro Jahr. Wenn sich auch nur ein Teil dieser Welpen weiter vermehrt, entsteht eine exponentielle Kette:
                </p>
                <p className="text-gray-700 mb-4 font-futura font-bold">
                  Nach 5 Jahren = bis zu 12.000 neue Hunde aus nur einer Hündin.
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Unsere 1.500 Kastrationen konnten schon 1.500 dieser Reproduktionsketten stoppen und verhindern so langfristig das Leid von Millionen Tieren.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/Kastaration/WhatsApp Image 2025-03-27 at 23.00.09 (1).jpeg" 
                  alt="Kastrationsprojekt" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg'; // Fallback image
                  }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 lg:flex-row-reverse">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Warum Kastration die einzige Lösung ist</h2>
                <p className="text-gray-700 mb-4 font-futura">
                  Die durchschnittliche Lebenserwartung eines Straßenhundes beträgt nur ca. 3,8 Jahre.
                  Viele Welpen überleben die ersten Monate nicht – sie sterben an Infektionen, Hunger, Verletzungen oder durch menschliche Gewalt.
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Straßenhunde haben:
                </p>
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2 font-futura">
                  <li>Keinen Zugang zu medizinischer Versorgung</li>
                  <li>Ständigen Hunger, der zu Kämpfen und Verletzungen führt</li>
                  <li>Keine Chance, sich selbst zu versorgen, weil sie vom Menschen domestiziert wurden</li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                <img 
                  src="/Kastaration/WhatsApp Image 2025-03-27 at 23.00.08.jpeg" 
                  alt="Kastrationsmethode" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg'; // Fallback image
                  }}
                />
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura text-center">Was Kastration bewirkt</h2>
              <p className="text-gray-700 mb-4 font-futura text-center">
                Würde man eine gesamte Generation Hunde kastrieren, hätte das sofortige, massive Auswirkungen:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="bg-accent-blue/10 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2 font-futura">Weniger Leid</h3>
                  <p className="text-gray-700 font-futura">Weniger Leid durch Hunger und weniger Hundekämpfe um Futter und Reviere</p>
                </div>
                <div className="bg-accent-pink/10 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2 font-futura">Bessere Gesundheit</h3>
                  <p className="text-gray-700 font-futura">Weniger Krankheiten, wie z.B. Tumore, Gebärmutterentzündungen, Tollwut</p>
                </div>
                <div className="bg-accent-green/10 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2 font-futura">Längeres Leben</h3>
                  <p className="text-gray-700 font-futura">Längere Lebenserwartung und bessere Lebensqualität für die Tiere</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2 font-futura">Weniger Aggressionen</h3>
                  <p className="text-gray-700 font-futura">Reduziertes aggressives Verhalten durch Hormone</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2 font-futura">Schutz für Welpen</h3>
                  <p className="text-gray-700 font-futura">Keine mutterlosen Welpen mehr, die ohne Chance auf Überleben geboren werden</p>
                </div>
                <div className="bg-red-100 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2 font-futura">Weniger Tötungen</h3>
                  <p className="text-gray-700 font-futura">Keine Tötungen durch Menschen, weil Hunde „zu viele" werden</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Unsere Methode: Effizient und professionell</h2>
                <p className="text-gray-700 mb-4 font-futura">
                  Die Arbeit mit Straßenhunden ist herausfordernd – viele lassen sich nicht einfach einfangen oder in eine Klinik bringen. Deshalb arbeiten wir vor Ort mit einer besonders effizienten und bewährten Methode aus Indonesien "Tulup".
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Tulup (indonesisch für „Blasrohr") ist eine Technik, bei der die Hunde mit einem gezielten Pfeil betäubt werden, der per Blasrohr abgeschossen wird. Diese Methode ist schnell, stressarm und besonders tierschonend, da die Tiere ohne unnötige Panik oder Gewalt gesichert werden können.
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Nur sehr wenige Menschen beherrschen diese Technik professionell – wir sind stolz, einige der besten Tulup-Darter im Team zu haben, die diese Arbeit mit höchster Präzision ausführen.
                </p>
                <p className="text-gray-700 font-futura">
                  Diese Methode ermöglicht es uns, auch scheue oder schwer zugängliche Hunde sicher zu erreichen und ihnen Hilfe zukommen zu lassen – z.B. für Kastrationen, medizinische Behandlungen oder Rettungen.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/Kastaration/WhatsApp Image 2025-03-27 at 23.00.10.jpeg" 
                  alt="Tulup Methode" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg'; // Fallback image
                  }}
                />
              </div>
            </div>
            
            <div className="bg-accent-blue/10 rounded-xl p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center font-futura">Großes Kastrationsprojekt 2024</h2>
              <p className="text-gray-700 mb-6 font-futura text-center">
                Im Jahr 2024 haben wir ein umfangreiches Kastrationsprojekt auf Lombok umgesetzt, mit bis zu 200 Kastrationen monatlich. 
                Die damalige Projektförderung ist inzwischen ausgelaufen – wir haben uns jedoch erneut beworben, um weiter auf diesem Niveau helfen zu können. 
                Aktuell kastrieren wir so viele Hunde, wie es unsere Spendengelder zulassen.
              </p>
              <p className="text-gray-700 mb-6 font-futura text-center font-bold">
                Ein großer Teil unserer Spenden fließt in dieses Projekt – weil es langfristig das effektivste Mittel gegen Tierleid ist.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-4xl font-bold text-secondary mb-2 font-futura">1.500+</div>
                  <p className="text-gray-700 font-futura">Kastrierte Tiere bisher</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-secondary mb-2 font-futura">200</div>
                  <p className="text-gray-700 font-futura">Kastrationen monatlich (2024)</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-secondary mb-2 font-futura">18 Mio.</div>
                  <p className="text-gray-700 font-futura">Verhinderte Nachkommen</p>
                </div>
              </div>
            </div>
            
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Deine Spende macht den Unterschied</h2>
              <p className="text-gray-700 mb-6 font-futura">
                Kastrationen retten nicht nur Leben – sie verhindern millionenfaches Leid.
                Hilf uns, das Leben der Straßenhunde von Grund auf zu verändern.
              </p>
              <p className="text-2xl font-bold text-secondary mb-6 font-futura">
                „Make it paws-ible"
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/donate" 
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg inline-block font-futura hover:scale-105 transform"
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
                to="/projects/wounded-program"
                className="bg-secondary/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/projects/wounded.jpg" 
                    alt="Wounded Program" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg'; // Fallback image
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2 font-futura">Wounded Program</h3>
                  <p className="text-gray-700 line-clamp-2 font-futura">
                    Wir kümmern uns um verletzte und kranke Straßentiere und bieten ihnen medizinische Versorgung.
                  </p>
                </div>
              </Link>
              
              <Link 
                to="/projects/fuetterungstouren"
                className="bg-accent-pink/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/projects/feeding.jpg" 
                    alt="Fütterungstouren" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg'; // Fallback image
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2 font-futura">Fütterungstouren</h3>
                  <p className="text-gray-700 line-clamp-2 font-futura">
                    Regelmäßige Fütterungstouren versorgen Straßentiere mit Nahrung und Wasser.
                  </p>
                </div>
              </Link>
              
              <Link 
                to="/projects/shelter-lombok"
                className="bg-accent-blue/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src="/images/projects/lombok.jpg" 
                    alt="Shelter Lombok" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg'; // Fallback image
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2 font-futura">Shelter Lombok</h3>
                  <p className="text-gray-700 line-clamp-2 font-futura">
                    Unser Shelter auf Lombok bietet Straßentieren ein sicheres Zuhause und die Chance auf Adoption.
                  </p>
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

export default KastrationsprojektePage;
