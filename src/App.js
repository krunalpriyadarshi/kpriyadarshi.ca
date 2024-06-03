import React from 'react';
import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import Banner from './components/banner/Banner';
import Expeience from './components/experience/WorkExperience';
import Greetings from './components/greeting/Greetings';

const App = () => {

  return (
    <div>
      <NavigationBar />
      <Banner />
      <Expeience /> 
      <Greetings />
    </div>
  );
}

export default App;
