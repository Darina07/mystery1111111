import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PsychologicalCounseling from "./pages/PsychologicalCounseling";
import FamilyCounseling from "./pages/FamilyCounseling";
import ChildCounseling from "./pages/ChildCounseling";
import GroupPrograms from "./pages/GroupPrograms";
import SpeechTherapy from "./pages/SpeechTherapy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/psychological-counseling" element={<PsychologicalCounseling />} />
          <Route path="/services/family-counseling" element={<FamilyCounseling />} />
          <Route path="/services/child-counseling" element={<ChildCounseling />} />
          <Route path="/services/group-programs" element={<GroupPrograms />} />
          <Route path="/services/speech-therapy" element={<SpeechTherapy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
