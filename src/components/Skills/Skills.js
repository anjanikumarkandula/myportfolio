// src/components/Skills/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { icon: 'fas fa-microchip', title: 'Embedded C/C++', description: 'Developing efficient firmware for microcontrollers and embedded systems.' },
    { icon: 'fas fa-bolt', title: 'RTOS', description: 'Experience with FreeRTOS, Zephyr, and other real-time operating systems.' },
    { icon: 'fas fa-code', title: 'Python', description: 'Scripting, testing automation, and tools development for embedded systems.' },
    { icon: 'fas fa-project-diagram', title: 'PCB Design', description: 'Basic knowledge of schematic design and PCB layout for prototyping.' },
    { icon: 'fas fa-wifi', title: 'IoT Protocols', description: 'Experience with BLE, LoRa, MQTT, and other IoT communication protocols.' },
    { icon: 'fas fa-cogs', title: 'Hardware Debugging', description: 'Using oscilloscopes, logic analyzers, and JTAG debuggers to solve hardware issues.' },
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <i className={skill.icon}></i>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;