import React from 'react';

import Project from './project';
import pulsar from '../assets/pulsar.jpg';
import porfolio from '../assets/portfolio.png';

const projects = [
    {
        title: 'Pulsar Neural Network',
        image: pulsar,
        desc: 'Using Python and the framework Keras, I created a series of neural network models for a binary classifier for the HTRU2 dataset. This classifier worked to determine if a signal could be a pulsar neutron star. In the repository is all the code compiled into one library, scripts used for generating and testing models, along with project timeline, a sample budget for an enterprise level implementation, and and a 25 page senior thesis.',
        link: 'https://github.com/Kenneth5259/Pulsar-Neural-Network'
    },
    {
        title: 'KJC Development',
        image: porfolio,
        desc: 'A responsive portfolio written in React deployed on github pages, and is the website you are currently on. The current master branch contains the react code for this site, while gh-pages holds the static page information from the build. The site is also SSL secured.',
        link: 'https://github.com/Kenneth5259/kenneth5259.github.io'
    }
]

const ProjectContainer = () => {
    return(
    <div className="portfolio__project__container">
        {projects.map((project) => {
            return(
                <Project title={project.title} image={project.image} desc={project.desc} link={project.link}/>
            )
        })}
    </div>)
}

export default ProjectContainer;