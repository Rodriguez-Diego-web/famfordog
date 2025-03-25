import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PawPrint } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8 font-glorious">Über Uns</h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 font-futura">
            FAM for Dogs e.V. setzt sich für die Rettung und Vermittlung von Hunden in Not ein. Wir glauben, dass jeder Hund ein liebevolles Zuhause verdient.
          </p>
          
          <div className="relative bg-gray-50 p-4 sm:p-8 rounded-2xl mb-8 sm:mb-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-5 right-5 opacity-5">
              <PawPrint size={120} className="text-primary" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Unsere Geschichte</h2>
              <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
                FAM for Dogs e.V. wurde 2018 von einer Gruppe leidenschaftlicher Tierliebhaber gegründet, die die Notwendigkeit einer engagierten Tierschutzorganisation in unserer Gemeinschaft erkannten. Was als kleine Initiative mit nur wenigen Freiwilligen begann, ist zu einer florierenden Organisation mit über 50 aktiven Freiwilligen und Hunderten erfolgreicher Vermittlungen pro Jahr gewachsen.
              </p>
              <p className="text-gray-700 font-futura text-sm sm:text-base">
                Unsere Reise war voller Herausforderungen, aber die Freude, einen Hund sein Für-immer-Zuhause finden zu sehen, macht alles lohnenswert. Wir erweitern kontinuierlich unsere Programme und Dienstleistungen, um mehr Hunden in Not zu helfen und die Öffentlichkeit über verantwortungsvolle Tierhaltung aufzuklären.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-12">
            <div className="h-60 sm:h-full">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b" 
                alt="Spielende Hunde" 
                className="rounded-2xl w-full h-full object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Was uns besonders macht</h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-accent-green flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-sm sm:text-base">Personalisierte Vermittlung</h3>
                    <p className="text-gray-600 text-xs sm:text-sm font-futura">Wir nehmen uns Zeit, die Persönlichkeit und Bedürfnisse jedes Hundes zu verstehen, um ihn mit der richtigen Familie zusammenzubringen.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-accent-pink flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-sm sm:text-base">Kontinuierliche Unterstützung</h3>
                    <p className="text-gray-600 text-xs sm:text-sm font-futura">Unsere Beziehung endet nicht mit der Adoption. Wir bieten fortlaufende Unterstützung, um einen erfolgreichen Übergang zu gewährleisten.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-accent-blue flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-sm sm:text-base">Bildung der Gemeinschaft</h3>
                    <p className="text-gray-600 text-xs sm:text-sm font-futura">Wir engagieren uns für die Aufklärung der Öffentlichkeit über verantwortungsvolle Tierhaltung und die Bedeutung der Adoption.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mb-8 sm:mb-12 bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Bereit, unsere Hunde kennenzulernen?</h2>
            <a href="#dogs" className="inline-block bg-secondary hover:bg-secondary/90 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg font-futura text-sm sm:text-base">
              Verfügbare Hunde ansehen
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
