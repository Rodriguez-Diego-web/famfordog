import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Spendenaktion = () => {
  useEffect(() => {
    // Scroll to top on component mount
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

        {/* iframe Section - Full Width */}
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
              {/* Placeholder für FundraisingBox iFrame */}
              <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ minHeight: 'calc(100vh - 200px)' }}>
                <div className="text-center p-8">
                  <Heart size={64} className="text-accent-pink mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-primary mb-4 font-glorious">
                    Spendenaktion kommt bald!
                  </h2>
                  <p className="text-gray-700 font-futura mb-6">
                    Hier wird bald das FundraisingBox Formular für unsere Spendenaktion erscheinen.
                  </p>
                  <Link 
                    to="/spenden" 
                    className="inline-flex items-center bg-accent-pink text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-accent-pink/90 font-futura"
                  >
                    <Heart size={18} className="mr-2" />
                    Zur allgemeinen Spendenseite
                  </Link>
                </div>
              </div>
              
              {/* Hier wird später der echte iFrame eingefügt:
              <iframe 
                src="[FUNDRAISINGBOX_URL]"
                title="Fundraising Box Spendenaktion"
                width="100%"
                height="2400"
                className="min-h-screen border-0" 
                frameBorder="0"
                allowTransparency={true}
                allow="payment"
                style={{ display: 'block', minHeight: 'calc(100vh - 200px)' }}
              />
              */}
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