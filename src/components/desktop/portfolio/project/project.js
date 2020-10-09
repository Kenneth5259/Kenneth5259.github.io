import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = (props) => {
    return(
    <div className='portfolio__project'>
        <h3 className="portfolio__project__title">{props.title}</h3>
        <img className="portfolio__project__image" src={props.image} alt="plchldr"></img>
        <p className="portfolio__project__desc">{props.desc}</p>
        <span className="portfolio__project__button__flex__container">
            <a className="portfolio__project__button" target="_blank" href={props.link}><FontAwesomeIcon icon={faGithub} style={{marginRight: '1rem'}}/>Source Code</a>
        </span>
    </div>)
}

export default Project;