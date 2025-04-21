import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, PawPrint } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Projects = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: 'Kastrationsprojekte',
      description: 'Unsere Kastrationsprojekte helfen, die Population von Straßentieren zu kontrollieren und Tierleid zu verhindern.',
      color: 'bg-primary/30',
      path: '/projects/kastrationsprojekte'
    },
    {
      title: 'Wounded Program',
      description: 'Wir kümmern uns um verletzte und kranke Straßentiere und bieten ihnen medizinische Versorgung.',
      color: 'bg-secondary/30',
      path: '/projects/wounded-program'
    },
    {
      title: 'Fütterungstouren',
      description: 'Regelmäßige Fütterungstouren versorgen Straßentiere mit Nahrung und Wasser.',
      color: 'bg-accent-pink/30',
      path: '/projects/fuetterungstouren'
    },
    {
      title: 'Shelter Lombok',
      description: 'Unser Shelter auf Lombok bietet Straßentieren ein sicheres Zuhause und die Chance auf Adoption.',
      color: 'bg-accent-blue/30',
      path: '/projects/shelter-lombok'
    },
    {
      title: 'Public Shelter Rumänien',
      description: 'Wir unterstützen öffentliche Tierheime in Rumänien mit Ressourcen und Expertise.',
      color: 'bg-accent-green/30',
      path: '/projects/public-shelter-rumaenien'
    },
    {
      title: 'Tierrettungen',
      description: 'Notfallrettungen für Tiere in akuter Gefahr oder mit dringendem medizinischen Bedarf.',
      color: 'bg-red-200',
      path: '/projects/tierrettungen'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-accent-blue/15 py-16 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 opacity-5">
            <PawPrint size={200} className="text-primary" />
          </div>
          <div className="absolute -bottom-16 -left-16 opacity-5">
            <PawPrint size={200} className="text-primary" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-glorious">
                Unsere Projekte
              </h1>
              <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
              <p className="text-gray-700 text-lg md:text-xl mb-8 font-futura">
                Bei FAM for Dogs e.V. setzen wir uns durch verschiedene Projekte für das Wohl von Straßentieren ein. 
                Von Kastrationsprogrammen bis hin zu Notfallrettungen - entdecken Sie unsere vielfältigen Initiativen.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Link 
                  key={index} 
                  to={project.path}
                  className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${project.color}`}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3 font-futura">{project.title}</h3>
                    <p className="text-gray-700 mb-4 font-futura">{project.description}</p>
                    <div className="flex items-center text-secondary font-medium">
                      <span>Mehr erfahren</span>
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-glorious">Unterstütze unsere Arbeit</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 font-futura">
              Mit deiner Hilfe können wir noch mehr Tieren helfen. Werde ein Teil unserer Mission und unterstütze unsere Projekte.
            </p>  
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/spenden" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-medium transition-all duration-300 font-futura"
              >
                Jetzt spenden
              </Link>
              <Link 
                to="/join-family" 
                className="bg-secondary text-primary hover:bg-secondary/90 px-8 py-3 rounded-full font-medium transition-all duration-300 font-futura"
              >
                FAMily werden
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
