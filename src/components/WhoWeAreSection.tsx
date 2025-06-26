import { UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const WhoWeAreSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(prevId => (prevId === cardId ? null : cardId));
  };

  const teamMembers = [
    {
      name: "Fiona & Mieke",
      role: "Gründerinnen & Vorsitzende",
      bio: "Mieke und Fiona bilden gemeinsam die Doppelspitze des Vereins FAM for Dogs e.V. Beide engagieren sich schon seit vielen Jahren im Tierschutz – seit 2019 setzen sie sich als Team aktiv für Hunde in Not ein. Der Auslöser für ihr gemeinsames Engagement war eine Reise nach Rumänien – ein prägendes Erlebnis für die beiden, das den Wunsch noch mehr zu helfen verstärkt hat. Mieke, von Beruf Rechsanwältin, gründete zunächst den Verein Dogs of Lombok e.V. während eines mehrmonatigen beruflichen Aufenthalts in Indonesien im Jahr 2023. Heute wird der Verein unter dem Namen FAM for Dogs e.V. weitergeführt. Fiona ist Hundephysiotherapeutin und bringt ihre fachliche Expertise in die Betreuung geretteter Hunde ein. Auch ihre eigenen Hunde spiegeln ihre Tierschutzmission wider: Miekes Hund Jack lebte früher auf den Straßen Kuwaits, während Fiona drei Hunde aus Rumänien adoptiert hat – darunter einen mit Handicap. Darüber hinaus haben beide über die Jahre hinweg zahlreiche Pflegehunde bei sich aufgenommen, versorgt und auf ein neues Leben vorbereitet.",
      image: "/images/team/fiona.jpeg"
    },
    {
      name: "Kira",
      role: "Vorstandsmitglied",
      bio: "Kira ist neben ihrer Arbeit als Autorin, Dozentin und Podcast-Host auch leidenschaftliche Hundemama ihres rumänischen Rüden Homie. Als er 2020 Teil ihrer Familie wurde, war das der ausschlaggebende Punkt, sich mehr im Tierschutz zu engagieren. Erst als stille Spenderin und jetzt als Vorstandsmitglied beim FAM for Dogs e.V.. Bestärkt wurde ihre Entscheidung durch die gemeinsame Reise mit Fiona nach Rumänien im Frühjahr 2025. Das Leid der Hunde hautnah mitzuerleben, die Machtlosigkeit zu spüren und die finanziellen Engpässe der helfenden Menschen vor Ort zu sehen, hat Kira dazu bewegt, von der inaktiven in die atkive Rolle zu schlüpfen. Kira ist unsere Orga-Queen und kümmert sich unter anderem um unsere Mitglieder und Sponsor:innen. Ihr wollt Teil unserer FAMily werden? Dann meldet euch bei Kira info@famfordogs.com",
      image: "/images/team/Kira.jpeg"
    },
    {
      name: "Chrissy",
      role: "Vorstandsmitglied",
      bio: "Chrissy bringt mit ihrem Organisationstalent Struktur in jedes Projekt – ohne sie läuft einfach nichts. Sie ist vielseitig einsetzbar und engagiert sich in den Bereichen, in denen Unterstützung gebraucht wird. Dabei bleibt sie stets ruhig und findet immer Lösungen. Gute Planung und Empathie sind für sie selbstverständlich. Schon von klein auf liebt Chrissy Tiere und setzt sich mit großer Leidenschaft für sie ein. Ob es um Fundtiere in Deutschland oder Straßenhunde im Ausland geht, ihr Engagement kennt keine Grenzen. Nach dem plötzlichen Verlust ihres Hundes verließ sie Frankfurt für eine Asienreise. Dort erschütterte sie das Tierleid, besonders auf Lombok, zutiefst. Diese Erfahrungen stärkten ihren unermüdlichen Einsatz für hilfsbedürftige Tiere",
      image: "/images/team/WhatsApp Image 2025-03-25 at 23.49.01.jpeg"
    },
    {
      name: "Lara",
      role: "Schatzmeisterin",
      bio: "Lara ist Vorstandsmitglied bei FAM for Dogs e.V. und übernimmt als Schatzmeisterin und Head of Finance die finanzielle Verwaltung des Vereins. Mit ihrem organisatorischen Geschick und einem ausgeprägten Sinn für Zahlen sorgt sie dafür, dass alle Projekte solide finanziert und nachhaltig umgesetzt werden können. Durch ihre enge Freundschaft mit Fiona hat sie seit Jahren Berührungspunkte mit dem Tierschutz, auch wenn Hunde selbst bisher nicht ihre größte Leidenschaft waren. Gerade dieser Außenblick macht sie zu einer wertvollen Ergänzung im Team: Sie behält den Überblick über die Finanzen, sorgt für Struktur und stellt sicher, dass die Mittel gezielt dort ankommen, wo sie gebraucht werden – für den Schutz und die Versorgung von Straßentieren in Indonesien und Rumänien.",
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
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
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
