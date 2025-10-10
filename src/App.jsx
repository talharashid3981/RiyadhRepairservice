import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact.jsx";
import Footer from "./layout/Footer.jsx";
import Blog from "./pages/Blog.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx"; // ✅ Added
import FloatingSocialButtons from "./components/FloatingSocialButtons.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <FloatingSocialButtons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
