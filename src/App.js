import React from 'react';
import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import Banner from './components/banner/Banner';
import Expeience from './components/experience/WorkExperience';
import Greetings from './components/greeting/Greetings';
import MessageBar from './components/messageBar/MessageBar';

const App = () => {

  return (
    <div>
      <NavigationBar />
      <MessageBar />
      <Banner />
      <Expeience /> 
      <Greetings />

      {/* 
      #4K - 2560px
      Laptop L - 1440px
      Laptop - 1024px
      Tablet - 768px
      Mobile L- 425px
      Mobile M - 375px
      Mobile S - 320px
      */}
      
    </div>
  );
}

export default App;
