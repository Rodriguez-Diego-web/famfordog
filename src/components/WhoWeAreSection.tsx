import { UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhoWeAreSection = () => {
  const teamMembers = [
    {
      name: "Mieke & Fiona",
      role: "Doppelspitze des Vereins",
      bio: "Mieke und Fiona bilden gemeinsam die Doppelspitze des Vereins FAM for Dogs e.V.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    },
    {
      name: "Kira",
      role: "Vorstandsmitglied & Orga-Queen",
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
      role: "Vorstandsmitglied & Schatzmeisterin",
      bio: "Lara ist Vorstandsmitglied, unsere Schatzmeisterin und Head of Finance.",
      image: "/Lara/Lara.jpeg"
    },
    {
      name: "Daze",
      role: "Aktivstes Mitglied",
      bio: "Unser aktivstes Mitglied Daze sorgt dafür, dass kein Hund übersehen wird - sie merkt sich jeden Namen und behält den Überblick.",
      image: "/Daze/WhatsApp Image 2025-03-26 at 15.08.17.jpeg"
    }
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
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
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary font-futura">{member.name}</h3>
                <p className="text-secondary text-sm font-medium mb-2 font-futura">{member.role}</p>
                <p className="text-gray-700 text-sm font-futura">{member.bio}</p>
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
