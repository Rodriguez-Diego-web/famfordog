import { Link } from 'react-router-dom';
import { Users, Heart, HandHeart } from 'lucide-react';

interface JoinTeamSectionProps {
  contained?: boolean;
}

const JoinTeamSection = ({ contained = true }: JoinTeamSectionProps) => {
  const content = (
    <div className="bg-primary rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-pink/20 rounded-full mb-4">
          <Heart className="w-8 h-8 text-accent-pink" />
        </div>
        <h2 className="text-4xl font-bold text-white mb-4 font-glorious">Werde Teil unserer FAMily</h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto font-futura">
          Gemeinsam können wir das Leben von Straßenhunden verändern. Jeder Beitrag zählt!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-accent-blue/10 backdrop-blur-sm rounded-xl p-6 text-center border border-accent-blue/20">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-blue/20 rounded-full mb-3">
            <Users className="w-6 h-6 text-accent-blue" />
          </div>
          <h3 className="text-white font-semibold mb-2 font-futura">Ehrenamtlich helfen</h3>
          <p className="text-white/80 text-sm font-futura">Unterstütze uns vor Ort oder remote</p>
        </div>
        
        <div className="bg-accent-green/10 backdrop-blur-sm rounded-xl p-6 text-center border border-accent-green/20">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-green/20 rounded-full mb-3">
            <Heart className="w-6 h-6 text-accent-green" />
            </div>
          <h3 className="text-white font-semibold mb-2 font-futura">Spenden</h3>
          <p className="text-white/80 text-sm font-futura">Finanziere Kastrationen und Rettungen</p>
            </div>
        
        <div className="bg-accent-pink/10 backdrop-blur-sm rounded-xl p-6 text-center border border-accent-pink/20">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-pink/20 rounded-full mb-3">
            <HandHeart className="w-6 h-6 text-accent-pink" />
          </div>
          <h3 className="text-white font-semibold mb-2 font-futura">Patenschaft</h3>
          <p className="text-white/80 text-sm font-futura">Übernimm eine Hundepatenschaft</p>
        </div>
      </div>
      
      <div className="text-center">
        <Link 
          to="/join-family" 
          className="inline-flex items-center bg-accent-yellow text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-yellow/90 transition-all duration-300 hover:shadow-lg hover:scale-105 font-futura"
        >
          <Heart className="w-5 h-5 mr-2" />
          Jetzt mitmachen
        </Link>
      </div>
    </div>
  );

  if (contained) {
    return (
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-6">
          {content}
      </div>
    </section>
  );
  }

  return content;
};

export default JoinTeamSection;
