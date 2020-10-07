import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

import TileContainer from './tile/tile-container';

// Start Assets Import
import aboutImage from './images/about.jpg';
import './assets/about.css';
import './assets/desktop-app.css';
// End Assets Import

const About = (props) => {
    return(<div className="about">
    <div className="about__upper">
        <div className="about__upper__body">
            <strong><h1 className="about__upper__body__title">Kenneth Carroll</h1></strong>
            <h3 className="about__upper__body__subtitle">Full Stack Engineer</h3>
            <p className="about__upper__body__description">I'm an experienced engineer proficient across multiple technology stacks included web development, machine learning, and embedded systems. I am passionate about anything technology and am working on a Master's in CS alongside my current software work.</p>
            <div className="about__upper__body__buttons">
                <button className="about__upper__body__buttons__portfolio" onClick={()=>{props.setActiveNav('portfolio')}}><div className="about__upper__body__buttons__icon"><FontAwesomeIcon icon={faArrowCircleRight} size='1x'/></div>View Portfolio</button>
                <button className="about__upper__body__buttons__resume"><div className="about__upper__body__buttons__icon"><FontAwesomeIcon icon={faFileAlt} size='1x'/></div>View Resume</button>
            </div>
        </div>
        <div className="about__upper__image__container">
            <img className="about__upper__image" src={aboutImage} alt="Place Picture Here"/>
        </div>
    </div>
    <TileContainer/>
    
</div>
)
}

export default About;