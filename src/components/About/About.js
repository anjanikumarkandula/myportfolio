// src/components/About/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="name-seven-segment">
          <div className="segment-name">
            <span>A</span>
            <span>N</span>
            <span>J</span>
            <span>A</span>
            <span>N</span>
            <span>I</span>
            <span> </span>
            <span>K</span>
            <span>U</span>
            <span>M</span>
            <span>A</span>
            <span>R</span>
            <span> </span>
            <span>K</span>
            <span>A</span>
            <span>N</span>
            <span>D</span>
            <span>U</span>
            <span>L</span>
            <span>A</span>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-content">
            <p>I'm a passionate embedded software engineer with expertise in developing firmware for resource-constrained environments. My work spans from bare-metal programming to RTOS-based systems.</p>
            <p>With a strong foundation in electrical engineering and computer science, I enjoy solving complex problems at the intersection of hardware and software.</p>
            <p>My approach combines rigorous attention to detail with creative problem-solving to deliver efficient, reliable embedded solutions.</p>
          </div>
          <div className="about-image">
            <div style={{ backgroundColor: '#111', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#333' }}>
              <i className="fas fa-user" style={{ fontSize: '5rem' }}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;