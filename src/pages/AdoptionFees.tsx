import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdoptionFees = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6 font-glorious">Adoptionsgebühren</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-futura">
              Transparente Informationen zu unseren Adoptionsgebühren - was sie beinhalten und warum sie wichtig sind.
            </p>
          </div>

          {/* Main image */}
          <div className="rounded-2xl overflow-hidden mb-16 shadow-lg">
            <img 
              src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (2).jpeg" 
              alt="Hunde Adoption" 
              className="w-full h-[400px] object-cover object-center"
            />
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 font-glorious">Warum gibt es Adoptionsgebühren?</h2>
            <p className="text-gray-600 mb-6 font-futura">
              Bei FAM for Dogs e.V. möchten wir unsere Hunde in verantwortungsvolle und liebevolle Hände geben. 
              Die Adoptionsgebühren helfen uns, einen Teil der Kosten zu decken, die uns bei der Rettung, 
              medizinischen Versorgung und Betreuung der Hunde entstehen. Sie ermöglichen es uns auch, 
              weitere Hunde zu retten und unsere Tierschutzarbeit fortzusetzen.
            </p>
            <p className="text-gray-600 mb-6 font-futura">
              Die Gebühren variieren je nach Alter, Gesundheitszustand und Herkunft des Hundes. 
              Alle Gebühren fließen direkt in unsere Arbeit zurück und werden für das Wohl der Tiere eingesetzt.
            </p>
            <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
              <p className="text-gray-600 font-futura flex">
                <Info className="text-primary mr-3 flex-shrink-0" size={24} />
                <span>
                  Die tatsächlichen Kosten für Rettung, Transport, Unterbringung, Futter und medizinische Versorgung 
                  eines Hundes übersteigen die Adoptionsgebühr oft erheblich. Der Differenzbetrag wird durch Spenden und Fundraising-Aktivitäten abgedeckt.
                </span>
              </p>
            </div>
          </div>

          {/* Fee Structure */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center font-glorious">Unsere Gebührenstruktur</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Category 1: Welpen */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full transition-transform hover:scale-[1.02]">
                <div className="bg-primary p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2 font-futura">Welpen</h3>
                  <p className="text-white/80 font-futura">Bis 6 Monate</p>
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-primary font-futura">450€</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Grundimpfungen</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Mikrochip & EU-Heimtierausweis</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Entwurmung & Entflohung</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Gesundheitscheck</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Transport nach Deutschland (bei ausländischen Hunden)</span>
                    </li>
                    <li className="flex items-start font-futura text-gray-500">
                      <span className="ml-5">Kastration/Sterilisation im Adoptionsvertrag vereinbart (später)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Category 2: Junge Hunde */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full transition-transform hover:scale-[1.02]">
                <div className="bg-primary p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2 font-futura">Junge Hunde</h3>
                  <p className="text-white/80 font-futura">6 Monate bis 2 Jahre</p>
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-primary font-futura">400€</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Grundimpfungen & Tollwutimpfung</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Mikrochip & EU-Heimtierausweis</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Entwurmung & Entflohung</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Gesundheitscheck</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Kastration/Sterilisation</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Transport nach Deutschland (bei ausländischen Hunden)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Category 3: Erwachsene Hunde */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full transition-transform hover:scale-[1.02]">
                <div className="bg-primary p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2 font-futura">Erwachsene Hunde</h3>
                  <p className="text-white/80 font-futura">Über 2 Jahre</p>
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-primary font-futura">350€</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Grundimpfungen & Tollwutimpfung</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Mikrochip & EU-Heimtierausweis</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Entwurmung & Entflohung</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Gesundheitscheck</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Kastration/Sterilisation</span>
                    </li>
                    <li className="flex items-start font-futura">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Transport nach Deutschland (bei ausländischen Hunden)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-500 italic font-futura">
                * Senioren (ab 8 Jahre) haben reduzierte Gebühren. Bitte frag uns für Details.
              </p>
            </div>
          </div>
          
          {/* What's included */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 font-glorious">Was ist in der Gebühr enthalten?</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-4 font-futura">Medizinische Versorgung</h3>
                <p className="text-gray-600 mb-4 font-futura">
                  Alle unsere Hunde erhalten vor der Vermittlung eine gründliche medizinische Versorgung. 
                  Dies umfasst altersgerechte Impfungen, Entwurmung, Entflohung und einen allgemeinen Gesundheitscheck. 
                  Erwachsene Hunde werden kastriert oder sterilisiert, sofern ihr Gesundheitszustand dies zulässt.
                </p>
                <p className="text-gray-600 font-futura">
                  Bei besonderen medizinischen Bedürfnissen oder Behandlungen informieren wir dich vorab und besprechen eventuell anfallende Zusatzkosten.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-4 font-futura">Identifikation & Dokumentation</h3>
                <p className="text-gray-600 font-futura">
                  Jeder Hund erhält einen Mikrochip sowie einen EU-Heimtierausweis, in dem alle Impfungen und medizinischen Behandlungen dokumentiert sind. 
                  Dies ist nicht nur gesetzlich vorgeschrieben, sondern bietet auch Sicherheit, falls dein Hund einmal verloren gehen sollte.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-4 font-futura">Transport & Logistik</h3>
                <p className="text-gray-600 font-futura">
                  Für Hunde aus unseren Partnerprojekten in Rumänien oder Lombok beinhaltet die Gebühr auch die Kosten für den Transport nach Deutschland. 
                  Dies umfasst alle notwendigen Dokumente, Transportboxen und die sichere Reise zu ihrem neuen Zuhause.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-4 font-futura">Nachbetreuung & Unterstützung</h3>
                <p className="text-gray-600 font-futura">
                  Nach der Adoption bieten wir weiterhin Unterstützung und Beratung an. Unsere Teammitglieder stehen dir bei Fragen zur Verfügung 
                  und helfen bei der Eingewöhnung. Diese kontinuierliche Betreuung ist ein wichtiger Teil unserer Arbeit und ebenfalls in der Adoptionsgebühr enthalten.
                </p>
              </div>
            </div>
          </div>
          
          {/* Payment Information */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center font-glorious">Zahlungsinformationen</h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6 font-futura text-center">
                Die Adoptionsgebühr ist bei Unterzeichnung des Adoptionsvertrags fällig und kann per Überweisung bezahlt werden.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h3 className="text-lg font-semibold text-primary mb-4 font-futura">Bankverbindung</h3>
                <ul className="space-y-2 text-gray-600 font-futura">
                  <li><span className="font-medium">Kontoinhaber:</span> FAM for Dogs e.V.</li>
                  <li><span className="font-medium">IBAN:</span> DE12 3456 7890 1234 5678 90</li>
                  <li><span className="font-medium">BIC:</span> ABCDEFGHIJK</li>
                  <li><span className="font-medium">Bank:</span> Musterbank</li>
                  <li><span className="font-medium">Verwendungszweck:</span> Adoption [Name des Hundes] + [Dein Name]</li>
                </ul>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-gray-600 font-futura flex">
                  <Info className="text-primary mr-3 flex-shrink-0" size={24} />
                  <span>
                    Bitte beachte, dass wir die Übergabe des Hundes erst nach Eingang der vollständigen Zahlung veranlassen können. 
                    Bei finanziellen Schwierigkeiten sprich uns bitte an - in besonderen Fällen können wir Ratenzahlungen anbieten.
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          {/* FAQ Teaser */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center font-glorious">Häufig gestellte Fragen zu Gebühren</h2>
            
            <div className="space-y-6 mb-10">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-primary mb-2 font-futura">Warum sind die Gebühren unterschiedlich hoch?</h3>
                <p className="text-gray-600 font-futura">
                  Die Gebühren variieren je nach Alter des Hundes, da unterschiedliche medizinische Maßnahmen notwendig sind. 
                  Jüngere Hunde benötigen meist mehr Impfungen und bei Welpen steht die Kastration/Sterilisation noch aus. 
                  Ältere Hunde haben oft niedrigere Gebühren, da sie etwas schwieriger zu vermitteln sind.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-primary mb-2 font-futura">Kann ich die Adoptionsgebühr steuerlich absetzen?</h3>
                <p className="text-gray-600 font-futura">
                  Die Adoptionsgebühr ist keine Spende und kann daher nicht steuerlich abgesetzt werden. 
                  Sie ist eine Gegenleistung für die Übernahme des Hundes und die erbrachten Leistungen. 
                  Direkte Spenden an unseren Verein sind jedoch steuerlich absetzbar, und wir stellen gerne eine Spendenquittung aus.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-primary mb-2 font-futura">Was passiert mit der Gebühr, wenn die Adoption nicht klappt?</h3>
                <p className="text-gray-600 font-futura">
                  Sollte die Adoption während der Probezeit nicht funktionieren und der Hund zu uns zurückkehren, 
                  erstatten wir einen Teil der Adoptionsgebühr zurück. Eine Bearbeitungsgebühr sowie die bereits entstandenen Kosten 
                  für medizinische Versorgung und Transport werden einbehalten. Die genauen Bedingungen sind im Adoptionsvertrag festgehalten.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/adoption-faq" 
                className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium font-futura"
              >
                Alle FAQs ansehen
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdoptionFees;
