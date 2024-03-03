import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import lionImage from './images/lion.jpg';
import Tiger from './images/Tiger.webp';
import Rhino from './images/Rhino.jpg';

const Home = () => {
  return (
    <><Navbar></Navbar>
      <div className='home'>
        <div className='container'>

          <div>
            <h1 className='theme'>Manage all your <br></br>observation in one <br></br>place</h1>
            <p className='model'>Wildtrack AI model.</p>
          </div>
          <div>
            <img className='lion_image' src={lionImage} alt="Lion" />
            <img className='Tiger-image' src={Tiger} alt='Tiger' />
            <img className='Rhion-image' src={Rhino} alt='Rhion'/>
          </div>
        </div>
        <p className='manage_paragraph'>
In nature, wildlife symbolizes beauty, resilience, and diversity. Protecting it is crucial due to habitat
 loss, climate change, and human encroachment. Wildlife recognition systems, utilizing AI and 
 data analytics, aid in identifying species and monitoring biodiversity. They foster wonder and 
 connection by revealing hidden wildlife behavior patterns. Embracing wildlife recognition is essential
  for conservation efforts. Together, let's safeguard biodiversity and create a brighter future.</p>
        <h3 className='feature'>App Features.</h3>
        <p className='purpose'>
          WildTrack AI model make it easy to collect and manage your observation.
        </p>

      </div>
    </>
  );
};

export default Home;
