import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import PropertyInvestors from './pages/PropertyInvestors';
import Talents from './pages/Talents';
import Students from './pages/Students';
import Entrepreneurs from './pages/Entrepreneurs';
import Humanitarian from './pages/Humanitarian';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/property" element={<PropertyInvestors />} />
          <Route path="/talents" element={<Talents />} />
          <Route path="/students" element={<Students />} />
          <Route path="/entrepreneurs" element={<Entrepreneurs />} />
          <Route path="/humanitarian" element={<Humanitarian />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;