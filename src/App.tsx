import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, lazy, Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CookieConsent from "./components/CookieConsent";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { initGA } from "./services/analyticsService";

// Immediately loaded pages (critical for initial experience)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy loaded pages grouped by feature
// Core pages
const About = lazy(() => import("./pages/About"));
const Donate = lazy(() => import("./pages/Donate"));
const JoinFamily = lazy(() => import("./pages/JoinFamily"));
const OurDogs = lazy(() => import("./pages/OurDogs"));
const DogDetail = lazy(() => import("./pages/DogDetail"));
const EmergencyReport = lazy(() => import("./pages/EmergencyReport"));
const Volunteer = lazy(() => import("./pages/Volunteer"));

// Legal pages
const Imprint = lazy(() => import("./pages/Imprint"));
const Privacy = lazy(() => import("./pages/Privacy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const FoerdermitgliedschaftSuccess = lazy(() => import("./pages/FoerdermitgliedschaftSuccess"));
const FoerdermitgliedWerden = lazy(() => import("./pages/FoerdermitgliedWerden"));
const Spendenaktion = lazy(() => import("./pages/Spendenaktion"));

// Project pages
const Projects = lazy(() => import("./pages/Projects"));
const KastrationsprojektePage = lazy(() => import("./pages/projects/KastrationsprojektePage"));
const WoundedProgramPage = lazy(() => import("./pages/projects/WoundedProgramPage"));
const FuetterungstourenPage = lazy(() => import("./pages/projects/FuetterungstourenPage"));
const ShelterLombokPage = lazy(() => import("./pages/projects/ShelterLombokPage"));
const PublicShelterRumaenienPage = lazy(() => import("./pages/projects/PublicShelterRumaenienPage"));
const TierrettungenPage = lazy(() => import("./pages/projects/TierrettungenPage"));

// Adoption pages
const AdoptionProcess = lazy(() => import("./pages/AdoptionProcess"));
const AdoptionHowTo = lazy(() => import("./pages/AdoptionHowTo"));
const AdoptionFAQ = lazy(() => import("./pages/AdoptionFAQ"));
const AdoptionFees = lazy(() => import("./pages/AdoptionFees"));

initGA();

const RouteChangeTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    const { pathname } = location;
    import('./services/analyticsService').then(({ sendPageView }) => {
      sendPageView(pathname);
    });
  }, [location]);

  return null;
};

const queryClient = new QueryClient();

// Loading component for suspense fallback
const PageLoading = () => (
  <div className="w-full h-screen flex items-center justify-center bg-accent-blue/20">
    <div className="animate-pulse text-primary font-semibold">Laden...</div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteChangeTracker />
          <LoadingScreen minDisplayTime={1000} />
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/mission" element={<About />} />
              <Route path="/spenden" element={<Donate />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/our-dogs" element={<OurDogs />} />
              <Route path="/dogs/:id" element={<DogDetail />} />
              <Route path="/join-family" element={<JoinFamily />} />
              <Route path="/emergency-report" element={<EmergencyReport />} />
              <Route path="/imprint" element={<Imprint />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/foerdermitglied-werden" element={<FoerdermitgliedWerden />} />
              <Route path="/foerdermitgliedschaft" element={<FoerdermitgliedschaftSuccess />} />
              <Route path="/foerdermitgliedschaft/" element={<FoerdermitgliedschaftSuccess />} />
              <Route path="/spendenaktion" element={<Spendenaktion />} />
              
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
              
              {/* Fallback route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CookieConsent />
          <ScrollToTopButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
