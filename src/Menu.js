import React, { useState } from 'react'
import './Navigation.css';  // Importing the CSS file


function Menu() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="navigation">
      <div className="nav-brand">Mukhtar Ansari</div>
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#experience" onClick={toggleMenu}>Experience</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    </div>
  )
}

export default Menu
