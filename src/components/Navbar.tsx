import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adoptionDropdownOpen, setAdoptionDropdownOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  // For non-homepage, start with scrolled appearance for better visibility
  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [location.pathname, isHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        // Only unset scrolled state on homepage
        if (isHomePage) {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAdoptionDropdown = () => {
    setAdoptionDropdownOpen(!adoptionDropdownOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Über Uns', path: '/about' },
    { name: 'Mission', path: '/mission' },
    { name: 'Team', path: '/team' },
    { name: 'Fördermitglieder', path: '/volunteer' },
  ];

  const adoptionItems = [
    { name: 'Adoptionsprozess', path: '/adoption-process' },
    { name: 'Wie man adoptiert', path: '/adoption-how-to' },
    { name: 'FAQ', path: '/adoption-faq' },
    { name: 'Gebühren', path: '/adoption-fees' },
    { name: 'Erfolgsgeschichten', path: '/success-stories' },
  ];

  const isAdoptionPage = adoptionItems.some(item => location.pathname === item.path);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-accent-blue/95 backdrop-blur-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="FAM for Dogs e.V. Logo" 
            className="h-16 md:h-20"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 font-futura ${
                location.pathname === item.path
                  ? 'text-white font-bold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Adoption Dropdown - Hidden but code preserved */}
          {/* 
          <div className="relative">
            <button 
              onClick={toggleAdoptionDropdown}
              className={`flex items-center text-sm font-medium tracking-wide transition-colors duration-200 font-futura ${
                isAdoptionPage
                  ? 'text-accent-blue'
                  : 'text-white hover:text-accent-blue'
              }`}
            >
              Adoption
              <ChevronDown size={16} className="ml-1" />
            </button>
            
            {adoptionDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-lg rounded-md shadow-lg py-2 z-50">
                {adoptionItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-2 text-sm font-futura ${
                      location.pathname === item.path
                        ? 'text-accent-blue'
                        : 'text-white hover:text-accent-blue'
                    }`}
                    onClick={() => setAdoptionDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          */}
          
          <Link
            to="/donate"
            className="bg-accent-red hover:bg-accent-red/90 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg font-futura"
          >
            Spenden
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-accent-blue/95 backdrop-blur-lg absolute top-full left-0 right-0 flex flex-col p-6 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium py-3 font-futura ${
                location.pathname === item.path
                  ? 'text-white font-bold'
                  : 'text-white/90 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Adoption Menu - Hidden but code preserved */}
          {/*
          <div className="py-3">
            <button 
              onClick={() => setAdoptionDropdownOpen(!adoptionDropdownOpen)}
              className={`flex items-center text-sm font-medium font-futura ${
                isAdoptionPage
                  ? 'text-accent-blue'
                  : 'text-white hover:text-accent-blue'
              }`}
            >
              Adoption
              <ChevronDown size={16} className={`ml-1 transition-transform ${adoptionDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {adoptionDropdownOpen && (
              <div className="pl-4 mt-2 space-y-2">
                {adoptionItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block py-2 text-sm font-futura ${
                      location.pathname === item.path
                        ? 'text-accent-blue'
                        : 'text-white hover:text-accent-blue'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          */}
          
          <Link
            to="/donate"
            className="bg-accent-red hover:bg-accent-red/90 text-white px-5 py-3 rounded-full text-sm font-medium mt-4 flex items-center justify-center transition-all duration-200 font-futura"
            onClick={() => setMobileMenuOpen(false)}
          >
            Spenden
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
