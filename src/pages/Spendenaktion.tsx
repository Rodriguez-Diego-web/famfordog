import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Spendenaktion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 bg-gray-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-accent-pink via-accent-blue to-primary py-8">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-glorious">
                  Spendenaktion
                </h1>
                <p className="text-white/90 font-futura">
                  Hilf uns dabei, das Leben der Straßentiere zu verbessern
                </p>
              </div>
              <Link 
                to="/" 
                className="hidden md:inline-flex items-center text-white/90 hover:text-white transition-colors font-futura"
              >
                <ArrowLeft size={18} className="mr-2" />
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </section>

        {/* Widget Section */}
        <section className="flex-grow py-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 right-8 opacity-20">
            <img src="/images/Lifeline/LifeLine_Limitless.png" alt="Lifeline Limitless" className="w-32 md:w-40" />
          </div>
          <div className="absolute bottom-32 left-8 opacity-20">
            <img src="/images/Lifeline/LifeLine_Rebirth.png" alt="Lifeline Rebirth" className="w-28 md:w-36" />
          </div>
          <div className="absolute top-1/2 right-1/4 opacity-15">
            <img src="/images/Lifeline/LifeLine_Limitless.png" alt="Lifeline Limitless" className="w-24 md:w-32 rotate-180" />
          </div>
          <div className="absolute bottom-60 left-1/3 opacity-15">
            <img src="/images/Lifeline/LifeLine_Rebirth.png" alt="Lifeline Rebirth" className="w-20 md:w-28 rotate-45" />
          </div>
          
          {/* Bunte Dekorationen */}
          <div className="absolute top-32 left-12 w-12 h-12 rounded-full bg-accent-yellow opacity-30 blur-md"></div>
          <div className="absolute top-1/3 right-16 w-16 h-16 rounded-full bg-accent-pink opacity-25 blur-md"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-accent-blue opacity-20 blur-lg"></div>
          <div className="absolute top-2/3 left-16 w-14 h-14 rounded-full bg-primary opacity-20 blur-md"></div>
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* FundraisingBox Widget */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-primary mb-2 font-glorious">
                    Unterstütze unsere Mission
                  </h2>
                  <p className="text-gray-700 font-futura">
                    Deine Spende hilft uns dabei, das Leben von Straßenhunden zu verbessern
                  </p>
                </div>
                
                {/* New Section */}
                <div className="bg-gradient-to-r from-accent-pink/10 to-accent-blue/10 rounded-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4 font-glorious">
                    Dein Anlass – Deine Spendenaktion
                  </h3>
                  
                  <div className="space-y-4 text-gray-700 font-futura">
                    <p className="font-semibold text-lg">
                      Gemeinsam Gutes tun für Hunde in Lombok (Indonesien) und Baia Mare (Rumänien)
                    </p>
                    
                    <p>
                      Ob Geburtstag, Hochzeit, Jubiläum oder Weihnachtszeit – nutze deinen persönlichen Anlass, um etwas zu bewirken.
                      Wünsche dir Spenden statt Geschenke und sammle gemeinsam mit Familie, Freund:innen oder Kolleg:innen für unsere Hunde.
                    </p>
                    
                    <div className="bg-white rounded-lg p-6 my-6">
                      <p className="text-lg mb-4">💚 <span className="font-bold">So einfach geht's:</span></p>
                      <ol className="list-none space-y-3">
                        <li className="flex items-center">
                          <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                          <span>Spendenaktion starten</span>
                        </li>
                        <li className="flex items-center">
                          <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                          <span>Link zur Spendenaktion teilen</span>
                        </li>
                        <li className="flex items-center">
                          <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                          <span>Spenden sammeln für den guten Zweck</span>
                        </li>
                      </ol>
                    </div>
                    
                    <p>
                      Mit deiner Unterstützung ermöglichen wir lebenswichtige Kastrationen, medizinische Versorgung, Futter und Schutz für Straßenhunde in Not.
                    </p>
                    
                    <p className="text-xl font-bold text-primary text-center pt-4">
                      Mach deinen Anlass zu einem Moment der Hoffnung!
                    </p>
                  </div>
                </div>
                
                {/* FundraisingBox Widget */}
                <iframe
                  src="/fundraising-embed.html"
                  width="100%"
                  height="700"
                  style={{ border: 'none', minHeight: '700px' }}
                  title="FundraisingBox Spendenformular"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Back Button */}
        <section className="md:hidden bg-white py-4 border-t">
          <div className="container mx-auto px-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-futura"
            >
              <ArrowLeft size={18} className="mr-2" />
              Zurück zur Startseite
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Spendenaktion; 