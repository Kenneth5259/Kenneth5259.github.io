import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faUser, faLaptopCode, faFileAlt, faPaperPlane, faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

//Assets and Styling import
import profileImage from './assets/profile.jpg';
import './assets/sidebar.css';
const Sidebar = (props) => {
    return(
        <div className="sidebar">
				<div className="sidebar__profile">
					<h2 className="sidebar__profile__name">Kenneth Carroll</h2>
					<img className="sidebar__profile__image" src={profileImage} alt="Insert Picture Here"/>
					<p className="sidebar__profile__bio"> 
						Hello, my name is Kenneth Carroll, please feel free to explore my portfolio
					</p>
					<div className="sidebar__profile__socials">
						<a href="https://linkedin.com/in/kenneth-james-carroll" target="_blank"><div className="sidebar__profile__social"><FontAwesomeIcon className="font-icon" icon={faLinkedinIn}/></div></a>
						<a href="https://twitter.com/kjcdev" target="_blank"><div className="sidebar__profile__social"><FontAwesomeIcon className="font-icon" icon={faTwitter} size='lg'/></div></a>
						<a href="https://github.com/kenneth5259" target="_blank"><div className="sidebar__profile__social"><FontAwesomeIcon className="font-icon" icon={faGithub}/></div></a>
					</div>
				</div>
				<hr/>
                
				<div className="sidebar__navigation">
					<span className="sidebar__navigation__flex__container">
					<ul className="sidebar__navigation__list">
						<li 
							className={`sidebar__navigation__list__item ${props.activeNav === 'about' ? 'active' : ''}`}
							onClick={() => {props.setActiveNav('about')}}>
								<div className="sidebar__navigation__list__item__icon"><FontAwesomeIcon icon={faUser} size='lg'/></div>
								About Me
						</li>
						<li 
							className={`sidebar__navigation__list__item ${props.activeNav === 'portfolio' ? 'active' : ''}`}
							onClick={() => {props.setActiveNav('portfolio')}}>
								<div className="sidebar__navigation__list__item__icon"><FontAwesomeIcon icon={faLaptopCode} size='lg'/></div>
								Portfolio
						</li>
						<li 
							className={`sidebar__navigation__list__item ${props.activeNav === 'testimonials' ? 'active' : ''}`}
							onClick={ ()=> {props.setActiveNav('testimonials')}}>
								<div className="sidebar__navigation__list__item__icon"><FontAwesomeIcon icon={faQuoteLeft} size='lg'/></div>
								Testimonials
						</li>
						<li 
							className={`sidebar__navigation__list__item ${props.activeNav === 'resume' ? 'active' : ''}`}
							onClick={() => {props.setActiveNav('resume')}}>
								<div className="sidebar__navigation__list__item__icon"><FontAwesomeIcon icon={faFileAlt} size='lg'/></div>
								Resume
						</li>	
					</ul>
					</span>
					<span onClick={()=> {props.toggleForm(true)}} className="sidebar__navigation__flex__container"><div className="sidebar__navigation__contact"><div style={{paddingRight: '1rem', display: 'inline-block'}}><FontAwesomeIcon icon={faPaperPlane} size='1x'/></div>Contact Me</div></span>
				</div>
			</div>
			
    )
}

export default Sidebar;