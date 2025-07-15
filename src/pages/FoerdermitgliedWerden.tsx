import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FoerdermitgliedWerden = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 bg-gray-50">
        {/* Header Section */}
        <section className="bg-primary py-8">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-glorious">
                  Fördermitglied werden
                </h1>
                <p className="text-white/90 font-futura">
                  Unterstütze uns langfristig bei unserer Mission für die Straßentiere
                </p>
              </div>
              <Link 
                to="/join-family" 
                className="hidden md:inline-flex items-center text-white/90 hover:text-white transition-colors font-futura"
              >
                <ArrowLeft size={18} className="mr-2" />
                Zurück zu "Sei Teil der FAMily"
              </Link>
            </div>
          </div>
        </section>

        {/* Fördermitgliedschaft Info Section */}
        <section className="py-6">
          <div className="container mx-auto px-6">
            <div className="bg-primary rounded-xl shadow-lg">
              <div className="p-6">
                
                {/* Titel mit Icon - zentriert */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center mb-3">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Heart size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-glorious">Deine Vorteile als Fördermitglied</h3>
                  </div>
                  <p className="text-white/80 font-futura text-base max-w-2xl mx-auto">
                    Unterstütze uns langfristig und erhalte exklusive Einblicke in unsere Arbeit
                  </p>
                </div>

                {/* Vorteile Grid - responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-3 h-3 bg-secondary rounded-full mx-auto mb-2"></div>
                    <div className="text-white font-futura text-sm font-medium">Regelmäßige</div>
                    <div className="text-white font-futura text-sm">Updates</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-3 h-3 bg-secondary rounded-full mx-auto mb-2"></div>
                    <div className="text-white font-futura text-sm font-medium">Exklusive</div>
                    <div className="text-white font-futura text-sm">Events</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-3 h-3 bg-secondary rounded-full mx-auto mb-2"></div>
                    <div className="text-white font-futura text-sm font-medium">Jahreshaupt-</div>
                    <div className="text-white font-futura text-sm">versammlung</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-3 h-3 bg-secondary rounded-full mx-auto mb-2"></div>
                    <div className="text-white font-futura text-sm font-medium">Spenden-</div>
                    <div className="text-white font-futura text-sm">bescheinigung</div>
                  </div>
                </div>

                {/* Call to Action - zentriert */}
                <div className="text-center">
                  <div className="inline-block bg-white/15 rounded-lg px-6 py-3 border border-white/20">
                    <div className="text-white font-futura text-base font-medium">Formular ausfüllen</div>
                    <div className="text-secondary text-sm font-futura">↓ Direkt hier</div>
                  </div>
                </div>

              </div>
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
              <iframe 
                src="https://secure.fundraisingbox.com/app/payment?hash=tb50awqf33usb4aw&t=1ee7e361ee24e0d8791a9f6ab8a6bb8a&fb_id=25410"
                title="Fundraising Box Fördermitgliedsformular"
                width="100%"
                height="2400"
                className="min-h-screen border-0" 
                frameBorder="0"
                allowTransparency={true}
                allow="payment"
                style={{ display: 'block', minHeight: 'calc(100vh - 200px)' }}
              />
            </div>
          </div>
        </section>

        {/* Mobile Back Button */}
        <section className="md:hidden bg-white py-4 border-t">
          <div className="container mx-auto px-6">
            <Link 
              to="/join-family" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-futura"
            >
              <ArrowLeft size={18} className="mr-2" />
              Zurück zu "Sei Teil der FAMily"
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FoerdermitgliedWerden; 