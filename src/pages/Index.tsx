import { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeaturedDogs from '@/components/FeaturedDogs';
import VideoSection from '@/components/VideoSection';
import MissionSection from '@/components/MissionSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import JoinTeamSection from '@/components/JoinTeamSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MissionSection />
        <WhoWeAreSection />
        <VideoSection />
        <FeaturedDogs />
        <JoinTeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
