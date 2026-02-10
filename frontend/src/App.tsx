import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Pricing } from './pages/Pricing';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';

// Auth Pages
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';

// Components
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './pages/Dashboard';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// SEO Page Wrapper Component
const SEOPage: React.FC<{ 
  children: React.ReactNode; 
  title: string; 
  description: string; 
}> = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      {children}
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Toaster position="top-right" richColors />
          <Routes>
            {/* Public Pages with SEO */}
            <Route path="/" element={
              <SEOPage 
                title="NexGen Solutions - Innovative IT Solutions for Modern Business" 
                description="Transforming businesses through cutting-edge technology solutions. Expert web development, mobile apps, and cloud services."
              >
                <Home />
              </SEOPage>
            } />
            
            <Route path="/about" element={
              <SEOPage 
                title="About Us - NexGen Solutions" 
                description="Learn about our mission, values, and the talented team behind NexGen Solutions. We're passionate about creating innovative technology solutions."
              >
                <About />
              </SEOPage>
            } />
            
            <Route path="/services" element={
              <SEOPage 
                title="Our Services - NexGen Solutions" 
                description="Comprehensive technology services including web development, mobile apps, cloud solutions, and UI/UX design to power your digital transformation."
              >
                <Services />
              </SEOPage>
            } />
            
            <Route path="/portfolio" element={
              <SEOPage 
                title="Portfolio - NexGen Solutions" 
                description="Explore our portfolio of successful projects and case studies showcasing our expertise in delivering innovative technology solutions."
              >
                <Portfolio />
              </SEOPage>
            } />
            
            <Route path="/pricing" element={
              <SEOPage 
                title="Pricing Plans - NexGen Solutions" 
                description="Transparent pricing for our technology services. Choose the plan that best fits your business needs and budget."
              >
                <Pricing />
              </SEOPage>
            } />
            
            <Route path="/careers" element={
              <SEOPage 
                title="Careers at NexGen Solutions" 
                description="Join our innovative team and help shape the future of technology. We're always looking for talented individuals to join our growing company."
              >
                <Careers />
              </SEOPage>
            } />
            
            <Route path="/contact" element={
              <SEOPage 
                title="Contact Us - NexGen Solutions" 
                description="Ready to start your project? Get in touch with our team for a free consultation and let's discuss how we can help transform your business."
              >
                <Contact />
              </SEOPage>
            } />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
