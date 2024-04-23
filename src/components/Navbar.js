import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import clickSound from './assets/audio.mp3';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleSoundEnded = () => {
    // Restart the audio playback when it finishes
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset currentTime to restart playback
      audioRef.current.play();
    }
  };

  const handleItemClick = () => {
    playSound();
    toggleMenu(); // Close the menu when an item is clicked (optional)
  };

  return (
    <nav>
      <h1>Wildlife Surveillance</h1>
      <div className={`flex-container ${isOpen ? 'show' : ''}`}>
        <Link to="/" onClick={toggleMenu} onClick={handleItemClick}>Home</Link>
        <Link to="/record">Record</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        <audio ref={audioRef} src={clickSound} onEnded={handleSoundEnded} />
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
