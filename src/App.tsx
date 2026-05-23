import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import FloatingWhatsApp from "./components/FloatinWhatsApp";
import Navbar from "./components/shared/Navbar";
import Footer from "./features/website/home/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import AdmissionBanner from "./components/AdmissionBanner";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Notices from "./pages/Notices";
import Contact from "./pages/Contact";
import { initGA, trackPageView } from "./utils/analytics";
import { useEffect } from "react";
import { useSchoolConfig } from "./context/SchoolConfigContext";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedAdminRoute from "./components/admin/ProtectedAdminRoute";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminNotices from "./pages/admin/AdminNotices";
import Enquiry from "./pages/admin/Enquiry";
import AdminGallery from "./pages/admin/AdminGallery";

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  return null;
}

function AppContent() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  const { config } = useSchoolConfig();

  return (
    <>
      {!isAdminRoute && config?.admissionOpen && <AdmissionBanner />}
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          } 
        />
        <Route 
          path="/admin/settings" 
          element={
            <ProtectedAdminRoute>
              <AdminSettings />
            </ProtectedAdminRoute>
          } 
        />
        <Route 
          path="/admin/notices" 
          element={
            <ProtectedAdminRoute>
              <AdminNotices />
            </ProtectedAdminRoute>
          } 
        />
        <Route 
          path="/admin/enquiries" 
          element={
            <ProtectedAdminRoute>
              <Enquiry />
            </ProtectedAdminRoute>
          } 
        />
        <Route 
          path="/admin/gallery" 
          element={
            <ProtectedAdminRoute>
              <AdminGallery />
            </ProtectedAdminRoute>
          } 
        />
      </Routes>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingWhatsApp />}
    </>
  );
}

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
