import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Spendenaktion = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Load FundraisingBox script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://secure.fundraisingbox.com/app/widgetJS?cfh=83f5p0ef';
    script.async = true;
    
    const widgetContainer = document.getElementById('fundraising-widget');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }
    
    return () => {
      // Cleanup script when component unmounts
      if (widgetContainer && widgetContainer.contains(script)) {
        widgetContainer.removeChild(script);
      }
    };
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
                
                {/* Begin FundraisingBox */}
                <div id="fundraising-widget" className="fundraising-widget min-h-[500px]">
                  <noscript>
                    <div className="text-center p-8 bg-gray-100 rounded-lg">
                      <p className="mb-4">Bitte Javascript aktivieren, um das Spendenformular zu nutzen.</p>
                      <a 
                        target='_blank' 
                        href='https://www.fundraisingbox.com'
                        className="inline-block"
                      >
                        <img 
                          style={{border: '0'}} 
                          src='https://secure.fundraisingbox.com/images/FundraisingBox-Logo-Widget.png' 
                          alt='FundraisingBox Logo' 
                        />
                      </a>
                    </div>
                  </noscript>
                </div>
                {/* End FundraisingBox */}
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