import { Link } from 'react-router-dom';

const JoinTeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6 font-glorious">Werde Teil unseres Teams</h2>
              <p className="text-white/80 mb-6 font-futura">
                Wir suchen immer nach engagierten Menschen, die unsere Leidenschaft für Tierschutz teilen. 
                Ob als Spender, Helfer vor Ort oder Unterstützer von zu Hause aus – jeder kann einen Beitrag leisten.
              </p>
              <Link 
                to="/volunteer" 
                className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg inline-block w-fit font-futura"
              >
                Möglichkeiten erkunden
              </Link>
            </div>
            <div className="h-full min-h-[300px]">
              <img 
                src="/images/HeroImage.png" 
                alt="Team im Einsatz mit Hunden" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
