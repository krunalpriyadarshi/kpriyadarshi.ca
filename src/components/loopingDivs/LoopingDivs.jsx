import React, { useEffect, useRef } from 'react';
import './LoopingDivs.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavigationBar from '../navigationBar/NavigationBar';
import Banner from '../banner/Banner';
import Expeience from '../experience/WorkExperience';
import Greetings from '../greeting/Greetings';
import MessageBar from '../messageBar/MessageBar';
import Certifications from '../certifications/Certifications';
import Marquee from '../marquee/Marquee';
import Footer from '../footer/Footer';


const LoopingDivs = () => {
  const lastScrollTopRef = useRef(0); // Use a ref to store the last scroll position
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // Detect scroll direction
      const lastScrollTop = lastScrollTopRef.current;
      const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';

      // Update last scroll position
      lastScrollTopRef.current = scrollTop;

      // If user scrolls to the bottom and is scrolling down, scroll to the top
      if (scrollTop + winHeight >= docHeight && scrollDirection === 'down') {
        window.scrollTo(0, 1); // Smoothly scroll to the top
      }

      // If user scrolls to the top and is scrolling up, scroll to the bottom
      if (scrollTop <= 0 && scrollDirection === 'up') {
        window.scrollTo(0, docHeight - winHeight - 1); // Smoothly scroll to the bottom
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the scroll event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="looping-divs-container">
        
      <NavigationBar />
      <MessageBar />
      <Banner />
      <Expeience /> 
      <Marquee />
      <Certifications />
      <Greetings />
      <Footer />
    </div>
  );
};

export default LoopingDivs;
