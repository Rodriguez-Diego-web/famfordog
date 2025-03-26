import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true, // Always true and disabled
    functional: false,
    analytics: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = localStorage.getItem('cookie_consent');
    
    if (!consentStatus) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      // Parse saved settings
      try {
        const savedSettings = JSON.parse(consentStatus);
        setCookieSettings(savedSettings);
      } catch (e) {
        console.error('Error parsing cookie settings', e);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true
    };
    
    localStorage.setItem('cookie_consent', JSON.stringify(allAccepted));
    setCookieSettings(allAccepted);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie_consent', JSON.stringify(cookieSettings));
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false
    };
    
    localStorage.setItem('cookie_consent', JSON.stringify(onlyNecessary));
    setCookieSettings(onlyNecessary);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleSettingsToggle = () => {
    setShowSettings(!showSettings);
  };

  const handleChange = (e) => {
    setCookieSettings({
      ...cookieSettings,
      [e.target.name]: e.target.checked
    });
  };

  const openCookieSettings = () => {
    setIsVisible(true);
    setShowSettings(true);
  };

  // Expose the openCookieSettings function globally
  useEffect(() => {
    window.openCookieSettings = openCookieSettings;
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
      <div className="container mx-auto p-4 sm:p-6">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-primary mb-2 font-futura">Wir verwenden Cookies</h3>
              <p className="text-gray-700 text-sm font-futura">
                Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. 
                Einige Cookies sind notwendig für den Betrieb der Website, während andere uns helfen, 
                die Website zu verbessern und zu analysieren.{' '}
                <Link to="/cookie-policy" className="text-primary underline hover:text-primary/80">
                  Mehr erfahren
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={handleSettingsToggle}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                Einstellungen
              </button>
              <button 
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                Nur notwendige
              </button>
              <button 
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        ) : (
          <div className="relative">
            <button 
              onClick={() => setShowSettings(false)}
              className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-lg font-bold text-primary mb-4 font-futura">Cookie-Einstellungen</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="necessary"
                    name="necessary"
                    type="checkbox"
                    checked={cookieSettings.necessary}
                    disabled
                    className="h-4 w-4 text-primary border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="necessary" className="font-medium text-gray-700 font-futura">Notwendige Cookies</label>
                  <p className="text-gray-500 font-futura">Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="functional"
                    name="functional"
                    type="checkbox"
                    checked={cookieSettings.functional}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="functional" className="font-medium text-gray-700 font-futura">Funktionale Cookies</label>
                  <p className="text-gray-500 font-futura">Diese Cookies ermöglichen erweiterte Funktionalität und Personalisierung.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="analytics"
                    name="analytics"
                    type="checkbox"
                    checked={cookieSettings.analytics}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="analytics" className="font-medium text-gray-700 font-futura">Analytische Cookies</label>
                  <p className="text-gray-500 font-futura">Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <button 
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                Nur notwendige
              </button>
              <button 
                onClick={handleAcceptSelected}
                className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-colors"
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
