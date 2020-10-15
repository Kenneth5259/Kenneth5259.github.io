import React from 'react';

import './job.css';

const Job = (props) => {
    let isActive = true;
    return(
        <div className='job'>
            <div className='job__header'>
                <h1 className='job__header__title'>{props.title}</h1>
                <h2 className='job__header__subtitle'>{props.subtitle}</h2>
                <h3 className='job__header__dates'>{props.startDate} - {props.endDate}</h3>
            </div>
            <div className='job__body'>
                {props.description}
            </div>
            <div className='job__footer'>
                {props.skills.map((skill) => (
                    <div className='job__footer__skill'>{skill}</div>
                ))}
            </div>
        </div>
    )
}

export default Job;