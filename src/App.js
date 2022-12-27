import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />

      <SocialLinks />
    </div>
  );
};

export default App;