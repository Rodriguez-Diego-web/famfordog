import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-[#003a3a] py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-30">
        <img src="/images/Lifeline/LifeLine_Limitless.png" alt="Lifeline Limitless" className="w-40" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-30">
        <img src="/images/Lifeline/LifeLine_Rebirth.png" alt="Lifeline Rebirth" className="w-36" />
      </div>
      <div className="absolute bottom-40 right-1/4 opacity-30">
        <img src="/images/Lifeline/LifeLine_Limitless.png" alt="Lifeline Limitless" className="w-28 rotate-180" />
      </div>
      
      {/* Bunte Dekorationen */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-accent-yellow via-accent-pink to-accent-blue"></div>
      <div className="absolute -top-6 left-1/3 w-12 h-12 rounded-full bg-accent-yellow opacity-40 blur-md"></div>
      <div className="absolute top-1/4 right-10 w-16 h-16 rounded-full bg-accent-pink opacity-30 blur-md"></div>
      <div className="absolute bottom-10 left-1/4 w-20 h-20 rounded-full bg-accent-blue opacity-20 blur-lg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/images/logo.png" 
                alt="FAM for Dogs e.V. Logo" 
                className="h-16" 
              />
            </Link>
            <p className="text-white/80 mb-6 font-futura">
              Wir von FAM for Dogs e.V. setzen uns für nachhaltigen Tierschutz ein – mit Fokus auf die Verbesserung der Lebensbedingungen vor Ort für Straßenhunde. Denn für uns kennt Tierschutz keine Grenzen!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent-pink hover:text-primary p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent-blue hover:text-primary p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent-yellow hover:text-primary p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-2 w-8 h-8 bg-accent-yellow opacity-20 rounded-full"></div>
            <h3 className="text-white font-semibold text-lg mb-4 font-futura">Über uns</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mission" className="text-white/80 hover:text-accent-yellow transition-colors font-futura">
                  Unsere Mission
                </Link>
              </li>
              <li>
                <Link to="/about#family" className="text-white/80 hover:text-accent-pink transition-colors font-futura">
                  Unser Team
                </Link>
              </li>
              <li>
                <Link to="/our-dogs" className="text-white/80 hover:text-accent-blue transition-colors font-futura">
                  Unsere Hunde
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-white/80 hover:text-accent-yellow transition-colors font-futura">
                  Werde FAMily
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-white/80 hover:text-accent-pink transition-colors font-futura">
                  Spenden
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-2 w-8 h-8 bg-accent-pink opacity-20 rounded-full"></div>
            <h3 className="text-white font-semibold text-lg mb-4 font-futura">Gesetzliche Informationen</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/imprint" className="text-white/80 hover:text-accent-blue transition-colors font-futura">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-accent-yellow transition-colors font-futura">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-white/80 hover:text-accent-pink transition-colors font-futura">
                  Cookie Richtlinien
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-2 w-8 h-8 bg-accent-blue opacity-20 rounded-full"></div>
            <h3 className="text-white font-semibold text-lg mb-4 font-futura">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/80 font-futura">
                  Baakenallee 8<br />
                  20457 Hamburg
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-accent-pink mr-3 flex-shrink-0" />
                <a href="tel:+4915679624274" className="text-white/80 hover:text-accent-pink transition-colors font-futura">
                  015679 624 274
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-accent-blue mr-3 flex-shrink-0" />
                <a href="mailto:info@famfordogs.com" className="text-white/80 hover:text-accent-blue transition-colors font-futura">
                  info@famfordogs.com
                </a>
              </li>
              <li className="mt-4">
                <Link 
                  to="/emergency-report" 
                  className="inline-block bg-accent-yellow text-primary font-medium py-2 px-4 rounded-lg shadow-md hover:bg-accent-yellow/90 transition-colors font-futura"
                >
                  Zum Kontaktformular
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <p className="text-white/60 text-sm font-futura">
              &copy; {currentYear} FAM for Dogs e.V. Alle Rechte vorbehalten.
            </p>
            <p className="text-white/60 text-sm mt-2 md:mt-0 md:ml-4 font-futura">
              Handcrafted by rodriguez-digital
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 justify-center">
            <Link to="/imprint" className="text-white/60 hover:text-accent-yellow text-sm transition-colors font-futura">
              Impressum
            </Link>
            <Link to="/privacy" className="text-white/60 hover:text-accent-blue text-sm transition-colors font-futura">
              Datenschutz
            </Link>
            <Link to="/cookie-policy" className="text-white/60 hover:text-accent-pink text-sm transition-colors font-futura">
              Cookie-Richtlinie
            </Link>
            <button 
              onClick={() => window.openCookieSettings && window.openCookieSettings()}
              className="text-white/60 hover:text-accent-green text-sm transition-colors font-futura cursor-pointer"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
