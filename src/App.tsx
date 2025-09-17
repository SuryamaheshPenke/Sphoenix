import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import TechnologyTraining from "./pages/career-services/TechnologyTraining";
import ResumeEnhancement from "./pages/career-services/ResumeEnhancement";
import InterviewGuidance from "./pages/career-services/InterviewGuidance";
import JobPlacement from "./pages/career-services/JobPlacement";
import SkillAssessment from "./pages/career-services/SkillAssessment";
import DigitalTransformation from "./pages/it-consulting/DigitalTransformation";
import TechnologyStrategy from "./pages/it-consulting/TechnologyStrategy";
import CloudInfrastructure from "./pages/it-consulting/CloudInfrastructure";
import SoftwareArchitecture from "./pages/it-consulting/SoftwareArchitecture";
import BusinessAnalysis from "./pages/it-consulting/BusinessAnalysis";
import ContractStaffing from "./pages/it-staffing/ContractStaffing";
import PermanentStaffing from "./pages/it-staffing/PermanentStaffing";
import DedicatedTeams from "./pages/it-staffing/DedicatedTeams";
import ExecutiveHiring from "./pages/it-staffing/ExecutiveHiring";
import RemoteTeams from "./pages/it-staffing/RemoteTeams";
import OpenPositions from "./pages/careers/OpenPositions";
import Internships from "./pages/careers/Internships";
import HowToApply from "./pages/careers/HowToApply";
import BenefitsCulture from "./pages/careers/BenefitsCulture";
import PhoenixSpinner from "./components/PhoenixSpinner";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToContactIndex = () => {
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [location]);
  return <Index />;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleSpinnerComplete = () => {
    setLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="dark">
          {loading && <PhoenixSpinner onComplete={handleSpinnerComplete} />}
          <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<ScrollToContactIndex />} />
            <Route path="/about" element={<About />} />
            <Route path="/career-services/technology-training" element={<TechnologyTraining />} />
            <Route path="/career-services/resume-enhancement" element={<ResumeEnhancement />} />
            <Route path="/career-services/interview-guidance" element={<InterviewGuidance />} />
            <Route path="/career-services/job-placement" element={<JobPlacement />} />
            <Route path="/career-services/skill-assessment" element={<SkillAssessment />} />
            <Route path="/it-consulting/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/it-consulting/technology-strategy" element={<TechnologyStrategy />} />
            <Route path="/it-consulting/cloud-infrastructure" element={<CloudInfrastructure />} />
            <Route path="/it-consulting/software-architecture" element={<SoftwareArchitecture />} />
            <Route path="/it-consulting/business-analysis" element={<BusinessAnalysis />} />
            <Route path="/it-staffing/contract-staffing" element={<ContractStaffing />} />
            <Route path="/it-staffing/permanent-staffing" element={<PermanentStaffing />} />
            <Route path="/it-staffing/dedicated-teams" element={<DedicatedTeams />} />
            <Route path="/it-staffing/executive-hiring" element={<ExecutiveHiring />} />
            <Route path="/it-staffing/remote-teams" element={<RemoteTeams />} />
            <Route path="/careers/open-positions" element={<OpenPositions />} />
            <Route path="/careers/internships" element={<Internships />} />
            <Route path="/careers/how-to-apply" element={<HowToApply />} />
            <Route path="/careers/benefits-culture" element={<BenefitsCulture />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
