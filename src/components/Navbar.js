import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <h1>Wildlife Surveillance</h1>
      <div className={`flex-container ${isOpen ? 'show' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/record">Record</Link>
        <Link to="/contact">Contact</Link>
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
