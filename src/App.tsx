import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VarandaCoProject from "./pages/VarandaCoProject";
import ApolocredProject from "./pages/ApolocredProject";
import BrainstormAcademyProject from "./pages/BrainstormAcademyProject";
import AquaAmericaProject from "./pages/AquaAmericaProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projeto/varanda-co" element={<VarandaCoProject />} />
          <Route path="/projeto/apolocred" element={<ApolocredProject />} />
          <Route path="/projeto/brainstorm-academy" element={<BrainstormAcademyProject />} />
          <Route path="/projeto/aqua-america" element={<AquaAmericaProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
