// src/components/ElectricBusLines/ElectricBusLines.js
import React from 'react';
import './ElectricBusLines.css';

const ElectricBusLines = () => {
  return (
    <div className="electric-bus" id="electricBus">
      <div className="bus-line line-1"></div>
      <div className="bus-line line-2"></div>
      <div className="bus-line line-3"></div>
      <div className="bus-line line-4"></div>
      
      <div className="bus-node node-1"></div>
      <div className="bus-node node-2"></div>
      <div className="bus-node node-3"></div>
      <div className="bus-node node-4"></div>
      
      <div className="component component-1">MCU</div>
      <div className="component component-2">C</div>
      <div className="component component-3">I/O</div>
    </div>
  );
};

export default ElectricBusLines;