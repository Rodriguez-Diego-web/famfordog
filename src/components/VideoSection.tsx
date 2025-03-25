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
    <section id="video" className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <PawPrint size={100} className="text-white" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <PawPrint size={80} className="text-white" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-glorious">Unsere Arbeit vor Ort</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl max-w-4xl mx-auto shadow-2xl">
          {/* Video container with gradient overlay */}
          <div className="aspect-w-16 aspect-h-9 bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/images/lombok/shelter.jpg"
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/videos/shelter-video.mp4" type="video/mp4" />
              Dein Browser unterstützt das Video-Tag nicht.
            </video>
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
              aria-label={isPlaying ? "Video pausieren" : "Video abspielen"}
            >
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-transform duration-300 ${isPlaying ? 'bg-white/20' : 'bg-white'} group-hover:scale-110`}>
                {isPlaying ? (
                  <Pause className="text-white" size={28} />
                ) : (
                  <Play className="text-primary ml-1" size={28} />
                )}
              </div>
            </button>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-white/90 text-lg leading-relaxed font-futura">
            Unser Fokus liegt auf nachhaltigen Lösungen vor Ort statt kurzfristiger Maßnahmen. 
            Wir führen Kastrationsprogramme durch, bieten medizinische Versorgung für 
            verletzte Straßenhunde und arbeiten an der Verbesserung von Tierheimen in Lombok und Rumänien.
          </p>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-white text-xl font-bold mb-2 font-futura">Kastrationen</h3>
              <p className="text-white/80 font-futura">Bereits über 1500 Kastrationen durchgeführt, um das Leid langfristig zu reduzieren.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-white text-xl font-bold mb-2 font-futura">Wounded-Programm</h3>
              <p className="text-white/80 font-futura">Medizinische Versorgung für verletzte und kranke Straßenhunde.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-white text-xl font-bold mb-2 font-futura">Fütterungstouren</h3>
              <p className="text-white/80 font-futura">Regelmäßige Versorgung von Straßenhunden mit Nahrung vor Ort.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
