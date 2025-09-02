// src/components/Projects/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { 
      icon: 'fas fa-temperature-low', 
      title: 'Smart HVAC Controller', 
      description: 'An energy-efficient HVAC control system with IoT connectivity and machine learning-based optimization.',
      tags: ['C++', 'FreeRTOS', 'ESP32', 'MQTT']
    },
    { 
      icon: 'fas fa-car', 
      title: 'CAN Bus Analyzer', 
      description: 'A custom tool for analyzing and debugging CAN bus communications in automotive applications.',
      tags: ['C', 'STM32', 'CAN', 'Python']
    },
    { 
      icon: 'fas fa-heartbeat', 
      title: 'Wearable Health Monitor', 
      description: 'A low-power wearable device that tracks vital signs and transmits data via BLE to a mobile app.',
      tags: ['Zephyr RTOS', 'nRF52', 'BLE', 'Sensors']
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;