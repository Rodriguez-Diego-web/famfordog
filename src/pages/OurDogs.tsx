import { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, PawPrint, Home, ChevronDown, Download, Phone, X } from 'lucide-react';
import SEO from '@/components/SEO';
import DogCard from '@/components/DogCard';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const OurDogs = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('sponsorships');
  const navigate = useNavigate();
  const [showPatronageModal, setShowPatronageModal] = useState(false);
  
  // Verwende den zentralen ScrollToTop-Hook
  useScrollToTop();
  
  // Öffne das Modal statt das PDF
  const openPatronageForm = useCallback(() => {
    setShowPatronageModal(true);
    // Verhindere das Scrollen im Hintergrund
    document.body.style.overflow = 'hidden';
  }, []);
  
  // Schließe das Modal
  const closePatronageModal = useCallback(() => {
    setShowPatronageModal(false);
    // Erlaube Scrollen wieder
    document.body.style.overflow = 'auto';
  }, []);
  
  // Refs für die Scroll-Animation
  const sponsorshipsRef = useRef(null);

  // Entferne den redundanten useEffect für window.scrollTo
  useEffect(() => {
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [location]);

  const scrollToSection = useCallback((section) => {
    setActiveSection(section);
    if (section === 'sponsorships') {
      sponsorshipsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Placeholder data for sponsorship dogs
  const sponsorshipDogs = [
    {
      id: 16,
      name: 'Opa Rambo',
      age: '17 Jahr',
      breed: 'Mischling',
      description: 'Er hatte mal eine Familie. Dann wurde er alt – und inkontinent. Er musste gehen. Seitdem lag er auf dem Steinboden, direkt an der Straße vor dem Tor seines früheren Zuhauses. Kein Blick. Kein Wort. Kein Herz mehr für ihn. Am Anfang gab es noch Futter. Dann… nichts mehr. Nur Regenwasser, das er vom Boden leckte. Wir konnten nicht mehr zusehen und haben ihn kurzerhand dort weggeholt. Wir brachten ihn in die Klinik, er bekam Medikamente und Infusionen. Die Einschätzung der Ärztin: schwer dehydriert und unterernährt. Jetzt ist er im Shelter. Er bekommt Futter. Wasser. Liebe. Er darf in seinem letzten Lebensabschnitt noch einmal erfahren, was es bedeutet, geliebt zu werden.',
      image: '/rambo/rambo.jpeg',
      additionalImages: [
        '/rambo/rambo.jpeg'
      ],
      needs: 'Zuneigung und Unterstützung in ihrer weiteren Entwicklung'
    },
    {
      id: 1,
      name: 'Anton',
      age: '7 Monate',
      breed: 'Mischling',
      description: 'Anton wurde von Mieke im November 2024 während einer Fütterungsrunde mit Rita und Riani entdeckt. Er lebte mit seiner Mutter Ichi und seinen Geschwistern Albert und Ocha bei einer Familie, die sich leider nicht mehr um sie kümmern konnte. Nachdem Anton kurzzeitig von einer Familie adoptiert wurde, kam er schließlich in Omasukulo an. Sein Bruder Albert ist leider im Januar 2025 verstorben. Anton lebt nun mit vielen anderen Hunden bei Dhany.',
      image: '/OneDrive_15_2.4.2025/Anton/IMG_2165.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Anton/IMG_2160.jpeg',
        '/OneDrive_15_2.4.2025/Anton/IMG_2163.jpeg',
        '/OneDrive_15_2.4.2025/Anton/IMG_2164.jpeg',
        '/OneDrive_15_2.4.2025/Anton/206bd633-1718-420a-b436-1eb69fd57df6.jpeg',
        '/OneDrive_15_2.4.2025/Anton/2ce362ec-2812-4f43-a610-da132ea83635.jpeg',
        '/OneDrive_15_2.4.2025/Anton/5a8148d5-6d20-4045-a8d4-55143325eb86.jpeg',
        '/OneDrive_15_2.4.2025/Anton/5de66200-a580-4197-bf63-9b33ac1b3c9f.jpeg',
        '/OneDrive_15_2.4.2025/Anton/89c588fc-69ba-45e6-af9d-c3b67a9a9d68.jpeg',
        '/OneDrive_15_2.4.2025/Anton/91be7c70-4f9e-4a12-a621-67cfae401990.jpeg',
        '/OneDrive_15_2.4.2025/Anton/9f89e1de-faef-481f-8a4b-8f9b2e18519b.jpeg',
        '/OneDrive_15_2.4.2025/Anton/a5677b34-5dc6-4588-bd83-4038eba6644a.jpeg',
        '/OneDrive_15_2.4.2025/Anton/b6823eb3-9f06-407f-962b-f85d2ba0bb14.jpeg',
        '/OneDrive_15_2.4.2025/Anton/c90a5ffc-78f8-40c6-855b-9da557bd3af9.jpeg',
        '/OneDrive_15_2.4.2025/Anton/f41f16f7-0490-4514-8c25-6d3d28af8225.jpeg'
      ],
      needs: 'Liebe, Sicherheit und ein stabiles Zuhause'
    },
    {
      id: 2,
      name: 'Berta',
      age: '~10 Jahre',
      breed: 'Mischling',
      description: 'Berta wurde mit zusammengebundenen Beinen ausgesetzt. Der Mann, der sie im März 2024 fand und meldete, befreite sie – doch aus Angst rannte sie davon. Erst mit viel Geduld konnten Dhany und Vito ihr Vertrauen gewinnen und sie sichern. Sie leidet bis heute an Hautproblemen, deren Zustand schwankt. Vito hat sich schnell in sie verliebt und seitdem lebt sie im großen Rudel bei Dhany und Vito.',
      image: '/OneDrive_15_2.4.2025/Berta/IMG_2393.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Berta/IMG_2390.jpeg',
        '/OneDrive_15_2.4.2025/Berta/IMG_2391.jpeg',
        '/OneDrive_15_2.4.2025/Berta/IMG_2392.jpeg',
        '/OneDrive_15_2.4.2025/Berta/IMG_2205.jpeg',
        '/OneDrive_15_2.4.2025/Berta/24ec7cf4-b138-43b1-92bd-231716fbbb13.jpeg',
        '/OneDrive_15_2.4.2025/Berta/3b17f302-96e0-40eb-b3a1-fa0c0df9a124.jpeg',
        '/OneDrive_15_2.4.2025/Berta/442175ea-bcc8-46bf-9c2f-a512d52b10db.jpeg',
        '/OneDrive_15_2.4.2025/Berta/62c8e12e-1991-4e43-84c6-a532c5d840f9.jpeg',
        '/OneDrive_15_2.4.2025/Berta/7ae57c84-a4f4-472e-9ba8-52a1c1e41122.jpeg',
        '/OneDrive_15_2.4.2025/Berta/95028639-e804-422d-84aa-1a9e38373be6.jpeg',
        '/OneDrive_15_2.4.2025/Berta/d72dcfcc-b638-43ed-9ae3-d34988649fe2.jpeg',
        '/OneDrive_15_2.4.2025/Berta/e7a9b2c5-b555-43f0-b9e6-43bba81ef806.jpeg',
        '/OneDrive_15_2.4.2025/Berta/f8c6781b-a3e5-455c-84ff-290dfff72d60.jpeg'
      ],
      videoLinks: [
        '/OneDrive_15_2.4.2025/Berta/VIDEO-2024-05-01-10-52-59.mp4',
        '/OneDrive_15_2.4.2025/Berta/VIDEO-2024-05-01-10-53-11.mp4',
        '/OneDrive_15_2.4.2025/Berta/a947cee3-5c37-4c22-ae98-eb4fe984e24c.mp4'
      ],
      needs: 'Medizinische Versorgung und liebevolle Betreuung'
    },
    {
      id: 3,
      name: 'Boogey',
      age: '~5 Jahre',
      breed: 'Mischling',
      description: 'Boogey lebte früher an einem Fluss mit ihren 4 Wochen alten Welpen. Sie wurde so schwer verletzt, dass sie ihre Hinterbeine nicht mehr nutzen kann und panische Angst vor Menschen hat. Nach 4 Monaten im Abwasserkanal wurde sie gerettet und in die Klinik gebracht. Die Tierärzte empfahlen eine Operation, zu der es jedoch nicht kam. Nach monatelangem Leben im Käfig ist sie jetzt glücklicherweise draußen und Rey arbeitet daran, ihr Vertrauen zu Menschen zurückzugewinnen.',
      image: '/OneDrive_15_2.4.2025/Boogey/IMG_1523.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Boogey/f63880f0-357f-487b-9042-1ab7504a4ad1.jpeg'
      ],
      needs: 'Spezielle Pflege für ihre Behinderung und behutsamer Umgang',
      videoLinks: [
        '/OneDrive_15_2.4.2025/Boogey/boogey_video.mp4',
        '/OneDrive_15_2.4.2025/Boogey/boogey_video2.mp4'
      ]
    },
    {
      id: 4,
      name: 'Fura',
      age: '~3 Jahre',
      breed: 'Mischling',
      description: 'Fura wurde im April 2024 humpelnd am Strand gefunden. Sein rechtes Vorderbein war schwer verletzt. Es wurde mit einer Machete oder einer ähnlichen Waffe aufgeschlitzt. Er konnte gesichert und in die Klinik gebracht werden, wo sein Bein behandelt wurde. Doch die Verletzung hinterließ bleibende Schäden, die das Leben im großen Rudel schwer möglich machen. Seitdem lebt Fura in einem Zwinger im Omasukulo Shelter – allein. Um das zu ändern, haben wir einen kleinen eingezäunten Garten gebaut, in den er in kurzer Zeit gemeinsam mit Mr. Monkey umziehen wird.',
      image: '/OneDrive_15_2.4.2025/Fura/ad394bb2-1125-41b7-b9fc-da237be59c8a.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Fura/1bbc7d68-30fc-4fd7-af8f-804a57d7dc8e.jpeg'
      ],
      needs: 'Spezielle Pflege für seine Beinverletzung und ein ruhiges Umfeld'
    },
    {
      id: 5,
      name: 'Juki',
      age: '5 Jahre',
      breed: 'Mischling',
      description: 'Juki, der Sohn von Michiko. Michiko lebt auf der Straße und leidet schon lange an Husten. Eines Tages, während Rianis Fütterungsrunde, war Michiko nicht mehr alleine. Sie hatte einen Welpen bekommen: Juki. Juki hatte eine entzündete Rute, die zum Glück nicht amputiert werden musste, da der entzündete Teil absorbiert wurde und von alleine abfiel. Zunächst wollten wir Juki bei Michiko lassen, aber sein Gesundheitszustand war nicht stabil genug, und die Wetterbedingungen vor Ort waren so schlecht, dass Riani ihn schließlich ins Shelter zu Rey und Dhany bringen musste. Juki ist ein besonders humorvoller und außergewöhnlicher Hund, der von Rey geliebt und umsorgt wird. Leider hat er akute Probleme mit seinen Augen, die derzeit mit Medikamenten behandelt werden. Seine Schleistung ist leicht eingeschränkt, er kommt allerdings wunderbar klar.',
      image: '/OneDrive_15_2.4.2025/Juki/WhatsApp Image 2025-03-30 at 07.36.12.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Juki/WhatsApp Image 2025-03-30 at 07.36.07 (1).jpeg'
      ],
      needs: 'Medizinische Versorgung für seine Augen und liebevolle Betreuung',
      videoLinks: [
        '/OneDrive_15_2.4.2025/Juki/juki_video.mp4'
      ]
    },
    {
      id: 6,
      name: 'Lea',
      age: '~4 Jahre',
      breed: 'Corgi Mix',
      description: 'Im November 2023 wurde Lea völlig geschwächt auf einem Balkon gefunden. Die Bewohner verständigten uns, und Dhany und Vito sicherten sie und nahmen sie bei sich auf. Sie war in einem schlechten Zustand und hatte Nierenprobleme, weshalb sie damals nicht kastriert wurde. Vito schloss sie sofort ins Herz und entschied, sie zu behalten. Bevor sie später sterilisiert wurde, bekam sie einmal Welpen – der Vater war ein Nachbarshund. Die Kleinen wurden nach den englischen Wochentagen benannt. Der kleine Tuesday ist leider im Februar 2025 an einer unbekannten Infektion verstorben. Lea lebt mit den Anderen bei Dhany und Vito und wird dort liebevoll versorgt.',
      image: '/OneDrive_15_2.4.2025/Lea/IMG_2387.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Lea/IMG_2397.jpeg',
        '/OneDrive_15_2.4.2025/Lea/IMG_2398.jpeg',
        '/OneDrive_15_2.4.2025/Lea/IMG_2399.jpeg',
        '/OneDrive_15_2.4.2025/Lea/IMG_2400.jpeg',
        '/OneDrive_15_2.4.2025/Lea/IMG_2401.jpeg'
      ],
      needs: 'Liebevolle Pflege und medizinische Versorgung für ihre Nierenprobleme'
    },
    {
      id: 7,
      name: 'Malcolm',
      age: '6 Jahre',
      breed: 'Mischling',
      description: 'Malcolm ist ein treuer Begleiter mit einem sanften Wesen. Er ist geduldig und ruhig, ideal für eine ruhige Familie.',
      image: '/OneDrive_15_2.4.2025/Malcolm/759b2310-e6a4-4e0a-a905-d36fc3a5c61b.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Malcolm/14a3ecb9-a1a5-4e41-804c-5af9f7c5c205.jpeg',
        '/OneDrive_15_2.4.2025/Malcolm/552e4d8e-e907-4485-9e41-421178770c9b.jpeg',
        '/OneDrive_15_2.4.2025/Malcolm/b3bfa397-d514-40e3-bfb8-84bf795e7fa4.jpeg',
        '/OneDrive_15_2.4.2025/Malcolm/c57323c8-ec87-47f4-a633-0e32e2c5115f.jpeg'
      ],
      needs: 'Regelmäßige Spaziergänge und Ruhe'
    },
    {
      id: 8,
      name: 'Mr. Monkey',
      age: '2 Jahre',
      breed: 'Mischling',
      description: 'Mr. Monkey ist verspielt und voller Energie. Er liebt es, draußen zu sein und neue Dinge zu entdecken.',
      image: '/OneDrive_15_2.4.2025/Mr. Monkey/c78e20ba-3ea2-4526-bace-9924026553f2.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Mr. Monkey/6d5fec90-dd27-4e67-a153-a12ef96552bc.jpeg',
        '/OneDrive_15_2.4.2025/Mr. Monkey/fa6c797a-28aa-4926-81d4-2def24896541.jpeg'
      ],
      needs: 'Viel Beschäftigung und Auslauf'
    },
    {
      id: 9,
      name: 'Nugget',
      age: '~1 Jahr',
      breed: 'Mischling',
      description: 'Nugget wurde einsam und verlassen von Touristen am Strand gefunden. Es gab keine Mutter, keine Geschwister und leider auch keine Locals, die für ihn sorgen konnten. Der kleine Welpe war schätzungsweise nur vier Wochen alt, zu schwach und zu klein, um sich selbst zu versorgen. Die ausgewachsenen Straßenhunde griffen ihn an, was seine Überlebenschancen stark gefährdete. Eine hilfsbereite Touristin nahm Nugget mit zu sich in die WG, wandte sich dann aber an uns. Nugget wurde von Mieke abgeholt und zu Dhany ins Shelter gebracht, wo er liebevoll versorgt wurde. Er hat sich prächtig entwickelt und ist mittlerweile ein wunderschöner Junghund mit einem äußerst freundlichen Wesen. Leider leidet er an neurologischen Ausfällen, Calcium-Mangel und Blutarmut und befindet sich in ärztlicher Behandlung.',
      image: '/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 07.36.06.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 07.36.02.jpeg',
        '/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 07.41.10 (1).jpeg',
        '/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 07.41.10.jpeg',
        '/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 07.41.15.jpeg',
        '/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 07.44.26.jpeg',
        '/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 10.35.32 (1).jpeg',
        '/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 10.35.32.jpeg'
      ],
      needs: 'Medizinische Behandlung für seine neurologischen Probleme und Blutarmut'
    },
    {
      id: 10,
      name: 'Ocha',
      age: '7 Monate',
      breed: 'Mischling',
      description: 'Ocha wurde von Mieke im November 2024 während einer Fütterungsrunde mit Rita und Riani entdeckt. Sie lebte mit ihrer Mutter Ichi und ihren Brüdern Anton und Albert bei einer Familie, doch Ichi war in einem schlechten Zustand. Die Familie willigte letztendlich ein, dass Dhany sich um Ichi kümmert. Sie nahm auch Ocha mit. Anton und Albert wurden von Freunden der Familie adoptiert, wollten sie aber kurz darauf wieder los werden, weshalb auch sie in Omasukulo aufgenommen wurden. Ichi hat es leider aufgrund ihres schlechten Zustandes nicht geschafft und Albert ist im Januar 2025 verstorben, weil er etwas Giftiges aufgenommen hat. Ocha lebt nun mit vielen anderen Hunden bei Rey.',
      image: '/OneDrive_15_2.4.2025/Ocha/IMG_2185.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Ocha/IMG_2177.jpeg',
        '/OneDrive_15_2.4.2025/Ocha/IMG_2178.jpeg',
        '/OneDrive_15_2.4.2025/Ocha/IMG_2179.jpeg',
        '/OneDrive_15_2.4.2025/Ocha/IMG_2184.jpeg',
        '/OneDrive_15_2.4.2025/Ocha/IMG_2186.jpeg',
        '/OneDrive_15_2.4.2025/Ocha/IMG_2188.jpeg'
      ],
      needs: 'Liebe und Sicherheit nach dem Verlust ihrer Familie'
    },
    {
      id: 11,
      name: 'Rijonde',
      age: '1 Jahr',
      breed: 'Mischling',
      description: 'Rijonde ist ein junger, neugieriger Hund, der noch viel lernen möchte. Er ist intelligent und aufmerksam.',
      image: '/OneDrive_15_2.4.2025/Rijonde/fc5a9725-f455-4ffa-8861-7ea24a596d6e.jpeg',
      needs: 'Mentale Stimulation und Training'
    },
    {
      id: 12,
      name: 'Rijondi',
      age: '1 Jahr',
      breed: 'Mischling',
      description: 'Rijondi ist verspielt und energiegeladen. Er braucht viel Bewegung und Beschäftigung.',
      image: '/Rijondi/IMG_1637.jpeg',
      needs: 'Aktive Familie'
    },
    {
      id: 13,
      name: 'Roket',
      age: '2 Jahre',
      breed: 'Mischling',
      description: 'Roket ist ein schneller und aktiver Hund, der gerne rennt und spielt. Er hat viel Energie und Ausdauer.',
      image: '/OneDrive_15_2.4.2025/Roket/09492c29-d35f-4885-861a-f1eeb4b16e49.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Roket/6a21b09e-a296-48e9-b1ab-e36b0f20d5cf.jpeg'
      ],
      needs: 'Viel Bewegung und Auslauf'
    },
    {
      id: 14,
      name: 'Wednesday',
      age: '4 Jahre',
      breed: 'Mischling',
      description: 'Wednesday ist eine besondere Hündin mit einem einzigartigen Charakter. Sie ist loyal und beschützend.',
      image: '/OneDrive_15_2.4.2025/Wednesday/IMG_2215.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Wednesday/IMG_2217.jpeg',
        '/OneDrive_15_2.4.2025/Wednesday/IMG_2218.jpeg',
        '/OneDrive_15_2.4.2025/Wednesday/IMG_2219.jpeg'
      ],
      needs: 'Verständnis und Geduld'
    },
    {
      id: 15,
      name: 'Zeta',
      age: '~1 Jahr',
      breed: 'Mischling',
      description: 'Zeta wurde vor Neujahr 25 während Rianis Fütterungsrunde am Straßenrand gefunden – ausgesetzt mit vielen anderen Welpen, ohne ihre Mutter. Sie war noch sehr jung und hätte alleine keine Überlebenschance gehabt. Seitdem lebt sie bei Dhany, wie auch die anderen 10 Welpen im gleichen Alter, die alle Namen aus dem griechischen Alphabet haben. (Die anderen, restlichen 3 der Rettung leben bei Rey.)',
      image: '/OneDrive_15_2.4.2025/Zeta/IMG_2213.jpeg',
      additionalImages: [
        '/OneDrive_15_2.4.2025/Zeta/IMG_2214.jpeg'
      ],
      needs: 'Zuneigung und Unterstützung in ihrer weiteren Entwicklung'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Unsere Hunde und Patenschaften"
        description="Übernimm eine Patenschaft, um einem Straßenhund zu helfen. Hier findest du Hunde, die Unterstützung brauchen."
        keywords="Hund adoptieren, Straßenhund, Hundepatenschaft, Straßenhunde, Tierschutzhund"
      />
      <Navbar />
      
      {/* Patenschafts-Modal */}
      {showPatronageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-2xl font-bold text-primary font-futura">Patenschaft übernehmen</h2>
              <button 
                onClick={closePatronageModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-2 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 70px)' }}>
              <iframe 
                src="https://secure.fundraisingbox.com/app/payment?hash=rsg5g3e1y9kkxqoc&t=425786862dfc0c7d09f672538bbd229f&fb_id=25409"
                title="Fundraising Box Patenschaftsformular"
                width="100%"
                height="2100"
                className="md:h-[1800px]" 
                frameBorder="0"
                allowTransparency={true}
                allow="payment"
                style={{ display: 'block', margin: '0 auto' }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          
          {/* Sponsorships Section */}
          <section ref={sponsorshipsRef} className="mb-20 py-8 bg-primary/10 rounded-2xl px-6">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-glorious">Patenschaften</h2>
              <p className="text-gray-700 mb-4 font-futura text-sm sm:text-base">
                Mit einer Patenschaft kannst du einen bestimmten Hund unterstützen, ohne ihn zu adoptieren. 
                Deine regelmäßige Spende hilft uns, die Kosten für Futter, medizinische Versorgung und Unterbringung zu decken.
              </p>
              <p className="text-gray-700 mb-8 font-futura text-sm sm:text-base">
                Als Pate bekommst du regelmäßige Updates über deinen Schützling und kannst ihn jederzeit besuchen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sponsorshipDogs.map((dog) => (
                  <DogCard
                    key={dog.id}
                    id={dog.id}
                    name={dog.name}
                    age={dog.age}
                    breed={dog.breed}
                    description={dog.description}
                    image={dog.image}
                    needs={dog.needs}
                    onPatronageClick={openPatronageForm}
                  />
                ))}
              </div>
            </div>
            
            {/* Adoptions Section */}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurDogs;
