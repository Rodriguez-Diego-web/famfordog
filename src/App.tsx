import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import Volunteer from "./pages/Volunteer";
import AdoptionProcess from "./pages/AdoptionProcess";
import AdoptionHowTo from "./pages/AdoptionHowTo";
import AdoptionFAQ from "./pages/AdoptionFAQ";
import AdoptionFees from "./pages/AdoptionFees";
import SuccessStories from "./pages/SuccessStories";
import OurDogs from "./pages/OurDogs";
import DogDetail from "./pages/DogDetail";
import JoinFamily from "./pages/JoinFamily";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import EmergencyReport from "./pages/EmergencyReport";
import Projects from "./pages/Projects";
import KastrationsprojektePage from "./pages/projects/KastrationsprojektePage";
import WoundedProgramPage from "./pages/projects/WoundedProgramPage";
import FuetterungstourenPage from "./pages/projects/FuetterungstourenPage";
import ShelterLombokPage from "./pages/projects/ShelterLombokPage";
import PublicShelterRumaenienPage from "./pages/projects/PublicShelterRumaenienPage";
import TierrettungenPage from "./pages/projects/TierrettungenPage";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/our-dogs" element={<OurDogs />} />
          <Route path="/dogs/:id" element={<DogDetail />} />
          <Route path="/join-family" element={<JoinFamily />} />
          <Route path="/emergency-report" element={<EmergencyReport />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          
          {/* Project Routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/kastrationsprojekte" element={<KastrationsprojektePage />} />
          <Route path="/projects/wounded-program" element={<WoundedProgramPage />} />
          <Route path="/projects/fuetterungstouren" element={<FuetterungstourenPage />} />
          <Route path="/projects/shelter-lombok" element={<ShelterLombokPage />} />
          <Route path="/projects/public-shelter-rumaenien" element={<PublicShelterRumaenienPage />} />
          <Route path="/projects/tierrettungen" element={<TierrettungenPage />} />
          
          {/* Adoption Routes */}
          <Route path="/adoption/process" element={<AdoptionProcess />} />
          <Route path="/adoption/how-to" element={<AdoptionHowTo />} />
          <Route path="/adoption/faq" element={<AdoptionFAQ />} />
          <Route path="/adoption/fees" element={<AdoptionFees />} />
          <Route path="/adoption/success-stories" element={<SuccessStories />} />
          
          {/* Fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
