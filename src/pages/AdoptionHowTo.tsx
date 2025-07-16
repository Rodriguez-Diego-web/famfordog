import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clipboard, CheckCircle, Clock, Calendar, PawPrint, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdoptionHowTo = () => {
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
            <h1 className="text-5xl font-bold text-primary mb-6 font-glorious">Wie man adoptiert</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-futura">
              Eine detaillierte Anleitung zum Adoptionsprozess bei FAM for Dogs e.V. - von der Bewerbung bis zum glücklichen Einzug deines neuen Familienmitglieds.
            </p>
          </div>

          {/* Main image */}
          <div className="rounded-2xl overflow-hidden mb-16 shadow-lg">
            <img 
              src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (8).jpeg" 
              alt="Adoptionsprozess" 
              className="w-full h-[400px] object-cover object-center"
            />
          </div>

          {/* Application Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center font-glorious">Der Bewerbungsprozess</h2>
            
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clipboard className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 font-futura">1. Bewerbungsformular ausfüllen</h3>
                    <p className="text-gray-600 font-futura">
                      Der erste Schritt ist das Ausfüllen unseres Bewerbungsformulars. Dieses Formular umfasst Fragen zu deinem Lebensstil, deiner Wohnsituation, deinen vorherigen Erfahrungen mit Haustieren und deinen Erwartungen an deinen neuen Hund. Diese Informationen helfen uns, den richtigen Hund für dich zu finden.
                    </p>
                    <div className="mt-4">
                      <a 
                        href="#application-form" 
                        className="px-6 py-2 bg-primary text-white rounded-full inline-flex items-center hover:bg-primary/90 transition-colors font-medium font-futura"
                      >
                        Zum Bewerbungsformular
                        <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-8 flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 font-futura">2. Überprüfung deiner Bewerbung</h3>
                    <p className="text-gray-600 font-futura">
                      Unser Adoptionsteam prüft deine Bewerbung sorgfältig. Wir achten darauf, ob deine Lebensumstände zu den Bedürfnissen des Hundes passen, für den du dich interessierst. Falls wir Bedenken haben oder weitere Informationen benötigen, werden wir dich kontaktieren. Diese Phase dauert in der Regel 3-5 Werktage.
                    </p>
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 font-futura flex items-start">
                        <Clock size={18} className="text-primary mr-2 flex-shrink-0 mt-1" />
                        <span>
                          <strong className="text-primary">Bearbeitungszeit:</strong> 3-5 Werktage. In besonders beschäftigten Zeiten kann es etwas länger dauern. Wir bitten um dein Verständnis.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-8 flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 font-futura">3. Gespräch und Kennenlernen</h3>
                    <p className="text-gray-600 mb-4 font-futura">
                      Nach der ersten Bewertung deiner Bewerbung werden wir ein persönliches oder virtuelles Gespräch mit dir vereinbaren. Dies gibt uns die Möglichkeit, dich besser kennenzulernen und weitere Fragen zu klären. Bei Hunden, die bereits in Deutschland sind, ist auch ein persönliches Kennenlernen mit dem Hund möglich.
                    </p>
                    <p className="text-gray-600 font-futura">
                      Dieses Gespräch ist nicht nur für uns wichtig, sondern auch für dich eine gute Gelegenheit, mehr über den Hund und seine spezifischen Bedürfnisse zu erfahren. Zögere nicht, alle Fragen zu stellen, die dir wichtig sind.
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-8 flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <PawPrint className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 font-futura">4. Hausbesuch</h3>
                    <p className="text-gray-600 font-futura">
                      Ein wichtiger Schritt im Adoptionsprozess ist der Hausbesuch. Ein Mitglied unseres Teams oder ein Freiwilliger in deiner Nähe wird dein Zuhause besuchen, um sicherzustellen, dass es sicher und geeignet für den Hund ist. Der Hausbesuch hilft uns auch, besser zu verstehen, wie der Hund in dein Leben integriert wird.
                    </p>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2 font-futura">Wir achten auf:</h4>
                        <ul className="space-y-2 text-gray-600 font-futura">
                          <li className="flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            Sichere Umgebung für den Hund
                          </li>
                          <li className="flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            Ausreichend Platz und Bewegungsmöglichkeiten
                          </li>
                          <li className="flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            Allgemeine Wohnverhältnisse
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2 font-futura">Tipps zur Vorbereitung:</h4>
                        <ul className="space-y-2 text-gray-600 font-futura">
                          <li className="flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            Sei einfach du selbst
                          </li>
                          <li className="flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            Bereite deine Familie/Mitbewohner vor
                          </li>
                          <li className="flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            Berücksichtige spezifische Bedürfnisse des Hundes
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Application Form */}
          <div id="application-form" className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-glorious">Bewerbungsformular</h2>
                <div className="w-20 h-1 bg-secondary mb-6"></div>
                <p className="text-gray-600 mb-8 font-futura">
                  Bitte fülle das folgende Formular vollständig aus. Je mehr Informationen du uns gibst, desto besser können wir einschätzen, welcher Hund am besten zu dir passt.
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
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Adresse</label>
                    <input 
                      type="text" 
                      id="address" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Straße, Hausnummer, PLZ, Ort"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="livingType" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Wohnsituation</label>
                    <select 
                      id="livingType" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    >
                      <option value="" disabled selected>Bitte auswählen</option>
                      <option value="house">Haus mit Garten</option>
                      <option value="houseNoGarden">Haus ohne Garten</option>
                      <option value="apartment">Wohnung mit Balkon</option>
                      <option value="apartmentNoBalcony">Wohnung ohne Balkon</option>
                      <option value="other">Andere</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Erfahrung mit Hunden</label>
                    <select 
                      id="experience" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    >
                      <option value="" disabled selected>Bitte auswählen</option>
                      <option value="none">Keine Erfahrung</option>
                      <option value="some">Etwas Erfahrung</option>
                      <option value="experienced">Erfahrener Hundehalter</option>
                      <option value="professional">Professioneller Hintergrund (Trainer, Tierarzt, etc.)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="interestedDog" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Für welchen Hund interessierst du dich?</label>
                    <input 
                      type="text" 
                      id="interestedDog" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Name des Hundes (falls bekannt)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Weitere Informationen</label>
                    <textarea 
                      id="additionalInfo" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Teile uns mehr über deine Wünsche, Erwartungen und Gründe für die Adoption mit..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="termsAgreement" 
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="termsAgreement" className="text-gray-600 text-sm font-futura">
                      Ich habe die <a href="#" className="text-primary hover:underline">Datenschutzbestimmungen</a> gelesen und stimme der Verarbeitung meiner Daten gemäß dieser Bestimmungen zu.
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-3 px-6 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium font-futura"
                  >
                    Bewerbung absenden
                  </button>
                </form>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (6).jpeg" 
                  alt="Hund" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Related Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              to="/adoption-faq" 
              className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <PawPrint className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 font-futura">Adoptions FAQ</h3>
              <p className="text-gray-600 mb-4 font-futura">Antworten auf häufig gestellte Fragen rund um den Adoptionsprozess.</p>
              <span className="text-primary font-medium inline-flex items-center group-hover:text-secondary transition-colors font-futura">
                Mehr erfahren
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            

            

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdoptionHowTo;
