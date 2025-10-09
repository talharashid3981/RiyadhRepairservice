import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import Blog from './pages/Blog.jsx'
import ScrollToTop from './components/ScrollToTop.jsx' // ✅ Added
import FloatingSocialButtons from './components/FloatingSocialButtons.jsx';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop /> {/* ✅ This will reset scroll position on route change */}
        <Navbar />
           <FloatingSocialButtons />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
