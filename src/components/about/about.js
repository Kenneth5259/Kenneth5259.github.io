import React, {useState, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

import TileContainer from './tile/tile-container';

// Start Assets Import
import aboutImage from './images/about.jpg';
import './assets/about.css';
import './assets/desktop-app.css';
import resumeDoc from "./assets/Resume.pdf";
// End Assets Import

const About = (props) => {
    const [tabletMode, toggleTablet] = useState('false');
    const updatePredicate = () => {
        toggleTablet(window.innerWidth > 970 && window.innerWidth < 1250);
      }
    
      useEffect(() => {
        updatePredicate()
        window.addEventListener("resize", updatePredicate);
      }, [])

    const image = (
        <div className="about__upper__image__container">
            <img className="about__upper__image" src={aboutImage} alt="Place Picture Here"/>
        </div>);
    return(<div className="about">
    <div className="about__upper">
        <div className="about__upper__body">
            <strong><h1 className="about__upper__body__title">Kenneth Carroll</h1></strong>
            { (!props.isDesktop) || tabletMode ? image : null}
            <h3 className="about__upper__body__subtitle">Full Stack Engineer</h3>
            <p className="about__upper__body__description">I'm an experienced engineer proficient across multiple technology stacks included web development, machine learning, and embedded systems. I am passionate about anything technology and am working on a Master's in CS alongside my current software projects.</p>
            <div className="about__upper__body__buttons">
                <button className="about__upper__body__buttons__portfolio" onClick={()=>{props.setActiveNav('portfolio')}}><div className="about__upper__body__buttons__icon"><FontAwesomeIcon icon={faArrowCircleRight} size='1x'/></div>Portfolio</button>
                <a href={resumeDoc} target="_blank"className="about__upper__body__buttons__resume"><div className="about__upper__body__buttons__icon"><FontAwesomeIcon icon={faFileAlt} size='1x'/></div>Resume</a>
            </div>
            
        </div>
        {(!props.isDesktop) || tabletMode ? null : image}
    </div>
    <TileContainer/>
    
</div>
)
}

export default About;