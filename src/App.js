import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import VerifyCertificate from './pages/VerifyCertificate';
import WhatsSpecial from './pages/WhatsSpecial';
import Contact from './pages/Contact';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Create an AppContent component to use location
function AppContent() {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/verify-certificate" element={<VerifyCertificate />} />
            <Route path="/whats-special" element={<WhatsSpecial />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

// Main App component
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-light">
        <AppContent />
    </div>
  );
}

export default App;