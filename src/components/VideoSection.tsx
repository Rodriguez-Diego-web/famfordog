import { useRef, useState } from 'react';
import { Play, Pause, PawPrint } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="video" className="py-24 bg-accent-green/15 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-pink/10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-accent-yellow/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Video Column */}
          <div className="w-full md:w-3/5 order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Video container with gradient overlay */}
              <div className="aspect-w-16 aspect-h-9 bg-primary">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/images/lombok/shelter.jpg"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src="/videos/lombok_video.mp4" type="video/mp4" />
                  Dein Browser unterstützt das Video-Tag nicht.
                </video>
                
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                  aria-label={isPlaying ? "Video pausieren" : "Video abspielen"}
                >
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform duration-300 ${isPlaying ? 'bg-white/20' : 'bg-primary'} group-hover:scale-110 shadow-lg`}>
                    {isPlaying ? (
                      <Pause className="text-white" size={34} />
                    ) : (
                      <Play className="text-white ml-1" size={34} />
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-2/5 order-1 md:order-2 text-left">
            <div className="mb-8">
              <div className="inline-block rounded-lg bg-accent-blue/20 px-3 py-1 mb-3">
                <span className="text-accent-blue font-medium font-futura">Unsere Arbeit</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-glorious">Hilfe vor Ort</h2>
              <div className="w-16 h-1 bg-accent-blue mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed font-futura mb-8">
                Unser Fokus liegt auf nachhaltigen Lösungen vor Ort statt kurzfristiger Maßnahmen. 
                Wir führen Kastrationsprogramme durch, bieten medizinische Versorgung für 
                verletzte Straßenhunde und arbeiten an der Verbesserung von Tierheimen in Lombok und Rumänien.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-accent-pink flex items-start">
                <div className="bg-accent-pink/20 rounded-full p-2 mr-4">
                  <PawPrint size={20} className="text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-primary text-lg font-bold mb-1 font-futura">Kastrationen</h3>
                  <p className="text-gray-600 font-futura">Bereits über 1500 Kastrationen durchgeführt, um das Leid langfristig zu reduzieren.</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-accent-blue flex items-start">
                <div className="bg-accent-blue/20 rounded-full p-2 mr-4">
                  <PawPrint size={20} className="text-accent-blue" />
                </div>
                <div>
                  <h3 className="text-primary text-lg font-bold mb-1 font-futura">Wounded-Programm</h3>
                  <p className="text-gray-600 font-futura">Medizinische Versorgung für verletzte und kranke Straßenhunde.</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-accent-yellow flex items-start">
                <div className="bg-accent-yellow/20 rounded-full p-2 mr-4">
                  <PawPrint size={20} className="text-accent-yellow" />
                </div>
                <div>
                  <h3 className="text-primary text-lg font-bold mb-1 font-futura">Fütterungstouren</h3>
                  <p className="text-gray-600 font-futura">Regelmäßige Versorgung von Straßenhunden mit Nahrung vor Ort.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
