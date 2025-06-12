import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { PawPrint } from 'lucide-react';

const Donate = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Decorative paw prints in background - exact same as Projects page */}
      <div className="absolute -top-16 -right-16 opacity-5">
        <PawPrint size={200} className="text-primary" />
      </div>
      <div className="absolute -bottom-16 -left-16 opacity-5">
        <PawPrint size={200} className="text-primary" />
      </div>
      
      <SEO 
        title="Spenden & Helfen" 
        description="Deine Spende hilft uns, Straßenhunde zu kastrieren, medizinisch zu versorgen und ihnen ein besseres Leben zu ermöglichen. Jeder Beitrag macht einen Unterschied!"
        keywords="Tierschutz spenden, Hunde Spende, Tierhilfe unterstützen, Kastrationsprojekte spenden, Tierschutzverein unterstützen, monatlich spenden, Tierschutz Rumänien"
      />
      
      <Navbar />
      
      {/* Erhöhter Abstand zum oberen Rand - pt-32 statt pt-16 */}
      <main className="flex-grow pt-32 bg-gray-50">
        <div className="container mx-auto px-4 pb-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-primary mb-4 font-glorious">Unterstütze unsere Mission</h1>
              <p className="text-base text-gray-700 max-w-2xl mx-auto font-futura">
                Deine Spende hilft Straßenhunden zu einem besseren Leben.
              </p>
            </div>
            
            {/* Responsive iframe height - größer auf Mobilgeräten */}
            <div className="bg-white rounded-lg shadow-md p-3 mb-4">
              <iframe 
                src="https://secure.fundraisingbox.com/app/payment?hash=9kl46fm02g6o9ev6&t=18642046f767d060416617baf23108df&fb_id=25408"
                title="Fundraising Box Spendenformular"
                width="100%"
                height="2600"
                className="md:h-[2100px]" 
                frameBorder="0"
                allowTransparency={true}
                allow="payment"
                style={{ display: 'block', margin: '0 auto' }}
              ></iframe>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center text-xs md:text-sm text-gray-600 font-futura md:space-x-4 space-y-2 md:space-y-0">
              <div className="flex items-center justify-center">
                <span className="font-medium">Bei Fragen:</span> 
                <a href="mailto:info@famfordogs.com" className="text-primary underline hover:text-accent-blue ml-1">info@famfordogs.com</a>
              </div>
              <div className="flex items-center justify-center">
                <PawPrint className="h-4 w-4 text-primary mr-1" />
                <span>Steuerlich absetzbar</span>
              </div>
              <div className="flex items-center justify-center">
                <PawPrint className="h-4 w-4 text-primary mr-1" />
                <span>Spendenquittung inklusive</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
