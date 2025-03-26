import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Fiona & Mieke",
      role: "Gründerinnen & Vorsitzende",
      bio: "Fiona und Mieke machen seit 2019 gemeinsam Tierschutz. Sie haben den Verein \"Dogs of Lombok e.V.\" gegründet, der nun zu FAM for dogs e.V. wird. Als Vorsitzende leiten sie den Verein und entwickeln Strategien für einen nachhaltigen Tierschutz.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    },
    {
      name: "Kira",
      role: "Beisitzerin",
      bio: "Als Beisitzerin im Vorstand unterstützt Kira die Vereinsarbeit und bringt wertvolle Perspektiven ein, um die Mission von FAM for Dogs voranzubringen.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    },
    {
      name: "Chrissy",
      role: "Beisitzerin",
      bio: "Chrissy engagiert sich als Beisitzerin im Vorstand und trägt mit ihrer Expertise zur Weiterentwicklung der Tierschutzprojekte bei.",
      image: "/images/team/WhatsApp Image 2025-03-25 at 23.49.01.jpeg"
    },
    {
      name: "Lara",
      role: "Schatzmeisterin",
      bio: "Lara ist unsere Schatzmeisterin und Head of Finance. Sie hat zwar nicht direkt mit Hunden zu tun, ist aber als beste Freundin von Mieke ein unverzichtbarer Teil des Teams.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold text-primary mb-8 font-glorious">Unser Team</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl font-futura">
            Lernen Sie die engagierten Menschen kennen, die unsere Mission möglich machen. 
            Unser Team besteht aus leidenschaftlichen Tierschützern, die sich für das Wohl 
            der Straßenhunde einsetzen.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative image-hover">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-semibold font-futura">{member.name}</h3>
                    <p className="text-white/80 text-sm font-futura">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-4 font-futura">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href="#" 
                      className="text-primary hover:text-accent-blue transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="text-primary hover:text-accent-blue transition-colors"
                      aria-label={`Instagram-Profil von ${member.name}`}
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-primary rounded-2xl overflow-hidden shadow-xl mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6 font-glorious">Werde Teil unseres Teams</h2>
                <p className="text-white/80 mb-6 font-futura">
                  Wir suchen immer nach engagierten Menschen, die unsere Leidenschaft für Tierschutz teilen. 
                  Ob als Spender, Helfer vor Ort oder Unterstützer von zu Hause aus – jeder kann einen Beitrag leisten.
                </p>
                <a 
                  href="/volunteer" 
                  className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg inline-block w-fit font-futura"
                >
                  Möglichkeiten erkunden
                </a>
              </div>
              <div className="h-full">
                <img 
                  src="/images/HeroImage.png" 
                  alt="Team im Einsatz mit Hunden" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
