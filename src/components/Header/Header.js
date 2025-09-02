// src/components/Header/Header.js
import React from 'react';
import './Header.css';

const Header = ({ activeSection, setActiveSection }) => {
  const handleNavClick = (section) => {
    setActiveSection(section);
    // Scroll to section
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className={`logo ${activeSection ? 'active' : ''}`}>
            <i className="fas fa-microchip"></i> Embedded Portfolio
          </div>
          <ul className="nav-links">
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={activeSection === 'skills' ? 'nav-link active' : 'nav-link'}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('skills');
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('projects');
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;