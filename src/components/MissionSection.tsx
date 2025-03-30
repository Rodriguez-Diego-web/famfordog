import { ArrowRight, Heart, Map, Stethoscope, Scissors, PawPrint, Utensils, Home, Ambulance } from 'lucide-react';
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
          <p className="text-gray-700 max-w-3xl mx-auto font-futura mb-4">
            Wir von FAM for Dogs e.V. (Fight and Movement for Dogs) setzen uns für nachhaltigen Tierschutz ein – mit Fokus auf die Verbesserung der Lebensbedingungen vor Ort für Straßenhunde. Denn für uns kennt Tierschutz keine Grenzen!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Kastrationsprojekte */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-[#fabddc] flex items-center justify-center mb-4">
              <Scissors size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-primary text-xl mb-3 font-futura">KASTRATIONSPROJEKTE</h3>
            <p className="text-gray-600 font-futura mb-4">
              Nachhaltiger Tierschutz beginnt mit Kastration: Mit unserem Programm haben wir bereits über 1.500 Straßenhunde auf Lombok kastriert und damit rechnerisch rund 18 Millionen ungewollte Nachkommen verhindert.
            </p>
            <Link 
              to="/projects/kastrationsprojekte" 
              className="inline-flex items-center text-secondary hover:text-primary transition-colors font-futura"
            >
              Mehr erfahren <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Shelter Lombok */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-[#bedce6] flex items-center justify-center mb-4">
              <Home size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-primary text-xl mb-3 font-futura">SHELTER LOMBOK</h3>
            <p className="text-gray-600 font-futura mb-4">
              Wir unterstützen ein Shelter auf Lombok, das rund 160 geretteten Hunden ein neues Zuhause bietet, die zuvor ausgesetzt, misshandelt oder schwer verletzt wurden.
            </p>
            <Link 
              to="/projects/shelter-lombok" 
              className="inline-flex items-center text-secondary hover:text-primary transition-colors font-futura"
            >
              Mehr erfahren <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Rumänien */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-4">
              <Map size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-primary text-xl mb-3 font-futura">RUMÄNIEN</h3>
            <p className="text-gray-600 font-futura mb-4">
              Unser neuer Standort konzentriert sich auf die Unterstützung eines bestehenden öffentlichen Tierheims und Kastrationsprojekte.
            </p>
            <Link 
              to="/projects/public-shelter-rumaenien" 
              className="inline-flex items-center text-secondary hover:text-primary transition-colors font-futura"
            >
              Mehr erfahren <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Wounded Program */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-[#bedce6] flex items-center justify-center mb-4">
              <Stethoscope size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-primary text-xl mb-3 font-futura">WOUNDED PROGRAM</h3>
            <p className="text-gray-600 font-futura mb-4">
              Unser Wounded Program kümmert sich um verletzte und kranke Straßentiere. Wir bieten medizinische Versorgung, Rehabilitation und ein sicheres Umfeld für ihre Genesung.
            </p>
            <Link 
              to="/projects/wounded-program" 
              className="inline-flex items-center text-secondary hover:text-primary transition-colors font-futura"
            >
              Mehr erfahren <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Fütterungstouren */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-[#fabddc] flex items-center justify-center mb-4">
              <Utensils size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-primary text-xl mb-3 font-futura">FÜTTERUNGSTOUREN</h3>
            <p className="text-gray-600 font-futura mb-4">
              Auf Lombok fährt unser Fütterungsengel durch die Straßen und versorgt die Hunde mit Futter – oft die einzige Mahlzeit, die sie an diesem Tag bekommen.
            </p>
            <Link 
              to="/projects/fuetterungstouren" 
              className="inline-flex items-center text-secondary hover:text-primary transition-colors font-futura"
            >
              Mehr erfahren <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Tierrettungen */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-[#dce169] flex items-center justify-center mb-4">
              <Ambulance size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-primary text-xl mb-3 font-futura">TIERRETTUNGEN</h3>
            <p className="text-gray-600 font-futura mb-4">
              Wir haben seit Bestehen des Vereins bereits über 40 Tiere gerettet, die in den schlimmsten Zuständen auf der Straße lebten – krank, schwer verletzt oder misshandelt.
            </p>
            <Link 
              to="/projects/tierrettungen" 
              className="inline-flex items-center text-secondary hover:text-primary transition-colors font-futura"
            >
              Mehr erfahren <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <span className="text-4xl md:text-5xl font-bold text-secondary mb-3 font-bayside">{stat.number}</span>
              <span className="text-primary text-sm font-medium font-futura">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
