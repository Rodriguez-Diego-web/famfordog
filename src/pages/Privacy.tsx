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
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Allgemeine Hinweise</h3>
            <p className="font-futura">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
              wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
              werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text 
              aufgeführten Datenschutzerklärung.
            </p>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Datenerfassung auf unserer Website</h3>
            <p className="font-futura">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>
            
            <p className="font-futura">
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, 
              die Sie in ein Kontaktformular eingeben.
            </p>
            
            <p className="font-futura">
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische 
              Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, 
              sobald Sie unsere Website betreten.
            </p>
            
            <p className="font-futura">
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können 
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            
            <p className="font-futura">
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten 
              zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum 
              angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Datenschutz</h3>
            <p className="font-futura">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen 
              Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            
            <p className="font-futura">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, 
              mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir 
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            
            <p className="font-futura">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken 
              aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Hinweis zur verantwortlichen Stelle</h3>
            <p className="font-futura">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            
            <p className="font-futura">
              FAM for Dogs e.V.<br />
              Sternhagenweg 13<br />
              22303 Hamburg
            </p>
            
            <p className="font-futura">
              Telefon: 040 / 123 456 789<br />
              E-Mail: info@famfordogs.de
            </p>
            
            <p className="font-futura">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke 
              und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="font-futura">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte 
              Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum 
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="font-futura">
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. 
              Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem 
              unser Unternehmen seinen Sitz hat. Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten können folgendem Link 
              entnommen werden: 
              <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                https://www.bfdi.bund.de
              </a>.
            </p>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Recht auf Datenübertragbarkeit</h3>
            <p className="font-futura">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert 
              verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern 
              Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch 
              machbar ist.
            </p>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="font-futura">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen 
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung 
              erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in 
              Ihrer Browserzeile.
            </p>
            
            <p className="font-futura">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten 
              mitgelesen werden.
            </p>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Auskunft, Sperrung, Löschung</h3>
            <p className="font-futura">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre 
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein 
              Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene 
              Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">3. Datenerfassung auf unserer Website</h2>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Cookies</h3>
            <p className="font-futura">
              Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und 
              enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. 
              Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
            </p>
            
            <p className="font-futura">
              Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs 
              automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies 
              ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
            </p>
            
            <p className="font-futura">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im 
              Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische 
              Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität 
              dieser Website eingeschränkt sein.
            </p>
            
            <p className="font-futura">
              Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen 
              erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO 
              gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien 
              und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) 
              gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.
            </p>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Server-Log-Dateien</h3>
            <p className="font-futura">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr 
              Browser automatisch an uns übermittelt. Dies sind:
            </p>
            
            <ul className="list-disc pl-6 mb-4 font-futura">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            
            <p className="font-futura">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            
            <p className="font-futura">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein 
              berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen 
              die Server-Log-Files erfasst werden.
            </p>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Kontaktformular</h3>
            <p className="font-futura">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der 
              von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            
            <p className="font-futura">
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer 
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine 
              formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge 
              bleibt vom Widerruf unberührt.
            </p>
            
            <p className="font-futura">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre 
              Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener 
              Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
