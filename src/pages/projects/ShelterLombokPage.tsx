import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, PawPrint, Home, Shield, Gift, ChevronRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ShelterLombokPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SEO 
        title="Shelter Lombok | FAM for Dogs"
        description="Unser Shelter auf Lombok bietet 160 geretteten Hunden ein sicheres Zuhause. Erfahre mehr über unsere Arbeit mit der POPI Foundation."
        keywords="Shelter Lombok, Tierschutz Lombok, Straßenhunde Indonesien, Tierheim Lombok, Tierhilfe, Hundeschutz"
      />
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-50">
          <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors group">
                  <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-medium">Zurück zu allen Projekten</span>
                </Link>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 font-futura leading-tight">
                  Shelter Lombok: Ein Zuhause für Straßenhunde
                </h1>
                
                <div className="w-20 h-1 bg-accent-blue mb-6"></div>
                
                <p className="text-lg text-gray-700 mb-8 font-futura">
                  Auf der indonesischen Insel Lombok unterstützen wir einen ganz besonderen Shelter unserer Partner-Organisation Popi Foundation. Hier finden bis zu 160 Hunde ein liebevolles Zuhause, die sonst keinen Ort zum Leben hätten.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/spenden" 
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-90"
                  >
                    <Heart size={18} className="mr-2" />
                    Jetzt spenden
                  </Link>
                  
                  <a 
                    href="#learn-more" 
                    className="inline-flex items-center bg-white text-accent-blue border-2 border-accent-blue px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-50"
                  >
                    Mehr erfahren
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (3).jpeg" 
                    alt="Shelter Lombok" 
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Facts Section */}
        <section id="learn-more" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-accent-blue/30 p-8 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <PawPrint size={32} className="text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Mehr als 160 Hunde</h3>
                  <p className="text-gray-700 font-futura">
                    Unser Shelter auf Lombok bietet über 160 Hunden ein sicheres Zuhause, Pflege und Liebe - oft zum ersten Mal in ihrem Leben.
                  </p>
                </div>
              </div>
              
              <div className="bg-primary/30 p-8 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <Heart size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Liebevolle Betreuung</h3>
                  <p className="text-gray-700 font-futura">
                    Rey und Dhany kümmern sich mit unermüdlichem Einsatz und großer Hingabe um jeden einzelnen Hund im Shelter.
                  </p>
                </div>
              </div>
              
              <div className="bg-secondary/30 p-8 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <Shield size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Langfristiger Schutz</h3>
                  <p className="text-gray-700 font-futura">
                    Wir sorgen für nachhaltige Hilfe durch regelmäßige finanzielle Unterstützung, Tierarztkosten und Futter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Shelter Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Über den Shelter auf Lombok</h2>
                <div className="w-20 h-1 bg-accent-blue mb-6"></div>
                <p className="text-gray-700 mb-4 font-futura">
                  Auf der indonesischen Insel Lombok unterstützen wir einen ganz besonderen Shelter unserer Partner-Organisation Popi Foundation.
                </p>
                <p className="text-gray-700 mb-4 font-futura">
                  Die Geschichte des Shelters ist geprägt von unermüdlichem Einsatz und großer Hingabe. Als der alte Shelter aufgrund von Nachbarschaftskonflikten schließen musste, stellte Dhany kurzerhand ihr eigenes Zuhause zur Verfügung. Seitdem leben dort bis zu 160 Hunde - liebevoll betreut von Dhany und Rey.
                </p>
                <p className="text-gray-700 mb-6 font-futura">
                  Die Hunde im Shelter haben unterschiedliche Geschichten, aber eines gemeinsam: Ohne diese Hilfe hätten sie keine Überlebenschance auf Lombok. Viele wurden verletzt, krank oder misshandelt gefunden, andere wurden als unerwünschte Welpen ausgesetzt.
                </p>
                <div className="flex items-center p-4 bg-accent-blue/30 rounded-lg border-l-4 border-accent-blue mb-6">
                  <Heart className="text-accent-blue flex-shrink-0 mr-3" size={20} />
                  <p className="text-gray-700 font-futura italic">
                    "Jeder Hund verdient ein Leben in Würde und Sicherheit, unabhängig von seiner Herkunft oder seinem Zustand."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-64">
                    <img
                      src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (5).jpeg" 
                      alt="Hunde im Shelter auf Lombok" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-40">
                    <img
                      src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (7).jpeg" 
                      alt="Pflegebedürftiger Hund im Shelter" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-40">
                    <img
                      src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (1).jpeg" 
                      alt="Team im Shelter Lombok" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-64">
                    <img
                      src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (10).jpeg" 
                      alt="Geretteter Hund im Shelter" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            {/* Hero Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16">
              <div className="md:col-span-8 rounded-xl overflow-hidden shadow-lg h-80">
                <img 
                  src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (3).jpeg" 
                  alt="Hunde im Shelter Lombok" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="md:col-span-4 grid grid-rows-2 gap-4 h-80">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (1).jpeg" 
                    alt="Hunde im Shelter Lombok" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.22.jpeg" 
                    alt="Hunde im Shelter Lombok" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Introduction Section */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-futura">Ein besonderer Ort für besondere Hunde</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-700 mb-4 font-futura">
                Auf der indonesischen Insel Lombok unterstützen wir einen ganz besonderen Shelter unserer Partner-Organisation Popi Foundation. Hier finden rund 160 Hunde ein neues Zuhause – Hunde, die zuvor ausgesetzt, misshandelt, verletzt oder dem Tod überlassen wurden. Viele kamen als hilflose Welpen, die noch kein Auge geöffnet hatten, andere wurden angefahren, angeschossen, mit Macheten verletzt oder schlimmeres.
              </p>
              <p className="text-gray-700 font-futura">
                Im Shelter leben die Hunde in kleinen Rudeln – versorgt, gefüttert und vor allem geliebt. Ein ganz besonderes Herzstück dieses Ortes ist Rey, unsere Hundeflüsterin. Sie lebt mit einem Teil der Hunde direkt zusammen, pflegt sie mit selbst entwickelten Kräutertinkturen und Ölen und schenkt ihnen genau das, was sie so lange vermisst haben: Nähe, Vertrauen und Heilung.
              </p>
            </div>
          </div>
        </section>

        {/* Rey Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:h-auto overflow-hidden lg:order-2 relative">
                  <img 
                    src="/public/Rey/rey.jpeg" 
                    alt="Rey mit Hunden im Shelter" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="p-8 lg:p-12 lg:order-1 flex flex-col justify-center">
                  <span className="inline-block bg-accent-blue/30 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                    Unsere Hundeflüsterin
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Rey - Das Herzstück des Shelters</h2>
                  <div className="w-20 h-1 bg-accent-blue mb-6"></div>
                  <p className="text-gray-700 mb-4 font-futura">
                    Rey ist eine wahre Hundeflüsterin und lebt mit einem Teil der Hunde direkt zusammen im Shelter. Mit unglaublichem Feingefühl erkennt sie sofort, wenn ein Tier Hilfe braucht.
                  </p>
                  <p className="text-gray-700 mb-6 font-futura">
                    Mit selbst entwickelten Kräutertinkturen und Ölen unterstützt sie die Tiere ganzheitlich und schenkt ihnen genau das, was sie oft lange entbehren mussten: Nähe, Vertrauen und Sicherheit. Für viele traumatisierte Hunde ist Rey der erste Mensch, der ihnen zeigt, dass Zuwendung möglich ist.
                  </p>
                  <div className="flex items-center p-4 bg-secondary/30 rounded-lg border-l-4 border-secondary">
                    <Heart className="text-secondary flex-shrink-0 mr-3" size={20} />
                    <p className="text-gray-700 font-futura italic">
                      "Jeder Hund hat eine Seele, die verstanden und geliebt werden will. Wenn man ihnen zuhört, erzählen sie ihre Geschichten."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:h-auto overflow-hidden relative">
                  <img 
                    src="/public/Dhany/profile.jpg" 
                    alt="Dhany mit Hunden im Shelter" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-primary/30 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                    Gründerin des Shelters
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Dhany - Ein Engel für die Hunde</h2>
                  <div className="w-20 h-1 bg-primary mb-6"></div>
                  <p className="text-gray-700 mb-4 font-futura">
                    Als der alte Shelter aufgrund von Drohungen aus der Nachbarschaft schließen musste, zögerte Dhany nicht: Kurzerhand stellte sie ihr eigenes Zuhause zur Verfügung.
                  </p>
                  <p className="text-gray-700 mb-6 font-futura">
                    Ob Wohnzimmer, Garten, Küche oder Schlafzimmer – alle Räume werden nun von 160 Hunden und Katzen bewohnt. Dhany ist unermüdlich im Einsatz und organisiert persönlich jeden Notfall, jede Rettung und jeden Tierarztbesuch.
                  </p>
                  <div className="flex items-center p-4 bg-accent-blue/30 rounded-lg border-l-4 border-accent-blue">
                    <Shield className="text-accent-blue flex-shrink-0 mr-3" size={20} />
                    <p className="text-gray-700 font-futura italic">
                      "Ihr seid nicht nur Tiere für mich. Ihr seid meine Familie, mein Leben und meine Verantwortung."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Support Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Unsere Unterstützung
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 font-futura">Gemeinsam für die Tiere</h3>
                  <p className="text-gray-700 mb-4 font-futura">
                    Wir als Organisation übernehmen fast alle anfallenden Tierarztkosten, finanzieren Medikamente, Impfungen und leisten monatlich Unterstützung für Futter.
                  </p>
                  <p className="text-gray-700 mb-4 font-futura">
                    Durch die enge Zusammenarbeit mit der POPI Foundation sorgen wir dafür, dass aus Notfällen Schützlinge werden – mit einem Zuhause, Liebe und neuer Hoffnung.
                  </p>
                  <p className="text-gray-700 font-futura">
                    Mit deiner Hilfe können wir diesen besonderen Ort erhalten und noch mehr Tieren in Not eine Chance auf ein besseres Leben geben.
                  </p>
                </div>
                <div className="lg:h-auto overflow-hidden">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (7).jpeg" 
                    alt="Hunde im Shelter Lombok" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Eindrücke aus dem Shelter</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                Bilder sagen mehr als tausend Worte. Hier bekommst du einen Einblick in den Alltag unserer Schützlinge.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.22.jpeg" 
                    alt="Hunde im Shelter" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mt-4 mb-2 font-futura">Gemeinschaft im Shelter</h3>
                <p className="text-gray-700 font-futura">
                  Die Hunde leben in kleinen Rudeln zusammen und finden Trost in der Gemeinschaft.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (10).jpeg" 
                    alt="Hunde im Shelter" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mt-4 mb-2 font-futura">Liebevolle Betreuung</h3>
                <p className="text-gray-700 font-futura">
                  Jeder Hund bekommt die Aufmerksamkeit und Pflege, die er benötigt.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23 (11).jpeg" 
                    alt="Hunde im Shelter" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mt-4 mb-2 font-futura">Sicherer Zufluchtsort</h3>
                <p className="text-gray-700 font-futura">
                  Im Shelter finden die Hunde endlich Ruhe und können sich von ihren Traumata erholen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Wie du helfen kannst</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                Deine Unterstützung für den Shelter auf Lombok kann verschiedene Formen annehmen - jeder Beitrag hilft den Hunden, ein würdevolles Leben zu führen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-primary relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 opacity-10">
                  <Gift size={200} className="text-primary" />
                </div>
                <div className="bg-primary/20 p-4 rounded-full mb-6 relative z-10">
                  <Gift size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-futura relative z-10">Finanzielle Unterstützung</h3>
                <p className="text-gray-700 mb-6 font-futura relative z-10">
                  Mit deiner Spende übernehmen wir Tierarztkosten, finanzieren Medikamente und Impfungen und leisten monatliche Unterstützung für Futter.
                </p>
                <ul className="mt-2 space-y-3 text-left w-full relative z-10">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Regelmäßige finanzielle Zuwendungen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Übernahme von Tierarztkosten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Finanzierung von Medikamenten</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-secondary relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 opacity-10">
                  <Shield size={200} className="text-secondary" />
                </div>
                <div className="bg-secondary/20 p-4 rounded-full mb-6 relative z-10">
                  <Shield size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-futura relative z-10">Werde Mitglied</h3>
                <p className="text-gray-700 mb-6 font-futura relative z-10">
                  Als Mitglied in unserem Verein sorgst du für regelmäßige Unterstützung und einen sicheren Ort, an dem die geretteten Hunde in Ruhe leben können.
                </p>
                <ul className="mt-2 space-y-3 text-left w-full relative z-10">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-secondary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Sichere, planbare Hilfe</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-secondary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Geschützter Raum zur Genesung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-secondary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Langfristige Betreuung</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-accent-blue relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 opacity-10">
                  <Home size={200} className="text-accent-blue" />
                </div>
                <div className="bg-accent-blue/20 p-4 rounded-full mb-6 relative z-10">
                  <Home size={32} className="text-accent-blue" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-futura relative z-10">Teile unsere Mission</h3>
                <p className="text-gray-700 mb-6 font-futura relative z-10">
                  Durch das Teilen unserer Arbeit in sozialen Medien hilfst du uns, mehr Menschen zu erreichen und mehr Tieren ein neues Zuhause zu ermöglichen.
                </p>
                <ul className="mt-2 space-y-3 text-left w-full relative z-10">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-accent-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Verbreite unsere Botschaft</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-accent-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Erhöhe die Sichtbarkeit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-accent-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-futura">Verbessere die Zukunft der Tiere</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="bg-accent-blue/30 rounded-xl p-10 shadow-lg relative overflow-hidden">
              <div className="absolute -top-16 -left-16 opacity-10">
                <PawPrint size={200} className="text-accent-blue" />
              </div>
              <div className="absolute -bottom-16 -right-16 opacity-10">
                <PawPrint size={200} className="text-accent-blue" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center font-futura relative z-10">Unser Shelter in Zahlen</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-500 hover:-translate-y-2 border-b-4 border-primary group">
                  <div className="text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform font-futura">160+</div>
                  <p className="text-gray-700 font-medium text-lg font-futura">Gerettete Hunde</p>
                  <div className="w-16 h-1 bg-primary mx-auto mt-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <p className="text-gray-600 font-futura text-sm">die im Shelter ein neues Zuhause gefunden haben</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-500 hover:-translate-y-2 border-b-4 border-secondary group">
                  <div className="text-6xl font-bold text-secondary mb-3 group-hover:scale-110 transition-transform font-futura">365</div>
                  <p className="text-gray-700 font-medium text-lg font-futura">Tage im Jahr</p>
                  <div className="w-16 h-1 bg-secondary mx-auto mt-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <p className="text-gray-600 font-futura text-sm">liebevolle Betreuung und Versorgung</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-500 hover:-translate-y-2 border-b-4 border-accent-blue group">
                  <div className="text-6xl font-bold text-accent-blue mb-3 group-hover:scale-110 transition-transform font-futura">24/7</div>
                  <p className="text-gray-700 font-medium text-lg font-futura">Rundumversorgung</p>
                  <div className="w-16 h-1 bg-accent-blue mx-auto mt-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <p className="text-gray-600 font-futura text-sm">für jedes einzelne Tier im Shelter</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Hilf uns zu helfen</h2>
              <div className="w-20 h-1 bg-accent-blue mx-auto mb-6"></div>
              <p className="text-gray-700 mb-8 font-futura">
                Mit deiner Hilfe können wir noch mehr für die Hunde im Shelter auf Lombok tun. 
                Jede Spende trägt dazu bei, die Lebensbedingungen der Tiere zu verbessern und ihnen eine bessere Zukunft zu ermöglichen.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  to="/spenden" 
                  className="flex items-center bg-primary text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-90"
                >
                  <Heart size={16} className="inline-block mr-2" />
                  Jetzt spenden
                </Link>
                <Link 
                  to="/join-family" 
                  className="flex items-center bg-white border-2 border-accent-blue text-primary px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-50"
                >
                  Mitglied werden
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-futura">Weitere Projekte</h2>
              <div className="w-20 h-1 bg-accent-blue mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mb-8 font-futura">
                Entdecke unsere anderen Projekte und erfahre, wie wir Straßentieren helfen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                to="/projects/kastrationsprojekte"
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary flex flex-col h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Kastrationsprojekte</h3>
                  <p className="text-gray-700 mb-4 font-futura flex-grow">
                    Unsere Kastrationsprojekte helfen, die Population von Straßentieren zu kontrollieren und Tierleid zu verhindern.
                  </p>
                  <div className="flex items-center text-primary font-medium mt-auto">
                    <span>Mehr erfahren</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
              
              <Link 
                to="/projects/wounded-program"
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-secondary flex flex-col h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Wounded Program</h3>
                  <p className="text-gray-700 mb-4 font-futura flex-grow">
                    Wir kümmern uns um verletzte und kranke Straßentiere und bieten ihnen medizinische Versorgung.
                  </p>
                  <div className="flex items-center text-secondary font-medium mt-auto">
                    <span>Mehr erfahren</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
              
              <Link 
                to="/projects/fuetterungstouren"
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent-pink flex flex-col h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-primary mb-3 font-futura">Fütterungstouren</h3>
                  <p className="text-gray-700 mb-4 font-futura flex-grow">
                    Regelmäßige Fütterungstouren versorgen Straßentiere mit Nahrung und Wasser.
                  </p>
                  <div className="flex items-center text-accent-pink font-medium mt-auto">
                    <span>Mehr erfahren</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShelterLombokPage;
