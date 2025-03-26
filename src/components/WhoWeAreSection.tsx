import { UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhoWeAreSection = () => {
  const teamMembers = [
    {
      name: "Fiona & Mieke",
      role: "Gründerinnen & Vorsitzende",
      bio: "Gemeinsam gründeten sie \"Dogs of Lombok e.V.\", der nun zu FAM for dogs e.V. wird. Seit 2019 im Tierschutz aktiv.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    },
    {
      name: "Kira",
      role: "Beisitzerin",
      bio: "Unterstützt den Vorstand als Beisitzerin und trägt zum Erfolg des Projekts bei.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    },
    {
      name: "Chrissy",
      role: "Beisitzerin",
      bio: "Engagiert sich im Vorstand und bringt ihre Expertise in die Tierschutzprojekte ein.",
      image: "/images/team/WhatsApp Image 2025-03-25 at 23.49.01.jpeg"
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    style={
                      member.name === "Kira" ? { objectPosition: "center 20%" } : 
                      member.name === "Fiona & Mieke" ? { objectPosition: "center 20%" } : 
                      {}
                    }
                  />
                ) : (
                  <div className="w-full h-full bg-accent-blue flex items-center justify-center">
                    <UserCircle2 size={100} className="text-primary" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary font-futura">{member.name}</h3>
                <p className="text-secondary font-medium mb-3 font-futura">{member.role}</p>
                <p className="text-gray-700 font-futura">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link
            to="/team"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg font-futura"
          >
            Unser gesamtes Team kennenlernen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
