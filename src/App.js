import React, {useState, useEffect} from 'react';

import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import Testimonial from './components/testimonial/testimonial';
import Contact from './components/contact/contact';

import Sidebar from './components/desktop/sidebar/sidebar';
import NavBar from './components/mobile/navbar/navbar';
import Footer from './components/mobile/footer/footer';


function App() {

  const [isDesktop, toggleDesktop] = useState(true);
  const [activeNav, setActiveNav] = useState('about');
  const [showForm, toggleForm] = useState(false);
  const updatePredicate = () => {
    toggleDesktop(window.innerWidth > 970);
  }

  useEffect(() => {
    updatePredicate()
    window.addEventListener("resize", updatePredicate);
  }, [])
  
  return (
    <div style={isDesktop ? styles.desktop : styles.mobile}>
        {isDesktop ? <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} toggleForm={toggleForm}/> : <NavBar setActiveNav={setActiveNav}/>}
        { activeNav === 'about' ? <About setActiveNav={setActiveNav} isDesktop={isDesktop}/> : null}
        { activeNav === 'portfolio' ? <Portfolio/> : null}
        { activeNav === 'resume' ? <Resume /> : null}
        { activeNav === 'testimonials' ? <Testimonial /> : null}
        { showForm ? <Contact toggleForm={toggleForm}/> : null}
        {isDesktop ? null : <Footer/>}
		</div>
  );
}
const styles={
  desktop: {
    display: 'flex',
    flexDirection: 'row'
  },
  mobile: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default App;
