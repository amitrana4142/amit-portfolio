import { useState } from 'react';
import './App.css';
import LoadingScreen from './components/effects/LoadingScreen';
import GridOverlay from './components/effects/GridOverlay';
import ParticleField from './components/effects/ParticleField';
import CustomCursor from './components/effects/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Hobbies from './components/sections/Hobbies';
import Gallery from './components/sections/Gallery';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      {loaded && (
        <div className="app">
          <GridOverlay />
          <ParticleField />
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Hobbies />
            <Gallery />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
