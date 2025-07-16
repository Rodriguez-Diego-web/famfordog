import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Search, FileText, Home, ArrowRight, PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdoptionProcess = () => {
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
            <h1 className="text-5xl font-bold text-primary mb-6 font-glorious">Adoptionsprozess</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-futura">
              Der Weg zu deinem neuen Familienmitglied - hier erklären wir dir, wie der Adoptionsprozess bei FAM for Dogs e.V. abläuft.
            </p>
          </div>

          {/* Main image */}
          <div className="rounded-2xl overflow-hidden mb-16 shadow-lg">
            <img 
              src="/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (4).jpeg" 
              alt="Hund wird adoptiert" 
              className="w-full h-[400px] object-cover object-center"
            />
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center font-glorious">In 5 Schritten zu deinem neuen Familienmitglied</h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura flex items-center">
                    <Search className="mr-3 text-accent-blue" size={22} />
                    Finde deinen Traumhund
                  </h3>
                  <p className="text-gray-600 mb-4 font-futura">
                    Stöbere durch unsere verfügbaren Hunde und finde einen Vierbeiner, der zu dir und deinem Lebensstil passt. Schau dir die Profile genau an und lies die Beschreibungen sorgfältig durch, um mehr über die Persönlichkeit, Verhalten und besonderen Bedürfnisse der Hunde zu erfahren.
                  </p>
                  <Link to="/about" className="text-primary font-medium inline-flex items-center hover:text-accent-blue transition-colors font-futura">
                    Verfügbare Hunde ansehen
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura flex items-center">
                    <FileText className="mr-3 text-accent-blue" size={22} />
                    Bewerbungsformular ausfüllen
                  </h3>
                  <p className="text-gray-600 mb-4 font-futura">
                    Fülle unser Adoptionsbewerbungsformular aus. Je mehr Informationen du uns über dich, deinen Haushalt und deinen Lebensstil gibst, desto besser können wir einschätzen, ob der Hund zu dir passt. Denke daran, ehrlich zu sein – wir wollen sicherstellen, dass sowohl du als auch der Hund glücklich sein werden.
                  </p>
                  <Link to="/adoption-how-to" className="text-primary font-medium inline-flex items-center hover:text-accent-blue transition-colors font-futura">
                    Mehr zum Bewerbungsprozess
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura flex items-center">
                    <Heart className="mr-3 text-accent-blue" size={22} />
                    Kennenlernen
                  </h3>
                  <p className="text-gray-600 mb-4 font-futura">
                    Nach der ersten Prüfung deiner Bewerbung laden wir dich zu einem virtuellen Kennenlernen ein. Bei Hunden, die bereits in Deutschland sind, ist auch ein persönliches Treffen möglich. Hier kannst du mehr über den Hund erfahren und wir bekommen einen besseren Eindruck von dir und deinen Erwartungen.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura flex items-center">
                    <Home className="mr-3 text-accent-blue" size={22} />
                    Hausbesuch & finale Genehmigung
                  </h3>
                  <p className="text-gray-600 mb-4 font-futura">
                    Ein Mitglied unseres Teams wird einen Hausbesuch durchführen, um sicherzustellen, dass dein Zuhause sicher und geeignet für den Hund ist. Nach erfolgreichem Hausbesuch und finaler Genehmigung durch unser Adoptionsteam kannst du den Adoptionsvertrag unterzeichnen und die Adoptionsgebühr bezahlen.
                  </p>
                  <Link to="/adoption-fees" className="text-primary font-medium inline-flex items-center hover:text-accent-blue transition-colors font-futura">
                    Informationen zu Gebühren
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-futura flex items-center">
                    <PawPrint className="mr-3 text-accent-blue" size={22} />
                    Willkommen in deinem neuen Zuhause!
                  </h3>
                  <p className="text-gray-600 mb-4 font-futura">
                    Jetzt ist es endlich soweit! Der Hund zieht bei dir ein. Bei Hunden aus dem Ausland organisieren wir den Transport nach Deutschland. Unser Team bleibt auch nach der Adoption für dich ansprechbar und unterstützt dich in der Eingewöhnungsphase mit Rat und Tat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Teaser */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4 font-glorious">Häufig gestellte Fragen</h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-futura">
                Du hast noch Fragen zum Adoptionsprozess? Hier findest du Antworten auf die am häufigsten gestellten Fragen.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-2 font-futura">Wie lange dauert der Adoptionsprozess?</h3>
                <p className="text-gray-600 font-futura">
                  Der gesamte Prozess dauert in der Regel 2-4 Wochen. Bei Hunden, die aus dem Ausland nach Deutschland transportiert werden müssen, kann es etwas länger dauern.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-2 font-futura">Was ist im Adoptionspreis enthalten?</h3>
                <p className="text-gray-600 font-futura">
                  Die Adoptionsgebühr deckt Impfungen, Mikrochip, Entwurmung, Entflohen, Kastration und den EU-Heimtierausweis ab. Bei Hunden aus dem Ausland sind auch die Transportkosten enthalten.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-2 font-futura">Kann ich einen Hund zurückgeben, wenn es nicht funktioniert?</h3>
                <p className="text-gray-600 font-futura">
                  Wir verstehen, dass nicht jede Adoption perfekt ist. Wenn es Probleme gibt, bieten wir zunächst Unterstützung und Beratung an. Sollte es dennoch nicht funktionieren, nehmen wir den Hund zurück.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/adoption-faq" 
                className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium font-futura"
              >
                Alle FAQs ansehen
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6 font-glorious">Bereit, ein Leben zu verändern?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/80 font-futura">
              Ein Hund zu adoptieren bedeutet, ein Leben zu retten und gleichzeitig dein eigenes zu bereichern. 
              Schau dir unsere verfügbaren Hunde an und finde deinen perfekten Begleiter.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors font-medium font-futura"
            >
              Verfügbare Hunde ansehen
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdoptionProcess;
