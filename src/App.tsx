
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import NotFoundPage from "./pages/NotFoundPage";
import QuizSuccessPage from "./components/quiz/QuizSuccessPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
           <Route path="/" element={<Navigate to="/quiz" replace />} />
            <Route path="/quiz" element={<Home />} />
            {/* <Route path="/quizs" element={<QuizSuccessPage/>} /> */}
            <Route path="/how-it-works" element={<Home />} /> {/* Placeholder routes */}
            <Route path="/why-choose" element={<Home />} />
            <Route path="/who-can-benefit" element={<Home />} />
            <Route path="/smart-features" element={<Home />} />
            <Route path="/testimonials" element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
