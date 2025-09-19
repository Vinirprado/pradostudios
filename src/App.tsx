import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load project pages to reduce initial bundle size
const VarandaCoProject = lazy(() => import("./pages/VarandaCoProject"));
const ApolocredProject = lazy(() => import("./pages/ApolocredProject"));
const BrainstormAcademyProject = lazy(() => import("./pages/BrainstormAcademyProject"));
const AquaAmericaProject = lazy(() => import("./pages/AquaAmericaProject"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projeto/varanda-co" element={
            <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>}>
              <VarandaCoProject />
            </Suspense>} />
          <Route path="/projeto/apolocred" element={
            <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>}>
              <ApolocredProject />
            </Suspense>} />
          <Route path="/projeto/brainstorm-academy" element={
            <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>}>
              <BrainstormAcademyProject />
            </Suspense>} />
          <Route path="/projeto/aqua-america" element={
            <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>}>
              <AquaAmericaProject />
            </Suspense>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
