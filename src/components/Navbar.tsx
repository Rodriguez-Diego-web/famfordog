import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsDropdownOpen, setMobileProjectsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const aboutDropdownRef = useRef(null);
  const projectsDropdownRef = useRef(null);
  
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
      if (projectsDropdownRef.current && !projectsDropdownRef.current.contains(event.target)) {
        setProjectsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!projectsDropdownOpen);
  };

  const toggleMobileProjectsDropdown = () => {
    setMobileProjectsDropdownOpen(!mobileProjectsDropdownOpen);
  };

  const aboutItems = [
    { name: 'Unsere Mission', path: '/about', fragment: 'mission' },
    { name: 'Unsere Standorte', path: '/about', fragment: 'locations' },
    { name: 'Unsere Geschichte', path: '/about', fragment: 'history' },
    { name: 'Unsere FAMily', path: '/about', fragment: 'family' }
  ];

  const projectItems = [
    { name: 'Kastrationsprojekte', path: '/projects/kastrationsprojekte' },
    { name: 'Wounded Program', path: '/projects/wounded-program' },
    { name: 'Fütterungstouren', path: '/projects/fuetterungstouren' },
    { name: 'Shelter Lombok', path: '/projects/shelter-lombok' },
    { name: 'Public Shelter Rumänien', path: '/projects/public-shelter-rumaenien' },
    { name: 'Tierrettungen', path: '/projects/tierrettungen' }
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Unsere Hunde', path: '/our-dogs' },
    { name: 'Sei Teil der FAMily!', path: '/join-family' },
    { name: 'Spendenaktionen', path: '/spendenaktion' },
    { name: 'Fördermitglied werden', path: '/foerdermitglied-werden', highlight: true },
  ];
  
  const desktopNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Unsere Hunde', path: '/our-dogs' },
    { name: 'Sei Teil der FAMily!', path: '/join-family' },
    { name: 'Spendenaktionen', path: '/spendenaktion' },
    { name: 'Fördermitglied werden', path: '/foerdermitglied-werden', highlight: true },
  ];

  const isAboutPage = location.pathname === '/about';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-accent-blue/95 backdrop-blur-lg py-2' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center -ml-4 md:-ml-4 transition-transform duration-200 hover:scale-105 group">
          <img 
            src="/images/logo.png" 
            alt="FAM for Dogs e.V. Logo - Zurück zur Startseite" 
            className="h-14 md:h-16 transition-opacity duration-200 group-hover:opacity-90"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm font-medium tracking-wide transition-colors duration-200 font-futura ${
              location.pathname === '/'
                ? 'text-white font-bold'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Home
          </Link>
          
          {/* About Us Dropdown */}
          <div className="relative" ref={aboutDropdownRef}>
            <button 
              onClick={() => navigate('/about')}
              onMouseEnter={() => setAboutDropdownOpen(true)}
              className={`flex items-center text-sm font-medium tracking-wide transition-colors duration-200 font-futura ${
                isAboutPage
                  ? 'text-white font-bold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Über Uns
              <ChevronDown size={16} className={`ml-1 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {aboutDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-accent-blue/95 backdrop-blur-lg rounded-md shadow-lg py-2 z-50"
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                {aboutItems.map((item) => (
                  <Link
                    key={item.name}
                    to={`${item.path}#${item.fragment}`}
                    className="block px-4 py-2 text-sm font-futura text-white/90 hover:text-white hover:bg-accent-blue/80"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Projects Dropdown */}
          <div className="relative" ref={projectsDropdownRef}>
            <button 
              onClick={() => navigate('/projects')}
              onMouseEnter={() => setProjectsDropdownOpen(true)}
              className={`flex items-center text-sm font-medium tracking-wide transition-colors duration-200 font-futura ${
                location.pathname.startsWith('/projects')
                  ? 'text-white font-bold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Projekte
              <ChevronDown size={16} className={`ml-1 transition-transform ${projectsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {projectsDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-accent-blue/95 backdrop-blur-lg rounded-md shadow-lg py-2 z-50"
                onMouseLeave={() => setProjectsDropdownOpen(false)}
              >
                {projectItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-sm font-futura text-white/90 hover:text-white hover:bg-accent-blue/80"
                    onClick={() => setProjectsDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Other Nav Items */}
          {desktopNavItems.map((item) => (
            item.name !== 'Home' && (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 font-futura ${
                  location.pathname === item.path
                    ? 'text-white font-bold'
                    : 'text-white/90 hover:text-white'
                } ${
                  item.highlight 
                    ? "bg-primary text-white hover:bg-primary/90 rounded-full px-4 py-2 font-bold" 
                    : ""
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
          
          <Link
            to="/spenden"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg font-futura"
          >
            Spenden
          </Link>
        </nav>
        
        {/* Mobile Buttons */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* Mobile Donate Button */}
          <Link
            to="/spenden"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 font-futura flex items-center"
          >
            Spenden
          </Link>
          
          {/* Mobile Fördermitglied werden Button */}
          <Link
            to="/foerdermitglied-werden"
            className="bg-primary hover:bg-primary/90 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 font-futura flex items-center whitespace-nowrap"
          >
            Fördermitglied werden
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none ml-1"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-accent-blue shadow-xl absolute top-full left-0 right-0 max-h-[80vh] flex flex-col p-6 overflow-y-auto z-50">
          <Link
            to="/"
            className={`text-base font-medium py-3 font-futura ${
              location.pathname === '/'
                ? 'text-white font-bold'
                : 'text-white/90 hover:text-white'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          {/* Mobile About Dropdown */}
          <div className="py-3">
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <button 
                  onClick={() => {
                    navigate('/about');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex-1 text-left text-base font-medium py-2 font-futura ${
                    isAboutPage
                      ? 'text-white font-bold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  Über Uns
                </button>
                <button 
                  onClick={toggleMobileDropdown}
                  className="p-3 ml-2 text-white/90" 
                  aria-label="Toggle about dropdown"
                >
                  <ChevronDown 
                    size={24} 
                    className={`transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
              </div>
            </div>
            
            {mobileDropdownOpen && (
              <div className="pl-4 mt-2 space-y-1 border-l-2 border-white/20">
                {aboutItems.map((item) => (
                  <Link
                    key={item.name}
                    to={`${item.path}#${item.fragment}`}
                    className="block py-3 text-base font-futura text-white/90 hover:text-white"
                    onClick={() => {
                      setMobileDropdownOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Mobile Projects Dropdown */}
          <div className="py-3">
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <button 
                  onClick={() => {
                    navigate('/projects');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex-1 text-left text-base font-medium py-2 font-futura ${
                    location.pathname.startsWith('/projects')
                      ? 'text-white font-bold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  Projekte
                </button>
                <button 
                  onClick={toggleMobileProjectsDropdown}
                  className="p-3 ml-2 text-white/90" 
                  aria-label="Toggle projects dropdown"
                >
                  <ChevronDown 
                    size={24} 
                    className={`transition-transform ${mobileProjectsDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
              </div>
            </div>
            
            {mobileProjectsDropdownOpen && (
              <div className="pl-4 mt-2 space-y-1 border-l-2 border-white/20">
                {projectItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block py-3 text-base font-futura text-white/90 hover:text-white"
                    onClick={() => {
                      setMobileProjectsDropdownOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Other Mobile Nav Items */}
          {navItems.map((item) => (
            item.name !== 'Home' && (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-medium py-3 font-futura ${
                  location.pathname === item.path
                    ? 'text-white font-bold'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
          
        </div>
      )}
    </header>
  );
};

export default Navbar;
