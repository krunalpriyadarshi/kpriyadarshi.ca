import React, { useState, useEffect } from 'react';
import './Banner.css';

const messages = [
  "\"Sleepy bear,\" known to hibernate through alarms and awaken to a mountain of unread messages. 🐻💤",
  "\"LeetCode solver,\" tackling algorithmic challenges with the precision of a seasoned coder. 💻🧩",
  "\"Multisports Noob,\" juggling coding challenges with the finesse of a klutzy octopus on roller skates. 🏀⚽",
  "\"skilled communicator,\" adept at conveying complex technical concepts with clarity and confidence. 💬🎙️"
];

const Banner = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Get the current message
      const message = messages[index];
      // Get the portion of the message to display
      const displayMessage = message.slice(0, currentMessage.length + 1);
      
      // Update the state to display the next character
      setCurrentMessage(displayMessage);

      // If the entire message is displayed, move to the next message
      if (displayMessage === message) {
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % messages.length);
          setCurrentMessage('');
        }, 0); // Pause for 2 seconds before moving to the next message
      }
    }, 100); // Typing speed: 100 milliseconds per character

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentMessage, index]);

  return (
    <div className="banner">
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>
      <div className="bubble bubble5"></div>
      <div className="content">
        <h1 className="name">I'm Krunal ✌🏼</h1>
        <p className="designation">Software Developer</p>
        <p className="message description">Also a <span className="typing-text">{currentMessage}</span></p>
        <button 
          className="custom-btn btn-11" 
          onClick={() => window.location.href= 'mailto:krunalpriyadarshi99@gmail.com'}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Banner;
