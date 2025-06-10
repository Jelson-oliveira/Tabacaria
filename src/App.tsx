import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
          <Route path="/categoria/:categoria" element={<Index />} />
          <Route path="/produto/:id" element={<Index />} />
          <Route path="/carrinho" element={<Index />} />
          <Route path="/conta" element={<Index />} />
          <Route path="/favoritos" element={<Index />} />
          <Route path="/pedidos" element={<Index />} />
          <Route path="/sobre" element={<Index />} />
          <Route path="/contato" element={<Index />} />
          <Route path="/promocoes" element={<Index />} />
          <Route path="/blog" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
