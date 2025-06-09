import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Imprint = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8 font-glorious">Impressum</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="font-futura">
              FAM for Dogs e.V.<br />
              Baakenallee 8<br />
              20457 Hamburg<br />
              Deutschland
            </p>
            
            <p className="font-futura mt-6">
              Telefon: +49 (0) 15679 624 274<br />
              E-Mail: info@famfordogs.com
            </p>
            
            <div className="border-t border-gray-300 my-8"></div>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Vertretungsberechtigter Vorstand gemäß § 26 BGB</h2>
            <p className="font-futura">
              Mieke Wittmann<br />
              Fiona Bliedtner<br /><br />
              Beide Vorsitzenden vertreten den Verein jeweils einzeln.
            </p>
            
            <div className="border-t border-gray-300 my-8"></div>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Inhaltlich Verantwortlich gemäß § 55 Abs. 2 RStV</h2>
            <p className="font-futura">
              Mieke Wittmann und Fiona Bliedtner<br />
              Baakenallee 8<br />
              20457 Hamburg
            </p>
            
            <div className="border-t border-gray-300 my-8"></div>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Vereinsregister</h2>
            <p className="font-futura">
              Eingetragen im Vereinsregister des Amtsgerichts Hamburg unter der Nummer VR 25947.
            </p>
            
            <div className="border-t border-gray-300 my-8"></div>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Bankverbindung für Mitgliedsbeiträge und Spenden</h2>
            <p className="font-futura">
              Deutsche Skatbank<br />
              IBAN: DE91 8306 5408 0005 3189 55<br />
              BIC: GENODEF1SLR
            </p>
            
            <div className="border-t border-gray-300 my-8"></div>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Haftung für Links</h2>
            <p className="font-futura">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer
              Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
            
            <div className="border-t border-gray-300 my-8"></div>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Urheberrecht</h2>
            <p className="font-futura">
              Alle Inhalte dieser Website, insbesondere Texte, Fotografien und Grafiken, sind urheberrechtlich
              geschützt.<br />
              Sofern nicht anders gekennzeichnet, liegen die Urheberrechte bei Mieke Wittmann und Fiona
              Bliedtner.
            </p>
            
            <p className="font-futura mt-6">
              &copy; Texte: Mieke Wittmann, Fiona Bliedtner
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;
