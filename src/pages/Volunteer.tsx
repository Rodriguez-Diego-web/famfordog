import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PawPrint, Heart, Users, Calendar, MapPin, Mail } from 'lucide-react';

const Volunteer = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6 font-glorious">Ehrenamtlich helfen</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-futura">
              Möchtest du einen Unterschied im Leben von Tieren machen? 
              Entdecke die verschiedenen Möglichkeiten, wie du dich bei FAM for Dogs e.V. einbringen kannst.
            </p>
          </div>

          {/* Main image */}
          <div className="rounded-2xl overflow-hidden mb-16 shadow-lg">
            <img 
              src="/Team.jpg" 
              alt="Ehrenamtliche Helfer" 
              className="w-full h-[400px] object-cover object-center"
            />
          </div>

          {/* Ways to Help Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center font-glorious">Wie du helfen kannst</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <PawPrint size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 font-futura">Vor Ort helfen</h3>
                <p className="text-gray-600 mb-6 font-futura">
                  Helfe direkt vor Ort in unseren Projekten in Lombok oder Rumänien. 
                  Hier wird jede Hand gebraucht – vom Füttern bis zur Betreuung der Hunde.
                </p>
                <a 
                  href="#volunteer-form" 
                  className="text-primary font-medium inline-flex items-center hover:text-secondary transition-colors font-futura"
                >
                  Mehr erfahren
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Heart size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 font-futura">Pflegestelle werden</h3>
                <p className="text-gray-600 mb-6 font-futura">
                  Biete einem Hund ein vorübergehendes Zuhause, bis eine dauerhafte Familie gefunden ist. 
                  Als Pflegestelle leistest du einen unschätzbaren Beitrag.
                </p>
                <a 
                  href="#volunteer-form" 
                  className="text-primary font-medium inline-flex items-center hover:text-secondary transition-colors font-futura"
                >
                  Mehr erfahren
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 font-futura">Events & Fundraising</h3>
                <p className="text-gray-600 mb-6 font-futura">
                  Hilf uns bei der Organisation von Veranstaltungen, Spendenaktionen oder Informationsständen. 
                  Jede Unterstützung trägt zur Verwirklichung unserer Projekte bei.
                </p>
                <a 
                  href="#volunteer-form" 
                  className="text-primary font-medium inline-flex items-center hover:text-secondary transition-colors font-futura"
                >
                  Mehr erfahren
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Upcoming Volunteer Opportunities */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center font-glorious">Aktuelle Einsatzmöglichkeiten</h2>
            
            <div className="space-y-6">
              {/* Opportunity 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-start">
                    <div className="w-20 h-20 bg-primary/10 rounded-lg flex flex-col items-center justify-center text-primary">
                      <Calendar className="h-6 w-6 mb-1" />
                      <span className="text-sm font-medium">Mai</span>
                      <span className="text-lg font-bold">15</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-primary mb-2 font-futura">Kastrationsaktion in Rumänien</h3>
                    <p className="text-gray-600 mb-4 font-futura">
                      Wir suchen Helfer für eine zweiwöchige Kastrationsaktion in unserem rumänischen Projekt. 
                      Veterinärmedizinische Kenntnisse sind von Vorteil, aber nicht zwingend erforderlich.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={16} className="mr-1 text-primary" />
                        <span className="font-futura">Bukarest, Rumänien</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-1 text-primary" />
                        <span className="font-futura">15. - 30. Mai 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <a 
                      href="#volunteer-form" 
                      className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium font-futura"
                    >
                      Bewerben
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Opportunity 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-start">
                    <div className="w-20 h-20 bg-primary/10 rounded-lg flex flex-col items-center justify-center text-primary">
                      <Calendar className="h-6 w-6 mb-1" />
                      <span className="text-sm font-medium">Juni</span>
                      <span className="text-lg font-bold">10</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-primary mb-2 font-futura">Shelter-Helfer in Lombok</h3>
                    <p className="text-gray-600 mb-4 font-futura">
                      Unser Shelter in Lombok benötigt Unterstützung bei der täglichen Versorgung der Hunde. 
                      Eine längerfristige Unterstützung von mindestens 4 Wochen ist erwünscht.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={16} className="mr-1 text-primary" />
                        <span className="font-futura">Lombok, Indonesien</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-1 text-primary" />
                        <span className="font-futura">Ab 10. Juni 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <a 
                      href="#volunteer-form" 
                      className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium font-futura"
                    >
                      Bewerben
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Volunteer Form */}
          <div id="volunteer-form" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-primary mb-6 font-glorious">Werde aktiv</h2>
                  <p className="text-gray-600 mb-8 font-futura">
                    Fülle das Formular aus und teile uns mit, wie du helfen möchtest. 
                    Wir werden uns innerhalb von 48 Stunden bei dir melden.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Vorname</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="Dein Vorname"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Nachname</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="Dein Nachname"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-futura">E-Mail</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="deine@email.de"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Telefon</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="+49 123 456789"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="helpType" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Wie möchtest du helfen?</label>
                      <select 
                        id="helpType" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      >
                        <option value="" disabled selected>Wähle eine Option</option>
                        <option value="onsite">Vor Ort helfen</option>
                        <option value="foster">Pflegestelle werden</option>
                        <option value="events">Events & Fundraising</option>
                        <option value="other">Andere</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Nachricht</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Erzähle uns mehr über deine Erfahrungen und Motivation..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full py-3 px-6 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium font-futura"
                    >
                      Anfrage senden
                    </button>
                  </form>
                </div>
                <div className="bg-primary flex items-center justify-center p-8 lg:p-12">
                  <div className="text-white max-w-md">
                    <h3 className="text-2xl font-bold mb-6 font-glorious">Kontaktiere uns direkt</h3>
                    <p className="mb-8 text-white/80 font-futura">
                      Du hast noch Fragen oder möchtest mehr Informationen zu unseren Einsatzmöglichkeiten? 
                      Kontaktiere uns gerne direkt.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="text-secondary mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium font-futura">E-Mail</p>
                          <a href="mailto:volunteers@famfordogs.de" className="text-white/80 hover:text-white transition-colors font-futura">
                            volunteers@famfordogs.de
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="text-secondary mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium font-futura">Büro</p>
                          <p className="text-white/80 font-futura">
                            Sternhagenweg 13<br />
                            Hamburg, 22303
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center font-glorious">Erfahrungen unserer Freiwilligen</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative">
                <div className="absolute -top-6 left-8">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <PawPrint size={24} className="text-primary" />
                  </div>
                </div>
                <div className="pt-6">
                  <p className="text-gray-600 mb-6 italic font-futura">
                    "Meine Zeit im Shelter in Lombok war unglaublich bereichernd. Die Dankbarkeit in den Augen der Hunde zu sehen, wenn du ihnen hilfst, ist unbezahlbar."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-primary font-futura">Maria S.</h4>
                      <p className="text-sm text-gray-500 font-futura">Freiwillige in Lombok</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative">
                <div className="absolute -top-6 left-8">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <PawPrint size={24} className="text-primary" />
                  </div>
                </div>
                <div className="pt-6">
                  <p className="text-gray-600 mb-6 italic font-futura">
                    "Als Pflegestelle konnte ich mehreren Hunden helfen, ihr Für-Immer-Zuhause zu finden. Die Unterstützung vom Team ist fantastisch, man ist nie allein."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-primary font-futura">Thomas K.</h4>
                      <p className="text-sm text-gray-500 font-futura">Pflegestelle</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative">
                <div className="absolute -top-6 left-8">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <PawPrint size={24} className="text-primary" />
                  </div>
                </div>
                <div className="pt-6">
                  <p className="text-gray-600 mb-6 italic font-futura">
                    "Die Kastrationsaktion in Rumänien hat mir gezeigt, wie wichtig unsere Arbeit ist. Wir haben in zwei Wochen über 100 Hunde kastriert und so zur Verbesserung der Situation beigetragen."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-primary font-futura">Laura M.</h4>
                      <p className="text-sm text-gray-500 font-futura">Tierarzthelferin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
