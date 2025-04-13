import { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeaturedDogs from '@/components/FeaturedDogs';
import VideoSection from '@/components/VideoSection';
import MissionSection from '@/components/MissionSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import JoinTeamSection from '@/components/JoinTeamSection';
import DonateSection from '@/components/DonateSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Tierschutz ohne Grenzen"
        description="FAM for Dogs e.V. - Fight and Movement for Dogs. Wir setzen uns für nachhaltigen Tierschutz und Straßenhunde in Rumänien und Lombok ein. Spenden, adoptieren oder als Freiwillige helfen."
        keywords="Tierschutz, Straßenhunde, Hunde adoptieren, Straßenhunde Rumänien, Tierschutz Lombok, Kastrationsprojekte, Hunde in Not, Tierschutzverein"
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MissionSection />
        <WhoWeAreSection />
        <VideoSection />
        <FeaturedDogs />
        <DonateSection />
        <JoinTeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
