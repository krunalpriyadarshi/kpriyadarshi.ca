// MessageBar.jsx
import React, { useState, useEffect } from 'react';
import './MessageBar.css';

const MessageBar = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showConnectionMessage, setShowConnectionMessage] = useState(false);
  const [showMobileMessage, setShowMobileMessage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setShowMobileMessage(true);
      } else {
        setShowMobileMessage(false);
      }
    };

    const handleOnline = () => {
      setIsOnline(true);
      setShowConnectionMessage(true);
      setTimeout(() => setShowConnectionMessage(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowConnectionMessage(true);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
      {showMobileMessage && (
        <div className="message-bar mobile-message">
          Best viewed on desktop for full experience
        </div>
      )}
      {showConnectionMessage && (
        <div className={`message-bar ${isOnline ? 'online' : 'offline'}`}>
          {isOnline ? 'You are back online' : 'You\'ve lost internet connection'}
        </div>
      )}
    </div>
  );
};

export default MessageBar;
