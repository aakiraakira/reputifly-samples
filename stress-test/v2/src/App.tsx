import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Repatriation from "./pages/Repatriation";
import HinduIndian from "./pages/services/HinduIndian";
import RomanCatholic from "./pages/services/RomanCatholic";
import Christian from "./pages/services/Christian";
import Freethinker from "./pages/services/Freethinker";
import DirectCremation from "./pages/services/DirectCremation";
import PrePlanning from "./pages/services/PrePlanning";
import WillEstate from "./pages/services/WillEstate";
import PetCremation from "./pages/services/PetCremation";
import BabyFuneral from "./pages/services/BabyFuneral";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/repatriation" element={<Repatriation />} />
          <Route path="/services/hindu-indian" element={<HinduIndian />} />
          <Route path="/services/roman-catholic" element={<RomanCatholic />} />
          <Route path="/services/christian" element={<Christian />} />
          <Route path="/services/freethinker" element={<Freethinker />} />
          <Route path="/services/direct-cremation" element={<DirectCremation />} />
          <Route path="/services/pre-planning" element={<PrePlanning />} />
          <Route path="/services/will-estate" element={<WillEstate />} />
          <Route path="/services/pet-cremation" element={<PetCremation />} />
          <Route path="/services/baby-funeral" element={<BabyFuneral />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
