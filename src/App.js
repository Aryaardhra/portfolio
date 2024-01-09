import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';

const App = () => {
  return (
   <>
   <Header />
   <Navbar />
   <Routes>
    <Route path="/" element={<About />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/services" element={<Services />} />
    </Routes>
   <Footer />

   </>
  )
}

export default App; 