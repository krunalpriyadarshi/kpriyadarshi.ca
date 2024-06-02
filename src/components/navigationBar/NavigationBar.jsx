import React from 'react';
import './NavigationBar.css';
import linkedinIcon from '../../assets/imgs/linkedin.png';
import mailIcon from '../../assets/imgs/gmail.png';

const NavigationBar = () => {
  return (
    <div className="navigation-bar light">
      <div className="left-section">
        <div className="nav-name">Krunal Priyadarshi</div>
      </div>
      <div className="right-section">
        <img className="icon glow" src={linkedinIcon} alt="LinkedIn" />
        <img className="icon glow" src={mailIcon} alt="Mail" />
      </div>
    </div>
  );
}

export default NavigationBar;
