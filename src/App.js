import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import Banner from './components/banner/Banner';
import Expeience from './components/experience/WorkExperience';
import Greetings from './components/greeting/Greetings';
import MessageBar from './components/messageBar/MessageBar';
import Certifications from './components/certifications/Certifications';
import Marquee from './components/marquee/Marquee';
import Footer from './components/footer/Footer';
import LoopingDivs from './components/loopingDivs/LoopingDivs';
import Projects from './components/projects';

const App = () => {

  return (
    <div>


      
      <NavigationBar />
      <MessageBar />
      <Banner />
      <Expeience /> 
      <Projects />
      <Marquee />
      <Certifications />
      <Greetings />
      <Footer />


      {/*     
      <LoopingDivs />  
      <NavigationBar />
      <MessageBar />
      <Banner />
      <Expeience /> 
      <Marquee />
      <Certifications />
      <Greetings />
      <Footer />

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
