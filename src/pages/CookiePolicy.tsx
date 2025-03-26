import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 sm:mb-8 font-glorious">Cookie-Richtlinie</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Was sind Cookies?</h2>
            <p className="font-futura">
              Cookies sind kleine Textdateien, die von Websites auf Ihrem Computer oder mobilen Gerät gespeichert werden, 
              wenn Sie diese Websites besuchen. Sie werden häufig verwendet, um Websites effizient funktionieren zu lassen 
              und den Websitebetreibern Informationen zu liefern.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Wie wir Cookies verwenden</h2>
            <p className="font-futura">
              Wir verwenden Cookies, um:
            </p>
            <ul className="list-disc pl-6 mb-4 font-futura">
              <li>Die Funktionalität unserer Website zu gewährleisten</li>
              <li>Ihre Präferenzen zu speichern</li>
              <li>Zu verstehen, wie Sie unsere Website nutzen</li>
              <li>Die Nutzererfahrung zu verbessern</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Arten von Cookies, die wir verwenden</h2>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Unbedingt erforderliche Cookies</h3>
            <p className="font-futura">
              Diese Cookies sind für das Funktionieren unserer Website unerlässlich und können in unseren Systemen nicht 
              abgeschaltet werden. Sie werden in der Regel nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, 
              die einer Dienstanforderung entsprechen, wie etwa dem Festlegen Ihrer Datenschutzeinstellungen, dem Anmelden 
              oder dem Ausfüllen von Formularen. Sie können Ihren Browser so einstellen, dass diese Cookies blockiert oder 
              Sie über diese Cookies benachrichtigt werden, aber einige Teile der Website werden dann nicht funktionieren.
            </p>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Funktionale Cookies</h3>
            <p className="font-futura">
              Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen. 
              Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten eingebunden haben. 
              Wenn Sie diese Cookies nicht zulassen, funktionieren einige oder alle dieser Dienste möglicherweise nicht einwandfrei.
            </p>
            
            <h3 className="text-xl font-bold text-primary mt-6 mb-3 font-futura">Analytische Cookies</h3>
            <p className="font-futura">
              Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website 
              messen und verbessern können. Sie helfen uns zu wissen, welche Seiten am beliebtesten und am wenigsten beliebt sind, 
              und zu sehen, wie sich Besucher auf der Website bewegen. Alle Informationen, die diese Cookies sammeln, werden 
              aggregiert und sind daher anonym.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Kontrolle über Cookies</h2>
            <p className="font-futura">
              Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf den Button "Cookie-Einstellungen" klicken, 
              der am unteren Rand jeder Seite unserer Website angezeigt wird. Sie können auch die meisten Cookies über die 
              Einstellungen Ihres Browsers kontrollieren.
            </p>
            
            <p className="font-futura">
              Bitte beachten Sie, dass das Blockieren einiger Arten von Cookies die Funktionalität unserer Website und die 
              Dienste, die wir anbieten können, beeinträchtigen kann.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Cookie-Liste</h2>
            <p className="font-futura">
              Im Folgenden finden Sie eine detaillierte Liste der Cookies, die auf unserer Website verwendet werden:
            </p>
            
            <div className="overflow-x-auto mt-4 mb-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left font-futura">Name</th>
                    <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left font-futura">Anbieter</th>
                    <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left font-futura">Zweck</th>
                    <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left font-futura">Ablauf</th>
                    <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left font-futura">Typ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">cookie_consent</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">famfordogs.de</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Speichert Ihre Cookie-Einstellungen</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">1 Jahr</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Notwendig</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">session</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">famfordogs.de</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Hält Ihre Sitzung aktiv</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Sitzung</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Notwendig</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">_ga</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Google Analytics</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Unterscheidet Benutzer für Analysezwecke</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">2 Jahre</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Analytisch</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">_gid</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Google Analytics</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Unterscheidet Benutzer für Analysezwecke</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">24 Stunden</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Analytisch</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">_gat</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Google Analytics</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Drosselt die Anforderungsrate</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">1 Minute</td>
                    <td className="px-4 py-2 border-b border-gray-200 font-futura">Analytisch</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Änderungen an unserer Cookie-Richtlinie</h2>
            <p className="font-futura">
              Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um beispielsweise Änderungen an den von uns 
              verwendeten Cookies widerzuspiegeln oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen. 
              Bitte besuchen Sie diese Cookie-Richtlinie daher regelmäßig, um über unsere Verwendung von Cookies und verwandten 
              Technologien informiert zu bleiben.
            </p>
            
            <p className="font-futura">
              Das Datum der letzten Aktualisierung dieser Cookie-Richtlinie ist unten angegeben.
            </p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-futura">Kontakt</h2>
            <p className="font-futura">
              Wenn Sie Fragen zu unserer Verwendung von Cookies oder anderen Technologien haben, kontaktieren Sie uns bitte unter:
            </p>
            
            <p className="font-futura">
              FAM for Dogs e.V.<br />
              Sternhagenweg 13<br />
              22303 Hamburg<br />
              E-Mail: info@famfordogs.de
            </p>
            
            <p className="font-futura mt-8 text-gray-600">
              Letzte Aktualisierung: 26. März 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
