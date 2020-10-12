import React, {useState, useEffect} from 'react';

import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import Testimonial from './components/testimonial/testimonial';

import Sidebar from './components/desktop/sidebar/sidebar';
import NavBar from './components/mobile/navbar/navbar';
import Footer from './components/mobile/footer/footer';

import './App.css';

function App() {

  const [isDesktop, toggleDesktop] = useState(true);
  const [activeNav, setActiveNav] = useState('about');
  const updatePredicate = () => {
    toggleDesktop(window.innerWidth > 1024);
  }

  useEffect(() => {
    updatePredicate()
    window.addEventListener("resize", updatePredicate);
  }, [])
  
  return (
    <div className="container">
        {isDesktop ? <Sidebar activeNav={activeNav} setActiveNav={setActiveNav}/> : <NavBar setActiveNav={setActiveNav}/>}
        { activeNav === 'about' ? <About setActiveNav={setActiveNav} isDesktop={isDesktop}/> : null}
        { activeNav === 'portfolio' ? <Portfolio/> : null}
        { activeNav === 'resume' ? <Resume /> : null}
        { activeNav === 'testimonials' ? <Testimonial /> : null}
        {isDesktop ? null : <Footer/>}
		</div>
  );
}

export default App;
