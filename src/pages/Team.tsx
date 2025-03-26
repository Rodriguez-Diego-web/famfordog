import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const boardMembers = [
    {
      name: "Mieke & Fiona",
      role: "Gründerinnen & Vorsitzende",
      bio: "Mieke und Fiona bilden gemeinsam die Doppelspitze des Vereins FAM for Dogs e.V. Beide engagieren sich schon seit vielen Jahren im Tierschutz – seit 2019 setzen sie sich als Team aktiv für Hunde in Not ein. Der Auslöser für ihr gemeinsames Engagement war eine Reise nach Rumänien – ein prägendes Erlebnis für die beiden, das den Wunsch noch mehr zu helfen verstärkt hat. Mieke, von Beruf Rechsanwältin, gründete zunächst den Verein Dogs of Lombok e.V. während eines mehrmonatigen beruflichen Aufenthalts in Indonesien im Jahr 2023. Heute wird der Verein unter dem Namen FAM for Dogs e.V. weitergeführt. Fiona ist Hundephysiotherapeutin und bringt ihre fachliche Expertise in die Betreuung geretteter Hunde ein. Auch ihre eigenen Hunde spiegeln ihre Tierschutzmission wider: Miekes Hund Jack lebte früher auf den Straßen Kuwaits, während Fiona drei Hunde aus Rumänien adoptiert hat – darunter einen mit Handicap. Darüber hinaus haben beide über die Jahre hinweg zahlreiche Pflegehunde bei sich aufgenommen, versorgt und auf ein neues Leben vorbereitet.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    },
    {
      name: "Kira",
      role: "Vorstandsmitglied",
      bio: "Kira ist neben ihrer Arbeit als Autorin, Dozentin und Podcast-Host auch leidenschaftliche Hundemama ihres rumänischen Rüden Homie. Als er 2020 Teil ihrer Familie wurde, war das der ausschlaggebende Punkt, sich mehr im Tierschutz zu engagieren. Erst als stille Spenderin und jetzt als Vorstandsmitglied beim FAM for Dogs e.V.. Kira ist unsere Orga-Queen und kümmert sich unter anderem um unsere Mitglieder und Sponsor:innen.",
      image: "/images/team/Kira.jpeg"
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

  const designerMembers = [
    {
      name: "Hanna",
      role: "Designer",
      bio: "Mit langjähriger Erfahrung in der Werbebranche sorgt Hanna für die visuelle Identität von FAM for Dogs. Ihr Auge fürs Detail und Gespür für Gestaltung trägt unsere Botschaft und die wichtige Arbeit für den Tierschutz in die Welt.",
      image: "/images/team/Hanna.jpeg"
    }
  ];

  const developerMembers = [
    {
      name: "Diego",
      role: "Developer",
      bio: "Als leidenschaftlicher Programmierer und Hundeliebhaber vereint Diego seine technischen Fähigkeiten mit seiner Liebe zu Vierbeinern. Er sorgt dafür, dass unsere digitale Präsenz reibungslos funktioniert und unsere Botschaft effektiv in die Online-Welt getragen wird. In seiner Freizeit verbringt er gerne Zeit mit Hunden und engagiert sich für ihre Rechte und ihr Wohlbefinden.",
      image: "/images/team/WhatsApp Image 2025-03-24 at 18.11.30.jpeg"
    }
  ];

  const renderTeamMembers = (members) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {members.map((member, index) => (
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
    );
  };

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
          
          <h2 className="text-3xl font-bold text-primary mb-6 font-glorious">Vorstand</h2>
          {renderTeamMembers(boardMembers)}
          
          <h2 className="text-3xl font-bold text-primary mb-6 font-glorious">Designer</h2>
          {renderTeamMembers(designerMembers)}
          
          <h2 className="text-3xl font-bold text-primary mb-6 font-glorious">Developer</h2>
          {renderTeamMembers(developerMembers)}
          
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
                  Mitmachen
                </a>
              </div>
              <div className="bg-cover bg-center h-full min-h-[300px]" style={{ backgroundImage: 'url("/images/HeroImage.png")' }}></div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-primary mb-6 font-glorious">Ehrenamtliche Helfer</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl font-futura">
            Neben unserem Kernteam unterstützen uns viele ehrenamtliche Helfer bei unserer Arbeit. 
            Ohne ihr Engagement wäre unsere Arbeit nicht möglich. Wir sind dankbar für jeden, der 
            sich für unsere Mission einsetzt.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
