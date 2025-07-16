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
        <div className="container mx-auto px-4 pb-0">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-primary mb-4 font-glorious">Unterstütze unsere Mission</h1>
              <p className="text-base text-gray-700 max-w-2xl mx-auto font-futura">
                Deine Spende hilft Straßenhunden zu einem besseren Leben.
              </p>
            </div>
            
            {/* Responsive iframe height - größer auf Mobilgeräten */}
            <div className="bg-white rounded-lg shadow-md p-3 mb-0">
              <iframe 
                src="https://secure.fundraisingbox.com/app/payment?hash=9kl46fm02g6o9ev6&t=18642046f767d060416617baf23108df&fb_id=25408"
                title="Fundraising Box Spendenformular"
                width="100%"
                height="4500"
                className="h-[4500px] md:h-[2800px]" 
                frameBorder="0"
                allowTransparency={true}
                allow="payment"
                style={{ display: 'block', margin: '0 auto' }}
                scrolling="yes"
              ></iframe>
            </div>
            
            {/* Alternative Spendenmöglichkeiten */}
            <div className="mt-2 bg-gradient-to-r from-primary/10 to-accent-blue/10 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-primary mb-4 font-glorious text-center">
                Alternative Spendenmöglichkeiten
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Spendenkonto */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-primary font-glorious">Banküberweisung</h4>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700 font-futura">
                    <div className="flex justify-between">
                      <span className="font-medium">Kontoinhaber:</span>
                      <span>FAM for Dogs e.V.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">IBAN:</span>
                      <span className="font-mono">DE89 4306 0967 1013 2314 00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">BIC:</span>
                      <span className="font-mono">GENODEM1GLS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Bank:</span>
                      <span>GLS Bank</span>
                    </div>
                  </div>
                </div>

                {/* PayPal */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#0070ba] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.393c-.31-.17-.696-.353-1.238-.353-.968 0-1.573.434-1.573 1.133 0 .535.434.968 1.133.968.31 0 .607-.124.89-.31.248-.155.434-.372.607-.607.124-.186.217-.372.31-.558.093-.186.186-.434.248-.68.124-.434.186-.89.186-1.364 0-.31-.031-.607-.124-.89-.093-.248-.217-.496-.372-.71-.155-.217-.372-.434-.607-.607-.248-.186-.558-.31-.89-.372-.372-.093-.79-.124-1.238-.124-.607 0-1.133.062-1.573.186-.434.124-.79.31-1.05.558-.248.248-.434.558-.558.89-.124.372-.186.79-.186 1.238 0 .434.062.83.186 1.195.124.372.31.696.558.968.248.279.558.496.89.65.372.155.79.248 1.238.248.607 0 1.133-.093 1.573-.279.434-.186.79-.434 1.05-.71.248-.279.434-.607.558-.968.124-.372.186-.79.186-1.238 0-.434-.062-.83-.186-1.195z"/>
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-primary font-glorious">PayPal</h4>
                  </div>
                  <p className="text-sm text-gray-700 font-futura mb-4">
                    Spende schnell und sicher über PayPal
                  </p>
                  <a 
                    href="https://www.paypal.com/donate/?hosted_button_id=3ELJCXP5LQDTG&fbclid=PAZXh0bgNhZW0CMTEAAacL5dv8tJ8rf1AmdkoJNcBdI2Vg4YsFd43OKwLPAR-2Cc0smBWssBVFISdssw_aem_MHs6qBhUCeSxrCWgEqDGtw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0070ba] hover:bg-[#005ba3] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center font-futura"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.393c-.31-.17-.696-.353-1.238-.353-.968 0-1.573.434-1.573 1.133 0 .535.434.968 1.133.968.31 0 .607-.124.89-.31.248-.155.434-.372.607-.607.124-.186.217-.372.31-.558.093-.186.186-.434.248-.68.124-.434.186-.89.186-1.364 0-.31-.031-.607-.124-.89-.093-.248-.217-.496-.372-.71-.155-.217-.372-.434-.607-.607-.248-.186-.558-.31-.89-.372-.372-.093-.79-.124-1.238-.124-.607 0-1.133.062-1.573.186-.434.124-.79.31-1.05.558-.248.248-.434.558-.558.89-.124.372-.186.79-.186 1.238 0 .434.062.83.186 1.195.124.372.31.696.558.968.248.279.558.496.89.65.372.155.79.248 1.238.248.607 0 1.133-.093 1.573-.279.434-.186.79-.434 1.05-.71.248-.279.434-.607.558-.968.124-.372.186-.79.186-1.238 0-.434-.062-.83-.186-1.195z"/>
                    </svg>
                    Mit PayPal spenden
                  </a>
                </div>
              </div>
              
              <div className="mt-2 text-center">
                <p className="text-sm text-gray-600 font-futura">
                  ✨ Jede Spende hilft uns dabei, das Leben der Straßenhunde zu verbessern ✨
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center text-xs md:text-sm text-gray-600 font-futura md:space-x-4 space-y-2 md:space-y-0 mt-2">
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
