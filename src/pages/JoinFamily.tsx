import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Download, Mail, Heart, Users, PawPrint, Calendar, Star } from 'lucide-react';

const JoinFamily = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  // State for form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general' // general, fostering, events, fundraising, other
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Vielen Dank für dein Interesse! Wir werden uns bald bei dir melden.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: 'general'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8 font-glorious">Sei Teil der FAMily!</h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 font-futura max-w-3xl mx-auto">
              Es gibt viele Möglichkeiten, wie du uns unterstützen und Teil unserer Mission werden kannst. 
              Ob als Fördermitglied oder Volunteer – jede Hilfe zählt und macht einen Unterschied im Leben der Hunde.
            </p>
          </div>
          
          {/* Colorful Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Membership Section - Primary Color */}
            <div className="bg-primary rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 sm:p-10">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Heart size={32} className="text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-glorious">Fördermitgliedschaft</h2>
                <p className="text-white/90 mb-6 font-futura">
                  Als Fördermitglied unterstützt du unsere Arbeit mit einem regelmäßigen Beitrag. 
                  Deine Mitgliedschaft hilft uns, langfristig zu planen und nachhaltige Projekte umzusetzen.
                </p>
                <div className="bg-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 font-futura">Deine Vorteile:</h3>
                  <ul className="space-y-2 text-white/90 font-futura">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      Regelmäßige Updates über unsere Projekte
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      Einladungen zu exklusiven Veranstaltungen
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      Mitbestimmung bei der Jahreshauptversammlung
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      Steuerlich absetzbare Spendenbescheinigung
                    </li>
                  </ul>
                </div>
                <a 
                  href="/documents/foerdermitgliedschaft-antrag.pdf" 
                  download
                  className="inline-flex items-center bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
                >
                  <Download size={18} className="mr-2" />
                  Antrag herunterladen
                </a>
              </div>
            </div>
            
            {/* Volunteering Section - Accent Blue Color */}
            <div className="bg-accent-blue rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 sm:p-10">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Users size={32} className="text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-glorious">Volunteering</h2>
                <p className="text-white/90 mb-6 font-futura">
                  Als Volunteer kannst du dich aktiv einbringen und direkt mit den Hunden arbeiten. 
                  Wir suchen immer engagierte Menschen, die uns vor Ort oder aus der Ferne unterstützen möchten.
                </p>
                <div className="bg-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 font-futura">Möglichkeiten:</h3>
                  <ul className="space-y-2 text-white/90 font-futura">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      Mithilfe bei Fütterungstouren
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      Unterstützung bei Kastrationsprojekten
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      Organisation von Spendenaktionen
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      Social Media und Öffentlichkeitsarbeit
                    </li>
                  </ul>
                </div>
                <a 
                  href="#volunteer-form" 
                  className="inline-flex items-center bg-white hover:bg-gray-100 text-accent-blue px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
                >
                  <Mail size={18} className="mr-2" />
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
          
          {/* Ways to Help - Colorful Cards */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center font-glorious">Weitere Möglichkeiten zu helfen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 - Accent Green */}
              <div className="bg-accent-green rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <PawPrint size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-futura">Pflegestelle werden</h3>
                  <p className="text-white/90 font-futura text-sm">
                    Biete einem Hund ein vorübergehendes Zuhause, bis er seine Für-immer-Familie findet.
                  </p>
                </div>
              </div>
              
              {/* Card 2 - Accent Pink */}
              <div className="bg-accent-pink rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Heart size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-futura">Sachspenden</h3>
                  <p className="text-white/90 font-futura text-sm">
                    Spende Futter, Decken, Spielzeug oder Medikamente für unsere Hunde.
                  </p>
                </div>
              </div>
              
              {/* Card 3 - Secondary Color */}
              <div className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-futura">Events organisieren</h3>
                  <p className="text-white/90 font-futura text-sm">
                    Plane Veranstaltungen oder Spendenaktionen, um Aufmerksamkeit und Mittel zu sammeln.
                  </p>
                </div>
              </div>
              
              {/* Card 4 - Custom Yellow */}
              <div className="bg-[#dce169] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Star size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-futura">Social Media</h3>
                  <p className="text-white/90 font-futura text-sm">
                    Teile unsere Beiträge und hilf uns, mehr Menschen zu erreichen und aufzuklären.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Gradient Background */}
          <div id="volunteer-form" className="rounded-2xl overflow-hidden shadow-xl mb-16 bg-gradient-to-br from-primary via-accent-blue to-accent-pink">
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center font-glorious">Kontaktformular für Volunteers</h2>
              <p className="text-white/90 mb-8 text-center font-futura max-w-2xl mx-auto">
                Fülle das Formular aus, um uns mitzuteilen, wie du helfen möchtest. Wir werden uns so schnell wie möglich bei dir melden.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2 font-futura">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Dein Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2 font-futura">E-Mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="deine@email.de"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-white font-medium mb-2 font-futura">Telefon (optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Deine Telefonnummer"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="interest" className="block text-white font-medium mb-2 font-futura">Ich interessiere mich für</label>
                  <select 
                    id="interest" 
                    name="interest" 
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="general" className="text-gray-800">Allgemeine Unterstützung</option>
                    <option value="fostering" className="text-gray-800">Pflegestelle</option>
                    <option value="events" className="text-gray-800">Events & Fundraising</option>
                    <option value="social" className="text-gray-800">Social Media & PR</option>
                    <option value="other" className="text-gray-800">Anderes</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white font-medium mb-2 font-futura">Nachricht</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Erzähle uns, wie du helfen möchtest und welche Erfahrungen du mitbringst..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="inline-flex items-center bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
                  >
                    <Mail size={18} className="mr-2" />
                    Nachricht senden
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center font-glorious">Das sagen unsere Volunteers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent-green flex items-center justify-center mr-4">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary font-futura">Sarah</h3>
                    <p className="text-gray-600 text-sm">Volunteer seit 2022</p>
                  </div>
                </div>
                <p className="text-gray-700 font-futura text-sm">
                  "Die Arbeit mit FAM for Dogs hat mein Leben verändert. Es ist unglaublich erfüllend zu sehen, 
                  wie man mit kleinen Taten einen großen Unterschied im Leben der Hunde machen kann."
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent-pink flex items-center justify-center mr-4">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary font-futura">Michael</h3>
                    <p className="text-gray-600 text-sm">Fördermitglied seit 2021</p>
                  </div>
                </div>
                <p className="text-gray-700 font-futura text-sm">
                  "Als Fördermitglied fühle ich mich als wichtiger Teil des Teams. Die regelmäßigen Updates 
                  zeigen mir genau, wie meine Unterstützung hilft und was damit erreicht wird."
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent-blue flex items-center justify-center mr-4">
                    <span className="text-white font-bold">L</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary font-futura">Lisa</h3>
                    <p className="text-gray-600 text-sm">Pflegestelle seit 2023</p>
                  </div>
                </div>
                <p className="text-gray-700 font-futura text-sm">
                  "Als Pflegestelle habe ich schon mehreren Hunden geholfen, sich auf ihr neues Leben vorzubereiten. 
                  Es ist zwar manchmal schwer, sie gehen zu lassen, aber zu wissen, dass sie ein liebevolles Zuhause gefunden haben, ist unbezahlbar."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinFamily;
