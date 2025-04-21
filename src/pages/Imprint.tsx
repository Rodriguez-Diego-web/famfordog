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
              FAM for Dogs e.V. (ehemals Dogs of Lombok e.V.)<br />
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
              Mieke Wittmann, Fiona Bliedtner<br />
              Baakenallee 8, 20457 Hamburg
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Vereinsregister</h2>
            <p className="font-futura">
              Der Verein war ursprünglich eingetragen beim Amtsgericht Wuppertal unter der Nummer VR 31401.<br />
              Im April 2025 wurde eine Satzungsänderung mit Sitzverlegung nach Hamburg sowie eine Namensänderung 
              von Dogs of Lombok e.V. zu FAM for Dogs e.V. notariell beurkundet.<br />
              Die Eintragung dieser Änderungen beim Amtsgericht Hamburg ist derzeit im Verfahren.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Bankverbindung für Mitgliedsbeiträge</h2>
            <p className="font-futura">
              Deutsche Skatbank<br />
              IBAN: DE91 8306 5408 0005 3189 55<br />
              BIC: GENODEF1SLR
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Haftung für Links</h2>
            <p className="font-futura">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Urheberrecht</h2>
            <p className="font-futura">
              Alle Inhalte dieser Website, insbesondere Texte, Fotografien und Grafiken, sind urheberrechtlich geschützt. 
              Die Urheberrechte liegen, soweit nicht anders gekennzeichnet, bei Mieke Wittmann und Fiona Bliedtner.
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
