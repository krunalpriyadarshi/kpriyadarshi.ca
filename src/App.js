// App.jsx
import React, { useState } from 'react';
import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import Banner from './components/banner/Banner';
import Project from './components/project/Project';
import SkillsShowcase from './components/skillsShowcase/SkillsShowcase';
import Footer from './components/footer/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div style={{margin: "0px 0px 35px 0px"}}/>
      <NavigationBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Banner />
      <Project />
      <SkillsShowcase />
      <Footer />
    </div>
  );
}

export default App;
