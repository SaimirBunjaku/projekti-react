import React from 'react';
import './Filler.css';
import testImage from './components/img/sidepic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Filler() {
  return (
    <div className="filler-container">
      <div className="filler-left">
        <h1>Attention is the asset, and the</h1>
        <h1>internet owns it.</h1>
        <p>Kosova Based Creative Digital Agency.</p>
        <div className="buttons">
          <button className="btn btn-primary">What we do</button>
          <button className="btn btn-transparent">Learn more</button>
        </div>
        <br></br> <br></br> <br></br> <br></br>
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook}  size = '3x'className="icon" />
          <FontAwesomeIcon icon={faInstagram} size = '3x' className="icon1" />
          <FontAwesomeIcon icon={faTwitter} size = '3x' className="icon1" />
        </div>
      </div>
      <div className="filler-right">
        <img src={testImage} alt="Illustration" />
      </div>
    </div>
    
  );
}

export default Filler;
