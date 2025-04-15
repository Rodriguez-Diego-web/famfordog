import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Download, Mail, Heart, Users, PawPrint, Calendar, Star, X } from 'lucide-react';
import emailjs from 'emailjs-com';

const JoinFamily = () => {
  // State für das Modal
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  
  // Öffne das Modal statt PDF
  const openMembershipForm = () => {
    setShowMembershipModal(true);
    // Verhindere das Scrollen im Hintergrund
    document.body.style.overflow = 'hidden';
  };
  
  // Schließe das Modal
  const closeMembershipModal = () => {
    setShowMembershipModal(false);
    // Erlaube Scrollen wieder
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // States für verschiedene Formulare
  const [volunteerFormData, setVolunteerFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general' // general, fostering, events, fundraising, other
  });

  const [membershipFormData, setMembershipFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    postalCode: '',
    city: '',
    email: '',
    phone: '',
    birthDate: '',
    contributionAmount: 5, // Mindestbeitrag in Euro
    paymentInterval: 'monthly', // monthly, yearly
    paymentMethod: 'sepa', // sepa, transfer
    iban: '',
    bic: '',
    accountOwner: '',
    agreeToTerms: false,
    agreeToPrivacy: false
  });

  const [showMembershipForm, setShowMembershipForm] = useState(false);
  const [membershipSubmitted, setMembershipSubmitted] = useState(false);

  const handleVolunteerChange = (e) => {
    const { name, value } = e.target;
    setVolunteerFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleMembershipChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMembershipFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Volunteer Form submitted:', volunteerFormData);
    alert('Vielen Dank für dein Interesse! Wir werden uns bald bei dir melden.');
    
    // Reset form
    setVolunteerFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: 'general'
    });
  };

  const handleMembershipSubmit = (e) => {
    e.preventDefault();
    
    // Formatiere die Daten für eine bessere E-Mail-Darstellung
    const templateParams = {
      firstName: membershipFormData.firstName,
      lastName: membershipFormData.lastName,
      street: membershipFormData.street,
      postalCode: membershipFormData.postalCode,
      city: membershipFormData.city,
      email: membershipFormData.email,
      phone: membershipFormData.phone,
      birthDate: membershipFormData.birthDate,
      contributionAmount: membershipFormData.contributionAmount,
      paymentInterval: membershipFormData.paymentInterval,
      paymentMethod: membershipFormData.paymentMethod,
      iban: membershipFormData.paymentMethod === 'sepa' ? membershipFormData.iban : 'Nicht angegeben',
      bic: membershipFormData.paymentMethod === 'sepa' ? membershipFormData.bic : 'Nicht angegeben',
      accountOwner: membershipFormData.paymentMethod === 'sepa' ? membershipFormData.accountOwner : 'Nicht angegeben',
      formType: 'Fördermitgliedschaft',
      timestamp: new Date().toLocaleString('de-DE')
    };

    // Ersetzen Sie diese Werte mit Ihren eigenen EmailJS-Anmeldeinformationen
    const serviceID = 'YOUR_SERVICE_ID'; // Ändern Sie dies nach der Einrichtung
    const templateID = 'YOUR_TEMPLATE_ID'; // Ändern Sie dies nach der Einrichtung
    const userID = 'YOUR_USER_ID'; // Ändern Sie dies nach der Einrichtung

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email erfolgreich gesendet!', response.status, response.text);
        setMembershipSubmitted(true);
      }, (error) => {
        console.error('Fehler beim Senden der E-Mail:', error);
        alert('Es gab ein Problem bei der Übermittlung des Formulars. Bitte versuche es später noch einmal.');
      });
  };

  const toggleMembershipForm = () => {
    setShowMembershipForm(!showMembershipForm);
    setMembershipSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Fördermitglied-Modal */}
      {showMembershipModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-2xl font-bold text-primary font-futura">Fördermitglied werden</h2>
              <button 
                onClick={closeMembershipModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-2 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 70px)' }}>
              <iframe 
                src="https://secure.fundraisingbox.com/app/payment?hash=tb50awqf33usb4aw&t=1ee7e361ee24e0d8791a9f6ab8a6bb8a&fb_id=25410"
                title="Fundraising Box Fördermitgliedsformular"
                width="100%"
                height="2100"
                className="md:h-[1800px]" 
                frameBorder="0"
                allowTransparency={true}
                allow="payment"
                style={{ display: 'block', margin: '0 auto' }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8 font-glorious">SEI TEIL DER FAMily</h1>
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
                      regelmäßige Updates
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      Einladung zu exklusiven Veranstaltungen
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      Teilnahme an der Jahreshauptversammlung
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      steuerlich absetzbare Spendenbescheinigung
                    </li>
                  </ul>
                </div>
                
                <button 
                  onClick={openMembershipForm}
                  className="inline-flex items-center bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
                >
                  <Heart size={18} className="mr-2" />
                  Fördermitglied werden
                </button>
                
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
              {/* Card 1 - Yellow */}
              <div className="bg-accent-yellow rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <PawPrint size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-futura">Pflegestelle werden</h3>
                  <p className="text-white/90 font-futura text-sm">
                    Biete einem Hund ein vorübergehendes Zuhause, bis er seine Für-immer-Familie findet.
                  </p>
                </div>
              </div>
              
              {/* Card 2 - Blue */}
              <div className="bg-accent-blue rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Heart size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-futura">Sachspenden</h3>
                  <p className="text-white/90 font-futura text-sm">
                    Spende Futter, Decken, Spielzeug oder Medikamente für unsere Hunde.
                  </p>
                </div>
              </div>
              
              {/* Card 3 - Dark Green (like primary) */}
              <div className="bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-futura">Events organisieren</h3>
                  <p className="text-white/90 font-futura text-sm">
                    Plane Veranstaltungen oder Spendenaktionen, um Aufmerksamkeit und Mittel zu sammeln.
                  </p>
                </div>
              </div>
              
              {/* Card 4 - Pink */}
              <div className="bg-accent-pink rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Star size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-futura">Social Media</h3>
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
              
              <form onSubmit={handleVolunteerSubmit} className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2 font-futura">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={volunteerFormData.name}
                      onChange={handleVolunteerChange}
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
                      value={volunteerFormData.email}
                      onChange={handleVolunteerChange}
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
                    value={volunteerFormData.phone}
                    onChange={handleVolunteerChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Deine Telefonnummer"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="interest" className="block text-white font-medium mb-2 font-futura">Ich interessiere mich für</label>
                  <select 
                    id="interest" 
                    name="interest" 
                    value={volunteerFormData.interest}
                    onChange={handleVolunteerChange}
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
                    value={volunteerFormData.message}
                    onChange={handleVolunteerChange}
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinFamily;
