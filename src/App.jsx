import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact.jsx";
import Footer from "./layout/Footer.jsx";
import Blog from "./pages/Blog.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import FloatingSocialButtons from "./components/FloatingSocialButtons.jsx";
import NotFound from "./pages/NotFound.jsx";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms.jsx";
import SchemaMarkup from "./components/SchemaMarkup.jsx";

// ✅ Page view tracking component
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics page view tracking
    if (window.gtag) {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: location.pathname + location.search,
      });
    }

    // Update page title based on route
    const pageTitles = {
      "/": "Riyadh Appliance Repair Services | Expert Technicians",
      "/services": "Our Services | Riyadh Appliance Repair",
      "/about": "About Us | Riyadh Appliance Repair Services",
      "/contact": "Contact Us | Riyadh Appliance Repair",
      "/blog": "Blog & Tips | Riyadh Appliance Repair",
    };

    document.title =
      pageTitles[location.pathname] || "Riyadh Appliance Repair Services";
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    const siteNavigationSchema = {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: ["Home", "Services", "About", "Contact", "Blog"],
      url: [
        "https://riyadhrepairingservice.com/",
        "https://riyadhrepairingservice.com/services",
        "https://riyadhrepairingservice.com/about",
        "https://riyadhrepairingservice.com/contact",
        "https://riyadhrepairingservice.com/blog",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(siteNavigationSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <SchemaMarkup />
      <BrowserRouter>
        <ScrollToTop />
        <PageViewTracker />
        <Navbar />
        <FloatingSocialButtons />

        <main id="main-content" role="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Services />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                </>
              }
            />
            <Route
              path="/blog"
              element={
                <>
                  <Blog />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <NotFound />
                </>
              }
            />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/Terms" element={<Terms />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
