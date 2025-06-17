
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import FloatingButtons from "./components/FloatingButtons";
import ResourcePreloader from "./components/ResourcePreloader";

// Lazy load all page components
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Technology = lazy(() => import("./pages/Technology"));
const Marketing = lazy(() => import("./pages/Marketing"));
const MediaProduction = lazy(() => import("./pages/MediaProduction"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Clients = lazy(() => import("./pages/Clients"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mdm-gold mx-auto mb-4"></div>
      <p className="text-mdm-black font-montserrat">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ResourcePreloader />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgress />
        <FloatingButtons />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/technology" element={<Technology />} />
            <Route path="/services/marketing" element={<Marketing />} />
            <Route path="/services/media-production" element={<MediaProduction />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
