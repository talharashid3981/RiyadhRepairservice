import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home.jsx";

import RefrigeratorRepair from "./pages/RefrigeratorRepair.jsx";
import WashingMachineRepair from "./pages/WashingMachineRepair.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact.jsx";
import Footer from "./layout/Footer.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import FloatingSocialButtons from "./components/FloatingSocialButtons.jsx";
import NotFound from "./pages/NotFound.jsx";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms.jsx";
import SchemaMarkup from "./components/SchemaMarkup.jsx";

// Page view tracking component
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics page view tracking
    if (window.gtag) {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const siteNavigationSchema = {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: ["Home", "Services", "Refrigerator Repair", "Washing Machine Repair", "About", "Contact", "Blog"],
      url: [
        "https://riyadhrepairingservice.com/",
        "https://riyadhrepairingservice.com/refrigerator-repair",
        "https://riyadhrepairingservice.com/washing-machine-repair",
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
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="app-wrapper">
      {/* ==================== GLOBAL SEO TAGS - ENGLISH & ARABIC ==================== */}
      <Helmet>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        
        {/* Language */}
        <html lang={i18n.language} dir="ltr" />
        
        {/* ==================== ENGLISH SEO TAGS ==================== */}
        <meta name="title-en" content="Washing Machine & Refrigerator Repair in Riyadh | Same-Day Professional Service" />
        <meta name="description-en" content="Expert washing machine repair, automatic washing machine repair, and refrigerator repair services in Riyadh. Same-day service, certified technicians, 24/7 emergency repairs. Call +966598001569" />
        
        {/* ==================== ARABIC SEO TAGS ==================== */}
        <meta name="title-ar" content="تصليح غسالات وثلاجات في الرياض | خدمة احترافية في نفس اليوم" />
        <meta name="description-ar" content="خدمات متخصصة في تصليح الغسالات والغسالات الأوتوماتيكية والثلاجات في الرياض. خدمة في نفس اليوم، فنيون معتمدون، إصلاحات طوارئ 24/7. اتصل +966598001569" />
        
        {/* ==================== KEYWORDS - ENGLISH + ARABIC ==================== */}
        <meta name="keywords" content="washing machine repair riyadh, automatic washing machine repair riyadh, refrigerator repair riyadh, fridge repair riyadh, appliance repair riyadh, same day repair, emergency repair, 24/7 service, samsung lg repair, whirlpool bosch repair, غسالة إصلاح الرياض, غسالة اوتوماتيك, تصليح ثلاجات الرياض, صيانة غسالات, صيانة ثلاجات, تصليح غسالات اوتوماتيك, فني غسالات, فني ثلاجات, خدمة طوارئ, إصلاح سريع, خدمة في نفس اليوم, متاح 24 ساعة" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#14b8a6" />
        <meta name="msapplication-TileColor" content="#14b8a6" />
        
        {/* Author & Robots */}
        <meta name="author" content="Riyadh Repairing Service" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Geographic Info */}
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="Riyadh" />
        <meta name="geo.position" content="24.7136;46.6753" />
        
        {/* Contact Info */}
        <meta name="contact" content="riyadhrepairingservice@gmail.com" />
        <meta name="telephone" content="+966598001569" />
        
        {/* ==================== HREFLANG TAGS ==================== */}
        <link rel="alternate" href="https://riyadhrepairingservice.com/" hreflang="en" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/ar/" hreflang="ar" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/" hreflang="x-default" />
        
        {/* ==================== OPEN GRAPH - ENGLISH ==================== */}
        <meta property="og:site_name" content="Riyadh Repairing Service" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Expert Washing Machine & Refrigerator Repair in Riyadh - Same-Day Service" />
        <meta property="og:description" content="Professional washing machine and refrigerator repair in Riyadh. Automatic washing machine repair, fridge repair, same-day service, 24/7 emergency repairs. Call +966598001569" />
        <meta property="og:image" content="https://riyadhrepairingservice.com/src/assets/images/footer_logo.png" />
        <meta property="og:url" content="https://riyadhrepairingservice.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ar_SA" />
        
        {/* ==================== OPEN GRAPH - ARABIC ==================== */}
        <meta property="og:title:ar" content="خدمة تصليح غسالات وثلاجات احترافية في الرياض - خدمة في نفس اليوم" />
        <meta property="og:description:ar" content="خدمات احترافية في تصليح الغسالات والثلاجات في الرياض. تصليح الغسالات الأوتوماتيكية، تصليح الثلاجات، خدمة في نفس اليوم، إصلاحات طوارئ 24/7. اتصل +966598001569" />
        
        {/* ==================== TWITTER CARD - ENGLISH ==================== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@riyadhrepairs" />
        <meta name="twitter:title" content="Washing Machine & Refrigerator Repair Riyadh | 24/7 Service" />
        <meta name="twitter:description" content="Expert washing machine repair, automatic washing machine repair & refrigerator repair in Riyadh. Same-day service available! +966598001569" />
        <meta name="twitter:image" content="https://riyadhrepairingservice.com/src/assets/images/footer_logo.png" />
        
        {/* ==================== TWITTER CARD - ARABIC ==================== */}
        <meta name="twitter:title:ar" content="تصليح الغسالات والثلاجات في الرياض | خدمة 24/7" />
        <meta name="twitter:description:ar" content="خدمة متخصصة في تصليح الغسالات والغسالات الأوتوماتيكية والثلاجات في الرياض. خدمة في نفس اليوم! +966598001569" />
        
        {/* Mobile Optimization */}
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Security */}
        <meta http-equiv="X-Content-Type-Options" content="nosniff" />
        <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
        
        {/* Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      <SchemaMarkup />
      <BrowserRouter>
        <ScrollToTop />
        <PageViewTracker />
        <Navbar />
        <FloatingSocialButtons />

        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/refrigerator-repair" element={<RefrigeratorRepair />} />
            <Route path="/washing-machine-repair" element={<WashingMachineRepair />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;