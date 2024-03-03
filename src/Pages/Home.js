import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import lionImage from './images/lion.jpg';

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
          </div>
        </div>
        <h3 className='feature'>App Features.</h3>
        <p className='purpose'>
          WildTrack AI model make it easy to collect and manage your observation.
        </p>

      </div>
    </>
  );
};

export default Home;
