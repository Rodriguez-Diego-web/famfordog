import { UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadTeamMembersByCategory, type TeamMember } from '../lib/cms';

const WhoWeAreSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const vorstandMembers = await loadTeamMembersByCategory('Vorstand');
        setTeamMembers(vorstandMembers);
      } catch (error) {
        console.error('Fehler beim Laden der Team-Daten:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(prevId => (prevId === cardId ? null : cardId));
  };

  if (loading) {
    return (
      <section className="py-16 bg-accent-pink/15">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Lade Team-Daten...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-accent-pink/15">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-glorious">Unsere FAMily</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10 font-futura">
            Unser Team setzt sich mit Herz und Seele für den Tierschutz ein. 
            Lerne die Menschen kennen, die hinter FAM for Dogs e.V. stehen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => {
            const cardId = `member-${index}`;
            const isExpanded = expandedCard === cardId;

            return (
              <div
                key={index}
                className="relative rounded-3xl shadow-xl group h-[480px] overflow-hidden cursor-pointer"
                onClick={() => toggleCardExpansion(cardId)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  {member.image ? (
                    <img
                      src={member.image.startsWith('/') ? member.image : `/${member.image}`}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      style={
                        member.name === "Kira" ? { objectPosition: "center 20%" } : 
                        member.name === "Fiona & Mieke" ? { objectPosition: "center 20%" } : 
                        {}
                      }
                    />
                  ) : (
                    <div className="w-full h-full bg-accent-blue flex items-center justify-center">
                      <UserCircle2 size={80} className="text-primary" />
                    </div>
                  )}
                </div>

                {/* Sliding Content Panel */}
                <div
                  className={`absolute bottom-0 left-0 w-full bg-white transition-transform duration-500 ease-in-out p-6 text-left transform 
                    ${isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-160px)]'}
                  `}
                  style={{ height: 'calc(100% - 20px)' }}
                >
                  <div className="h-full flex flex-col">
                    <div className="text-center pb-4 flex-shrink-0">
                      <h3 className="text-xl font-bold text-primary font-glorious mb-1">{member.name}</h3>
                      <p className="text-secondary text-sm font-semibold font-futura uppercase tracking-wider mb-3">{member.role}</p>
                    </div>
                    <div className="flex-grow overflow-y-auto">
                      <p className="text-gray-600 font-futura text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
          <Link 
            to="/about#family" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg inline-block w-fit font-futura"
          >
            Unser Team kennenlernen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
