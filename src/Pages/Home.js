import React, { useState, useEffect } from 'react';
import './Home.css';
import lionImage from './images/lion.jpg';
import Tiger from './images/Tiger.webp';
import Rhino from './images/Rhino.jpg';

const Home = () => {
  const sentences = [
    "In nature, wildlife symbolizes beauty, resilience, and diversity.",
    "Protecting it is crucial due to habitat loss, climate change, and human encroachment.",
    "Wildlife recognition systems, utilizing AI and data analytics, aid in identifying species and monitoring biodiversity.",
    "They foster wonder and connection by revealing hidden wildlife behavior patterns.",
    "Embracing wildlife recognition is essential for conservation efforts.",
    "Together, let's safeguard biodiversity and create a brighter future."
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      setIsHidden(false); // Show the paragraph before transitioning to the next sentence
    }, 500); // Interval in milliseconds (e.g., 5000ms = 5 seconds)

    return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
  }, [sentences.length]);

  const handleTransitionEnd = () => {
    setIsHidden(true); // Hide the paragraph after the animation ends
  };

  return (
    <div className='home'>
      <div className='container'>
        <div>
          <h1 className='theme'>Manage all your <br />observation in one <br />place</h1>
          <p className='model'>Wildtrack AI model.</p>
        </div>
        <div>
          <img className='lion_image' src={lionImage} alt="Lion" />
          <img className='Tiger-image' src={Tiger} alt='Tiger' />
          <img className='Rhion-image' src={Rhino} alt='Rhino' />
        </div>
      </div>

      <div className='manage_paragraph'>
        <p
          className={`sentence ${isHidden ? 'hidden' : ''}`}
          onTransitionEnd={handleTransitionEnd}
        >
          {sentences[activeIndex]}
        </p>
      </div>

      <h3 className='feature'>SAVE, PRESERVE, AND CONSERVE WILDLIFE.</h3>
      <p className='purpose'>
        WildTrack AI model makes it easy to collect and manage your observations.
      </p>
    </div>
  );
};

export default Home;
