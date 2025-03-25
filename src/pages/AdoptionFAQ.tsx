import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const AdoptionFAQ = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqItems: FAQItem[] = [
    {
      question: 'Wie lange dauert der Adoptionsprozess?',
      answer: 'Der gesamte Adoptionsprozess dauert in der Regel 2-4 Wochen. Bei Hunden, die sich bereits in Deutschland befinden, kann es schneller gehen. Für Hunde aus dem Ausland, die noch transportiert werden müssen, kann es etwas länger dauern. Wir arbeiten so schnell wie möglich, möchten aber auch sicherstellen, dass jede Adoption gründlich geprüft wird, um das beste Ergebnis für Mensch und Tier zu erzielen.',
      category: 'prozess'
    },
    {
      question: 'Was ist im Adoptionspreis enthalten?',
      answer: 'Die Adoptionsgebühr deckt viele wichtige Leistungen ab: grundlegende tierärztliche Versorgung (Impfungen, Entwurmung, Entflohen, allgemeine Gesundheitsuntersuchung), Mikrochip und Registrierung, Kastration (falls altersentsprechend möglich), EU-Heimtierausweis sowie bei Hunden aus dem Ausland die Transportkosten. Die genauen Kosten variieren je nach Alter und Herkunft des Hundes. Detaillierte Informationen findest du auf unserer Seite zu Adoptionsgebühren.',
      category: 'kosten'
    },
    {
      question: 'Kann ich einen Hund zurückgeben, wenn es nicht funktioniert?',
      answer: 'Wir verstehen, dass manchmal Situationen eintreten können, in denen eine Adoption nicht wie erwartet verläuft. Unser oberstes Ziel ist das Wohlbefinden unserer Hunde. Wenn es Probleme gibt, bieten wir zunächst Unterstützung und Beratung an, um zu helfen, diese zu lösen. Falls trotz aller Bemühungen die Adoption nicht funktioniert, nehmen wir den Hund zurück. In unserem Adoptionsvertrag ist festgelegt, dass der Hund immer zu uns zurückkehren muss und nicht eigenständig weitergegeben werden darf.',
      category: 'nach-adoption'
    },
    {
      question: 'Wie alt muss ich sein, um einen Hund zu adoptieren?',
      answer: 'Um einen Hund zu adoptieren, musst du mindestens 18 Jahre alt sein. Bei jungen Erwachsenen unter 25 Jahren prüfen wir besonders sorgfältig die Lebenssituation und langfristige Planung, da die Verantwortung für einen Hund oftmals 10-15 Jahre oder länger dauert und mit erheblichen finanziellen und zeitlichen Verpflichtungen verbunden ist.',
      category: 'voraussetzungen'
    },
    {
      question: 'Kann ich als Berufstätiger einen Hund adoptieren?',
      answer: 'Ja, auch Berufstätige können einen Hund adoptieren. Allerdings ist es wichtig, dass du ausreichend Zeit für deinen Hund hast. Wir schauen uns deine individuelle Situation an und berücksichtigen Faktoren wie Arbeitszeiten, Möglichkeiten zur Mitnahme des Hundes zur Arbeit, Unterstützung durch Familie/Freunde und deine Pläne für die Betreuung des Hundes während deiner Abwesenheit. Für manche Hunde ist ein Vollzeitjob kein Problem, während andere mehr Anwesenheit und Aufmerksamkeit benötigen.',
      category: 'voraussetzungen'
    },
    {
      question: 'Muss ich einen Garten haben, um einen Hund zu adoptieren?',
      answer: 'Nein, ein Garten ist keine zwingende Voraussetzung für die Adoption eines Hundes. Viele Hunde leben glücklich in Wohnungen, solange sie ausreichend Auslauf und Bewegung bekommen. Wichtiger als ein Garten ist, dass du deinem Hund regelmäßige Spaziergänge und Aktivitäten im Freien ermöglichst. Allerdings kann für bestimmte Hunde mit hohem Energielevel oder speziellen Bedürfnissen ein Garten von Vorteil sein.',
      category: 'voraussetzungen'
    },
    {
      question: 'Werden die Hunde vor der Vermittlung tierärztlich untersucht?',
      answer: 'Ja, alle unsere Hunde werden vor der Vermittlung tierärztlich untersucht. Sie erhalten altersgerechte Impfungen, werden entwurmt, entfloht und mit einem Mikrochip versehen. Ältere Hunde werden, sofern gesundheitlich möglich, kastriert. Bei Welpen erfolgt die Kastration später und sollte vom neuen Besitzer durchgeführt werden. Falls bei einem Hund besondere gesundheitliche Probleme bekannt sind, informieren wir dich natürlich vorab darüber.',
      category: 'gesundheit'
    },
    {
      question: 'Wie ist die Eingewöhnungsphase für einen Hund aus dem Ausland?',
      answer: 'Die Eingewöhnungsphase kann je nach Hund unterschiedlich sein. Manche Hunde passen sich schnell an, während andere mehr Zeit benötigen. Besonders Hunde aus dem Ausland haben oft eine lange Reise hinter sich und müssen sich an eine völlig neue Umgebung gewöhnen. In den ersten Tagen empfehlen wir Ruhe und Geduld. Stell dem Hund einen sicheren Rückzugsort zur Verfügung und überfordere ihn nicht mit zu vielen neuen Eindrücken auf einmal. Unser Team steht dir während dieser Zeit mit Rat und Tat zur Seite.',
      category: 'nach-adoption'
    },
    {
      question: 'Welche Unterlagen werden für die Adoption benötigt?',
      answer: 'Für die Adoption benötigen wir ein ausgefülltes Bewerbungsformular, eine Kopie deines Personalausweises, bei Mietwohnungen eine Erlaubnis des Vermieters zur Hundehaltung sowie gegebenenfalls weitere Nachweise je nach individueller Situation (z.B. Einkommensnachweis bei teuren Rassen oder Hunden mit besonderen gesundheitlichen Bedürfnissen).',
      category: 'prozess'
    },
    {
      question: 'Was passiert beim Hausbesuch?',
      answer: 'Der Hausbesuch ist ein wichtiger Teil unseres Adoptionsprozesses. Ein Mitglied unseres Teams besucht dich zu Hause, um sicherzustellen, dass dein Zuhause sicher und geeignet für einen Hund ist. Dabei achten wir auf die allgemeine Wohnsituation, potenzielle Gefahrenquellen, Auslaufmöglichkeiten in der Nähe und besprechen mit dir, wie du den Alltag mit dem Hund gestalten möchtest. Der Hausbesuch ist keine Prüfung, sondern eine Gelegenheit für ein persönliches Gespräch und um letzte Fragen zu klären.',
      category: 'prozess'
    },
    {
      question: 'Kann ich einen Hund adoptieren, wenn ich bereits andere Haustiere habe?',
      answer: 'Ja, du kannst auch dann einen Hund adoptieren, wenn du bereits andere Haustiere hast. Wir berücksichtigen deine vorhandenen Tiere bei der Auswahl eines passenden Hundes. Manche unserer Hunde sind gut verträglich mit anderen Hunden, Katzen oder Kleintieren, während andere besser als Einzeltier gehalten werden sollten. Bei der Zusammenführung der Tiere ist Vorsicht und Geduld wichtig. Wir beraten dich gerne, wie du die Eingewöhnung am besten gestalten kannst.',
      category: 'voraussetzungen'
    },
    {
      question: 'Werden die Hunde kastriert/sterilisiert übergeben?',
      answer: 'Ja, alle erwachsenen Hunde werden vor der Vermittlung kastriert oder sterilisiert, sofern es ihr Gesundheitszustand erlaubt. Bei Welpen und Junghunden, die altersbedingt noch nicht kastriert werden konnten, wird im Adoptionsvertrag vereinbart, dass die Kastration zu einem späteren Zeitpunkt erfolgen muss. In diesen Fällen bieten wir Unterstützung und Beratung für den geeigneten Zeitpunkt.',
      category: 'gesundheit'
    },
    {
      question: 'Was ist, wenn mein adoptierter Hund krank wird?',
      answer: 'Wenn dein adoptierter Hund krank wird, solltest du, wie bei jedem Haustier, einen Tierarzt aufsuchen. Als Besitzer bist du für die laufenden Gesundheitskosten verantwortlich. Wir empfehlen den Abschluss einer Tierkrankenversicherung. Falls kurz nach der Adoption gesundheitliche Probleme auftreten, die nachweislich bereits vor der Übernahme bestanden haben, kontaktiere uns bitte – wir finden gemeinsam eine Lösung.',
      category: 'nach-adoption'
    },
    {
      question: 'Wie kann ich sicherstellen, dass ein Hund zu mir passt?',
      answer: 'Um sicherzustellen, dass ein Hund zu dir passt, ist es wichtig, ehrlich über deinen Lebensstil, deine Erfahrungen mit Hunden und deine Erwartungen zu sein. Unser Team hilft dir, einen Hund zu finden, dessen Temperament, Energielevel und Bedürfnisse zu deinem Leben passen. Bei Hunden, die bereits in Deutschland sind, ermöglichen wir ein persönliches Kennenlernen. Für Hunde aus dem Ausland bieten wir detaillierte Informationen und Videoberatungen an. Bedenke, dass jeder Hund eine Eingewöhnungszeit braucht und sein wahres Wesen erst nach einigen Wochen zeigt.',
      category: 'prozess'
    },
    {
      question: 'Gibt es eine Probezeit für die Adoption?',
      answer: 'Ja, wir bieten in der Regel eine Probezeit von 2 Wochen an. In dieser Zeit kannst du feststellen, ob der Hund gut in dein Leben passt und ob ihr miteinander harmoniert. Sollte es während dieser Zeit unüberwindbare Probleme geben, kann der Hund zurückgegeben werden. In diesem Fall wird die Adoptionsgebühr abzüglich einer Bearbeitungsgebühr erstattet. Die genauen Bedingungen werden im Adoptionsvertrag festgehalten.',
      category: 'prozess'
    }
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'Alle Fragen' },
    { id: 'prozess', name: 'Adoptionsprozess' },
    { id: 'voraussetzungen', name: 'Voraussetzungen' },
    { id: 'kosten', name: 'Kosten & Gebühren' },
    { id: 'gesundheit', name: 'Gesundheit & Pflege' },
    { id: 'nach-adoption', name: 'Nach der Adoption' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6 font-glorious">Adoptions FAQ</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-futura">
              Antworten auf die häufigsten Fragen rund um die Adoption eines Hundes bei FAM for Dogs e.V. - alles, was du wissen musst, um gut informiert in das Abenteuer Hundeadoption zu starten.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Suche nach Stichworten..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors font-futura"
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    } font-futura`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-6">
                {filteredFAQs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-primary font-futura">{faq.question}</h3>
                      {openIndex === index ? 
                        <ChevronUp className="text-primary flex-shrink-0" size={20} /> : 
                        <ChevronDown className="text-primary flex-shrink-0" size={20} />
                      }
                    </button>
                    {openIndex === index && (
                      <div className="p-6 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600 font-futura">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500 mb-4 font-futura">Keine Ergebnisse gefunden</p>
                <p className="text-gray-600 font-futura">Versuche andere Suchbegriffe oder entferne Filter</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium font-futura"
                >
                  Filter zurücksetzen
                </button>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mt-16 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4 font-glorious">Noch Fragen?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-futura">
              Wenn du hier keine Antwort auf deine Frage gefunden hast, zögere nicht, uns direkt zu kontaktieren. 
              Unser Team steht dir gerne zur Verfügung und hilft dir weiter.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium font-futura"
            >
              Kontaktiere uns
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          {/* Related Links */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center font-glorious">Weitere Informationen zur Adoption</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link 
                to="/adoption-process" 
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow text-center group"
              >
                <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Adoptionsprozess</h3>
                <p className="text-gray-600 mb-4 font-futura">Erfahre mehr über den gesamten Ablauf einer Adoption von der Bewerbung bis zur Übergabe.</p>
                <span className="text-primary font-medium inline-flex items-center group-hover:text-secondary transition-colors font-futura">
                  Mehr erfahren
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                to="/adoption-fees" 
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow text-center group"
              >
                <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Adoptionsgebühren</h3>
                <p className="text-gray-600 mb-4 font-futura">Detaillierte Informationen zu unseren Adoptionsgebühren und was darin enthalten ist.</p>
                <span className="text-primary font-medium inline-flex items-center group-hover:text-secondary transition-colors font-futura">
                  Mehr erfahren
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                to="/success-stories" 
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow text-center group"
              >
                <h3 className="text-xl font-semibold text-primary mb-3 font-futura">Erfolgsgeschichten</h3>
                <p className="text-gray-600 mb-4 font-futura">Lese die herzerwärmenden Geschichten von Hunden, die durch unsere Vermittlung ihr Für-Immer-Zuhause gefunden haben.</p>
                <span className="text-primary font-medium inline-flex items-center group-hover:text-secondary transition-colors font-futura">
                  Mehr erfahren
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdoptionFAQ;
