import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './testimonial.css';
import { faChevronCircleLeft, faChevronCircleRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
    {
        author: 'Donovan Poe',
        title: 'Systems Engineer',
        body: "I've worked with a lot of people on many different projects, and often times it is hard to find people who really know what they are doing. Kenneth is one of the few people that I have worked with where that was not an issue. In every aspect of coding and computer science I have seen him take charge and excel. I worked with Kenneth at NASA's Marshal Space Flight Center where he impressed everyone with his ability to think outside the box and solve problems in new and creative ways.",
        linkedin: 'https://www.linkedin.com/in/donovan-poe-171b20107/'
    }, 
    {
        author: 'Aaron Zucherman',
        title: 'Researcher and Technologist',
        body: "Kenneth Carroll was the software lead for Morehead's Dependable Multiprocessor (DM) technology project that I was the leader for. Working with him was both an honor and a pleasure. Kenneth has this uncanny ability to quickly and effectively explain complex computing and algorithmic concepts in such a way that even the most mechanically minded engineer like myself could understand. Anytime I was lost in the complexities of the program's software tasks he would put me on the correct path that he would implement with speed and efficiency.",
        linkedin: 'https://www.linkedin.com/in/aaron-zucherman'
    }
]

const Testimonial = () => {

    const[testIndex, setIndex] = useState(0);

    const incIndex = () => {
        if(testIndex < testimonials.length - 1) {
            setIndex(testIndex + 1);
        } else {
            setIndex(0);
        }
    }

    const decIndex = () => {
        if(testIndex > 0) {
            setIndex(testIndex - 1);
        } else {
            setIndex(testimonials.length - 1);
        }
    }

    return(
        <div className='testimonials'>
            <div className='testimonials__testimonial'>
                <div className='testimonials__testimonial__body'>{testimonials[testIndex].body}</div>

                <div className='testimonials__testimonial__author'><a target='_blank' href={testimonials[testIndex].linkedin} className='testimonials__testimonial__author__link'> - {testimonials[testIndex].author}</a></div>
                <div className='testimonials__testimonial__title'>{testimonials[testIndex].title}</div>
                
            </div> 
            <span className='testimonials__testimonial__buttons'>
                    <button className='testimonials__testimonial__buttons__button' onClick={decIndex}> <FontAwesomeIcon icon={faChevronCircleLeft} size='3x'/> </button>
                    <button className='testimonials__testimonial__buttons__button' onClick={incIndex}> <FontAwesomeIcon icon={faChevronCircleRight} size='3x'/> </button>
                </span>
        </div> 
            
    )
}

export default Testimonial;