// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import ElectricBusLines from './components/ElectricBusLines/ElectricBusLines';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const scrollTimeout = useRef(null);

  // Function to activate elements
  const activateElements = () => {
    // Activate bus lines
    document.querySelectorAll('.bus-line').forEach(line => {
      line.style.opacity = '0.7';
      line.style.boxShadow = '0 0 15px currentColor';
    });
    
    // Activate bus nodes
    document.querySelectorAll('.bus-node').forEach(node => {
      node.style.boxShadow = '0 0 15px currentColor';
      node.style.opacity = '1';
    });
    
    // Activate components
    document.querySelectorAll('.component').forEach(comp => {
      comp.style.boxShadow = '0 0 15px rgba(184, 115, 51, 0.5)';
      comp.style.opacity = '0.8';
      comp.style.color = '#b87333';
      comp.style.borderColor = '#b87333';
    });
    
    // Activate logo
    document.getElementById('logo')?.classList.add('active');
  };
  
  // Function to deactivate elements
  const deactivateElements = () => {
    // Deactivate bus lines
    document.querySelectorAll('.bus-line').forEach(line => {
      line.style.opacity = '0';
      line.style.boxShadow = '0 0 0px currentColor';
    });
    
    // Deactivate bus nodes
    document.querySelectorAll('.bus-node').forEach(node => {
      node.style.boxShadow = '0 0 0px currentColor';
      node.style.opacity = '0';
    });
    
    // Deactivate components
    document.querySelectorAll('.component').forEach(comp => {
      comp.style.boxShadow = '0 0 0px rgba(184, 115, 51, 0)';
      comp.style.opacity = '0';
      comp.style.color = '#444';
      comp.style.borderColor = '#333';
    });
    
    // Deactivate logo
    document.getElementById('logo')?.classList.remove('active');
  };
  
  // Function to hide only the origin dots (nodes)
  const hideOriginDots = () => {
    document.querySelectorAll('.bus-node').forEach(node => {
      node.style.opacity = '0';
      node.style.boxShadow = '0 0 0px currentColor';
    });
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Activate elements on scroll
      activateElements();
      
      // Clear the timeout if it has already been set
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set a timeout to deactivate elements after scrolling stops
      scrollTimeout.current = setTimeout(() => {
        deactivateElements();
      }, 1000);

      // Update active section based on scroll position
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize with elements deactivated
    deactivateElements();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Handle navigation clicks
  useEffect(() => {
    const handleNavClick = () => {
      // Activate elements but hide origin dots
      document.querySelectorAll('.bus-line').forEach(line => {
        line.style.opacity = '0.7';
        line.style.boxShadow = '0 0 15px currentColor';
      });
      
      // Hide the origin dots specifically
      hideOriginDots();
      
      // Activate components
      document.querySelectorAll('.component').forEach(comp => {
        comp.style.boxShadow = '0 0 15px rgba(184, 115, 51, 0.5)';
        comp.style.opacity = '0.8';
        comp.style.color = '#b87333';
        comp.style.borderColor = '#b87333';
      });
      
      // Activate logo
      document.getElementById('logo')?.classList.add('active');
      
      // Set a timeout to deactivate elements after a delay
      setTimeout(() => {
        deactivateElements();
      }, 2000);
    };

    // Add event listeners to nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <div className="App">
      <ElectricBusLines />
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;