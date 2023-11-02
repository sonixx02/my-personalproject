import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Project from './components/Projects';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import './App.css';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      var typed = new Typed(".typing", {
        strings: ["Student", "Web Developer", "Coder", "Researcher"],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true
      });
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <ProjectDetails />
      <Footer />
    </div>
  );
}

export default App;
