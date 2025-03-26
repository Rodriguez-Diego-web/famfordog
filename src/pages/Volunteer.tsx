import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin } from 'lucide-react';

const Foerdermitglieder = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6 font-glorious">Fördermitglieder</h1>
            <div className="w-20 h-1 bg-accent-blue mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-futura">
              Werden Sie Teil unserer Gemeinschaft durch regelmäßige finanzielle Unterstützung. 
              Als Fördermitglied ermöglichen Sie uns langfristige Planung und nachhaltige Hilfe für Tiere in Not.
            </p>
          </div>

          {/* Banner Image */}
          <div className="rounded-2xl overflow-hidden mb-16 shadow-lg">
            <img 
              src="/Team.jpg" 
              alt="Fördermitglieder" 
              className="w-full h-[400px] object-cover object-center"
            />
          </div>
          
          {/* Membership Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center font-glorious">Mitgliedschaft & Unterstützung</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Option 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary font-futura">Basis-Mitgliedschaft</h3>
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <span className="text-3xl font-bold text-primary">10€</span>
                  <span className="text-gray-500 font-futura"> / Monat</span>
                </div>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 font-futura">Versorgung von Straßenhunden</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 font-futura">Regelmäßige Updates</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 font-futura">Einladungen zu Events</span>
                  </li>
                </ul>
                <a 
                  href="#member-form" 
                  className="block w-full py-3 px-4 bg-white border border-accent-blue text-accent-blue rounded-full text-center hover:bg-accent-blue hover:text-white transition-colors font-medium font-futura"
                >
                  Jetzt Mitglied werden
                </a>
              </div>
              
              {/* Option 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-accent-blue hover:shadow-xl transition-shadow relative transform scale-105">
                <div className="absolute top-0 right-0 bg-accent-blue text-white text-xs font-bold py-1 px-3 rounded-bl-lg">EMPFOHLEN</div>
                <div className="bg-accent-blue/15 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary font-futura">Plus-Mitgliedschaft</h3>
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <span className="text-3xl font-bold text-primary">25€</span>
                  <span className="text-gray-500 font-futura"> / Monat</span>
                </div>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 font-futura">Alle Basis-Leistungen</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 font-futura">Medizinische Versorgung</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 font-futura">Kastrationsprogramme</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 font-futura">Vierteljährlicher Newsletter</span>
                  </li>
                </ul>
                <a 
                  href="#member-form" 
                  className="block w-full py-3 px-4 bg-accent-blue text-white rounded-full text-center hover:bg-accent-blue/90 transition-colors font-medium font-futura"
                >
                  Jetzt Mitglied werden
                </a>
              </div>
              
              {/* Option 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-accent-red/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary font-futura">Premium-Mitgliedschaft</h3>
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <span className="text-3xl font-bold text-primary">50€</span>
                  <span className="text-gray-500 font-futura"> / Monat</span>
                </div>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 font-futura">Alle Plus-Leistungen</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 font-futura">Bau von Tierunterkünften</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 font-futura">Exklusive Projektbesuche</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 font-futura">Persönliche Projektberichte</span>
                  </li>
                </ul>
                <a 
                  href="#member-form" 
                  className="block w-full py-3 px-4 bg-white border border-accent-red text-accent-red rounded-full text-center hover:bg-accent-red hover:text-white transition-colors font-medium font-futura"
                >
                  Jetzt Mitglied werden
                </a>
              </div>
            </div>
          </div>
          
          {/* Membership Form */}
          <div id="member-form" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-primary mb-6 font-glorious">Fördermitglied werden</h2>
                  <p className="text-gray-600 mb-8 font-futura">
                    Füllen Sie das Formular aus, um unsere wichtige Arbeit langfristig zu unterstützen. 
                    Wir werden uns innerhalb von 48 Stunden bei Ihnen melden.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Vorname</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="Ihr Vorname"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Nachname</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="Ihr Nachname"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-futura">E-Mail</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="ihre@email.de"
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
                      <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Mitgliedschaft</label>
                      <select 
                        id="membershipType" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      >
                        <option value="" disabled selected>Wählen Sie eine Option</option>
                        <option value="basis">Basis-Mitgliedschaft (10€/Monat)</option>
                        <option value="plus">Plus-Mitgliedschaft (25€/Monat)</option>
                        <option value="premium">Premium-Mitgliedschaft (50€/Monat)</option>
                        <option value="custom">Individueller Betrag</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Individueller Betrag (optional)</label>
                      <input 
                        type="number" 
                        id="customAmount" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Betrag in €"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Nachricht (optional)</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Ihre Nachricht oder Anmerkungen..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-600 font-futura">
                        Ich akzeptiere die <a href="#" className="text-accent-blue hover:underline">Datenschutzerklärung</a> und stimme zu, dass meine Daten für die Mitgliedschaft verarbeitet werden.
                      </label>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full py-3 px-6 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium font-futura"
                    >
                      Mitgliedschaft beantragen
                    </button>
                  </form>
                </div>
                <div className="bg-primary flex items-center justify-center p-8 lg:p-12">
                  <div className="text-white max-w-md">
                    <h3 className="text-2xl font-bold mb-6 font-glorious">Ihre Unterstützung bewirkt viel</h3>
                    <p className="mb-8 text-white/90 font-futura">
                      Als Fördermitglied helfen Sie uns, die Lebensbedingungen von Straßenhunden nachhaltig zu verbessern:
                    </p>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-accent-blue mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <p className="text-white/90 font-futura">
                          <strong className="text-white">Langfristige Planung:</strong> Ihre regelmäßige Unterstützung ermöglicht uns kontinuierliche Arbeit.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-accent-blue mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <p className="text-white/90 font-futura">
                          <strong className="text-white">Kastrationsprogramme:</strong> Der Schlüssel zu nachhaltiger Verbesserung der Situation.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-accent-blue mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <p className="text-white/90 font-futura">
                          <strong className="text-white">Tierschutz-Projekte:</strong> Unterkünfte, Futterstellen und medizinische Versorgung.
                        </p>
                      </li>
                    </ul>
                    
                    <div className="mt-10 pt-8 border-t border-white/20">
                      <div className="flex items-start">
                        <Mail className="text-accent-blue mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium font-futura">E-Mail</p>
                          <a href="mailto:foerdermitglieder@famfordogs.de" className="text-white/80 hover:text-white transition-colors font-futura">
                            foerdermitglieder@famfordogs.de
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center font-glorious">Das sagen unsere Mitglieder</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center mr-4">
                    <span className="text-accent-blue font-bold text-xl">MS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary font-futura">Markus Schmidt</h4>
                    <p className="text-gray-500 text-sm font-futura">Fördermitglied seit 2022</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-accent-blue">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 italic font-futura">
                  "Seit ich Fördermitglied bin, kann ich ganz aktiv dabei helfen, das Leben der Straßenhunde zu verbessern. Es ist ein gutes Gefühl zu wissen, dass mein Beitrag wirklich etwas bewirkt."
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center mr-4">
                    <span className="text-accent-blue font-bold text-xl">LM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary font-futura">Laura Meyer</h4>
                    <p className="text-gray-500 text-sm font-futura">Fördermitglied seit 2021</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-accent-blue">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 italic font-futura">
                  "Die Plus-Mitgliedschaft gibt mir die Möglichkeit, kontinuierlich zur Kastration von Straßenhunden beizutragen. Die regelmäßigen Updates zeigen mir, wie meine Unterstützung konkret hilft."
                </p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-accent-blue/20 flex items-center justify-center mr-4">
                    <span className="text-accent-blue font-bold text-xl">TK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary font-futura">Thomas Krause</h4>
                    <p className="text-gray-500 text-sm font-futura">Fördermitglied seit 2023</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-accent-blue">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 italic font-futura">
                  "Als Premium-Mitglied durfte ich sogar eines der Projekte besuchen. Diese direkte Verbindung und zu sehen, wie meine Unterstützung vor Ort ankommt, ist unbezahlbar."
                </p>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="bg-accent-blue/10 rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6 font-glorious">Gemeinsam für ein besseres Leben</h2>
              <p className="text-gray-700 mb-8 font-futura">
                Mit Ihrer Unterstützung als Fördermitglied schaffen wir eine nachhaltige Zukunft für Straßenhunde. 
                Jeder Beitrag zählt und hilft uns, mehr Tiere zu versorgen und bessere Lebensbedingungen zu schaffen.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#member-form" 
                  className="px-8 py-3 bg-accent-blue text-white rounded-full hover:bg-accent-blue/90 transition-colors font-medium font-futura"
                >
                  Jetzt Fördermitglied werden
                </a>
                <a 
                  href="/donate" 
                  className="px-8 py-3 bg-white border border-accent-red text-accent-red rounded-full hover:bg-accent-red hover:text-white transition-colors font-medium font-futura"
                >
                  Einmalig spenden
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Foerdermitglieder;
