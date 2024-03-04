// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <h1>Wildlife Surveillance</h1>
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <div className='flex-container'>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/record" onClick={closeMenu}>Record</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
