import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Info } from 'lucide-react';
import { loadVideoSection, type VideoSection as VideoSectionData } from '@/lib/cms';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  // Fallback-Daten sofort verfügbar
  const fallbackData: VideoSectionData = {
    id: 'video',
    badge: 'Unsere Arbeit',
    title: 'Hilfe vor Ort',
    description: 'Unser Fokus liegt auf nachhaltigen Lösungen vor Ort statt kurzfristiger Maßnahmen. Wir glauben, dass nur durch eine dauerhafte Präsenz und lokale Zusammenarbeit echte Veränderungen möglich sind.\n\nIn Lombok und Rumänien arbeiten wir eng mit lokalen Helfern zusammen, um die Lebensbedingungen der Straßenhunde langfristig zu verbessern. Unsere Programme sind darauf ausgerichtet, nicht nur akute Probleme zu lösen, sondern nachhaltige Strukturen zu schaffen.\n\nDas Video gibt einen Einblick in unsere tägliche Arbeit vor Ort und zeigt, mit wie viel Engagement unser Team die verschiedenen Projekte betreut.',
    videoUrl: '/videos/ImageVideo.mp4',
    posterImage: '/images/lombook/WhatsApp Image 2025-03-24 at 18.13.23.jpeg',
    videoInfo: 'FAM for Dogs in Aktion',
    published: true
  };

  const [videoData, setVideoData] = useState<VideoSectionData>(fallbackData);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Load CMS data im Hintergrund
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadVideoSection();
        if (data) {
          setVideoData(data);
        }
      } catch (error) {
        console.error('Fehler beim Laden der Video Section:', error);
        // Fallback-Daten bleiben aktiv
      }
    };

    loadData();
  }, []);

  const data = videoData;



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

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Verhindert, dass der Play/Pause-Button ausgelöst wird
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoLoaded = () => {
    setIsLoaded(true);
  };

  // Split description into paragraphs
  const descriptionParagraphs = data.description.split('\n\n').filter(p => p.trim() !== '');

  return (
    <section 
      id="video" 
      className="py-24 bg-gradient-to-br from-accent-green/5 to-accent-blue/10 relative overflow-hidden"
    >
      {/* Decorative elements with animation */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-pink/10 blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-accent-yellow/10 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Video Column */}
          <div className="w-full md:w-3/5 order-2 md:order-1 transform transition-all duration-700 ease-out"
               style={{ 
                 opacity: 1,
                 transform: 'translateY(0)'
               }}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              {/* Video loading placeholder */}
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center z-10">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Video container with gradient overlay */}
              <div className="aspect-w-16 aspect-h-9 bg-primary group-hover:scale-105 transition-transform duration-700">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover transition-opacity duration-500 opacity-100"
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  poster={data.posterImage}
                  onLoadedData={handleVideoLoaded}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={data.videoUrl} type="video/mp4" />
                  Dein Browser unterstützt das Video-Tag nicht.
                </video>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
                
                {/* Video info badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 text-white px-3 py-1.5 rounded-full backdrop-blur-sm text-sm">
                  <Info size={16} />
                  <span>{data.videoInfo}</span>
                </div>
                
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors group"
                  aria-label={isPlaying ? "Video pausieren" : "Video abspielen"}
                >
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${isPlaying ? 'bg-white/20 scale-90' : 'bg-primary scale-100'} group-hover:scale-110 shadow-lg`}>
                    {isPlaying ? (
                      <Pause className="text-white" size={34} />
                    ) : (
                      <Play className="text-white ml-1" size={34} />
                    )}
                  </div>
                </button>
                
                {/* Mute/Unmute Button */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors shadow-lg"
                  aria-label={isMuted ? "Ton einschalten" : "Ton ausschalten"}
                >
                  {isMuted ? (
                    <VolumeX className="text-white" size={20} />
                  ) : (
                    <Volume2 className="text-white" size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-2/5 order-1 md:order-2 text-left transform transition-all duration-700 ease-out"
               style={{ 
                 opacity: 1,
                 transform: 'translateY(0)',
                 transitionDelay: '0.2s'
               }}>
            <div className="mb-8">
              <div className="inline-block rounded-lg bg-accent-blue/20 px-3 py-1 mb-3">
                <span className="text-accent-blue font-medium font-futura">{data.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-glorious">{data.title}</h2>
              <div className="w-16 h-1 bg-accent-blue mb-6"></div>
              {descriptionParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg leading-relaxed font-futura mb-8">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add animations styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.4; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        `
      }} />
    </section>
  );
};

export default VideoSection;
