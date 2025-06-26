import { UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhoWeAreSection = () => {
  const teamMembers = [
    {
      name: "Mieke & Fiona",
      role: "Gründerinnen & Vorsitzende",
      bio: "Mieke und Fiona bilden gemeinsam die Doppelspitze des Vereins FAM for Dogs e.V.",
      image: "/images/team/fiona.jpeg"
    },
    {
      name: "Kira",
      role: "Vorstandsmitglied",
      bio: "Kira ist Vorstandsmitglied und unsere Orga-Queen - sie kümmert sich unter anderem um unsere Mitglieder und Sponsor:innen.",
      image: "/kira/Kira.jpeg"
    },
    {
      name: "Chrissy",
      role: "Vorstandsmitglied",
      bio: "Chrissy ist Vorstandsmitglied und bringt mit ihrem Organisationstalent Struktur in jedes Projekt – ohne sie läuft einfach nichts.",
      image: "/images/team/WhatsApp Image 2025-03-25 at 23.49.01.jpeg"
    },
    {
      name: "Lara",
      role: "Schatzmeisterin",
      bio: "Lara ist Vorstandsmitglied, unsere Schatzmeisterin und Head of Finance.",
      image: "/Lara/Lara.jpeg"
    },
  ];

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
        
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-16 justify-items-center">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col sm:flex-row overflow-hidden w-full max-w-lg"
            >
              <div className="w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    style={
                      member.name === "Kira" ? { objectPosition: "center 20%" } : 
                      member.name === "Mieke & Fiona" ? { objectPosition: "center 20%" } : 
                      {}
                    }
                  />
                ) : (
                  <div className="w-full h-full bg-accent-blue flex items-center justify-center">
                    <UserCircle2 size={80} className="text-primary" />
                  </div>
                )}
              </div>
              <div className="w-full sm:w-3/5 p-4 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-primary font-futura mb-1">{member.name}</h3>
                <p className="text-secondary text-sm font-medium mb-2 font-futura">{member.role}</p>
                <p className="text-gray-700 text-sm font-futura leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
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
