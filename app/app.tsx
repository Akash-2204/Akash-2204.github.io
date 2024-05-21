"use client";
import { useContext } from 'react';
import './app.css';
import About from './components/about/about';
import { ThemeContext } from './contexts/theme';
import Header from './components/header/header';
import Footer from './footer/footer';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Scroll from './components/scroll/scroll';

const App: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('ThemeContext is undefined');
  }
  const { themeName } = themeContext;
  
    return (
      <div id="top" className={`${themeName} app`}>
        <Header />
  
        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
  
        <Scroll />
        <Footer />
      </div>
    );
  };
  
  export default App;