import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

// Start Assets Import
import aboutImage from './images/about.jpg';
import angularImage from './images/angularjs.svg';
import cppImage from './images/c++.svg';
import cImage from './images/c.svg';
import javascriptImage from './images/javascript.svg';
import linuxImage from './images/linux.png';
import macOsImage from './images/mac-os.svg';
import nodeImage from './images/nodejs.svg';
import pythonImage from './images/python.svg';
import reactNativeImage from './images/react-native.svg';
import win10 from './images/windows-10.svg';
import './assets/about.css';
import './assets/desktop-app.css';
// End Assets Import

const About = () => {
    return(<div className="about">
    <div className="about__upper">
        <div className="about__upper__body">
            <strong><h1 className="about__upper__body__title">Kenneth Carroll</h1></strong>
            <h3 className="about__upper__body__subtitle">Full Stack Engineer</h3>
            <p className="about__upper__body__description">I'm an experienced engineer proficient across multiple technology stacks included web development, machine learning, and embedded systems. I am passionate about anything technology and am working on a Master's in CS alongside my current software work.</p>
            <div className="about__upper__body__buttons">
                <button className="about__upper__body__buttons__portfolio"><div className="about__upper__body__buttons__icon"><FontAwesomeIcon icon={faArrowCircleRight} size='1x'/></div>View Portfolio</button>
                <button className="about__upper__body__buttons__resume"><div className="about__upper__body__buttons__icon"><FontAwesomeIcon icon={faFileAlt} size='1x'/></div>View Resume</button>
            </div>
        </div>
        <div className="about__upper__image__container">
            <img className="about__upper__image" src={aboutImage} alt="Place Picture Here"/>
        </div>
    </div>
    <div className="about__lower">
        <div className="about__lower__tile">
            <div className="about__lower__tile__icons">
                <img src={javascriptImage} alt="jvscript"/>
            </div>
            <p className="about__lower__tile__title">
                Vanilla JavaScript
            </p>
            <p className="about__lower__tile__desc">
                With a strong understanding of vanilla javascript, I can add a large array of advance functionality to your website.
            </p>
        </div>
        <div className="about__lower__tile">
            <div className="about__lower__tile__icons">
                <img src={angularImage} alt="angular"/>
                <img src={reactNativeImage} alt="react"/>
            </div>
            <p className="about__lower__tile__title">
                Angular & React
            </p>
            <p className="about__lower__tile__desc">
                Having built applications in both, I can work in SPA's using either or make recommendations 
                for which best fits new projects.
            </p>
        </div>
        <div className="about__lower__tile">
            <div className="about__lower__tile__icons">
                <img src={nodeImage} alt="nodejs" style={{marginLeft: '0.25rem'}}/>
            </div>
            <p className="about__lower__tile__title">
                Node.js
            </p>
            <p className="about__lower__tile__desc">
                Through building scalable microservices and lean middleware I can engineer the solution right for 
                your project.
            </p>
        </div>
        <div className="about__lower__tile">
            <div className="about__lower__tile__icons">
                <img src={pythonImage} alt="python"/>
            </div>
            <p className="about__lower__tile__title">
                Python & Keras
            </p>
            <p className="about__lower__tile__desc">
                With an undergrad thesis in Neural Networks and pursuing a Master's focused in Machine Learning,
                I can turn you data it a powerful tool 
            </p>
        </div>
        <div className="about__lower__tile">
            <div className="about__lower__tile__icons">
                <img src={cImage} alt="c"/>
                <img src={cppImage} alt="c"/>
            </div>
            <p className="about__lower__tile__title">
                C & C++
            </p>
            <p className="about__lower__tile__desc">
                Experienced testing and developing realt time control systems and software for multiple Aerospace and Defence
                projects, including GE and NASA 
            </p>
        </div>
        <div className="about__lower__tile">
            <div className="about__lower__tile__icons">
                <img src={linuxImage} alt="linux"/>
                <img src={macOsImage} alt="mac"/>
                <img src={win10} alt="windows"/>
            </div>
            <p className="about__lower__tile__title">
                Operating Systems
            </p>
            <p className="about__lower__tile__desc">
                Years of work in all three major ecosystems, including compiling custom linux images, virtualization
                and cross platform development
            </p>
        </div>
    </div>
    
</div>
)
}

export default About;