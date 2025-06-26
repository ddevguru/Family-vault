
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import VaultDashboard from "./pages/VaultDashboard";
import ConfigureVault from "./pages/ConfigureVault";
import AgentLogs from "./pages/AgentLogs";
import BeneficiaryPortal from "./pages/BeneficiaryPortal";
import AnalyticsReports from "./pages/AnalyticsReports";
import NotificationInbox from "./pages/NotificationInbox";
import LegalBackup from "./pages/LegalBackup";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/vault-dashboard" element={<VaultDashboard />} />
          <Route path="/configure-vault" element={<ConfigureVault />} />
          <Route path="/agent-logs" element={<AgentLogs />} />
          <Route path="/beneficiary-portal" element={<BeneficiaryPortal />} />
          <Route path="/analytics-reports" element={<AnalyticsReports />} />
          <Route path="/notification-inbox" element={<NotificationInbox />} />
          <Route path="/legal-backup" element={<LegalBackup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
