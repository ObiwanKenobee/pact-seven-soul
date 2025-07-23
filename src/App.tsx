import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Developer from "./pages/Developer";
import About from "./pages/About";
import Contributing from "./pages/Contributing";
import CodeOfConduct from "./pages/CodeOfConduct";
import Impact from "./pages/Impact";
import Pricing from "./pages/Pricing";
import Engineers from "./pages/Engineers";
import Partnerships from "./pages/Partnerships";
import OpenSource from "./pages/OpenSource";
import UniversalAccess from "./pages/UniversalAccess";
import Dashboard from "./pages/Dashboard";
import TechStack from "./pages/TechStack";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contributing" element={<Contributing />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/engineers" element={<Engineers />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/access" element={<UniversalAccess />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
