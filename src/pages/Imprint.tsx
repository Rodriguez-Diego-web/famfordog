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
              20457 Hamburg
            </p>
            
            <p className="font-futura mt-6">
              Telefon: +49 (0) 15679 624 274<br />
              E-Mail: info@famfordogs.com
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Vertretungsberechtigter Vorstand gemäß § 26 BGB</h2>
            <p className="font-futura">
              Mieke Wittmann, Fiona Bliedtner
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Inhaltlich Verantwortliche gemäß § 55 Abs. 2 RStV</h2>
            <p className="font-futura">
              Mieke Wittmann, Fiona Bliedtner
            </p>
            
            <p className="font-futura mt-6">
              Eingetragen im Vereinsregister des Amtsgerichts Hamburg unter der Nummer VR 31401
            </p>
            
            <p className="font-futura mt-6">
              Vom Finanzamt Hamburg als gemeinnütziger Verein anerkannt
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Bankverbindung für Mitgliedsbeiträge</h2>
            <p className="font-futura">
              Deutsche Skatbank<br />
              IBAN: DE91 8306 5408 0005 3189 55<br />
              BIC: GENODEF1SLR
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Haftung für Links</h2>
            <p className="font-futura">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
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
