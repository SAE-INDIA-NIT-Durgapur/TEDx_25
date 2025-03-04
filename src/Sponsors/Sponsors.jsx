import React, { useEffect, useState } from 'react';
import './Sponsors.css';
import Navbar from '../Navbar/Navbar';
import TS1 from "./ABC.jpg";
import AS1 from "./AS1.png";
import MP2 from "./MP2.png";
import FP1 from "./FP1.png";
import FP2 from "./FP2.png";
import FP3 from "./FP3.png";
import Footer from '../Footer/Footer';
/*import MP2 from "./MP2.png";
import MP3 from "./MP3.png";
import MP1 from "./MP1.png";
import AS2 from "./AS2.png";
import AS3 from "./AS3.png";*/

const Sponsors = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('fadeIn');
  }, []);

  return (
    <>
    <Navbar />
    <div className={`sponsors-container ${animationClass}`}>
      <h1 className="sponsors-heading">OUR SPONSORS</h1>

      <div className={`section ${animationClass}`}>
      <div className="sponsor-box">
        <h2 className="section-heading">TITLE SPONSOR</h2>
        <div className="sponsor-underline-0"></div>
        <img className="sponsor-image" src={TS1} alt="Title Sponsor" />
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula nunc ac nisl
          fermentum, ac tempus nunc consequat. Curabitur aliquam malesuada orci, eu faucibus erat.
        </p>
        </div>
        <div className="animated-line"></div>
      </div>

      <div className={`section ${animationClass}`}>
        <h2 className="section-heading">Associative Sponsors</h2>
        <div className="sponsor-underline-1"></div>
        <div className="sponsor-images">
          <img className="sponsor-image" src={AS1} alt="Associative Sponsor 1" />
          <img className="sponsor-image" src={AS1} alt="Associative Sponsor 2" />
          
        </div>
        <div className="animated-line"></div>
      </div>

      <div className={`section ${animationClass}`}>
        <h2 className="section-heading">Food Partners</h2>
        <div className="sponsor-underline"></div>
        <div className="sponsor-images">
          <img className="sponsor-image" src={FP1} alt="Food Partner 1" />
          <img className="sponsor-image" src={FP2} alt="Food Partner 2" />
          <img className="sponsor-image" src={FP3} alt="Food Partner 3" />
        </div>
        <div className="animated-line"></div>
      </div>

      <div className={`section ${animationClass}`}>
        <h2 className="section-heading">Media Partner</h2>
        <div className="sponsor-underline"></div>
        <div className="sponsor-images">
          
          <img className="sponsor-image" src={MP2} alt="Media Partner" />
          
        </div>
        <div className="animated-line"></div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Sponsors;


