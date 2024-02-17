import React, { useState } from "react";
import './DemoTesting.css';
const DemoTesting = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
lahohohofiesfe
  return (
    <nav>
      <button onClick={toggleDropdown}>Toggle Dropdown</button>
      <ul className={`dropdown ${isOpen ? "show" : ""}`}>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </nav>
  );
};

export default DemoTesting;