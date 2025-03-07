import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero-section">
        <h1>Hi, I'm Anjani Kumar Kandula</h1>
        <p>Welcome to my portfolio! I’m a passionate developer skilled in React, Node.js, and more.</p>
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I am a software engineer with experience in web development, machine learning, and systems engineering.
          My goal is to build efficient and impactful software solutions.
        </p>
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1: Financial Recommendation System</h3>
          <p>
            A system that provides tailored financial advice using machine learning algorithms.
          </p>
        </div>
        <div className="project">
          <h3>Project 2: Park Assist Simulation</h3>
          <p>
            An automotive simulation for enhanced park assist functionality, improving efficiency by 80%.
          </p>
        </div>
      </section>

      <footer id="contact" className="footer">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/akkandula/">linkedin</a></p>
      </footer>
    </div>
  );
}

export default App;
