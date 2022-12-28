import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
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
      <Contact />
      <Footer />

      <SocialLinks />
    </div>
  );
};

export default App;