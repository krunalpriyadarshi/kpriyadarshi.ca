import React from 'react';
import './NavigationBar.css';
import linkedinIcon from '../../assets/imgs/linkedin.png';
import mailIcon from '../../assets/imgs/gmail.png';

const NavigationBar = () => {
  const redirectToCV= ()=>{
    window.open('https://drive.google.com/file/d/1LHv571ivIEFOlp9Zz2Kk2Xcq4xc_KnQD/view?usp=drive_link', '_blank');
  }

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
        <div className="glow word-icon" title="View Resume" onClick={redirectToCV}>Resume</div>
        <img className="icon glow" src={linkedinIcon} alt="LinkedIn" title="Explore My Linkedin Profile" onClick={redirectToLinkedin}/>
        <img className="icon glow" src={mailIcon} alt="krunalpriyadarshi99@gmail.com" title="Connect Me via an Email" onClick={toMail}/>
      </div>
    </div>
  );
}

export default NavigationBar;
