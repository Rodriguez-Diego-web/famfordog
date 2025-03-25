import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Team from "./pages/Team";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import Volunteer from "./pages/Volunteer";
import AdoptionProcess from "./pages/AdoptionProcess";
import AdoptionHowTo from "./pages/AdoptionHowTo";
import AdoptionFAQ from "./pages/AdoptionFAQ";
import AdoptionFees from "./pages/AdoptionFees";
import SuccessStories from "./pages/SuccessStories";

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
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/adoption-process" element={<AdoptionProcess />} />
          <Route path="/adoption-how-to" element={<AdoptionHowTo />} />
          <Route path="/adoption-faq" element={<AdoptionFAQ />} />
          <Route path="/adoption-fees" element={<AdoptionFees />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
