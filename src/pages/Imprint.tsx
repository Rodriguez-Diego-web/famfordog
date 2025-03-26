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
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Angaben gemäß § 5 TMG</h2>
            <p className="font-futura">
              FAM for Dogs e.V.<br />
              Sternhagenweg 13<br />
              22303 Hamburg
            </p>
            
            <p className="font-futura">
              Vereinsregister: VR 12345<br />
              Registergericht: Amtsgericht Hamburg
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Vertreten durch</h2>
            <p className="font-futura">
              Fiona Paetzold (1. Vorsitzende)<br />
              Mieke Mosler (2. Vorsitzende)
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Kontakt</h2>
            <p className="font-futura">
              Telefon: 040 / 123 456 789<br />
              E-Mail: info@famfordogs.de
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Umsatzsteuer-ID</h2>
            <p className="font-futura">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 123456789
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="font-futura">
              Fiona Paetzold<br />
              Sternhagenweg 13<br />
              22303 Hamburg
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Streitschlichtung</h2>
            <p className="font-futura">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                https://ec.europa.eu/consumers/odr/
              </a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            
            <p className="font-futura">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Haftung für Inhalte</h2>
            <p className="font-futura">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu 
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            
            <p className="font-futura">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden 
              von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Haftung für Links</h2>
            <p className="font-futura">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese 
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
              der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            
            <p className="font-futura">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Urheberrecht</h2>
            <p className="font-futura">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
              jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            
            <p className="font-futura">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden 
              Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;
