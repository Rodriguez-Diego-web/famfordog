import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';

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
                href="https://www.instagram.com/famfordogs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent-pink hover:text-primary p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a 
                href="https://www.paypal.com/donate/?hosted_button_id=3ELJCXP5LQDTG&fbclid=PAZXh0bgNhZW0CMTEAAacL5dv8tJ8rf1AmdkoJNcBdI2Vg4YsFd43OKwLPAR-2Cc0smBWssBVFISdssw_aem_MHs6qBhUCeSxrCWgEqDGtw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent-blue hover:text-primary p-2 rounded-full transition-colors"
                aria-label="PayPal Donation"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="text-white" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.067 8.478c.492.732.695 1.682.576 2.77-.527 3.353-3.502 4.543-6.964 4.543H12.26c-.389 0-.708.3-.764.688l-.65 4.148-.184 1.176c-.077.49.275.94.77.94h3.4c.323 0 .6-.23.647-.548l.025-.136.51-3.23.033-.173c.048-.317.323-.548.646-.548h.406c2.642 0 4.715-.998 5.316-3.882.248-1.197.124-2.196-.427-2.893-.175-.222-.39-.408-.633-.566"/>
                  <path d="M18.865 3.932c-.553-.713-1.665-1.022-3.043-1.022h-4.19c-.419 0-.77.3-.835.718L8.94 15.368l-.048.31c.067-.429.408-.748.835-.748h1.75c3.457 0 6.18-1.402 6.973-5.446.023-.108.042-.215.06-.319.235-1.52-.002-2.552-.645-3.233"/>
                  <path d="M9.954 8.452l.24-1.73c.026-.184.103-.34.21-.462a.73.73 0 0 1 .5-.206h3.217c.675 0 1.308.04 1.883.127.16.024.31.052.45.083.143.031.274.066.394.104.038.01.074.021.11.033.187.057.361.12.522.194.266-1.703-.006-2.857-.92-3.903C15.526 1.464 13.693 1 11.505 1H6.087c-.46 0-.853.322-.954.788l-2.85 18.07c-.056.355.198.678.543.733.032.006.066.008.1.008h3.696l.353-2.23 1.3-8.302.679-.615z"/>
                </svg>
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
