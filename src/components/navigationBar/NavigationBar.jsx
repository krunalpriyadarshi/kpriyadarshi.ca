import React from 'react';
import './NavigationBar.css';
import linkedinIcon from '../../assets/imgs/linkedin.png';
import mailIcon from '../../assets/imgs/gmail.png';

const NavigationBar = () => {
  const redirectToLinkedin= ()=>{
    window.open('https://www.linkedin.com/in/krunalpriyadarshi/', '_blank');
  }

  const toMail= ()=>{
    window.location.href = 'mailto:krunalpriyadarshi99@gmail.com';
  }

  return (
    <div className="navigation-bar light">
      <div className="left-section">
        <div className="nav-name">Krunal <span className='nav-lastName'>Priyadarshi</span></div>
      </div>
      <div className="right-section">
        <img className="icon glow" src={linkedinIcon} alt="LinkedIn" onClick={redirectToLinkedin}/>
        <img className="icon glow" src={mailIcon} alt="krunalpriyadarshi99@gmail.com" onClick={toMail}/>
      </div>
    </div>
  );
}

export default NavigationBar;
