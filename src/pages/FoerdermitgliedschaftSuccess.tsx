import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FoerdermitgliedschaftSuccess = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-white rounded-xl shadow-md p-8 md:p-12 max-w-3xl mx-auto">
              <div className="mb-8 flex justify-center">
                <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={50} className="text-green-600" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-futura">
                Vielen Dank für deine Fördermitgliedschaft!
              </h1>
              
              <p className="text-gray-700 text-lg mb-8 font-futura">
                Deine Anmeldung zur Fördermitgliedschaft wurde erfolgreich abgeschlossen. Du hast eine Bestätigungs-E-Mail erhalten. Wir danken dir herzlich für deine Unterstützung!
              </p>
              
              <p className="text-gray-700 mb-8 font-futura">
                Mit deinem regelmäßigen Beitrag hilfst du uns, unsere Arbeit für Straßentiere langfristig zu planen und durchzuführen. Deine Unterstützung macht einen großen Unterschied im Leben vieler Tiere.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link 
                  to="/" 
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-90"
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Zurück zur Startseite
                </Link>
                
                <Link 
                  to="/projects" 
                  className="inline-flex items-center bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-50"
                >
                  Unsere Projekte erkunden
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

export default FoerdermitgliedschaftSuccess;
