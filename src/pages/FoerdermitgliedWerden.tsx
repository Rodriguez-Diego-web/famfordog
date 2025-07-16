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
          <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-primary rounded-xl shadow-lg">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  
                  {/* Links - Titel mit Icon */}
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <Heart size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-glorious">Deine Vorteile als Fördermitglied</h3>
                      <p className="text-white/80 font-futura text-sm">Unterstütze uns langfristig und erhalte exklusive Einblicke</p>
                    </div>
                  </div>

                  {/* Mitte - Vorteile - mobile: vertikal, desktop: horizontal */}
                  <div className="flex flex-col lg:flex-row gap-3 lg:gap-8">
                    <div className="flex items-center text-white/90 font-futura text-sm">
                      <span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>
                      regelmäßige Updates
                    </div>
                    <div className="flex items-center text-white/90 font-futura text-sm">
                      <span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>
                      exklusive Events
                    </div>
                    <div className="flex items-center text-white/90 font-futura text-sm">
                      <span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>
                      Jahreshauptversammlung
                    </div>
                    <div className="flex items-center text-white/90 font-futura text-sm">
                      <span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>
                      Spendenbescheinigung
                    </div>
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