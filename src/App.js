import React from 'react';
import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import Banner from './components/banner/Banner';
import Project from './components/project/Project';
import Expeience from './components/experience/WorkExperience';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <div>
      <NavigationBar />
      <Banner />
      <Expeience />
      <Project />
    </div>
  );
}

export default App;
