import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Calendar, MessageCircle, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SuccessStory {
  id: number;
  dogName: string;
  ownerName: string;
  date: string;
  location: string;
  image: string;
  content: string;
  quote: string;
}

const SuccessStories = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const [activeStory, setActiveStory] = useState<number>(0);

  const stories: SuccessStory[] = [
    {
      id: 1,
      dogName: "Max",
      ownerName: "Familie Müller",
      date: "März 2023",
      location: "München",
      image: "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (1).jpeg",
      content: "Max wurde in einem kleinen Dorf in Rumänien gefunden, wo er auf der Straße lebte. Er war unterernährt und hatte Angst vor Menschen. Nach seiner Rettung kam er zu uns ins Shelter, wo er langsam Vertrauen fasste. Familie Müller verliebte sich sofort in ihn, als sie sein Profil sahen. Nach einem erfolgreichen virtuellen Kennenlernen und Hausbesuch durfte Max nach Deutschland reisen. Heute, ein Jahr später, ist Max ein völlig anderer Hund. Er liebt lange Spaziergänge im Wald, spielt stundenlang mit den Kindern und hat sogar einen Hundekurs absolviert. Seine Angst vor Menschen ist komplett verschwunden, und er begrüßt jeden Besucher mit Begeisterung.",
      quote: "Max hat unser Leben komplett bereichert. Er ist nicht nur ein Haustier, sondern ein vollwertiges Familienmitglied. Wir können uns ein Leben ohne ihn nicht mehr vorstellen!"
    },
    {
      id: 2,
      dogName: "Luna",
      ownerName: "Lisa Schmidt",
      date: "September 2023",
      location: "Berlin",
      image: "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (7).jpeg",
      content: "Luna wurde zusammen mit ihren Geschwistern in einer Schachtel am Straßenrand gefunden. Sie war erst wenige Wochen alt und brauchte dringend Hilfe. In unserer Pflegestelle wurde sie liebevoll aufgepäppelt und entwickelte sich zu einer verspielten, aufgeweckten Hündin. Lisa, die gerade in eine neue Wohnung gezogen war, suchte einen vierbeinigen Begleiter und entdeckte Luna auf unserer Website. Bei ihrem ersten Treffen war die Chemie sofort spürbar. Luna sprang auf Lisas Schoß und wollte gar nicht mehr weg. Heute ist Luna Lisas ständige Begleiterin, egal ob beim Joggen, in der hundefreundlichen Bäckerei oder beim Arbeiten im Home Office.",
      quote: "Luna hat mir gezeigt, was bedingungslose Liebe bedeutet. Meine Wohnung ist jetzt ein Zuhause, und ich habe durch sie viele neue Freunde gefunden. Die Adoption war die beste Entscheidung meines Lebens!"
    },
    {
      id: 3,
      dogName: "Rocky",
      ownerName: "Markus & Julia Weber",
      date: "Januar 2024",
      location: "Hamburg",
      image: "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23 (3).jpeg",
      content: "Rocky hatte einen schweren Start ins Leben. Als ehemaliger Kettenhund in Rumänien kannte er weder Zuneigung noch Komfort. Als er zu uns kam, war er sehr misstrauisch und ängstlich. Markus und Julia, ein Paar mit viel Hundeerfahrung, sahen sein Potenzial und wollten ihm eine zweite Chance geben. Sie nahmen sich Zeit für regelmäßige Besuche, um langsam sein Vertrauen zu gewinnen. Nach der Adoption arbeiteten sie geduldig mit ihm und holten sich professionelle Unterstützung eines Hundetrainers. Die Fortschritte waren langsam, aber stetig. Heute, sechs Monate später, ist Rocky wie verwandelt. Er genießt sein großes Körbchen, regelmäßige Mahlzeiten und vor allem die Zuneigung seiner Menschen.",
      quote: "Rocky hat uns so viel Geduld und Verständnis gelehrt. Jeder kleine Fortschritt ist ein riesiger Sieg. Zu sehen, wie er aufblüht und endlich ein normales Hundeleben führen kann, ist unbezahlbar."
    },
    {
      id: 4,
      dogName: "Bella",
      ownerName: "Senior Thomas Klein",
      date: "November 2023",
      location: "Frankfurt",
      image: "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.23.jpeg",
      content: "Bella ist eine ältere Hündin, die ihr Zuhause verlor, als ihre Besitzerin ins Pflegeheim musste. Für ältere Hunde ist es oft schwer, ein neues Zuhause zu finden. Thomas, ein Rentner, suchte nach einem ruhigen Begleiter für seinen Alltag. Als er Bella bei einem unserer Adoption Days kennenlernte, war es Liebe auf den ersten Blick. Die beiden schienen sich sofort zu verstehen. Bella zog bei Thomas ein und wurde schnell sein treuer Schatten. Sie begleitet ihn bei seinen täglichen Spaziergängen und liegt abends neben ihm auf dem Sofa. Die beiden Senioren haben in ihrem gemeinsamen Leben eine neue Freude gefunden.",
      quote: "In meinem Alter dachte ich, dass ich nicht mehr viel Neues erleben würde. Bella hat mir gezeigt, dass das Leben immer für Überraschungen gut ist. Sie gibt meinem Tag Struktur und meinem Herzen Wärme."
    },
    {
      id: 5,
      dogName: "Charlie",
      ownerName: "Familie Becker",
      date: "April 2023",
      location: "Köln",
      image: "/images/Rumanien/WhatsApp Image 2025-03-24 at 18.13.24 (1).jpeg",
      content: "Charlie wurde in Lombok von unserem lokalen Tierschutzpartner gerettet, nachdem er bei einem Motorradunfall verletzt wurde. Nach seiner medizinischen Versorgung und Genesung kam er nach Deutschland, wo Familie Becker bereits auf ihn wartete. Sie hatten sein Profil online gesehen und sich in den fröhlichen, trotz seiner schweren Vergangenheit optimistischen Hund verliebt. Die Beckers haben zwei Kinder im Grundschulalter, die Charlie vom ersten Tag an ins Herz geschlossen haben. Nach einer kurzen Eingewöhnungszeit fühlte sich Charlie wie ein Teil der Familie. Er liebt es, mit den Kindern im Garten zu spielen und hat sich als geduldiger und sanfter Spielgefährte erwiesen.",
      quote: "Charlie hat unsere Familie vervollständigt. Die Kinder haben durch ihn Verantwortungsbewusstsein und Empathie gelernt. Er ist nicht nur ein Spielkamerad, sondern auch ein Beschützer und Freund."
    }
  ];

  const handlePrevStory = () => {
    setActiveStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNextStory = () => {
    setActiveStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6 font-glorious">Erfolgsgeschichten</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-futura">
              Herzerwärmende Geschichten von Hunden, die durch unsere Vermittlung ihr Für-Immer-Zuhause gefunden haben und das Leben ihrer neuen Familien bereichern.
            </p>
          </div>

          {/* Featured Success Story Carousel */}
          <div className="mb-20">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={stories[activeStory].image} 
                    alt={stories[activeStory].dogName} 
                    className="w-full h-full object-cover object-center max-h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center mb-2">
                      <Heart className="text-secondary mr-2" size={20} fill="currentColor" />
                      <h3 className="text-xl font-bold font-futura">{stories[activeStory].dogName}</h3>
                    </div>
                    <div className="flex items-center text-sm text-white/80 space-x-4">
                      <span className="flex items-center font-futura">
                        <Calendar size={16} className="mr-1" />
                        {stories[activeStory].date}
                      </span>
                      <span className="font-futura">{stories[activeStory].location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-2 font-glorious">
                      {stories[activeStory].dogName}'s Geschichte
                    </h2>
                    <p className="text-gray-500 mb-6 font-futura">Adoptiert von {stories[activeStory].ownerName}</p>
                    <div className="prose prose-primary max-w-none mb-8 font-futura">
                      <p className="text-gray-600">{stories[activeStory].content}</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl mb-8">
                      <div className="flex items-start">
                        <MessageCircle className="text-secondary mr-3 flex-shrink-0" size={24} />
                        <blockquote className="text-gray-600 italic font-futura">
                          "{stories[activeStory].quote}"
                          <footer className="text-gray-500 mt-2 font-normal font-futura">— {stories[activeStory].ownerName}</footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={handlePrevStory}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <div className="flex space-x-2">
                      {stories.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveStory(index)}
                          className={`w-2 h-2 rounded-full ${
                            activeStory === index ? 'bg-primary' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <button 
                      onClick={handleNextStory}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Success Stories Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center font-glorious">Weitere Erfolgsgeschichten</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.filter((_, index) => index !== activeStory).map((story) => (
                <div 
                  key={story.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-64">
                    <img 
                      src={story.image} 
                      alt={story.dogName} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                      <div className="flex items-center mb-1">
                        <Heart className="text-secondary mr-2" size={16} fill="currentColor" />
                        <h3 className="text-lg font-bold font-futura">{story.dogName}</h3>
                      </div>
                      <div className="flex items-center text-xs text-white/80 space-x-3">
                        <span className="flex items-center font-futura">
                          <Calendar size={12} className="mr-1" />
                          {story.date}
                        </span>
                        <span className="font-futura">{story.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 line-clamp-3 mb-4 font-futura">
                      {story.content.substring(0, 120)}...
                    </p>
                    <button 
                      onClick={() => setActiveStory(stories.findIndex(s => s.id === story.id))}
                      className="text-primary font-medium inline-flex items-center hover:text-secondary transition-colors font-futura"
                    >
                      Ganze Geschichte lesen
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Share Your Story */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4 font-glorious">Teile deine Geschichte</h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-futura">
                Hast du einen Hund von uns adoptiert? Wir würden uns freuen, deine Erfolgsgeschichte zu hören und mit anderen zu teilen. 
                Deine Geschichte kann anderen Familien Mut machen, einen Hund zu adoptieren.
              </p>
            </div>
            
            <form className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Dein Name</label>
                  <input 
                    type="text" 
                    id="ownerName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Dein Name oder Familienname"
                  />
                </div>
                <div>
                  <label htmlFor="dogName" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Name deines Hundes</label>
                  <input 
                    type="text" 
                    id="dogName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Name deines adoptierten Hundes"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-futura">E-Mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="deine@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="adoptionDate" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Adoptionsdatum</label>
                  <input 
                    type="date" 
                    id="adoptionDate" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-1 font-futura">Deine Geschichte</label>
                <textarea 
                  id="story" 
                  rows={6} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Erzähle uns, wie dein Hund dein Leben bereichert hat..."
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1 font-futura">Fotos hochladen</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input type="file" multiple className="hidden" id="photo-upload" />
                  <label htmlFor="photo-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-10 h-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p className="text-sm text-gray-500 font-futura">Klicke hier, um Fotos hochzuladen</p>
                      <p className="text-xs text-gray-400 mt-1 font-futura">JPG, PNG oder WEBP, max. 5MB</p>
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <input 
                  type="checkbox" 
                  id="permission" 
                  className="mt-1 mr-2"
                />
                <label htmlFor="permission" className="text-gray-600 text-sm font-futura">
                  Ich erlaube FAM for Dogs e.V., meine Geschichte und Fotos auf der Website und in sozialen Medien zu teilen.
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium font-futura"
              >
                Geschichte einreichen
              </button>
            </form>
          </div>
          
          {/* CTA Section */}
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6 font-glorious">Schreibe deine eigene Erfolgsgeschichte</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/80 font-futura">
              Möchtest du auch eine Erfolgsgeschichte mit einem unserer Hunde erleben? 
              Schau dir unsere verfügbaren Hunde an und beginne dein eigenes Abenteuer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors font-medium font-futura"
              >
                Verfügbare Hunde ansehen
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link 
                to="/adoption-process" 
                className="inline-flex items-center px-8 py-3 bg-transparent text-white border border-white rounded-full hover:bg-white/10 transition-colors font-medium font-futura"
              >
                Adoptionsprozess
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

export default SuccessStories;
