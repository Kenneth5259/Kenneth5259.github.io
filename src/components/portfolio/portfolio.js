import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


import pulsar from './assets/pulsar.jpg';
import './portfolio.css';

const Portfolio = () => {
    return(
        <div className='portfolio'>
            <div className="portfolio__project__container">
                <div className='portfolio__project'>
                    <h3 className="portfolio__project__title">Pulsar Neural Network</h3>
                    <img className="portfolio__project__image" src={pulsar} alt="plchldr"></img>
                    <p className="portfolio__project__desc">Using Python and the framework Keras, I created a series of neural network models for a binary classifier for the HTRU2 dataset. This classifier worked to determine if a signal could be a pulsar neutron star. In the repository is all the code compiled into one library, scripts used for generating and testing models, along with project timeline, a sample budget for an enterprise level implementation, and and a 25 page senior thesis. </p>
                    <span className="portfolio__project__button__flex__container">
                        <a className="portfolio__project__button" target="_blank" href="https://github.com/Kenneth5259/Pulsar-Neural-Network"><FontAwesomeIcon icon={faGithub} style={{marginRight: '1rem'}}/>Source Code</a>
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio;