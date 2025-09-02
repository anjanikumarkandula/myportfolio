// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero active" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Embedded Systems <span>Engineer</span> & Firmware Developer</h1>
          <p>I design and develop efficient embedded solutions, combining low-level programming expertise with hardware knowledge to create innovative systems that bridge the digital and physical worlds.</p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;