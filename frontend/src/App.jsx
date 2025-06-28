// Main React Component Structure for Yuvraj Bhatkar's Portfolio
// Technologies: React, Tailwind CSS, Framer Motion, Node.js, Express, MongoDB

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CertificateView from './components/CertificateView';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeDownload from './components/ResumeDownload';
import DarkModeToggle from './components/DarkModeToggle';


function App() {
  return (
    <Router>
      <DarkModeToggle />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <>
              <Hero 
                name="Yuvraj Bhatkar" 
                title="Full-Stack Developer" 
                typewriterText={["Building Scalable Web Apps", "Crafting Interactive UIs", "MERN Stack Enthusiast"]} 
                imageUrl="/assets/photo_2023-12-22_02-06-42.jpg" 
              />
              <About />
              <Skills />
              <Projects />
              <WorkExperience />
              <Education />
              <Certifications />
              <ResumeDownload />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/certificate/:id" element={<CertificateView />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
