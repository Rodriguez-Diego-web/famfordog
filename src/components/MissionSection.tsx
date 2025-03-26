import { ArrowRight, Heart, Map, Stethoscope, Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

const MissionSection = () => {
  const stats = [
    { number: "160+", label: "Hunde im Shelter" },
    { number: "1500+", label: "Kastrationen durchgeführt" },
    { number: "2", label: "Standorte (Lombok & Rumänien)" },
    { number: "5+", label: "Jahre Erfahrung" }
  ];

  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-glorious">Unsere Mission</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto font-futura">
            Bei FAM for Dogs e.V. (Fight and Movement for Dogs) setzen wir uns für nachhaltigen Tierschutz ein.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="mb-8 space-y-6">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-[#dce169] flex items-center justify-center mt-1 mr-4">
                  <Map size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-xl mb-2 font-futura">Lombok</h3>
                  <p className="text-gray-600 font-futura">
                    Mit unserem eigenen Shelter für 160 Hunde bieten wir Schutz und Versorgung. 
                    Unser Hauptziel: durch Kastrationen das Leid langfristig verringern.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-[#fabddc] flex items-center justify-center mt-1 mr-4">
                  <Map size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-xl mb-2 font-futura">Rumänien</h3>
                  <p className="text-gray-600 font-futura">
                    Unser neuer Standort konzentriert sich auf die Unterstützung eines bestehenden 
                    öffentlichen Tierheims und Kastrationsprojekte.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-[#bedce6] flex items-center justify-center mt-1 mr-4">
                  <Stethoscope size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-xl mb-2 font-futura">Wounded-Programm</h3>
                  <p className="text-gray-600 font-futura">
                    Wir versorgen Straßenhunde medizinisch, impfen sie und behandeln Parasiten, 
                    um ihnen ein würdigeres Leben zu ermöglichen.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-[#dce169] flex items-center justify-center mt-1 mr-4">
                  <Heart size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-xl mb-2 font-futura">Unsere Vision</h3>
                  <p className="text-gray-600 font-futura">
                    Eine Welt, in der Straßenhunde nicht mehr leiden müssen. 
                    Tierschutz kennt für uns keine Grenzen – sei Teil der Bewegung, Teil unserer FAMily🐶✨
                  </p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/mission" 
              className="inline-flex items-center text-white bg-secondary px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-secondary/90 hover:shadow-lg font-futura"
            >
              Mehr über unsere Mission <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
              >
                <span className="text-5xl font-bold text-secondary mb-3 font-bayside">{stat.number}</span>
                <span className="text-primary text-sm font-medium font-futura">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
