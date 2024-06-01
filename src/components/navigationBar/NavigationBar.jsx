// NavigationBar.jsx
import React from 'react';
import './NavigationBar.css';
import lightModeIcon from '../../assets/imgs/light-mode.png';
import darkModeIcon from '../../assets/imgs/dayNight.png';
import mailIcon from '../../assets/imgs/gmail.png';
import linkedinIcon from '../../assets/imgs/linkedin.png';

const NavigationBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`navigation-bar ${darkMode ? 'dark' : 'light'}`}>
      <div className="left-section">
        <p className="name">Krunal Priyadarshi</p>
      </div>
      <div className="right-section">
        <img className="icon glow" src={darkMode ? darkModeIcon : lightModeIcon} alt="Mode Toggle" onClick={toggleDarkMode} />
        <img className="icon glow" src={linkedinIcon} alt="LinkedIn" />
        <img className="icon glow" src={mailIcon} alt="Mail" />
      </div>
    </div>
  );
}

export default NavigationBar;
