import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, PawPrint } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-5">
        <PawPrint size={180} className="text-white" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-5">
        <PawPrint size={120} className="text-white" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/images/logo.png" 
                alt="FAM for Dogs e.V. Logo" 
                className="h-16 bg-white/90 p-1 rounded" 
              />
            </Link>
            <p className="text-white/70 mb-6 font-futura">
              Wir widmen uns der Vermittlung liebevoller Zuhause für bedürftige Hunde, der Förderung des Tierschutzes und der Aufklärung der Öffentlichkeit über verantwortungsvolle Haustierhaltung.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-futura">Schnelllinks</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors font-futura">
                  Verfügbare Hunde
                </Link>
              </li>
              <li>
                <Link to="/mission" className="text-white/70 hover:text-white transition-colors font-futura">
                  Unsere Mission
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white/70 hover:text-white transition-colors font-futura">
                  Unser Team
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-white/70 hover:text-white transition-colors font-futura">
                  Uns unterstützen
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-white/70 hover:text-white transition-colors font-futura">
                  Ehrenamtlich helfen
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-futura">Adoptionsprozess</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/adoption-process" className="text-white/70 hover:text-white transition-colors font-futura">
                  Wie man adoptiert
                </Link>
              </li>
              <li>
                <Link to="/adoption-faq" className="text-white/70 hover:text-white transition-colors font-futura">
                  Adoptions FAQ
                </Link>
              </li>
              <li>
                <Link to="/adoption-fees" className="text-white/70 hover:text-white transition-colors font-futura">
                  Adoptionsgebühren
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-white/70 hover:text-white transition-colors font-futura">
                  Erfolgsgeschichten
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-futura">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70 font-futura">
                  Sternhagenweg 13<br />
                  Hamburg, 22303
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-secondary mr-3 flex-shrink-0" />
                <a href="tel:+4940123456789" className="text-white/70 hover:text-white transition-colors font-futura">
                  040 / 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-secondary mr-3 flex-shrink-0" />
                <a href="mailto:info@famfordogs.de" className="text-white/70 hover:text-white transition-colors font-futura">
                  info@famfordogs.de
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <p className="text-white/50 text-sm font-futura">
              &copy; {currentYear} FAM for Dogs e.V. Alle Rechte vorbehalten.
            </p>
            <p className="text-white/50 text-sm mt-2 md:mt-0 md:ml-4 font-futura">
              Handcrafted by rodriguez-digital
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-white/50 hover:text-white text-sm transition-colors font-futura">
              Datenschutz
            </Link>
            <Link to="/terms-of-service" className="text-white/50 hover:text-white text-sm transition-colors font-futura">
              Nutzungsbedingungen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
