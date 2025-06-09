import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8 font-glorious">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">1. Verantwortlicher</h2>
            <p className="font-futura">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="font-futura">
              FAM for Dogs e.V.<br />
              Baakenallee 8<br />
              20457 Hamburg, Deutschland<br />
              Telefon: +49 (0) 15679 624 274<br />
              E-Mail: info@famfordogs.com<br />
              Vertreten durch: Mieke Wittmann & Fiona Bliedtner
            </p>

            <div className="border-t border-gray-300 my-8"></div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">2. Allgemeine Hinweise zum Datenschutz</h2>
            <p className="font-futura">
              Der Schutz Ihrer personenbezogenen Daten ist uns sehr wichtig. Wir behandeln Ihre Daten vertraulich und 
              entsprechend der geltenden Datenschutzgesetze (insbesondere der DSGVO).
            </p>
            <p className="font-futura">
              Personenbezogene Daten sind alle Informationen, die dazu dienen, Sie direkt oder indirekt zu identifizieren, 
              wie Name, E-Mail-Adresse oder IP-Adresse.
            </p>
            <p className="font-futura">
              Die Datenübertragung im Internet ist nie komplett sicher, dennoch setzen wir technische Maßnahmen wie 
              SSL-/TLS-Verschlüsselung ein, um Ihre Daten bestmöglich zu schützen.
            </p>

            <div className="border-t border-gray-300 my-8"></div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">3. Datenerfassung auf unserer Website</h2>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">a) Server-Logfiles</h3>
            <p className="font-futura">
              Beim Besuch unserer Website werden automatisch bestimmte Daten durch unseren Hosting-Provider 
              erfasst, darunter anonymisierte IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit des Zugriffs 
              und Hostname des zugreifenden Rechners. Diese Daten dienen der Sicherstellung des Betriebs, der 
              Sicherheit und Optimierung der Website.
            </p>
            <p className="font-futura">
              Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>

            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">b) Cookies</h3>
            <p className="font-futura">
              Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit und Funktionalität zu verbessern. Die 
              meisten Cookies sind sogenannte Session-Cookies, die nach dem Besuch automatisch gelöscht werden. 
              Andere Cookies bleiben gespeichert, bis Sie diese löschen.
            </p>
            <p className="font-futura">
              Sie können Ihre Browser-Einstellungen anpassen, um Cookies abzulehnen oder zu löschen. Bitte beachten 
              Sie, dass die Website dann möglicherweise nicht mehr vollständig funktioniert.
            </p>

            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">c) Kontaktformular</h3>
            <p className="font-futura">
              Wenn Sie uns über das Kontaktformular kontaktieren, speichern wir Ihre Angaben (z.B. Name, E-Mail-
              Adresse) zur Bearbeitung Ihrer Anfrage. Diese Daten werden nur mit Ihrer ausdrücklichen Einwilligung 
              verarbeitet und nicht ohne Ihre Zustimmung weitergegeben.
            </p>
            <p className="font-futura">
              Sie können Ihre Einwilligung jederzeit per E-Mail widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
              erfolgten Verarbeitung bleibt unberührt.
            </p>

            <div className="border-t border-gray-300 my-8"></div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">4. Nutzung von FundraisingBox und Zahlungsdienstleistern</h2>
            <p className="font-futura">
              Für Online-Spenden verwenden wir FundraisingBox der Wikando GmbH. Dabei werden personenbezogene 
              Daten wie Name, Adresse und Zahlungsinformationen verarbeitet.
            </p>
            <p className="font-futura">
              Als Zahlungsdienstleister nutzen wir PayPal, Sepa Lastschriftmandat und Kreditkartenzahlung. Ihre 
              Zahlungsdaten werden verschlüsselt übertragen und gemäß DSGVO verarbeitet.
            </p>

            <div className="border-t border-gray-300 my-8"></div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">5. Rechtsgrundlagen der Verarbeitung</h2>
            <p className="font-futura">
              Die Datenverarbeitung erfolgt auf Grundlage folgender Rechtsgrundlagen:
            </p>
            <ul className="list-disc pl-6 mb-4 font-futura">
              <li>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</li>
              <li>Vertragserfüllung bzw. vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO)</li>
              <li>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)</li>
            </ul>

            <div className="border-t border-gray-300 my-8"></div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">6. Speicherdauer</h2>
            <p className="font-futura">
              Wir speichern personenbezogene Daten nur so lange, wie es für die Erfüllung der jeweiligen Zwecke 
              erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>

            <div className="border-t border-gray-300 my-8"></div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">7. Ihre Rechte</h2>
            <p className="font-futura">
              Sie haben jederzeit folgende Rechte bezüglich Ihrer personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 mb-4 font-futura">
              <li>Auskunft über die gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung der Daten, soweit keine gesetzlichen Aufbewahrungspflichten bestehen</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
            </ul>
            <p className="font-futura">
              Zur Ausübung dieser Rechte wenden Sie sich bitte an unsere Kontaktadresse.
            </p>

            <div className="border-t border-gray-300 my-8"></div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">8. Beschwerderecht</h2>
            <p className="font-futura">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist der 
              Hamburgische Beauftragte für Datenschutz: 
              <a href="https://www.datenschutz-hamburg.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 ml-1">
                www.datenschutz-hamburg.de
              </a>.
            </p>

            <div className="border-t border-gray-300 my-8"></div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">9. Social Media Verlinkungen</h2>
            <p className="font-futura">
              Unsere Website enthält lediglich Links zu sozialen Netzwerken (z.B. Instagram), keine eingebetteten Plugins. 
              Durch Anklicken verlassen Sie unsere Seite und können Datenschutzerklärungen der jeweiligen Anbieter 
              einsehen.
            </p>

            <div className="border-t border-gray-300 my-8"></div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">10. SSL-/TLS-Verschlüsselung</h2>
            <p className="font-futura">
              Unsere Website nutzt HTTPS (SSL-/TLS-Verschlüsselung) zum Schutz Ihrer Daten bei der Übertragung.
            </p>

            <div className="border-t border-gray-300 my-8"></div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">11. Änderungen dieser Datenschutzerklärung</h2>
            <p className="font-futura">
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Stand: Juni 2025.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
