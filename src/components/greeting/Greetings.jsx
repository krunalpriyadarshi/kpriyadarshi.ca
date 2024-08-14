// Greetings.jsx
import React, { useState } from 'react';
import './Greetings.css';
import icon1 from '../../assets/imgs/Yo.png';
import icon2 from '../../assets/imgs/Yo2.png';

const Greetings = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="greetings-container" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className={`greetings-icon-container ${hovered ? 'hovered' : ''}`}>
        <img src={hovered ? icon2 : icon1} alt="Icon" className="greetings-icon" />
      </div>
      <div className={`greetings-text-container ${hovered ? 'hovered' : ''}`}>
        <p className="greetings-text">Get in touch</p>
      </div>
    </div>
  );
}

export default Greetings;
