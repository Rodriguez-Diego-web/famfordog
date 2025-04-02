import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, ArrowLeft, Calendar, MapPin, PawPrint, MessageCircle, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

// Typ-Definition für einen Hund
interface Dog {
  id: number;
  name: string;
  age: string;
  breed: string;
  description: string;
  image: string;
  additionalImages?: string[];
  needs: string;
  location?: string;
  sex?: string;
  size?: string;
  personality?: string[];
  history?: string;
  medicalInfo?: string;
  suitableFor?: string[];
  notSuitableFor?: string[];
  videoLinks?: string[];
}

const DogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [dog, setDog] = useState<Dog | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<string[]>([]);

  // Funktion zum Öffnen des Patenschaftsantrags
  const openPatronageForm = () => {
    navigate('/join-family#patronage');
  };

  // Funktion zum Öffnen des Kontaktbereichs
  const openContactSection = () => {
    navigate('/contact');
  };

  // Funktion zum Öffnen des Kontaktabschnitts
  const handleMessageClick = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hook für das Abrufen der Hundedaten
  useEffect(() => {
    const loadDogData = () => {
      setLoading(true);
      
      // Aktualisierte Hundedaten aus OurDogs.tsx
      setTimeout(() => {
        const dogsData: Dog[] = [
          {
            id: 1,
            name: "Anton",
            age: "7 Monate",
            breed: "Mischling",
            description: "Anton wurde von Mieke im November 2024 während einer Fütterungsrunde mit Rita und Riani entdeckt. Er lebte mit seiner Mutter Ichi und seinen Geschwistern Albert und Ocha bei einer Familie, die sich leider nicht mehr um sie kümmern konnte. Nachdem Anton kurzzeitig von einer Familie adoptiert wurde, kam er schließlich in Omasukulo an. Sein Bruder Albert ist leider im Januar 2025 verstorben. Anton lebt nun mit vielen anderen Hunden bei Dhany.",
            image: "/OneDrive_15_2.4.2025/Anton/IMG_2165.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Anton/IMG_2160.jpeg",
              "/OneDrive_15_2.4.2025/Anton/IMG_2163.jpeg",
              "/OneDrive_15_2.4.2025/Anton/IMG_2164.jpeg",
              "/OneDrive_15_2.4.2025/Anton/206bd633-1718-420a-b436-1eb69fd57df6.jpeg",
              "/OneDrive_15_2.4.2025/Anton/2ce362ec-2812-4f43-a610-da132ea83635.jpeg",
              "/OneDrive_15_2.4.2025/Anton/5a8148d5-6d20-4045-a8d4-55143325eb86.jpeg",
              "/OneDrive_15_2.4.2025/Anton/5de66200-a580-4197-bf63-9b33ac1b3c9f.jpeg",
              "/OneDrive_15_2.4.2025/Anton/89c588fc-69ba-45e6-af9d-c3b67a9a9d68.jpeg",
              "/OneDrive_15_2.4.2025/Anton/91be7c70-4f9e-4a12-a621-67cfae401990.jpeg",
              "/OneDrive_15_2.4.2025/Anton/9f89e1de-faef-481f-8a4b-8f9b2e18519b.jpeg",
              "/OneDrive_15_2.4.2025/Anton/a5677b34-5dc6-4588-bd83-4038eba6644a.jpeg",
              "/OneDrive_15_2.4.2025/Anton/b6823eb3-9f06-407f-962b-f85d2ba0bb14.jpeg",
              "/OneDrive_15_2.4.2025/Anton/c90a5ffc-78f8-40c6-855b-9da557bd3af9.jpeg",
              "/OneDrive_15_2.4.2025/Anton/f41f16f7-0490-4514-8c25-6d3d28af8225.jpeg"
            ],
            needs: "Liebe, Sicherheit und ein stabiles Zuhause",
            location: "Shelter Lombok",
            sex: "Männlich",
            size: "Mittelgroß",
            personality: ["Freundlich", "Verspielt", "Sozial"],
            history: "Anton wurde von Mieke im November 2024 während einer Fütterungsrunde mit Rita und Riani entdeckt. Er lebte mit seiner Mutter Ichi und seinen Geschwistern Albert und Ocha bei einer Familie. Die Familie willigte letztendlich ein, dass Dhany sich um sie kümmert.",
            medicalInfo: "Vollständig geimpft, gesund.",
            suitableFor: ["Familien mit anderen Hunden", "Menschen mit Geduld und Liebe"]
          },
          {
            id: 2,
            name: "Berta",
            age: "~10 Jahre",
            breed: "Mischling",
            description: "Berta wurde mit zusammengebundenen Beinen ausgesetzt. Der Mann, der sie im März 2024 fand und meldete, befreite sie – doch aus Angst rannte sie davon. Erst mit viel Geduld konnten Dhany und Vito ihr Vertrauen gewinnen und sie sichern. Sie leidet bis heute an Hautproblemen, deren Zustand schwankt. Vito hat sich schnell in sie verliebt und seitdem lebt sie im großen Rudel bei Dhany und Vito.",
            image: "/OneDrive_15_2.4.2025/Berta/IMG_2393.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Berta/IMG_2393.jpeg",
              "/OneDrive_15_2.4.2025/Berta/WhatsApp Image 2025-03-30 at 07.36.06.jpeg"
            ],
            needs: "Medizinische Versorgung und liebevolle Betreuung",
            location: "Shelter Lombok",
            sex: "Weiblich",
            size: "Mittelgroß",
            personality: ["Vorsichtig", "Anhänglich", "Ruhig"],
            history: "Berta wurde mit zusammengebundenen Beinen ausgesetzt und im März 2024 gefunden. Aus Angst rannte sie zunächst davon, konnte aber schließlich mit viel Geduld gesichert werden.",
            medicalInfo: "Leidet an chronischen Hautproblemen, die regelmäßige Behandlung erfordern.",
            suitableFor: ["Ruhige Haushalte", "Geduldige Menschen"]
          },
          {
            id: 3,
            name: "Boogey",
            age: "1,5 Jahre",
            breed: "Mischling",
            description: "Boogey ist ein verspielter, junger Hund mit viel Energie. Er liebt es, zu laufen und zu spielen und ist immer für ein Abenteuer zu haben. Boogey ist Azubi und noch in der Ausbildung.",
            image: "/OneDrive_15_2.4.2025/Boogey/IMG_1523.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Boogey/f63880f0-357f-487b-9042-1ab7504a4ad1.jpeg"
            ],
            videoLinks: [
              "/OneDrive_15_2.4.2025/Boogey/215b5f2a-19ad-4398-9d9e-5eee39982359.mp4",
              "/OneDrive_15_2.4.2025/Boogey/4e0504d0-3bfe-4280-8d94-eea4c3afbf28.mp4",
              "/OneDrive_15_2.4.2025/Boogey/591efb40-3833-4cef-aa6c-dc32a055b2c5.mp4"
            ],
            needs: "Aktives Zuhause mit viel Beschäftigung",
            location: "Shelter Lombok",
            sex: "Männlich",
            size: "Mittelgroß",
            personality: ["Energiegeladen", "Verspielt", "Neugierig"],
            history: "Boogey wurde von Mieke als Welpe gefunden und ins Shelter gebracht.",
            medicalInfo: "Vollständig geimpft, gesund."
          },
          {
            id: 4,
            name: "Fura",
            age: "~3 Jahre",
            breed: "Mischling",
            description: "Fura wurde im April 2024 humpelnd am Strand gefunden. Sein rechtes Vorderbein war schwer verletzt. Es wurde mit einer Machete oder einer ähnlichen Waffe aufgeschlitzt. Er konnte gesichert und in die Klinik gebracht werden, wo sein Bein behandelt wurde. Doch die Verletzung hinterließ bleibende Schäden, die das Leben im großen Rudel schwer möglich machen. Seitdem lebt Fura in einem Zwinger im Omasukulo Shelter – allein. Um das zu ändern, haben wir einen kleinen eingezäunten Garten gebaut, in den er in kurzer Zeit gemeinsam mit Mr. Monkey umziehen wird.",
            image: "/OneDrive_15_2.4.2025/Fura/ad394bb2-1125-41b7-b9fc-da237be59c8a.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Fura/ad394bb2-1125-41b7-b9fc-da237be59c8a.jpeg",
              "/OneDrive_15_2.4.2025/Fura/WhatsApp Image 2025-03-30 at 07.36.06.jpeg"
            ],
            needs: "Spezielle Pflege für seine Beinverletzung und ein ruhiges Umfeld",
            location: "Shelter Lombok",
            sex: "Männlich",
            size: "Mittelgroß",
            personality: ["Vorsichtig", "Sanft", "Anpassungsfähig"],
            history: "Fura wurde im April 2024 mit einer schweren Verletzung am rechten Vorderbein gefunden, vermutlich durch eine Machete verursacht.",
            medicalInfo: "Bleibende Schäden am rechten Vorderbein, die spezielle Betreuung erfordern.",
            suitableFor: ["Ruhige Umgebungen", "Geduldige Menschen"],
            notSuitableFor: ["Sehr aktive Haushalte", "Haushalte mit vielen anderen Tieren"]
          },
          {
            id: 5,
            name: "Juki",
            age: "5 Jahre",
            breed: "Mischling",
            description: "Juki, der Sohn von Michiko. Michiko lebt auf der Straße und leidet schon lange an Husten. Eines Tages, während Rianis Fütterungsrunde, war Michiko nicht mehr alleine. Sie hatte einen Welpen bekommen: Juki. Juki hatte eine entzündete Rute, die zum Glück nicht amputiert werden musste, da der entzündete Teil absorbiert wurde und von alleine abfiel. Zunächst wollten wir Juki bei Michiko lassen, aber sein Gesundheitszustand war nicht stabil genug, und die Wetterbedingungen vor Ort waren so schlecht, dass Riani ihn schließlich ins Shelter zu Rey und Dhany bringen musste. Juki ist ein besonders humorvoller und außergewöhnlicher Hund, der von Rey geliebt und umsorgt wird. Leider hat er akute Probleme mit seinen Augen, die derzeit mit Medikamenten behandelt werden. Seine Schleistung ist leicht eingeschränkt, er kommt allerdings wunderbar klar.",
            image: "/OneDrive_15_2.4.2025/Juki/WhatsApp Image 2025-03-30 at 07.36.12.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Juki/WhatsApp Image 2025-03-30 at 07.36.07 (1).jpeg"
            ],
            needs: "Medizinische Versorgung für seine Augen und liebevolle Betreuung",
            location: "Shelter Lombok",
            sex: "Männlich",
            size: "Mittelgroß",
            personality: ["Humorvoll", "Außergewöhnlich", "Freundlich"],
            history: "Juki ist der Sohn von Michiko, einer Straßenhündin, die an Husten leidet. Ursprünglich sollte er bei seiner Mutter bleiben, musste aber aufgrund seines Gesundheitszustands ins Shelter gebracht werden.",
            medicalInfo: "Akute Augenprobleme, die mit Medikamenten behandelt werden. Leicht eingeschränkte Schleistung.",
            suitableFor: ["Menschen mit Erfahrung mit Hunden mit besonderen Bedürfnissen"],
            videoLinks: [
              "/OneDrive_15_2.4.2025/Juki/juki_video.mp4"
            ]
          },
          {
            id: 6,
            name: "Lea",
            age: "~4 Jahre",
            breed: "Corgi Mix",
            description: "Im November 2023 wurde Lea völlig geschwächt auf einem Balkon gefunden. Die Bewohner verständigten uns, und Dhany und Vito sicherten sie und nahmen sie bei sich auf. Sie war in einem schlechten Zustand und hatte Nierenprobleme, weshalb sie damals nicht kastriert wurde. Vito schloss sie sofort ins Herz und entschied, sie zu behalten. Bevor sie später sterilisiert wurde, bekam sie einmal Welpen – der Vater war ein Nachbarshund. Die Kleinen wurden nach den englischen Wochentagen benannt. Der kleine Tuesday ist leider im Februar 2025 an einer unbekannten Infektion verstorben. Lea lebt mit den Anderen bei Dhany und Vito und wird dort liebevoll versorgt.",
            image: "/OneDrive_15_2.4.2025/Lea/IMG_2387.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Lea/IMG_2397.jpeg",
              "/OneDrive_15_2.4.2025/Lea/IMG_2398.jpeg",
              "/OneDrive_15_2.4.2025/Lea/IMG_2399.jpeg",
              "/OneDrive_15_2.4.2025/Lea/IMG_2400.jpeg",
              "/OneDrive_15_2.4.2025/Lea/IMG_2401.jpeg"
            ],
            needs: "Liebevolle Pflege und medizinische Versorgung für ihre Nierenprobleme",
            location: "Shelter Lombok",
            sex: "Weiblich",
            size: "Klein",
            personality: ["Sanft", "Liebevoll", "Anhänglich"],
            history: "Im November 2023 wurde Lea völlig geschwächt auf einem Balkon gefunden. Sie hatte Welpen, die nach englischen Wochentagen benannt wurden.",
            medicalInfo: "Hat Nierenprobleme, die regelmäßige Kontrolle erfordern.",
            suitableFor: ["Ruhige Haushalte", "Menschen mit Erfahrung mit Nierenerkrankungen bei Hunden"]
          },
          {
            id: 7,
            name: "Malcolm",
            age: "6 Jahre",
            breed: "Mischling",
            description: "Malcolm ist ein treuer Begleiter mit einem sanften Wesen. Er ist geduldig und ruhig, ideal für eine ruhige Familie.",
            image: "/OneDrive_15_2.4.2025/Malcolm/759b2310-e6a4-4e0a-a905-d36fc3a5c61b.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Malcolm/14a3ecb9-a1a5-4e41-804c-5af9f7c5c205.jpeg",
              "/OneDrive_15_2.4.2025/Malcolm/552e4d8e-e907-4485-9e41-421178770c9b.jpeg",
              "/OneDrive_15_2.4.2025/Malcolm/b3bfa397-d514-40e3-bfb8-84bf795e7fa4.jpeg",
              "/OneDrive_15_2.4.2025/Malcolm/c57323c8-ec87-47f4-a633-0e32e2c5115f.jpeg"
            ],
            needs: "Regelmäßige Spaziergänge und Ruhe",
            location: "Shelter Lombok",
            sex: "Männlich",
            size: "Groß",
            personality: ["Treu", "Sanft", "Ruhig"],
            history: "Malcolm hat eine ruhige Vergangenheit und wurde ins Shelter aufgenommen, wo er auf eine liebevolle Familie wartet.",
            medicalInfo: "Vollständig geimpft, gesund."
          },
          {
            id: 8,
            name: "Mr. Monkey",
            age: "5 Jahre",
            breed: "Mischling",
            description: "Mr. Monkey ist ein verspielter und energiegeladener Hund. Er liebt es, zu spielen und zu toben.",
            image: "/OneDrive_15_2.4.2025/Mr. Monkey/c78e20ba-3ea2-4526-bace-9924026553f2.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Mr. Monkey/6d5fec90-dd27-4e67-a153-a12ef96552bc.jpeg",
              "/OneDrive_15_2.4.2025/Mr. Monkey/fa6c797a-28aa-4926-81d4-2def24896541.jpeg"
            ],
            needs: "Viel Bewegung und Spielzeit",
            location: "Shelter Lombok",
            sex: "Männlich",
            size: "Mittelgroß",
            personality: ["Verspielt", "Energiegeladen", "Sozial"],
            history: "Mr. Monkey erhielt seinen Namen aufgrund seiner verspielten Art und seiner Vorliebe, auf Dinge zu klettern.",
            medicalInfo: "Vollständig geimpft, gesund."
          },
          {
            id: 9,
            name: "Nugget",
            age: "~1 Jahr",
            breed: "Mischling",
            description: "Nugget wurde einsam und verlassen von Touristen am Strand gefunden. Es gab keine Mutter, keine Geschwister und leider auch keine Locals, die für ihn sorgen konnten. Der kleine Welpe war schätzungsweise nur vier Wochen alt, zu schwach und zu klein, um sich selbst zu versorgen. Die ausgewachsenen Straßenhunde griffen ihn an, was seine Überlebenschancen stark gefährdete. Eine hilfsbereite Touristin nahm Nugget mit zu sich in die WG, wandte sich dann aber an uns. Nugget wurde von Mieke abgeholt und zu Dani ins Shelter gebracht, wo er liebevoll versorgt wurde. Er hat sich prächtig entwickelt und ist mittlerweile ein wunderschöner Junghund mit einem äußerst freundlichen Wesen. Leider leidet er an neurologischen Ausfällen, Calcium-Mangel und Blutarmut und befindet sich in ärztlicher Behandlung.",
            image: "/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 07.36.06.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 07.36.02.jpeg",
              "/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 07.41.10 (1).jpeg",
              "/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 07.41.10.jpeg",
              "/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 07.41.15.jpeg",
              "/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 07.44.26.jpeg",
              "/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 10.35.32 (1).jpeg",
              "/OneDrive_15_2.4.2025/Nugget/WhatsApp Image 2025-03-30 at 10.35.32.jpeg"
            ],
            needs: "Medizinische Behandlung für seine neurologischen Probleme und Blutarmut",
            location: "Shelter Lombok",
            sex: "Männlich",
            size: "Mittelgroß",
            personality: ["Freundlich", "Entspannt", "Sozial"],
            history: "Nugget wurde als ca. vier Wochen alter Welpe am Strand gefunden, wo er von Straßenhunden angegriffen wurde. Eine Touristin rettete ihn und brachte ihn zum Shelter.",
            medicalInfo: "Leidet an neurologischen Ausfällen, Calcium-Mangel und Blutarmut. Befindet sich in ärztlicher Behandlung.",
            suitableFor: ["Menschen mit Erfahrung in der Pflege von Hunden mit gesundheitlichen Problemen"]
          },
          {
            id: 10,
            name: "Ocha",
            age: "7 Monate",
            breed: "Mischling",
            description: "Ocha wurde von Mieke im November 2024 während einer Fütterungsrunde mit Rita und Riani entdeckt. Sie lebte mit ihrer Mutter Ichi und ihren Brüdern Anton und Albert bei einer Familie, doch Ichi war in einem schlechten Zustand. Die Familie willigte letztendlich ein, dass Dhany sich um Ichi kümmert. Sie nahm auch Ocha mit. Anton und Albert wurden von Freunden der Familie adoptiert, wollten sie aber kurz darauf wieder los werden, weshalb auch sie in Omasukulo aufgenommen wurden. Ichi hat es leider aufgrund ihres schlechten Zustandes nicht geschafft und Albert ist im Januar 2025 verstorben, weil er etwas Giftiges aufgenommen hat. Ocha lebt nun mit vielen anderen Hunden bei Rey.",
            image: "/OneDrive_15_2.4.2025/Ocha/IMG_2185.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Ocha/IMG_2177.jpeg",
              "/OneDrive_15_2.4.2025/Ocha/IMG_2178.jpeg",
              "/OneDrive_15_2.4.2025/Ocha/IMG_2179.jpeg",
              "/OneDrive_15_2.4.2025/Ocha/IMG_2184.jpeg",
              "/OneDrive_15_2.4.2025/Ocha/IMG_2186.jpeg",
              "/OneDrive_15_2.4.2025/Ocha/IMG_2188.jpeg"
            ],
            needs: "Liebe und Sicherheit nach dem Verlust ihrer Familie",
            location: "Shelter Lombok",
            sex: "Weiblich",
            size: "Klein bis Mittelgroß",
            personality: ["Freundlich", "Anpassungsfähig", "Sozial"],
            history: "Ocha wurde im November 2024 mit ihrer Mutter Ichi und ihren Brüdern Anton und Albert gefunden. Leider hat ihre Mutter es nicht geschafft und ihr Bruder Albert ist im Januar 2025 verstorben.",
            medicalInfo: "Vollständig geimpft, gesund."
          },
          {
            id: 11,
            name: "Rijonde",
            age: "1 Jahr",
            breed: "Mischling",
            description: "Rijonde ist ein junger, neugieriger Hund, der noch viel lernen möchte. Er ist intelligent und aufmerksam.",
            image: "/OneDrive_15_2.4.2025/Rijonde/fc5a9725-f455-4ffa-8861-7ea24a596d6e.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Rijonde/fc5a9725-f455-4ffa-8861-7ea24a596d6e.jpeg"
            ],
            needs: "Mentale Stimulation und Training",
            location: "Shelter Lombok",
            sex: "Männlich",
            size: "Mittelgroß",
            personality: ["Neugierig", "Intelligent", "Aufmerksam"],
            history: "Rijonde wurde als junger Hund im Shelter aufgenommen und hat seitdem viel gelernt.",
            medicalInfo: "Vollständig geimpft, gesund."
          },
          {
            id: 12,
            name: "Rijondi",
            age: "1 Jahr",
            breed: "Mischling",
            description: "Rijondi ist verspielt und energiegeladen. Er braucht viel Bewegung und Beschäftigung.",
            image: "/images/placeholder-dog.svg",
            additionalImages: [
              "/images/placeholder-dog.svg"
            ],
            needs: "Aktive Familie",
            location: "Shelter Lombok",
            sex: "Männlich",
            size: "Mittelgroß",
            personality: ["Verspielt", "Energiegeladen", "Lebhaft"],
            history: "Rijondi wurde als junger Hund im Shelter aufgenommen und hat seitdem viel Energie und Freude gezeigt.",
            medicalInfo: "Vollständig geimpft, gesund.",
            videoLinks: [
              "/OneDrive_15_2.4.2025/Rijondi/VIDEO-2025-02-17-12-44-23.mp4",
              "/OneDrive_15_2.4.2025/Rijondi/VIDEO-2025-02-17-12-44-28.mp4"
            ]
          },
          {
            id: 13,
            name: "Roket",
            age: "2 Jahre",
            breed: "Mischling",
            description: "Roket ist ein schneller und aktiver Hund, der gerne rennt und spielt. Er hat viel Energie und Ausdauer.",
            image: "/OneDrive_15_2.4.2025/Roket/09492c29-d35f-4885-861a-f1eeb4b16e49.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Roket/6a21b09e-a296-48e9-b1ab-e36b0f20d5cf.jpeg"
            ],
            needs: "Viel Bewegung und Auslauf",
            location: "Shelter Lombok",
            sex: "Männlich",
            size: "Mittelgroß",
            personality: ["Schnell", "Aktiv", "Energiegeladen"],
            history: "Roket erhielt seinen Namen aufgrund seiner Geschwindigkeit und Energie.",
            medicalInfo: "Vollständig geimpft, gesund."
          },
          {
            id: 14,
            name: "Wednesday",
            age: "4 Jahre",
            breed: "Mischling",
            description: "Wednesday ist eine besondere Hündin mit einem einzigartigen Charakter. Sie ist loyal und beschützend.",
            image: "/OneDrive_15_2.4.2025/Wednesday/IMG_2215.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Wednesday/IMG_2217.jpeg",
              "/OneDrive_15_2.4.2025/Wednesday/IMG_2218.jpeg",
              "/OneDrive_15_2.4.2025/Wednesday/IMG_2219.jpeg"
            ],
            needs: "Verständnis und Geduld",
            location: "Shelter Lombok",
            sex: "Weiblich",
            size: "Mittelgroß",
            personality: ["Loyal", "Beschützend", "Einzigartig"],
            history: "Wednesday wurde an einem Mittwoch gefunden, daher ihr Name. Sie hat einen starken Charakter entwickelt.",
            medicalInfo: "Vollständig geimpft, gesund."
          },
          {
            id: 15,
            name: "Zeta",
            age: "~1 Jahr",
            breed: "Mischling",
            description: "Zeta wurde vor Neujahr 25 während Rianis Fütterungsrunde am Straßenrand gefunden – ausgesetzt mit vielen anderen Welpen, ohne ihre Mutter. Sie war noch sehr jung und hätte alleine keine Überlebenschance gehabt. Seitdem lebt sie bei Dhany, wie auch die anderen 10 Welpen im gleichen Alter, die alle Namen aus dem griechischen Alphabet haben. (Die anderen, restlichen 3 der Rettung leben bei Rey.)",
            image: "/OneDrive_15_2.4.2025/Zeta/IMG_2213.jpeg",
            additionalImages: [
              "/OneDrive_15_2.4.2025/Zeta/IMG_2214.jpeg"
            ],
            needs: "Zuneigung und Unterstützung in ihrer weiteren Entwicklung",
            location: "Shelter Lombok",
            sex: "Weiblich",
            size: "Mittelgroß",
            personality: ["Neugierig", "Verspielt", "Energiegeladen"],
            history: "Zeta wurde vor Neujahr 2025 am Straßenrand gefunden, ausgesetzt mit vielen anderen Welpen ohne Mutter.",
            medicalInfo: "Vollständig geimpft, gesund.",
            suitableFor: ["Aktive Menschen", "Familien mit Erfahrung mit Hunden"]
          }

        ];

        const selectedDog = dogsData.find(dog => dog.id === parseInt(id || '1'));
        setDog(selectedDog || null);
        
        if (selectedDog) {
          const images = [selectedDog.image, ...(selectedDog.additionalImages || [])];
          setAllImages(images);
        }
        
        setLoading(false);
      }, 500);
    };

    loadDogData();
  }, [id]);

  // Funktion zum Ändern des angezeigten Bildes
  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Funktionen für Vor- und Zurück-Navigation in der Galerie
  const goToPreviousImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  }, [allImages.length]);

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  }, [allImages.length]);

  // Event-Listener für Tastatur-Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPreviousImage();
      } else if (e.key === 'ArrowRight') {
        goToNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [allImages.length, goToPreviousImage, goToNextImage]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="animate-pulse">
            <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
            <div className="h-8 bg-gray-200 rounded-lg mb-4 w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded-lg mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded-lg mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded-lg mb-6 w-3/4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="h-6 bg-gray-200 rounded-lg mb-4 w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-2 w-full"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-2 w-full"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-6 w-5/6"></div>
              </div>
              <div>
                <div className="h-6 bg-gray-200 rounded-lg mb-4 w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-2 w-full"></div>
                <div className="h-4 bg-gray-200 rounded-lg mb-2 w-full"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!dog) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Hund nicht gefunden</h2>
          <p className="mb-8">Der gesuchte Hund konnte leider nicht gefunden werden.</p>
          <button 
            onClick={() => navigate('/our-dogs')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md flex items-center mx-auto"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Zurück zur Übersicht
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Zurück-Button mit mehr Abstand nach oben, um unter der Navigation zu erscheinen */}
        <div className="pt-10 md:pt-6">
          <button 
            onClick={() => navigate('/our-dogs')}
            className="mb-6 flex items-center text-amber-600 hover:text-amber-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Zurück zur Übersicht
          </button>
        </div>
        
        {/* Hero-Bereich mit Bild und Grundinformationen */}
        <div className="relative rounded-xl overflow-hidden mb-10">
          <img 
            src={allImages[currentImageIndex]} 
            alt={dog.name} 
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h1 className="text-4xl font-bold text-white mb-2">{dog.name}</h1>
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" /> 
                {dog.age}
              </div>
              <div className="flex items-center">
                <PawPrint className="mr-2 h-5 w-5" /> 
                {dog.breed}
              </div>
              {dog.location && (
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" /> 
                  {dog.location}
                </div>
              )}
              {dog.sex && (
                <div className="flex items-center">
                  {dog.sex}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Hauptinformationen */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border-2 border-primary/20">
            <h2 className="text-2xl font-semibold mb-4">Über {dog.name}</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {dog.description}
            </p>
            
            {dog.history && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Geschichte</h3>
                <p className="text-gray-700">{dog.history}</p>
              </div>
            )}
            
            {dog.personality && dog.personality.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Persönlichkeit</h3>
                <div className="flex flex-wrap gap-2">
                  {dog.personality.map((trait, index) => (
                    <span 
                      key={index}
                      className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {dog.medicalInfo && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Medizinische Informationen</h3>
                <p className="text-gray-700">{dog.medicalInfo}</p>
              </div>
            )}
          </div>
          
          {/* Seitenleiste mit weiteren Informationen */}
          <div>
            <div className="bg-accent-pink p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Persönlichkeit</h3>
              <ul className="space-y-2">
                {dog.personality?.map((trait, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent-yellow p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Heart className="mr-2 h-5 w-5 text-primary" /> 
                Besondere Bedürfnisse
              </h3>
              <p className="text-gray-700 mb-6">{dog.needs}</p>
              
              <button 
                onClick={openPatronageForm}
                className="w-full bg-primary hover:bg-primary/80 text-white py-3 px-4 rounded-md flex items-center justify-center transition-colors font-medium"
              >
                <Heart className="mr-2 h-5 w-5" /> Pate werden
              </button>
            </div>
            
            {(dog.suitableFor || dog.notSuitableFor) && (
              <div className="bg-accent-blue/30 rounded-xl p-6 mb-6">
                {dog.suitableFor && dog.suitableFor.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Geeignet für:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {dog.suitableFor.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {dog.notSuitableFor && dog.notSuitableFor.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Nicht geeignet für:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {dog.notSuitableFor.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="bg-accent-blue p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Kontakt</h3>
              <div className="flex items-center mb-3">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <a href="tel:+4915227284994" className="text-primary hover:underline">
                  +49 152 27284994
                </a>
              </div>
              <button
                onClick={handleMessageClick}
                className="w-full mt-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Nachricht senden
              </button>
            </div>
          </div>
        </div>
        
        {/* Videos Bereich, falls vorhanden */}
        {dog.videoLinks && dog.videoLinks.length > 0 && (
          <div className="mt-10 bg-accent-orange/20 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dog.videoLinks.map((videoLink, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <video 
                    controls 
                    className="w-full h-auto"
                    poster={dog.image} // Verwende das Hauptbild des Hundes als Poster
                  >
                    <source src={videoLink} type="video/mp4" />
                    Dein Browser unterstützt keine Videos.
                  </video>
                  <p className="mt-2 text-sm text-gray-600 bg-white p-2 rounded-b-lg">{dog.name} - Video {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Bildergalerie */}
        <div className="mt-10 bg-secondary/30 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Bildergalerie</h3>
          {allImages.length > 1 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
              {allImages.map((image, index) => (
                <div 
                  key={index}
                  className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 transform ${
                    currentImageIndex === index ? 'ring-4 ring-primary scale-105' : 'hover:scale-105'
                  }`}
                  onClick={() => handleImageChange(index)}
                >
                  <img 
                    src={image} 
                    alt={`${dog.name} - Bild ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
          <div className="mt-4 rounded-xl overflow-hidden shadow-lg relative">
            <img 
              src={allImages[currentImageIndex]} 
              alt={`${dog.name} - Großansicht`}
              className="w-full max-h-[500px] object-contain bg-gray-100"
            />
            
            {/* Navigationspfeile */}
            {allImages.length > 1 && (
              <>
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md transition-all duration-300"
                  onClick={goToPreviousImage}
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md transition-all duration-300"
                  onClick={goToNextImage}
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Bildindikator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-3 py-1 rounded-full text-sm text-gray-700">
                  {currentImageIndex + 1} / {allImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DogDetail;
